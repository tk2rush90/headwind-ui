import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-accordion-classes-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: `
    <headwind-accordion>
      <headwind-accordion-button> Button </headwind-accordion-button>

      <ng-template headwindAccordionContent>
        <div class="mt-3">Content</div>
      </ng-template>
    </headwind-accordion>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-accordion {
          @apply block w-full max-w-[400px] rounded-2xl bg-white p-8 shadow;
        }

        .headwind-accordion-button {
          @apply flex items-center justify-between rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400;
        }
      }
    `,
  ],
})
export class AccordionClassesExampleComponent {}
