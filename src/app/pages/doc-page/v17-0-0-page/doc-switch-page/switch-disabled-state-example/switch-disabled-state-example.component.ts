import { Component } from '@angular/core';
import {
  HeadwindSwitchComponent,
  HeadwindSwitchThumbComponent,
  HeadwindSwitchTrackComponent,
} from '@favian/headwind-ui';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-switch-disabled-state-example',
  standalone: true,
  imports: [HeadwindSwitchComponent, HeadwindSwitchTrackComponent, HeadwindSwitchThumbComponent, JsonPipe],
  template: `
    <div class="flex flex-col items-center space-y-2">
      <headwind-switch #headwindSwitch1 disabled class="inline-flex cursor-pointer select-none items-center space-x-2">
        <headwind-switch-track
          [class]="headwindSwitch1.checked ? 'bg-rose-500' : 'bg-zinc-200'"
          class="block h-5 w-8 rounded-full px-0.5"
        >
          <headwind-switch-thumb
            [class]="headwindSwitch1.checked ? 'translate-x-3' : 'translate-x-0'"
            class="block h-4 w-4 translate-y-0.5 rounded-full bg-white transition"
          ></headwind-switch-thumb>
        </headwind-switch-track>
      </headwind-switch>

      <headwind-switch
        #headwindSwitch2
        checked
        disabled
        class="inline-flex cursor-pointer select-none items-center space-x-2"
      >
        <headwind-switch-track
          [class]="headwindSwitch2.checked ? 'bg-rose-500' : 'bg-zinc-200'"
          class="block h-5 w-8 rounded-full px-0.5"
        >
          <headwind-switch-thumb
            [class]="headwindSwitch2.checked ? 'translate-x-3' : 'translate-x-0'"
            class="block h-4 w-4 translate-y-0.5 rounded-full bg-white transition"
          ></headwind-switch-thumb>
        </headwind-switch-track>
      </headwind-switch>
    </div>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-switch[disabled] {
          .headwind-switch-track {
            @apply bg-zinc-300;
          }

          .headwind-switch-thumb {
            @apply bg-zinc-200;
          }
        }
      }
    `,
  ],
})
export class SwitchDisabledStateExampleComponent {}
