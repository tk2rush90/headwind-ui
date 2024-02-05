import { Component, ContentChild, EmbeddedViewRef, OnDestroy } from '@angular/core';
import { HeadwindPopoverService } from './services/headwind-popover.service';
import { HeadwindOverlayService } from '../../services/headwind-overlay.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeadwindPopoverOverlayComponent } from './headwind-popover-overlay/headwind-popover-overlay.component';
import { HeadwindAnimator } from '../../services/headwind-animator';
import { HeadwindPopoverOverlayDirective } from './headwind-popover-overlay/headwind-popover-overlay.directive';
import { HeadwindErrors } from '../../constants/headwind-errors';
import { HeadwindPopoverButtonDirective } from './headwind-popover-button/headwind-popover-button.directive';

@Component({
  selector: 'headwind-popover',
  standalone: true,
  imports: [],
  templateUrl: './headwind-popover.component.html',
  styleUrl: './headwind-popover.component.scss',
  host: {
    class: 'headwind-popover',
  },
  providers: [HeadwindPopoverService],
})
export class HeadwindPopoverComponent implements OnDestroy {
  @ContentChild(HeadwindPopoverOverlayDirective, { descendants: true })
  popoverOverlayTemplate?: HeadwindPopoverOverlayDirective;

  @ContentChild(HeadwindPopoverOverlayComponent, { descendants: true })
  popoverOverlay?: HeadwindPopoverOverlayComponent;

  @ContentChild(HeadwindPopoverButtonDirective, { descendants: true })
  popoverButton?: HeadwindPopoverButtonDirective;

  private _popoverEmbeddedViewRef?: EmbeddedViewRef<any>;
  private _openTimeoutId?: any;
  private _closeTimeoutId?: any;

  constructor(
    private readonly _headwindOverlayService: HeadwindOverlayService,
    private readonly _headwindPopoverService: HeadwindPopoverService,
    private readonly _headwindAnimator: HeadwindAnimator,
  ) {
    this._headwindPopoverService.openPopover.pipe(takeUntilDestroyed()).subscribe(() => {
      this.open();
    });

    this._headwindPopoverService.closePopover.pipe(takeUntilDestroyed()).subscribe(() => {
      this.close();
    });
  }

  ngOnDestroy() {
    clearTimeout(this._openTimeoutId);
    clearTimeout(this._closeTimeoutId);
  }

  open(): void {
    if (!this.popoverOverlayTemplate) {
      console.error(HeadwindErrors.headwindError0003);
      return;
    }

    if (this._popoverEmbeddedViewRef) {
      return;
    }

    this._popoverEmbeddedViewRef = this._headwindOverlayService.open(this.popoverOverlayTemplate.templateRef, () =>
      this._afterClosed(),
    );

    this._headwindPopoverService.popoverOpened = true;

    this._headwindAnimator.addListener(this._popoverPositionListener);

    clearTimeout(this._openTimeoutId);

    this._openTimeoutId = setTimeout(() => {
      if (!this.popoverOverlay) {
        console.error(HeadwindErrors.headwindError0004);
        return;
      }
    });
  }

  close(): void {
    this._popoverEmbeddedViewRef?.destroy();

    this._afterClosed();
  }

  private _afterClosed(): void {
    clearTimeout(this._closeTimeoutId);

    // to prevent instant re-opening after closing, set a delay
    this._closeTimeoutId = setTimeout(() => {
      this._headwindAnimator.removeListener(this._popoverPositionListener);
      this._headwindPopoverService.popoverOpened = false;

      delete this._popoverEmbeddedViewRef;
    });
  }

  private _popoverPositionListener = () => {
    if (this.popoverButton) {
      this.popoverOverlay?.updatePosition(this.popoverButton.nativeElement);
    }
  };
}
