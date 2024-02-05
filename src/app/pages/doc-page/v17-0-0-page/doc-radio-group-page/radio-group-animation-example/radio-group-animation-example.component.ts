import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-radio-group-animation-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: `
    <headwind-radio-group class="block w-full max-w-[300px] space-y-2 rounded-xl bg-white p-6 shadow-xl">
      @for (option of options; track option) {
        <headwind-radio [value]="option" class="flex cursor-pointer select-none items-center space-x-2">
          <headwind-radio-button
            class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300"
          >
            <ng-template headwindRadioSelected>
              <div [@scaleUp] class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
            </ng-template>
          </headwind-radio-button>

          <div class="text-sm">
            {{ option }}
          </div>
        </headwind-radio>
      }
    </headwind-radio-group>
  `,
  animations: [
    trigger('scaleUp', [
      state(
        'void',
        style({
          transform: 'scale(0)',
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            transform: 'scale(1)',
          }),
        ),
      ),
      transition('* => void', animate('.1s')),
    ]),
  ],
})
export class RadioGroupAnimationExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
