import { Directive, ElementRef, HostListener } from '@angular/core';
import { HeadwindPopoverService } from '../services/headwind-popover.service';

@Directive({
  selector: '[headwindPopoverButton]',
  standalone: true,
  host: {
    class: 'headwind-popover-button',
  },
})
export class HeadwindPopoverButtonDirective {
  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _headwindPopoverService: HeadwindPopoverService,
  ) {}

  get nativeElement(): HTMLElement {
    return this._elementRef.nativeElement;
  }

  @HostListener('click')
  onHostClick(): void {
    this._headwindPopoverService.openPopover.emit();
  }
}
