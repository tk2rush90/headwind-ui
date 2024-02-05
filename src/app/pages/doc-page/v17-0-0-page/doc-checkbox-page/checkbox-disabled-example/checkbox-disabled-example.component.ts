import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-checkbox-disabled-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: `
    <div class="flex flex-col gap-2">
      <headwind-checkbox disabled checked class="inline-flex cursor-pointer select-none items-center space-x-1">
        <headwind-checkbox-button
          class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
        >
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

        <label class="cursor-pointer select-none text-sm"> Disabled with Checked </label>
      </headwind-checkbox>

      <headwind-checkbox disabled class="inline-flex cursor-pointer select-none items-center space-x-1">
        <headwind-checkbox-button
          class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
        >
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

        <label class="cursor-pointer select-none text-sm"> Disabled with Unchecked </label>
      </headwind-checkbox>

      <headwind-checkbox class="inline-flex cursor-pointer select-none items-center space-x-1">
        <headwind-checkbox-button
          class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
        >
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

        <label class="cursor-pointer select-none text-sm"> Not Disabled </label>
      </headwind-checkbox>
    </div>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-checkbox[disabled] {
          @apply cursor-not-allowed;

          .headwind-checkbox-button {
            @apply bg-zinc-200;

            svg {
              @apply stroke-zinc-400;
            }
          }

          label {
            @apply cursor-not-allowed text-zinc-400;
          }
        }
      }
    `,
  ],
})
export class CheckboxDisabledExampleComponent {}
