import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { HeadwindWindowService } from '../../../services/headwind-window.service';
import { HeadwindClickDetector } from '../../../services/headwind-click-detector.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeadwindPopoverService } from '../services/headwind-popover.service';
import { LinearDirections } from '../../../types/linear-directions';
import { XYDirections } from '../../../types/xy-directions';

@Component({
  selector: 'headwind-popover-overlay',
  standalone: true,
  imports: [],
  templateUrl: './headwind-popover-overlay.component.html',
  styleUrl: './headwind-popover-overlay.component.scss',
  host: {
    class: 'headwind-popover-overlay',
  },
  providers: [HeadwindClickDetector],
})
export class HeadwindPopoverOverlayComponent implements AfterViewInit {
  @Input() direction: LinearDirections = 'vertical';
  @Input() directionPriority: XYDirections = 'bottom';
  @Input() pinPriority: XYDirections = 'left';

  @Output() actualDirectionChange = new EventEmitter<XYDirections>();
  @Output() actualPinChange = new EventEmitter<XYDirections>();

  constructor(
    private readonly _renderer: Renderer2,
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _headwindWindowService: HeadwindWindowService,
    private readonly _headwindClickDetector: HeadwindClickDetector,
    private readonly _headwindPopoverService: HeadwindPopoverService,
  ) {
    this._headwindClickDetector.outsideClick.pipe(takeUntilDestroyed()).subscribe(() => {
      if (this._headwindPopoverService.popoverOpened) {
        this._headwindPopoverService.closePopover.emit();
      }
    });
  }

  ngAfterViewInit() {
    this._headwindClickDetector.register(this._elementRef.nativeElement);
  }

  updatePosition(button: HTMLElement): void {
    if (this._elementRef) {
      const host = this._elementRef.nativeElement;

      // clear all styles
      this._renderer.removeStyle(host, 'position');
      this._renderer.removeStyle(host, 'top');
      this._renderer.removeStyle(host, 'bottom');
      this._renderer.removeStyle(host, 'left');
      this._renderer.removeStyle(host, 'right');

      this._renderer.setStyle(host, 'position', 'fixed');

      const buttonDomRect = button.getBoundingClientRect();
      const hostDomRect = host.getBoundingClientRect();

      switch (this.direction) {
        case 'vertical': {
          this._updateVerticalDirectionByPriority(host, hostDomRect, buttonDomRect);
          this._updateVerticalDirectionPin(host, hostDomRect, buttonDomRect);

          break;
        }

        case 'horizontal': {
          this._updateHorizontalDirectionByPriority(host, hostDomRect, buttonDomRect);
          this._updateHorizontalDirectionPin(host, hostDomRect, buttonDomRect);

          break;
        }
      }
    }
  }

  private _updateVerticalDirectionByPriority(host: HTMLElement, hostDomRect: DOMRect, buttonDomRect: DOMRect): void {
    if (this.directionPriority === 'top') {
      if (this._headwindWindowService.isTopSpaceAvailable(buttonDomRect.top, hostDomRect.height)) {
        this._renderer.setStyle(host, 'bottom', `calc(100% - ${buttonDomRect.top}px)`);
        this._emitActualDirectionTop();
      } else if (this._headwindWindowService.isBottomSpaceAvailable(buttonDomRect.bottom, hostDomRect.height)) {
        this._renderer.setStyle(host, 'top', buttonDomRect.bottom + 'px');
        this._emitActualDirectionBottom();
      } else {
        this._renderer.setStyle(host, 'bottom', `calc(100% - ${buttonDomRect.top}px)`);
        this._emitActualDirectionTop();
      }
    } else {
      if (this._headwindWindowService.isBottomSpaceAvailable(buttonDomRect.bottom, hostDomRect.height)) {
        this._renderer.setStyle(host, 'top', buttonDomRect.bottom + 'px');
        this._emitActualDirectionBottom();
      } else if (this._headwindWindowService.isTopSpaceAvailable(buttonDomRect.top, hostDomRect.height)) {
        this._renderer.setStyle(host, 'bottom', `calc(100% - ${buttonDomRect.top}px)`);
        this._emitActualDirectionTop();
      } else {
        this._renderer.setStyle(host, 'top', buttonDomRect.bottom + 'px');
        this._emitActualDirectionBottom();
      }
    }
  }

  private _updateHorizontalDirectionByPriority(host: HTMLElement, hostDomRect: DOMRect, buttonDomRect: DOMRect): void {
    if (this.directionPriority === 'left') {
      if (this._headwindWindowService.isLeftSpaceAvailable(buttonDomRect.left, hostDomRect.width)) {
        this._renderer.setStyle(host, 'right', `calc(100% - ${buttonDomRect.left}px)`);
        this._emitActualDirectionLeft();
      } else if (this._headwindWindowService.isRightSpaceAvailable(buttonDomRect.right, hostDomRect.width)) {
        this._renderer.setStyle(host, 'left', buttonDomRect.right + 'px');
        this._emitActualDirectionRight();
      } else {
        this._renderer.setStyle(host, 'right', `calc(100% - ${buttonDomRect.left}px)`);
        this._emitActualDirectionLeft();
      }
    } else {
      if (this._headwindWindowService.isRightSpaceAvailable(buttonDomRect.right, hostDomRect.width)) {
        this._renderer.setStyle(host, 'left', buttonDomRect.right + 'px');
        this._emitActualDirectionRight();
      } else if (this._headwindWindowService.isLeftSpaceAvailable(buttonDomRect.left, hostDomRect.width)) {
        this._renderer.setStyle(host, 'right', `calc(100% - ${buttonDomRect.left}px)`);
        this._emitActualDirectionLeft();
      } else {
        this._renderer.setStyle(host, 'left', buttonDomRect.right + 'px');
        this._emitActualDirectionRight();
      }
    }
  }

  private _updateVerticalDirectionPin(host: HTMLElement, hostDomRect: DOMRect, buttonDomRect: DOMRect): void {
    if (this.pinPriority === 'right') {
      if (this._headwindWindowService.isLeftSpaceAvailable(buttonDomRect.right, hostDomRect.width)) {
        this._renderer.setStyle(host, 'right', `calc(100% - ${buttonDomRect.right}px)`);
        this._emitActualPinRight();
      } else if (this._headwindWindowService.isRightSpaceAvailable(buttonDomRect.left, hostDomRect.width)) {
        this._renderer.setStyle(host, 'left', buttonDomRect.left + 'px');
        this._emitActualPinLeft();
      } else {
        this._renderer.setStyle(host, 'right', `calc(100% - ${buttonDomRect.right}px)`);
        this._emitActualPinRight();
      }
    } else {
      if (this._headwindWindowService.isRightSpaceAvailable(buttonDomRect.left, hostDomRect.width)) {
        this._renderer.setStyle(host, 'left', buttonDomRect.left + 'px');
        this._emitActualPinLeft();
      } else if (this._headwindWindowService.isLeftSpaceAvailable(buttonDomRect.right, hostDomRect.width)) {
        this._renderer.setStyle(host, 'right', `calc(100% - ${buttonDomRect.right}px)`);
        this._emitActualPinRight();
      } else {
        this._renderer.setStyle(host, 'left', buttonDomRect.left + 'px');
        this._emitActualPinLeft();
      }
    }
  }

  private _updateHorizontalDirectionPin(host: HTMLElement, hostDomRect: DOMRect, buttonDomRect: DOMRect): void {
    if (this.pinPriority === 'bottom') {
      if (this._headwindWindowService.isTopSpaceAvailable(buttonDomRect.bottom, hostDomRect.height)) {
        this._renderer.setStyle(host, 'bottom', `calc(100% - ${buttonDomRect.bottom}px)`);
        this._emitActualPinTop();
      } else if (this._headwindWindowService.isBottomSpaceAvailable(buttonDomRect.top, hostDomRect.height)) {
        this._renderer.setStyle(host, 'top', buttonDomRect.top + 'px');
        this._emitActualPinBottom();
      } else {
        this._renderer.setStyle(host, 'bottom', `calc(100% - ${buttonDomRect.bottom}px)`);
        this._emitActualPinTop();
      }
    } else {
      if (this._headwindWindowService.isBottomSpaceAvailable(buttonDomRect.top, hostDomRect.height)) {
        this._renderer.setStyle(host, 'top', buttonDomRect.top + 'px');
        this._emitActualPinBottom();
      } else if (this._headwindWindowService.isTopSpaceAvailable(buttonDomRect.bottom, hostDomRect.height)) {
        this._renderer.setStyle(host, 'bottom', `calc(100% - ${buttonDomRect.bottom}px)`);
        this._emitActualPinTop();
      } else {
        this._renderer.setStyle(host, 'top', buttonDomRect.top + 'px');
        this._emitActualPinBottom();
      }
    }
  }

  private _emitActualDirectionTop(): void {
    this.actualDirectionChange.emit('top');
  }

  private _emitActualDirectionBottom(): void {
    this.actualDirectionChange.emit('bottom');
  }

  private _emitActualDirectionLeft(): void {
    this.actualDirectionChange.emit('left');
  }

  private _emitActualDirectionRight(): void {
    this.actualDirectionChange.emit('right');
  }

  private _emitActualPinTop(): void {
    this.actualPinChange.emit('top');
  }

  private _emitActualPinBottom(): void {
    this.actualPinChange.emit('bottom');
  }

  private _emitActualPinLeft(): void {
    this.actualPinChange.emit('left');
  }

  private _emitActualPinRight(): void {
    this.actualPinChange.emit('right');
  }
}
