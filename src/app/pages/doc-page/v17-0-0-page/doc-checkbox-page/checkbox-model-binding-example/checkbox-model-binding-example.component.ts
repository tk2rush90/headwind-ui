import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-model-binding-example',
  standalone: true,
  imports: [
    HeadwindCheckboxComponent,
    HeadwindCheckboxButtonComponent,
    HeadwindCheckboxCheckedDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="flex flex-col items-stretch gap-2">
      <headwind-checkbox [(ngModel)]="checked" class="inline-flex cursor-pointer select-none items-center space-x-1">
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

        <label class="cursor-pointer select-none text-sm"> With NgModel: {{ checked }} </label>
      </headwind-checkbox>

      <headwind-checkbox
        [formControl]="checkControl"
        class="inline-flex cursor-pointer select-none items-center space-x-1"
      >
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

        <label class="cursor-pointer select-none text-sm"> With FormControl: {{ checkControl.value }} </label>
      </headwind-checkbox>
    </div>
  `,
})
export class CheckboxModelBindingExampleComponent {
  checked = false;
  checkControl = new FormControl(false);
}
