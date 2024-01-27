import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[headwindAccordionContent]',
  standalone: true,
})
export class HeadwindAccordionContentDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
