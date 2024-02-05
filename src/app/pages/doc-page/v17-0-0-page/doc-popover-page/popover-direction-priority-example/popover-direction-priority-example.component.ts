import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-popover-direction-priority-example',
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
          Open Top Direction Priority Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay
            direction="vertical"
            directionPriority="top"
            class="rounded-md bg-white p-4 text-sm shadow-xl"
          >
            Top Direction Priority Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>

      <headwind-popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Left Direction Priority Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay
            direction="horizontal"
            directionPriority="left"
            class="rounded-md bg-white p-4 text-sm shadow-xl"
          >
            Left Direction Priority Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>
    </div>
  `,
})
export class PopoverDirectionPriorityExampleComponent {}
