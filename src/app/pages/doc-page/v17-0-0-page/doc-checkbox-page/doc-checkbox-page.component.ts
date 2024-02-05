import { Component } from '@angular/core';
import { DocumentationService } from '../../../../services/documentation.service';
import { MarkdownComponent } from 'ngx-markdown';
import { BasicCheckboxExampleComponent } from './basic-checkbox-example/basic-checkbox-example.component';
import { CheckboxClassesExampleComponent } from './checkbox-classes-example/checkbox-classes-example.component';
import { CheckboxCheckedClassExampleComponent } from './checkbox-checked-class-example/checkbox-checked-class-example.component';
import { CheckboxCheckedStateExampleComponent } from './checkbox-checked-state-example/checkbox-checked-state-example.component';
import { CheckboxMethodsExampleComponent } from './checkbox-methods-example/checkbox-methods-example.component';
import { CheckboxModelBindingExampleComponent } from './checkbox-model-binding-example/checkbox-model-binding-example.component';
import { CheckboxDisabledExampleComponent } from './checkbox-disabled-example/checkbox-disabled-example.component';
import { CheckboxAnimationExampleComponent } from './checkbox-animation-example/checkbox-animation-example.component';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-doc-checkbox-page',
  standalone: true,
  imports: [
    MarkdownComponent,
    BasicCheckboxExampleComponent,
    CheckboxClassesExampleComponent,
    CheckboxCheckedClassExampleComponent,
    CheckboxCheckedStateExampleComponent,
    CheckboxMethodsExampleComponent,
    CheckboxModelBindingExampleComponent,
    CheckboxDisabledExampleComponent,
    CheckboxAnimationExampleComponent,
  ],
  templateUrl: './doc-checkbox-page.component.html',
  styleUrl: './doc-checkbox-page.component.scss',
  host: {
    class: 'doc-page',
  },
})
export class DocCheckboxPageComponent {
  constructor(
    private readonly _seoService: SeoService,
    private readonly _documentationService: DocumentationService,
  ) {
    this._seoService.update({
      title: 'Headwind UI - Checkbox',
      description: 'Component that toggles boolean state.',
      keywords: ['Angular', 'Tailwind', 'Checkbox'],
      url: 'https://ng-headwind-ui.github.io/doc/v17/checkbox',
    });

    this._documentationService.headingNavigations = [
      {
        label: 'Checkbox',
        fragment: 'checkbox',
      },
      {
        label: 'Checkbox Classes',
        fragment: 'checkbox-classes',
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
        label: 'Animation',
        fragment: 'animation',
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
            label: 'HeadwindCheckboxComponent',
            fragment: 'headwindcheckboxcomponent',
          },
          {
            label: 'HeadwindCheckboxButtonComponent',
            fragment: 'headwindcheckboxbuttoncomponent',
          },
          {
            label: 'HeadwindCheckboxCheckedDirective',
            fragment: 'headwindcheckboxcheckeddirective',
          },
        ],
      },
    ];
  }

  protected readonly section1_0 = section1_0;
  protected readonly section1_1 = section1_1;
  protected readonly section2_0 = section2_0;
  protected readonly section2_1 = section2_1;
  protected readonly section3_0 = section3_0;
  protected readonly section3_1 = section3_1;
  protected readonly section4_0 = section4_0;
  protected readonly section4_1 = section4_1;
  protected readonly section5_0 = section5_0;
  protected readonly section5_1 = section5_1;
  protected readonly section6_0 = section6_0;
  protected readonly section6_1 = section6_1;
  protected readonly section7_0 = section7_0;
  protected readonly section7_1 = section7_1;
  protected readonly section8_0 = section8_0;
  protected readonly section8_1 = section8_1;
  protected readonly section9_0 = section9_0;
  protected readonly section10_0 = section10_0;
}

const section1_0 = `# Checkbox

Component that toggles boolean state.`;

const section1_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-checkbox-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: \`
    <headwind-checkbox #checkbox class="inline-flex cursor-pointer select-none items-center space-x-1">
      <headwind-checkbox-button
        [class]="checkbox.checked ? 'border-rose-500 bg-rose-500' : 'bg-white'"
        class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300"
      >
        <ng-template headwindCheckboxChecked>
          <svg
            [@scaleUp]
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute h-4 w-4 stroke-white"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </ng-template>
      </headwind-checkbox-button>

      <label class="cursor-pointer select-none text-sm"> I like Headwind UI </label>
    </headwind-checkbox>
  \`,
  animations: [
    trigger('scaleUp', [
      state(
        'void',
        style({
          transform: 'scale(0)',
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            transform: 'scale(1)',
          }),
        ),
      ),
      transition('* => void', animate('.1s')),
    ]),
  ],
})
export class BasicCheckboxExampleComponent {}
\`\`\``;

const section2_0 = `# Checkbox Classes

## Basic Classes

Each component used to implement Checkbox has the same class name as its name. You can set styles using the class name as a selector in a style file.`;

const section2_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-checkbox-classes-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: \`
    <headwind-checkbox>
      <headwind-checkbox-button>
        <ng-template headwindCheckboxChecked>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute h-4 w-4 stroke-rose-500"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </ng-template>
      </headwind-checkbox-button>
    </headwind-checkbox>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-checkbox {
          @apply inline-block cursor-pointer select-none;
        }

        .headwind-checkbox-button {
          @apply relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white;
        }
      }
    \`,
  ],
})
export class CheckboxClassesExampleComponent {}
\`\`\``;

const section3_0 = `## Checked Class

When a Checkbox is checked, the \`<headwind-checkbox>\` component has the class \`.headwind-checked\`.`;

const section3_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-checkbox-checked-class-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: \`
    <headwind-checkbox>
      <headwind-checkbox-button>
        <ng-template headwindCheckboxChecked>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute h-4 w-4 stroke-white"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </ng-template>
      </headwind-checkbox-button>
    </headwind-checkbox>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-checkbox {
          @apply inline-block cursor-pointer select-none;

          &.headwind-checked {
            .headwind-checkbox-button {
              @apply border-rose-500 bg-rose-500;
            }
          }
        }

        .headwind-checkbox-button {
          @apply relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white;
        }
      }
    \`,
  ],
})
export class CheckboxCheckedClassExampleComponent {}
\`\`\``;

const section4_0 = `# Checked State

You can use the \`checked\` attribute to toggle the checked state. When the checked state changes, the changed value is emitted through the \`checkedChange\` emitter.`;

const section4_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-checkbox-checked-state-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: \`
    <headwind-checkbox [(checked)]="checked" class="inline-flex cursor-pointer select-none items-center space-x-1">
      <headwind-checkbox-button
        [class]="checked ? 'border-rose-500 bg-rose-500' : 'bg-white'"
        class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300"
      >
        <ng-template headwindCheckboxChecked>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute h-4 w-4 stroke-white"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </ng-template>
      </headwind-checkbox-button>
    </headwind-checkbox>
  \`,
})
export class CheckboxCheckedStateExampleComponent {
  checked = true;
}
\`\`\``;

const section5_0 = `# toggle, check, uncheck

The \`<headwind-checkbox>\` component provides the \`toggle()\`, \`check()\`, and \`uncheck()\` methods.`;

const section5_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-checkbox-methods-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: \`
    <div class="w-full max-w-[200px]">
      <div class="flex flex-col items-stretch gap-2">
        <button (click)="checkbox.toggle()" class="h-8 rounded-md bg-rose-500 px-3 text-sm text-white">
          Toggle Checkbox
        </button>
        <button (click)="checkbox.check()" class="h-8 rounded-md bg-rose-500 px-3 text-sm text-white">
          Check Checkbox
        </button>
        <button (click)="checkbox.uncheck()" class="h-8 rounded-md bg-rose-500 px-3 text-sm text-white">
          Uncheck Checkbox
        </button>

        <div class="flex justify-center">
          <headwind-checkbox #checkbox class="inline-flex cursor-pointer select-none items-center space-x-1">
            <headwind-checkbox-button
              class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
            >
              <ng-template headwindCheckboxChecked>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="absolute h-4 w-4 stroke-rose-500"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </ng-template>
            </headwind-checkbox-button>
          </headwind-checkbox>
        </div>
      </div>
    </div>
  \`,
})
export class CheckboxMethodsExampleComponent {}
\`\`\``;

const section6_0 = `# NgModel, FormControl

The \`<headwind-checkbox>\` component can bind value using \`NgModel\` or \`FormControl\`.`;

const section6_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-model-binding-example',
  standalone: true,
  imports: [
    HeadwindCheckboxComponent,
    HeadwindCheckboxButtonComponent,
    HeadwindCheckboxCheckedDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: \`
    <div class="flex flex-col items-stretch gap-2">
      <headwind-checkbox [(ngModel)]="checked" class="inline-flex cursor-pointer select-none items-center space-x-1">
        <headwind-checkbox-button
          class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
        >
          <ng-template headwindCheckboxChecked>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute h-4 w-4 stroke-rose-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </ng-template>
        </headwind-checkbox-button>

        <label class="cursor-pointer select-none text-sm"> With NgModel: {{ checked }} </label>
      </headwind-checkbox>

      <headwind-checkbox
        [formControl]="checkControl"
        class="inline-flex cursor-pointer select-none items-center space-x-1"
      >
        <headwind-checkbox-button
          class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
        >
          <ng-template headwindCheckboxChecked>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute h-4 w-4 stroke-rose-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
            </svg>
          </ng-template>
        </headwind-checkbox-button>

        <label class="cursor-pointer select-none text-sm"> With FormControl: {{ checkControl.value }} </label>
      </headwind-checkbox>
    </div>
  \`,
})
export class CheckboxModelBindingExampleComponent {
  checked = false;
  checkControl = new FormControl(false);
}
\`\`\``;

const section7_0 = `# Disabled State

Setting the \`disabled\` attribute will disable the checkbox. Styling for the disabled state uses the \`[disabled]\` CSS selector instead of \`:disabled\`.`;

const section7_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-checkbox-disabled-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: \`
    <div class="flex flex-col gap-2">
      <headwind-checkbox disabled checked class="inline-flex cursor-pointer select-none items-center space-x-1">
        <headwind-checkbox-button
          class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
        >
          <ng-template headwindCheckboxChecked>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute h-4 w-4 stroke-rose-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </ng-template>
        </headwind-checkbox-button>

        <label class="cursor-pointer select-none text-sm"> Disabled with Checked </label>
      </headwind-checkbox>

      <headwind-checkbox disabled class="inline-flex cursor-pointer select-none items-center space-x-1">
        <headwind-checkbox-button
          class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
        >
          <ng-template headwindCheckboxChecked>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute h-4 w-4 stroke-rose-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </ng-template>
        </headwind-checkbox-button>

        <label class="cursor-pointer select-none text-sm"> Disabled with Unchecked </label>
      </headwind-checkbox>

      <headwind-checkbox class="inline-flex cursor-pointer select-none items-center space-x-1">
        <headwind-checkbox-button
          class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
        >
          <ng-template headwindCheckboxChecked>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute h-4 w-4 stroke-rose-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </ng-template>
        </headwind-checkbox-button>

        <label class="cursor-pointer select-none text-sm"> Not Disabled </label>
      </headwind-checkbox>
    </div>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-checkbox[disabled] {
          @apply cursor-not-allowed;

          .headwind-checkbox-button {
            @apply bg-zinc-200;

            svg {
              @apply stroke-zinc-400;
            }
          }

          label {
            @apply cursor-not-allowed text-zinc-400;
          }
        }
      }
    \`,
  ],
})
export class CheckboxDisabledExampleComponent {}
\`\`\``;

const section8_0 = `# Animation

Bind an animation trigger to the content of \`[headwindCheckboxChecked]\` to play animation when checked state is toggled.`;

const section8_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindCheckboxButtonComponent,
  HeadwindCheckboxCheckedDirective,
  HeadwindCheckboxComponent,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-checkbox-animation-example',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective],
  template: \`
    <headwind-checkbox class="inline-flex cursor-pointer select-none items-center space-x-1">
      <headwind-checkbox-button
        class="relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white"
      >
        <ng-template headwindCheckboxChecked>
          <svg
            [@scaleUp]
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute h-4 w-4 stroke-rose-500"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </ng-template>
      </headwind-checkbox-button>
    </headwind-checkbox>
  \`,
  animations: [
    trigger('scaleUp', [
      state(
        'void',
        style({
          transform: 'scale(0)',
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            transform: 'scale(1)',
          }),
        ),
      ),
      transition('* => void', animate('.1s')),
    ]),
  ],
})
export class CheckboxAnimationExampleComponent {}
\`\`\``;

const section9_0 = `# Accessibility
## Mouse Interaction

Clicking on the \`<headwind-checkbox>\` element toggles its checked state.
## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| \`Space\` | \`<headwind-checkbox>\` | Toggle the checked state. |`;

const section10_0 = `# API

## HeadwindCheckboxComponent

The root component of Checkbox.

### Selector

\`<headwind-checkbox>\`

### Host Class

\`.headwind-checkbox\`<br/>
\`.headwind-checked\` when Checkbox checked.

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() set checked(value: boolean)\` | Set the checked state of checkbox. |
| \`@Input() set disabled(value: boolean)\` | Set the disabled state of checkbox. |
### Outputs
| Name | Description |
| ---- | ---- |
| \`@Output() checkedChange: EventEmitter<boolean>\` | Emits the changed checked state of checkbox. |

### Methods
| Name | Description |
| ---- | ---- |
| \`toggle()\` | Toggle the checked state of Checkbox. |
| \`check()\` | Check the checkbox. If it is already checked, it is ignored. |
| \`uncheck()\` | Uncheck the checkbox. If it is already unchecked, it is ignored. |

## HeadwindCheckboxButtonComponent

A component for drawing a checkbox containing a checked icon.

### Selector

\`<headwind-checkbox-button>\`

### Host Class

\`.headwind-checkbox-button\`
## HeadwindCheckboxCheckedDirective

A directive for a template that wraps a checked indicator.
### Selector

\`ng-template[headwindCheckboxChecked]\``;
