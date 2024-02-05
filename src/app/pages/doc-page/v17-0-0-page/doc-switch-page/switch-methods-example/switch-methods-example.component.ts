import { Component } from '@angular/core';
import {
  HeadwindSwitchComponent,
  HeadwindSwitchThumbComponent,
  HeadwindSwitchTrackComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-switch-methods-example',
  standalone: true,
  imports: [HeadwindSwitchComponent, HeadwindSwitchTrackComponent, HeadwindSwitchThumbComponent],
  template: `
    <div class="flex w-full max-w-[400px] flex-col items-center space-y-2">
      <div class="flex flex-wrap items-stretch gap-2">
        <button
          (click)="headwindSwitch.toggle()"
          type="button"
          class="min-h-10 flex-[1_1_0] rounded-md bg-rose-500 px-3 text-sm text-white"
        >
          Toggle
        </button>

        <button
          (click)="headwindSwitch.check()"
          type="button"
          class="min-h-10 flex-[1_1_0] rounded-md bg-rose-500 px-3 text-sm text-white"
        >
          Check
        </button>

        <button
          (click)="headwindSwitch.uncheck()"
          type="button"
          class="min-h-10 flex-[1_1_0] rounded-md bg-rose-500 px-3 text-sm text-white"
        >
          Uncheck
        </button>
      </div>

      <headwind-switch #headwindSwitch class="inline-flex cursor-pointer select-none items-center space-x-2">
        <headwind-switch-track
          [class]="headwindSwitch.checked ? 'bg-rose-500' : 'bg-zinc-200'"
          class="block h-5 w-8 rounded-full px-0.5"
        >
          <headwind-switch-thumb
            [class]="headwindSwitch.checked ? 'translate-x-3' : 'translate-x-0'"
            class="block h-4 w-4 translate-y-0.5 rounded-full bg-white transition"
          ></headwind-switch-thumb>
        </headwind-switch-track>
      </headwind-switch>
    </div>
  `,
})
export class SwitchMethodsExampleComponent {}
