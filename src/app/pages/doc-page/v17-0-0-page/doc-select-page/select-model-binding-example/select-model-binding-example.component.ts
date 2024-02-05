import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-model-binding-example',
  standalone: true,
  imports: [
    HeadwindOptionComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindSelectComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="w-full max-w-[250px] space-y-2 rounded-xl bg-white p-8 shadow-xl">
      <headwind-select
        [(ngModel)]="value"
        class="flex h-10 w-full cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3"
      >
        <div [class.text-zinc-400]="!value" class="text-sm">
          {{ value ? value : 'Select Option' }}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

        <ng-template headwindOptionsOverlay>
          <headwind-options-overlay class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
            @for (option of options; track option) {
              <headwind-option
                #headwindOption
                [class.text-rose-500]="headwindOption.selected"
                [class.bg-rose-50]="headwindOption.focused"
                [value]="option"
                class="block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50"
              >
                {{ option }}
              </headwind-option>
            }
          </headwind-options-overlay>
        </ng-template>
      </headwind-select>

      <headwind-select
        [formControl]="formControl"
        class="flex h-10 w-full cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3"
      >
        <div [class.text-zinc-400]="!formControl.value" class="text-sm">
          {{ formControl.value ? formControl.value : 'Select Option' }}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

        <ng-template headwindOptionsOverlay>
          <headwind-options-overlay class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
            @for (option of options; track option) {
              <headwind-option
                #headwindOption
                [class.text-rose-500]="headwindOption.selected"
                [class.bg-rose-50]="headwindOption.focused"
                [value]="option"
                class="block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50"
              >
                {{ option }}
              </headwind-option>
            }
          </headwind-options-overlay>
        </ng-template>
      </headwind-select>
    </div>
  `,
})
export class SelectModelBindingExampleComponent {
  value = '';
  formControl = new FormControl('');

  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
