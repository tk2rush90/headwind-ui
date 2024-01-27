import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[headwindOptionsTemplate]',
  standalone: true,
})
export class HeadwindOptionsTemplateDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
