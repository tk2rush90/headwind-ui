import { Directive, HostListener } from '@angular/core';
import { HeadwindPopoverService } from '../services/headwind-popover.service';

@Directive({
  selector: '[headwindPopoverButton]',
  standalone: true,
  host: {
    class: 'headwind-popover-template-button',
  },
})
export class HeadwindPopoverButtonDirective {
  constructor(private readonly _headwindPopoverService: HeadwindPopoverService) {}

  @HostListener('click')
  onHostClick(): void {
    this._headwindPopoverService.openPopover.emit();
  }
}
