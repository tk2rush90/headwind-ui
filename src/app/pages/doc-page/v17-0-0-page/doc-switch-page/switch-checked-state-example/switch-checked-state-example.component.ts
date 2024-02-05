import { Component } from '@angular/core';
import {
  HeadwindSwitchComponent,
  HeadwindSwitchThumbComponent,
  HeadwindSwitchTrackComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-switch-checked-state-example',
  standalone: true,
  imports: [HeadwindSwitchComponent, HeadwindSwitchTrackComponent, HeadwindSwitchThumbComponent],
  template: `
    <headwind-switch #headwindSwitch checked class="inline-flex cursor-pointer select-none items-center space-x-2">
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
  `,
})
export class SwitchCheckedStateExampleComponent {}
