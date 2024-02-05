import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-select-example',
  standalone: true,
  imports: [
    HeadwindSelectComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindOptionComponent,
  ],
  template: `
    <headwind-select
      #select
      [(value)]="value"
      [class]="select.opened ? 'border-rose-500 outline outline-1 outline-rose-500' : 'border-zinc-300'"
      class="inline-flex h-10 w-full max-w-[200px] cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3 focus:border-rose-500 focus:outline focus:outline-1 focus:outline-rose-500"
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
        <headwind-options-overlay [@fadeIn] class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
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
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-options-overlay::-webkit-scrollbar-track {
          @apply my-2;
        }
      }
    `,
  ],
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            opacity: 1,
          }),
        ),
      ),
      transition('* => void', animate('.1s')),
    ]),
  ],
})
export class BasicSelectExampleComponent {
  value = '';

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
