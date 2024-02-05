import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[headwindPopoverOverlay]',
  standalone: true,
})
export class HeadwindPopoverOverlayDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
