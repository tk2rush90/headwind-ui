import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[headwindRadioSelected]',
  standalone: true,
})
export class HeadwindRadioSelectedDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
