import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayDirective,
} from '@favian/headwind-ui';
import { XYDirections } from '../../../../../../../projects/headwind-ui/src/types/xy-directions';

@Component({
  selector: 'app-popover-actual-change-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayDirective,
  ],
  template: `
    <headwind-popover>
      <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">Open Popover</button>

      <ng-template headwindPopoverOverlay>
        <headwind-popover-overlay
          (actualDirectionChange)="actualDirection = $event"
          (actualPinChange)="actualPin = $event"
          class="block w-full max-w-[300px] space-y-4 rounded-md bg-white p-4 text-sm shadow-xl"
        >
          <div class="text-lg font-semibold">Changed Directions</div>

          <div class="space-y-1 text-sm">
            <div>Actual Direction: {{ actualDirection }}</div>

            <div>Actual Pin: {{ actualPin }}</div>
          </div>
        </headwind-popover-overlay>
      </ng-template>
    </headwind-popover>
  `,
})
export class PopoverActualChangeExampleComponent {
  actualDirection: XYDirections = 'bottom';
  actualPin: XYDirections = 'left';
}
