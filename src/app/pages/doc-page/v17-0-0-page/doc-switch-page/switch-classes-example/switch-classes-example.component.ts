import { Component } from '@angular/core';
import {
  HeadwindSwitchComponent,
  HeadwindSwitchThumbComponent,
  HeadwindSwitchTrackComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-switch-classes-example',
  standalone: true,
  imports: [HeadwindSwitchComponent, HeadwindSwitchTrackComponent, HeadwindSwitchThumbComponent],
  template: `
    <headwind-switch #headwindSwitch>
      <headwind-switch-track [class]="headwindSwitch.checked ? 'bg-rose-500' : 'bg-zinc-200'">
        <headwind-switch-thumb
          [class]="headwindSwitch.checked ? 'translate-x-3' : 'translate-x-0'"
        ></headwind-switch-thumb>
      </headwind-switch-track>
    </headwind-switch>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-switch {
          @apply inline-flex cursor-pointer select-none items-center space-x-2;
        }

        .headwind-switch-track {
          @apply block h-5 w-8 rounded-full px-0.5;
        }

        .headwind-switch-thumb {
          @apply block h-4 w-4 translate-y-0.5 rounded-full bg-white transition;
        }
      }
    `,
  ],
})
export class SwitchClassesExampleComponent {}
