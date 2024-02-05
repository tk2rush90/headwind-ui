import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-checkbox-methods-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: `
    <div class="w-full max-w-[200px]">
      <div class="flex flex-col items-stretch gap-2">
        <button (click)="checkbox.toggle()" class="h-8 rounded-md bg-rose-500 px-3 text-sm text-white">
          Toggle Checkbox
        </button>
        <button (click)="checkbox.check()" class="h-8 rounded-md bg-rose-500 px-3 text-sm text-white">
          Check Checkbox
        </button>
        <button (click)="checkbox.uncheck()" class="h-8 rounded-md bg-rose-500 px-3 text-sm text-white">
          Uncheck Checkbox
        </button>

        <div class="flex justify-center">
          <headwind-checkbox #checkbox class="inline-flex cursor-pointer select-none items-center space-x-1">
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
          </headwind-checkbox>
        </div>
      </div>
    </div>
  `,
})
export class CheckboxMethodsExampleComponent {}
