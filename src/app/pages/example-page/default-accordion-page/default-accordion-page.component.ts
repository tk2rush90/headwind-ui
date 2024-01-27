import { Component } from '@angular/core';
import { HeadwindAccordionComponent } from '../../../../../projects/headwind-ui/src/components/headwind-accordion/headwind-accordion.component';
import { HeadwindAccordionButtonComponent } from '../../../../../projects/headwind-ui/src/components/headwind-accordion/headwind-accordion-button/headwind-accordion-button.component';
import { HeadwindAccordionContentDirective } from '../../../../../projects/headwind-ui/src/components/headwind-accordion/headwind-accordion-content/headwind-accordion-content.directive';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-default-accordion-page',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  templateUrl: './default-accordion-page.component.html',
  styleUrl: './default-accordion-page.component.scss',
  animations: [
    trigger('slide', [
      state(
        'void',
        style({
          height: 0,
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            height: '*',
          }),
        ),
      ),
      transition('* => void', animate('.1s')),
    ]),
  ],
})
export class DefaultAccordionPageComponent {
  contents = [
    {
      label: 'Meaning of Headwind UI',
      content: "There's no good reason for that. Since it was just a <b>Tail</b>wind, I chose <b>Head</b>wind.",
      opened: true,
    },
    {
      label: 'Why did I create Headwind UI?',
      content:
        "Headless UI doesn't support Angular for now, however, <a class='text-rose-500 underline hover:text-rose-600' href='https://github.com/tailwindlabs/headlessui/discussions/360' target='_blank'>some Angular developers were requesting Angular support</a>. I thought there are some needs for a library like this.",
      opened: false,
    },
  ];
}
