import { Directive, Input, TemplateRef } from '@angular/core';

export interface HeadwindTabContentInput {
  tabKey: any;
}

@Directive({
  selector: '[headwindTabContent]',
  standalone: true,
})
export class HeadwindTabContentDirective {
  @Input({ required: true }) headwindTabContent!: HeadwindTabContentInput;

  constructor(public readonly templateRef: TemplateRef<any>) {}
}
