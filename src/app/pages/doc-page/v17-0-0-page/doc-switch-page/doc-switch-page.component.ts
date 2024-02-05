import { Component } from '@angular/core';
import { BasicSwitchExampleComponent } from './basic-switch-example/basic-switch-example.component';
import { DocumentationService } from '../../../../services/documentation.service';
import { MarkdownComponent } from 'ngx-markdown';
import { SwitchClassesExampleComponent } from './switch-classes-example/switch-classes-example.component';
import { SwitchCheckedClassExampleComponent } from './switch-checked-class-example/switch-checked-class-example.component';
import { SwitchCheckedStateExampleComponent } from './switch-checked-state-example/switch-checked-state-example.component';
import { SwitchMethodsExampleComponent } from './switch-methods-example/switch-methods-example.component';
import { SwitchModelBindingExampleComponent } from './switch-model-binding-example/switch-model-binding-example.component';
import { SwitchDisabledStateExampleComponent } from './switch-disabled-state-example/switch-disabled-state-example.component';

@Component({
  selector: 'app-doc-switch-page',
  standalone: true,
  imports: [
    BasicSwitchExampleComponent,
    MarkdownComponent,
    SwitchClassesExampleComponent,
    SwitchCheckedClassExampleComponent,
    SwitchCheckedStateExampleComponent,
    SwitchMethodsExampleComponent,
    SwitchModelBindingExampleComponent,
    SwitchDisabledStateExampleComponent,
  ],
  templateUrl: './doc-switch-page.component.html',
  styleUrl: './doc-switch-page.component.scss',
})
export class DocSwitchPageComponent {
  constructor(private readonly _documentationService: DocumentationService) {
    this._documentationService.headingNavigations = [
      {
        label: 'Switch',
        fragment: 'switch',
      },
      {
        label: 'Switch Classes',
        fragment: 'switch-classes',
        children: [
          {
            label: 'Basic Classes',
            fragment: 'basic-classes',
          },
          {
            label: 'Checked Class',
            fragment: 'checked-class',
          },
        ],
      },
      {
        label: 'Checked State',
        fragment: 'checked-state',
      },
      {
        label: 'toggle, check, uncheck',
        fragment: 'toggle-check-uncheck',
      },
      {
        label: 'NgModel, FormControl',
        fragment: 'ngmodel-formcontrol',
      },
      {
        label: 'Disabled State',
        fragment: 'disabled-state',
      },
      {
        label: 'Accessibility',
        fragment: 'accessibility',
        children: [
          {
            label: 'Mouse Interaction',
            fragment: 'mouse-interaction',
          },
          {
            label: 'Keyboard Interaction',
            fragment: 'keyboard-interaction',
          },
        ],
      },
      {
        label: 'API',
        fragment: 'api',
        children: [
          {
            label: 'HeadwindSwitchComponent',
            fragment: 'headwindswitchcomponent',
          },
          {
            label: 'HeadwindSwitchTrackComponent',
            fragment: 'headwindswitchtrackcomponent',
          },
          {
            label: 'HeadwindSwitchThumbComponent',
            fragment: 'headwindswitchthumbcomponent',
          },
        ],
      },
    ];
  }

  protected readonly section1_0 = section1_0;
  protected readonly section1_1 = section1_1;
  protected readonly section2_0 = section2_0;
  protected readonly section2_1 = section2_1;
  protected readonly section2_2 = section2_2;
  protected readonly section2_3 = section2_3;
  protected readonly section3_0 = section3_0;
  protected readonly section3_1 = section3_1;
  protected readonly section4_0 = section4_0;
  protected readonly section5_0 = section5_0;
  protected readonly section4_1 = section4_1;
  protected readonly section5_1 = section5_1;
  protected readonly section6_0 = section6_0;
  protected readonly section6_1 = section6_1;
  protected readonly section7_0 = section7_0;
  protected readonly section8_0 = section8_0;
}

const section1_0 = `# Switch

Components that control toggleable settings such as on/off, enabled/disabled, visible/hidden, etc.`;

const section1_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class BasicSwitchExampleComponent {
  enabled = true;
}
\`\`\``;

const section2_0 = `# Switch Classes

## Basic Classes

Each component used to implement Switch has the same class name as its name. You can set styles using the class name as a selector in a style file.`;

const section2_1 = `\`\`\`typescript
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
  template: \`
    <headwind-switch #headwindSwitch>
      <headwind-switch-track [class]="headwindSwitch.checked ? 'bg-rose-500' : 'bg-zinc-200'">
        <headwind-switch-thumb
          [class]="headwindSwitch.checked ? 'translate-x-3' : 'translate-x-0'"
        ></headwind-switch-thumb>
      </headwind-switch-track>
    </headwind-switch>
  \`,
  styles: [
    \`
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
    \`,
  ],
})
export class SwitchClassesExampleComponent {}
\`\`\``;

const section2_2 = `## Checked Class

When a Switch is checked, the \`<headwind-switch>\` component has the class \`.headwind-checked\`.`;

const section2_3 = `\`\`\`typescript
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
  template: \`
    <headwind-switch>
      <headwind-switch-track>
        <headwind-switch-thumb></headwind-switch-thumb>
      </headwind-switch-track>
    </headwind-switch>
  \`,
  styles: [
    \`
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
    \`,
  ],
})
export class SwitchCheckedClassExampleComponent {}
\`\`\``;

const section3_0 = `# Checked State

You can use the \`checked\` attribute to toggle the checked state. When the checked state changes, the changed value is emitted through the \`checkedChange\` emitter.`;

const section3_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class SwitchCheckedStateExampleComponent {}
\`\`\``;

const section4_0 = `# toggle, check, uncheck

The \`<headwind-switch>\` component provides the \`toggle()\`, \`check()\`, and \`uncheck()\` methods.`;

const section4_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class SwitchMethodsExampleComponent {}
\`\`\``;

const section5_0 = `# NgModel, FormControl

The \`<headwind-switch>\` component can bind value using \`NgModel\` or \`FormControl\`.`;

const section5_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class SwitchModelBindingExampleComponent {
  value = true;
  formControl = new FormControl(true);
}
\`\`\``;

const section6_0 = `Disabled State

Setting the \`disabled\` attribute will disable the switch. Styling for the disabled state uses the \`[disabled]\` CSS selector instead of \`:disabled\`.`;

const section6_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
  styles: [
    \`
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
    \`,
  ],
})
export class SwitchDisabledStateExampleComponent {}
\`\`\``;

const section7_0 = `# Accessibility

## Mouse Interaction

Clicking on the \`<headwind-switch>\` element toggles its checked state.
## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| \`space\` | \`<headwind-switch>\` | Toggle the checked state. |
`;

const section8_0 = `# API

## HeadwindSwitchComponent

The root component of Switch.
### Selector

\`<headwind-switch>\`

### Host Class

\`.headwind-switch\`<br/>
\`.headwind-checked\` when Switch checked.

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() set checked(value: boolean)\` | Set the checked state of Switch. |
| \`@Input() set disabled(value: boolean)\` | Set the disabled state of Switch. |
### Outputs

| Name | Description |
| ---- | ---- |
| \`@Output() checkedChange: EventEmitter<boolean>()\` | Emits the changed checked state of Switch. |
### Methods

| Name | Description |
| ---- | ---- |
| \`toggle()\` | Toggle the checked state of Switch. |
| \`check()\` | Check the switch. If it is already checked, it is ignored. |
| \`uncheck()\` | Uncheck the switch. If it is already unchecked, it is ignored. |
## HeadwindSwitchTrackComponent

Component for a track on which the thumb can move.

### Selector

\`<headwind-switch-track>\`

### Host Class

\`.headwind-switch-track\`

## HeadwindSwitchThumbComponent

A thumb component that represents the state of the switch.

### Selector

\`<headwind-switch-thumb>\`
### Host Class

\`.headwind-switch-thumb\``;
