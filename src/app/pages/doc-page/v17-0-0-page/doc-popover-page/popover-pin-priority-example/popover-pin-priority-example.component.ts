import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-popover-pin-priority-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayDirective,
    HeadwindPopoverButtonDirective,
  ],
  template: `
    <div class="flex w-full max-w-[400px] flex-col items-center space-y-2">
      <headwind-popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Right Pin Priority Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay
            pinPriority="right"
            direction="vertical"
            directionPriority="top"
            class="rounded-md bg-white p-4 text-sm shadow-xl"
          >
            Right Pin Priority Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>

      <headwind-popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Bottom Pin Priority Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay
            pinPriority="bottom"
            direction="horizontal"
            directionPriority="left"
            class="rounded-md bg-white p-4 text-sm shadow-xl"
          >
            Bottom Pin Priority Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>
    </div>
  `,
})
export class PopoverPinPriorityExampleComponent {}
