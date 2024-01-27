import { Component, HostListener } from '@angular/core';
import { HeadwindAccordionService } from '../service/headwind-accordion.service';

@Component({
  selector: 'headwind-accordion-button',
  standalone: true,
  imports: [],
  templateUrl: './headwind-accordion-button.component.html',
  styleUrl: './headwind-accordion-button.component.scss',
  host: {
    tabindex: '0',
    role: 'button',
    class: 'headwind-accordion-button',
    ['[attr.aria-expanded]']: 'opened',
  },
})
export class HeadwindAccordionButtonComponent {
  constructor(private readonly _headwindAccordionService: HeadwindAccordionService) {}

  get opened(): boolean {
    return this._headwindAccordionService.opened;
  }

  @HostListener('click')
  onHostClick(): void {
    this._headwindAccordionService.toggleOpened.emit();
  }
}
