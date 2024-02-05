import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-radio-group-value-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: `
    <div class="w-full max-w-[300px] space-y-2">
      <div class="text-sm">Selected Value: {{ value }}</div>

      <headwind-radio-group [(value)]="value" class="block space-y-2 rounded-xl bg-white p-6 shadow-xl">
        @for (option of options; track option) {
          <headwind-radio [value]="option" class="flex cursor-pointer select-none items-center space-x-2">
            <headwind-radio-button
              class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300"
            >
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
    </div>
  `,
})
export class RadioGroupValueExampleComponent {
  value = 'Ishaan Martinez';

  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
