import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-radio-group-disabled-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: `
    <headwind-radio-group
      value="Tori Day"
      disabled
      class="block w-full max-w-[300px] space-y-2 rounded-xl bg-white p-6 shadow-xl"
    >
      @for (option of options; track option) {
        <headwind-radio [value]="option" class="flex cursor-pointer select-none items-center space-x-2">
          <headwind-radio-button
            class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300"
          >
            <ng-template headwindRadioSelected>
              <div class="selected absolute h-2 w-2 rounded-full bg-rose-500"></div>
            </ng-template>
          </headwind-radio-button>

          <div class="label text-sm">
            {{ option }}
          </div>
        </headwind-radio>
      }
    </headwind-radio-group>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-radio-group[disabled] {
          .headwind-radio {
            @apply cursor-not-allowed;
          }

          .headwind-radio-button {
            @apply bg-zinc-100;

            .selected {
              @apply bg-zinc-300;
            }
          }

          .label {
            @apply text-zinc-300;
          }
        }
      }
    `,
  ],
})
export class RadioGroupDisabledExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
