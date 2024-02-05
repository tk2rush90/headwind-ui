import {
  AfterViewInit,
  Component,
  ContentChild,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HeadwindAccordionContentDirective } from './headwind-accordion-content/headwind-accordion-content.directive';
import { HeadwindAccordionService } from './service/headwind-accordion.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'headwind-accordion',
  standalone: true,
  imports: [],
  templateUrl: './headwind-accordion.component.html',
  styleUrl: './headwind-accordion.component.scss',
  providers: [HeadwindAccordionService],
  host: {
    class: 'headwind-accordion',
    ['[class.headwind-opened]']: 'opened',
  },
})
export class HeadwindAccordionComponent implements AfterViewInit, OnDestroy {
  @Output() openedChange = new EventEmitter<boolean>();
  @ViewChild('accordionContentContainer', { read: ViewContainerRef }) accordionContentContainer?: ViewContainerRef;
  @ContentChild(HeadwindAccordionContentDirective, { descendants: true })
  accordionContent?: HeadwindAccordionContentDirective;

  private _contentEmbeddedViewRef?: EmbeddedViewRef<any>;
  private _openTimeoutId?: any;

  constructor(private readonly _headwindAccordionService: HeadwindAccordionService) {
    this._headwindAccordionService.toggleOpened.pipe(takeUntilDestroyed()).subscribe(() => {
      const opened = !this.opened;

      this.opened = opened; // to toggle content
      this.openedChange.emit(opened);
    });
  }

  get opened(): boolean {
    return this._headwindAccordionService.opened;
  }

  @Input()
  set opened(value: boolean) {
    this._headwindAccordionService.opened = value;

    if (value) {
      this.open();
    } else {
      this.close();
    }
  }

  ngAfterViewInit() {
    // use timeout to prevent NG0100 error
    this._openTimeoutId = setTimeout(() => {
      if (this.opened) {
        this.open();
      }
    });
  }

  ngOnDestroy() {
    clearTimeout(this._openTimeoutId);
  }

  toggle(): void {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    if (this.accordionContentContainer && this.accordionContent && !this._contentEmbeddedViewRef) {
      this._contentEmbeddedViewRef = this.accordionContentContainer.createEmbeddedView(
        this.accordionContent.templateRef,
      );
    }

    this.openedChange.emit(true);
    this._headwindAccordionService.opened = true;
  }

  close(): void {
    this._contentEmbeddedViewRef?.destroy();

    delete this._contentEmbeddedViewRef;

    this.openedChange.emit(false);
    this._headwindAccordionService.opened = false;
  }
}
