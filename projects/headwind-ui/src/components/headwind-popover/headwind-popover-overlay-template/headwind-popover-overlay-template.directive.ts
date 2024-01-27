import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[headwindPopoverOverlayTemplate]',
  standalone: true,
})
export class HeadwindPopoverOverlayTemplateDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
