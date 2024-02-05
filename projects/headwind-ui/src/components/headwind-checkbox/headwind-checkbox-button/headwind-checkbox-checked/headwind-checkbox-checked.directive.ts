import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[headwindCheckboxChecked]',
  standalone: true,
})
export class HeadwindCheckboxCheckedDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
