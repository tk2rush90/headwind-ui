import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-accordion-opened-state-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: `
    <headwind-accordion
      [(opened)]="opened"
      class="block w-full max-w-[400px] space-y-2 rounded-2xl bg-white p-8 shadow"
    >
      <headwind-accordion-button
        class="block rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400"
      >
        Button Opened: {{ opened }}
      </headwind-accordion-button>

      <ng-template headwindAccordionContent>
        <div class="mt-3">Content</div>
      </ng-template>
    </headwind-accordion>
  `,
})
export class AccordionOpenedStateExampleComponent {
  opened = true;
}
