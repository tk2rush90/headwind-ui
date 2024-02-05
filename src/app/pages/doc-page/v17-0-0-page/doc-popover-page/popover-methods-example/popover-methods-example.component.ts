import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-popover-methods-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayDirective,
  ],
  template: `
    <div class="flex flex-col items-center space-y-2">
      <button (click)="popover.open()" class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
        Outer Popover Button
      </button>

      <headwind-popover #popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Inner Popover Button
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay class="w-full max-w-[250px] rounded-md bg-white p-4 text-sm shadow-xl">
            Popover overlays are closed by clicking outside the overlay or by pressing the Escape key.
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>
    </div>
  `,
})
export class PopoverMethodsExampleComponent {}
