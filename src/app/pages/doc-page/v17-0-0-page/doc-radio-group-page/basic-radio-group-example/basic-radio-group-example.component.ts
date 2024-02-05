import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-radio-group-example',
  standalone: true,
  imports: [
    HeadwindRadioComponent,
    HeadwindRadioGroupComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: `
    <div class="w-full max-w-[400px] space-y-2 rounded-2xl bg-white p-8 shadow-xl">
      <label class="text-lg font-semibold"> Choose your partner </label>

      <headwind-radio-group class="block space-y-2">
        @for (option of options; track option.name) {
          <headwind-radio
            #radio
            [value]="option.name"
            class="flex cursor-pointer select-none items-center justify-between rounded-md border border-zinc-200 p-3 transition-colors hover:bg-rose-50"
          >
            <div>
              <div class="text-sm font-semibold">
                {{ option.name }}
              </div>

              <div class="text-xs text-zinc-400">
                {{ option.description }}
              </div>
            </div>

            <headwind-radio-button
              class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 transition-colors"
            >
              <ng-template headwindRadioSelected>
                <div [@scaleUp] class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
              </ng-template>
            </headwind-radio-button>
          </headwind-radio>
        }
      </headwind-radio-group>
    </div>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-radio-group:focus {
          .headwind-radio.headwind-selected {
            .headwind-radio-button {
              @apply bg-rose-100;
            }
          }
        }

        .headwind-radio.headwind-selected {
          .headwind-radio-button {
            @apply border-rose-500;
          }
        }
      }
    `,
  ],
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
export class BasicRadioGroupExampleComponent {
  options = [
    {
      name: 'Tori Day',
      description: 'Epic Crazy Designer',
    },
    {
      name: 'Ishaan Martinez',
      description: 'Natural Born Computer-Human',
    },
    {
      name: 'Alvin Bailey',
      description: 'Common Layer',
    },
  ];
}
