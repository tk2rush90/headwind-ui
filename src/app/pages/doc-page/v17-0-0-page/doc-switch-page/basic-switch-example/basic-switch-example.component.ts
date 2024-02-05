import { Component } from '@angular/core';
import {
  HeadwindSwitchComponent,
  HeadwindSwitchThumbComponent,
  HeadwindSwitchTrackComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-basic-switch-example',
  standalone: true,
  imports: [HeadwindSwitchComponent, HeadwindSwitchTrackComponent, HeadwindSwitchThumbComponent],
  template: `
    <headwind-switch [(checked)]="enabled" class="inline-flex cursor-pointer select-none items-center space-x-2">
      <headwind-switch-track
        [class]="enabled ? 'bg-rose-500' : 'bg-zinc-200'"
        class="block h-5 w-8 rounded-full px-0.5"
      >
        <headwind-switch-thumb
          [class]="enabled ? 'translate-x-3' : 'translate-x-0'"
          class="block h-4 w-4 translate-y-0.5 rounded-full bg-white transition"
        ></headwind-switch-thumb>
      </headwind-switch-track>

      <div class="text-sm">Enable Automation</div>
    </headwind-switch>
  `,
})
export class BasicSwitchExampleComponent {
  enabled = true;
}
