import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-checkbox-checked-state-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: `
    <headwind-checkbox [(checked)]="checked" class="inline-flex cursor-pointer select-none items-center space-x-1">
      <headwind-checkbox-button
        [class]="checked ? 'border-rose-500 bg-rose-500' : 'bg-white'"
        class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300"
      >
        <ng-template headwindCheckboxChecked>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute h-4 w-4 stroke-white"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </ng-template>
      </headwind-checkbox-button>
    </headwind-checkbox>
  `,
})
export class CheckboxCheckedStateExampleComponent {
  checked = true;
}
