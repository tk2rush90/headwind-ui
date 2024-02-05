import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[headwindOptionsOverlay]',
  standalone: true,
})
export class HeadwindOptionsOverlayDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
