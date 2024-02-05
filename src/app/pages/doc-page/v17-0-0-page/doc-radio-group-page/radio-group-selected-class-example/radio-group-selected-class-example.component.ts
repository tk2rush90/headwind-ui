import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-radio-group-selected-class-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: `
    <headwind-radio-group>
      @for (option of options; track option) {
        <headwind-radio [value]="option">
          <headwind-radio-button>
            <ng-template headwindRadioSelected>
              <div class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
            </ng-template>
          </headwind-radio-button>

          <div class="text-sm">
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
        .headwind-radio-group {
          @apply block w-full max-w-[300px] space-y-2 rounded-xl bg-white p-6 shadow-xl;
        }

        .headwind-radio {
          @apply flex cursor-pointer select-none items-center space-x-2;

          &.headwind-selected {
            .headwind-radio-button {
              @apply border-rose-500;
            }
          }
        }

        .headwind-radio-button {
          @apply relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300;
        }
      }
    `,
  ],
})
export class RadioGroupSelectedClassExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
