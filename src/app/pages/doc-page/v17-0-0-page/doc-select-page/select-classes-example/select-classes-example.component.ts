import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-select-classes-example',
  standalone: true,
  imports: [
    HeadwindSelectComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindOptionComponent,
  ],
  template: `
    <headwind-select #select>
      <div [class.text-zinc-400]="!select.value" class="text-sm">
        {{ select.value ? select.value : 'Select Option' }}
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
        <headwind-options-overlay>
          @for (option of options; track option) {
            <headwind-option [value]="option">
              {{ option }}
            </headwind-option>
          }
        </headwind-options-overlay>
      </ng-template>
    </headwind-select>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-select {
          @apply inline-flex h-10 w-full max-w-[200px] cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3;
        }

        .headwind-options-overlay {
          @apply block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl;
        }

        .headwind-option {
          @apply block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50;
        }
      }
    `,
  ],
})
export class SelectClassesExampleComponent {
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
