import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-popover-animation-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayDirective,
  ],
  template: `
    <headwind-popover>
      <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">Open</button>

      <ng-template headwindPopoverOverlay>
        <headwind-popover-overlay
          [@fadeIn]
          class="block w-full max-w-[250px] rounded-xl bg-white p-4 text-sm shadow-2xl"
        >
          With Animation
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
export class PopoverAnimationExampleComponent {}
