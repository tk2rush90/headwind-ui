import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[headwindTabContent]',
  standalone: true,
})
export class HeadwindTabContentDirective {
  @Input({ required: true }) tabKey: any;

  constructor(public readonly templateRef: TemplateRef<any>) {}
}
