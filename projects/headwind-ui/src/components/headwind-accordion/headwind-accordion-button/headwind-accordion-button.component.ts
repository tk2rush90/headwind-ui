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
    class: 'headwind-accordion-button',
  },
})
export class HeadwindAccordionButtonComponent {
  constructor(private readonly _headwindAccordionService: HeadwindAccordionService) {}

  @HostListener('click')
  onHostClick(): void {
    this._headwindAccordionService.toggleOpened.emit();
  }
}
