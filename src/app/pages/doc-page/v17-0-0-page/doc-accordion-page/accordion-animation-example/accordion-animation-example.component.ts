import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-accordion-animation-example',
  standalone: true,
  imports: [HeadwindAccordionButtonComponent, HeadwindAccordionComponent, HeadwindAccordionContentDirective],
  template: `
    <headwind-accordion class="mt-3 block w-full max-w-[400px] space-y-2 rounded-2xl bg-white p-8 shadow">
      <headwind-accordion-button
        class="block rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400"
      >
        Button
      </headwind-accordion-button>

      <ng-template headwindAccordionContent>
        <div [@expand] class="mt-3">Content</div>
      </ng-template>
    </headwind-accordion>
  `,
  animations: [
    trigger('expand', [
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
      transition(
        '* => void',
        animate(
          '.1s',
          style({
            height: 0,
          }),
        ),
      ),
    ]),
  ],
})
export class AccordionAnimationExampleComponent {}
