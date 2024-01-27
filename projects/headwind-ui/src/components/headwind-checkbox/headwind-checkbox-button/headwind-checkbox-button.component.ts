import {
  AfterViewInit,
  Component,
  ContentChild,
  DestroyRef,
  EmbeddedViewRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HeadwindCheckboxCheckedDirective } from './headwind-checkbox-checked/headwind-checkbox-checked.directive';
import { HeadwindCheckboxService } from '../service/headwind-checkbox.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'headwind-checkbox-button',
  standalone: true,
  imports: [],
  templateUrl: './headwind-checkbox-button.component.html',
  styleUrl: './headwind-checkbox-button.component.scss',
  host: {
    class: 'headwind-checkbox-button',
    ['[class.headwind-checked]']: 'checked',
  },
})
export class HeadwindCheckboxButtonComponent implements AfterViewInit, OnDestroy {
  @ViewChild('checkboxCheckedContainer', { read: ViewContainerRef }) checkboxCheckedContainer?: ViewContainerRef;

  @ContentChild(HeadwindCheckboxCheckedDirective, { descendants: true })
  checkboxChecked?: HeadwindCheckboxCheckedDirective;

  private _timeoutId?: any;
  private _checkedEmbeddedViewRef?: EmbeddedViewRef<any>;

  constructor(
    private readonly _destroyRef: DestroyRef,
    private readonly _headwindCheckboxService: HeadwindCheckboxService,
  ) {}

  get checked(): boolean {
    return this._headwindCheckboxService.checked;
  }

  ngAfterViewInit() {
    // use timeout to prevent NG0100 error
    this._timeoutId = setTimeout(() => {
      this._headwindCheckboxService.checked$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((checked) => {
        if (this.checkboxCheckedContainer && this.checkboxChecked) {
          if (checked) {
            if (!this._checkedEmbeddedViewRef) {
              this._checkedEmbeddedViewRef = this.checkboxCheckedContainer.createEmbeddedView(
                this.checkboxChecked.templateRef,
              );
            }
          } else {
            this._checkedEmbeddedViewRef?.destroy();
            delete this._checkedEmbeddedViewRef;
          }
        }
      });
    });
  }

  ngOnDestroy() {
    clearTimeout(this._timeoutId);
  }
}
