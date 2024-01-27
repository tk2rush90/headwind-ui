import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[headwindPopoverOverlayTemplate]',
  standalone: true,
})
export class HeadwindPopoverOverlayTemplateDirective {
  @Input() what?: string;

  constructor(public readonly templateRef: TemplateRef<any>) {}
}
