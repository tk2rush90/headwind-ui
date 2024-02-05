import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-popover-classes-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayDirective,
  ],
  template: `
    <headwind-popover>
      <button headwindPopoverButton>Open</button>

      <ng-template headwindPopoverOverlay>
        <headwind-popover-overlay> Popover Overlay </headwind-popover-overlay>
      </ng-template>
    </headwind-popover>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-popover-button {
          @apply h-10 rounded-md bg-rose-500 px-3 text-sm text-white;
        }

        .headwind-popover-overlay {
          @apply block w-full max-w-[250px] space-y-4 rounded-xl bg-white p-4 text-sm shadow-2xl;
        }
      }
    `,
  ],
})
export class PopoverClassesExampleComponent {}
