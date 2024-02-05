import { Component } from '@angular/core';
import {
  HeadwindSwitchComponent,
  HeadwindSwitchThumbComponent,
  HeadwindSwitchTrackComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-switch-checked-class-example',
  standalone: true,
  imports: [HeadwindSwitchComponent, HeadwindSwitchTrackComponent, HeadwindSwitchThumbComponent],
  template: `
    <headwind-switch>
      <headwind-switch-track>
        <headwind-switch-thumb></headwind-switch-thumb>
      </headwind-switch-track>
    </headwind-switch>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-switch {
          @apply inline-flex cursor-pointer select-none items-center space-x-2;

          &.headwind-checked {
            .headwind-switch-track {
              @apply bg-rose-500;
            }

            .headwind-switch-thumb {
              @apply translate-x-3;
            }
          }
        }

        .headwind-switch-track {
          @apply block h-5 w-8 rounded-full bg-zinc-200 px-0.5;
        }

        .headwind-switch-thumb {
          @apply block h-4 w-4 translate-x-0 translate-y-0.5 rounded-full bg-white transition;
        }
      }
    `,
  ],
})
export class SwitchCheckedClassExampleComponent {}
