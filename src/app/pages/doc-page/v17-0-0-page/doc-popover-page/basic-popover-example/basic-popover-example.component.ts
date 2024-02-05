import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-popover-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayDirective,
  ],
  template: `
    <headwind-popover>
      <div class="flex w-[250px] items-center justify-between rounded-2xl bg-white p-4 shadow-xl">
        <div class="flex items-center space-x-2">
          <img [src]="user.avatarUrl" [alt]="user.name" class="block h-10 w-10 rounded-full bg-zinc-100" />

          <div>
            <div class="font-semibold">
              {{ user.name }}
            </div>

            <div class="text-sm text-zinc-400">
              {{ user.job }}
            </div>
          </div>
        </div>

        <svg
          headwindPopoverButton
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6 cursor-pointer stroke-zinc-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>

      <ng-template headwindPopoverOverlay>
        <headwind-popover-overlay
          [@fadeIn]
          pinPriority="left"
          directionPriority="bottom"
          class="block w-full max-w-[250px] space-y-4 rounded-xl bg-black/[0.8] p-4 text-xs text-white shadow-2xl"
        >
          {{ user.biography }}
        </headwind-popover-overlay>
      </ng-template>
    </headwind-popover>
  `,
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
export class BasicPopoverExampleComponent {
  user = {
    name: 'Tori Day',
    avatarUrl: 'https://picsum.photos/id/174/64',
    job: 'Designer',
    biography:
      'I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others.',
  };
}
