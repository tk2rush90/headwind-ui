import { Component } from '@angular/core';
import {
  HeadwindSwitchComponent,
  HeadwindSwitchThumbComponent,
  HeadwindSwitchTrackComponent,
} from '@favian/headwind-ui';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-model-binding-example',
  standalone: true,
  imports: [
    HeadwindSwitchComponent,
    HeadwindSwitchTrackComponent,
    HeadwindSwitchThumbComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="flex flex-col items-center gap-2">
      <headwind-switch [(ngModel)]="value" class="inline-flex cursor-pointer select-none items-center space-x-2">
        <headwind-switch-track
          [class]="value ? 'bg-rose-500' : 'bg-zinc-200'"
          class="block h-5 w-8 rounded-full px-0.5"
        >
          <headwind-switch-thumb
            [class]="value ? 'translate-x-3' : 'translate-x-0'"
            class="block h-4 w-4 translate-y-0.5 rounded-full bg-white transition"
          ></headwind-switch-thumb>
        </headwind-switch-track>

        <div class="text-sm">
          {{ value }}
        </div>
      </headwind-switch>

      <headwind-switch
        [formControl]="formControl"
        class="inline-flex cursor-pointer select-none items-center space-x-2"
      >
        <headwind-switch-track
          [class]="formControl.value ? 'bg-rose-500' : 'bg-zinc-200'"
          class="block h-5 w-8 rounded-full px-0.5"
        >
          <headwind-switch-thumb
            [class]="formControl.value ? 'translate-x-3' : 'translate-x-0'"
            class="block h-4 w-4 translate-y-0.5 rounded-full bg-white transition"
          ></headwind-switch-thumb>
        </headwind-switch-track>

        <div class="text-sm">
          {{ formControl.value }}
        </div>
      </headwind-switch>
    </div>
  `,
})
export class SwitchModelBindingExampleComponent {
  value = true;
  formControl = new FormControl(true);
}
