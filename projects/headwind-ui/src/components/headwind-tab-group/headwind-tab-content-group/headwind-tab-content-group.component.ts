import {
  AfterViewInit,
  Component,
  ContentChildren,
  DestroyRef,
  EmbeddedViewRef,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HeadwindTabContentDirective } from './headwind-tab-content/headwind-tab-content.directive';
import { HeadwindTabGroupService } from '../service/headwind-tab-group.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'headwind-tab-content-group',
  standalone: true,
  imports: [],
  templateUrl: './headwind-tab-content-group.component.html',
  styleUrl: './headwind-tab-content-group.component.scss',
  host: {
    class: 'headwind-tab-content-group',
  },
})
export class HeadwindTabContentGroupComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tabContentContainer', { read: ViewContainerRef }) tabContentContainer?: ViewContainerRef;
  @ContentChildren(HeadwindTabContentDirective, { descendants: true })
  tabContentList?: QueryList<HeadwindTabContentDirective>;

  private _previousTabKey: any;
  private _tabContentEmbeddedViewRef?: EmbeddedViewRef<any>;
  private _timeoutId?: any;

  constructor(
    private readonly _destroyRef: DestroyRef,
    private readonly _headwindTabGroupService: HeadwindTabGroupService,
  ) {}

  ngOnDestroy() {
    clearTimeout(this._timeoutId);
  }

  ngAfterViewInit(): void {
    // to prevent NG0100 error
    this._timeoutId = setTimeout(() => {
      this._headwindTabGroupService.tab$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((tabKey) => {
        if (this._previousTabKey !== tabKey) {
          const tabContent = this.getTabContentByKey(tabKey);

          if (tabContent && this.tabContentContainer) {
            this._tabContentEmbeddedViewRef?.destroy();
            this._tabContentEmbeddedViewRef = this.tabContentContainer.createEmbeddedView(tabContent.templateRef);
          }

          this._previousTabKey = tabKey;
        }
      });
    });
  }

  getTabContentByKey(key: string): HeadwindTabContentDirective | undefined {
    return this.tabContentList?.find((tabContent) => tabContent.tabKey === key);
  }
}
