import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-checkbox-classes-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: `
    <headwind-checkbox>
      <headwind-checkbox-button>
        <ng-template headwindCheckboxChecked>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute h-4 w-4 stroke-rose-500"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </ng-template>
      </headwind-checkbox-button>
    </headwind-checkbox>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-checkbox {
          @apply inline-block cursor-pointer select-none;
        }

        .headwind-checkbox-button {
          @apply relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white;
        }
      }
    `,
  ],
})
export class CheckboxClassesExampleComponent {}
