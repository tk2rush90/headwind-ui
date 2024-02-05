import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-accordion-methods-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: `
    <div class="w-full max-w-[400px]">
      <div class="flex flex-wrap items-stretch gap-2">
        <button
          (click)="accordion.toggle()"
          class="min-h-8 flex-[1_1_0] rounded-md bg-rose-500 px-3 text-sm text-white"
        >
          Toggle Accordion
        </button>
        <button (click)="accordion.open()" class="min-h-8 flex-[1_1_0] rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Accordion
        </button>
        <button (click)="accordion.close()" class="min-h-8 flex-[1_1_0] rounded-md bg-rose-500 px-3 text-sm text-white">
          Close Accordion
        </button>
      </div>

      <headwind-accordion #accordion class="mt-3 block space-y-2 rounded-2xl bg-white p-8 shadow">
        <headwind-accordion-button
          class="block rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400"
        >
          Button
        </headwind-accordion-button>

        <ng-template headwindAccordionContent>
          <div class="mt-3">Content</div>
        </ng-template>
      </headwind-accordion>
    </div>
  `,
})
export class AccordionMethodsExampleComponent {}
