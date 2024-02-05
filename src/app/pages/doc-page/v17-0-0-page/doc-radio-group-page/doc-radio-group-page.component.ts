import { Component } from '@angular/core';
import { DocumentationService } from '../../../../services/documentation.service';
import { MarkdownComponent } from 'ngx-markdown';
import { BasicRadioGroupExampleComponent } from './basic-radio-group-example/basic-radio-group-example.component';
import { RadioGroupClassesExampleComponent } from './radio-group-classes-example/radio-group-classes-example.component';
import { RadioGroupSelectedClassExampleComponent } from './radio-group-selected-class-example/radio-group-selected-class-example.component';
import { RadioGroupValueExampleComponent } from './radio-group-value-example/radio-group-value-example.component';
import { RadioGroupModelBindingExampleComponent } from './radio-group-model-binding-example/radio-group-model-binding-example.component';
import { RadioGroupDisabledExampleComponent } from './radio-group-disabled-example/radio-group-disabled-example.component';
import { RadioGroupAnimationExampleComponent } from './radio-group-animation-example/radio-group-animation-example.component';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-doc-radio-group-page',
  standalone: true,
  imports: [
    MarkdownComponent,
    BasicRadioGroupExampleComponent,
    RadioGroupClassesExampleComponent,
    RadioGroupSelectedClassExampleComponent,
    RadioGroupValueExampleComponent,
    RadioGroupModelBindingExampleComponent,
    RadioGroupDisabledExampleComponent,
    RadioGroupAnimationExampleComponent,
  ],
  templateUrl: './doc-radio-group-page.component.html',
  styleUrl: './doc-radio-group-page.component.scss',
  host: {
    class: 'doc-page',
  },
})
export class DocRadioGroupPageComponent {
  constructor(
    private readonly _seoService: SeoService,
    private readonly _documentationService: DocumentationService,
  ) {
    this._seoService.update({
      title: 'Headwind UI - Radio Group',
      description:
        'A component that allows the user to select one of several choices. Multiple radio buttons grouped together.',
      keywords: ['Angular', 'Tailwind', 'Radio Group'],
      url: 'https://ng-headwind-ui.github.io/doc/v17/radio-group',
    });

    this._documentationService.headingNavigations = [
      {
        label: 'Radio Group',
        fragment: 'radio-group',
      },
      {
        label: 'Radio Group Classes',
        fragment: 'radio-group-classes',
        children: [
          {
            label: 'Basic Classes',
            fragment: 'basic-classes',
          },
          {
            label: 'Selected Class',
            fragment: 'selected-class',
          },
        ],
      },
      {
        label: 'Value',
        fragment: 'value',
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
            label: 'HeadwindRadioGroupComponent',
            fragment: 'headwindradiogroupcomponent',
          },
          {
            label: 'HeadwindRadioComponent',
            fragment: 'headwindradiocomponent',
          },
          {
            label: 'HeadwindRadioButtonComponent',
            fragment: 'headwindradiobuttoncomponent',
          },
          {
            label: 'HeadwindRadioSelectedDirective',
            fragment: 'headwindradioselecteddirective',
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
  protected readonly section4_1 = section4_1;
  protected readonly section5_0 = section5_0;
  protected readonly section5_1 = section5_1;
  protected readonly section6_0 = section6_0;
  protected readonly section7_0 = section7_0;
  protected readonly section2_4 = section2_4;
  protected readonly section2_5 = section2_5;
}

const section1_0 = `# Radio Group

A component that allows the user to select one of several choices. Multiple radio buttons grouped together.`;

const section1_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-radio-group-example',
  standalone: true,
  imports: [
    HeadwindRadioComponent,
    HeadwindRadioGroupComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: \`
    <div class="w-full max-w-[400px] space-y-2 rounded-2xl bg-white p-8 shadow-xl">
      <label class="text-lg font-semibold"> Choose your partner </label>

      <headwind-radio-group class="block space-y-2">
        @for (option of options; track option.name) {
          <headwind-radio
            #radio
            [value]="option.name"
            class="flex cursor-pointer select-none items-center justify-between rounded-md border border-zinc-200 p-3 transition-colors hover:bg-rose-50"
          >
            <div>
              <div class="text-sm font-semibold">
                {{ option.name }}
              </div>

              <div class="text-xs text-zinc-400">
                {{ option.description }}
              </div>
            </div>

            <headwind-radio-button
              class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 transition-colors"
            >
              <ng-template headwindRadioSelected>
                <div [@scaleUp] class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
              </ng-template>
            </headwind-radio-button>
          </headwind-radio>
        }
      </headwind-radio-group>
    </div>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-radio-group:focus {
          .headwind-radio.headwind-selected {
            .headwind-radio-button {
              @apply bg-rose-100;
            }
          }
        }

        .headwind-radio.headwind-selected {
          .headwind-radio-button {
            @apply border-rose-500;
          }
        }
      }
    \`,
  ],
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
export class BasicRadioGroupExampleComponent {
  options = [
    {
      name: 'Tori Day',
      description: 'Epic Crazy Designer',
    },
    {
      name: 'Ishaan Martinez',
      description: 'Natural Born Computer-Human',
    },
    {
      name: 'Alvin Bailey',
      description: 'Common Layer',
    },
  ];
}
\`\`\``;

const section2_0 = `# Radio Group Classes

## Basic Classes

Each component used to implement Radio Group has the same class name as its name. You can set styles using the class name as a selector in a style file.`;

const section2_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-radio-group-classes-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: \`
    <headwind-radio-group>
      @for (option of options; track option) {
        <headwind-radio [value]="option">
          <headwind-radio-button>
            <ng-template headwindRadioSelected>
              <div class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
            </ng-template>
          </headwind-radio-button>

          <div class="text-sm">
            {{ option }}
          </div>
        </headwind-radio>
      }
    </headwind-radio-group>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-radio-group {
          @apply block w-full max-w-[300px] space-y-2 rounded-xl bg-white p-6 shadow-xl;
        }

        .headwind-radio {
          @apply flex cursor-pointer select-none items-center space-x-2;
        }

        .headwind-radio-button {
          @apply relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300;
        }
      }
    \`,
  ],
})
export class RadioGroupClassesExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
\`\`\``;

const section2_2 = `## Selected Class

When a Radio is selected, the \`<headwind-radio>\` component has the class \`.headwind-selected\`.`;

const section2_3 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-radio-group-selected-class-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: \`
    <headwind-radio-group>
      @for (option of options; track option) {
        <headwind-radio [value]="option">
          <headwind-radio-button>
            <ng-template headwindRadioSelected>
              <div class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
            </ng-template>
          </headwind-radio-button>

          <div class="text-sm">
            {{ option }}
          </div>
        </headwind-radio>
      }
    </headwind-radio-group>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-radio-group {
          @apply block w-full max-w-[300px] space-y-2 rounded-xl bg-white p-6 shadow-xl;
        }

        .headwind-radio {
          @apply flex cursor-pointer select-none items-center space-x-2;

          &.headwind-selected {
            .headwind-radio-button {
              @apply border-rose-500;
            }
          }
        }

        .headwind-radio-button {
          @apply relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300;
        }
      }
    \`,
  ],
})
export class RadioGroupSelectedClassExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
\`\`\``;

const section2_4 = `# Value

Radio Group can bind value to property using \`value\` input and \`valueChange\` output.`;

const section2_5 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-radio-group-value-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: \`
    <div class="w-full max-w-[300px] space-y-2">
      <div class="text-sm">Selected Value: {{ value }}</div>

      <headwind-radio-group [(value)]="value" class="block space-y-2 rounded-xl bg-white p-6 shadow-xl">
        @for (option of options; track option) {
          <headwind-radio [value]="option" class="flex cursor-pointer select-none items-center space-x-2">
            <headwind-radio-button
              class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300"
            >
              <ng-template headwindRadioSelected>
                <div class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
              </ng-template>
            </headwind-radio-button>

            <div class="text-sm">
              {{ option }}
            </div>
          </headwind-radio>
        }
      </headwind-radio-group>
    </div>
  \`,
})
export class RadioGroupValueExampleComponent {
  value = 'Ishaan Martinez';

  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
\`\`\``;

const section3_0 = `# NgModel, FormControl

The \`<headwind-radio-group>\` component can bind value using \`NgModel\` or \`FormControl\`.`;

const section3_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-group-model-binding-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: \`
    <div class="w-full max-w-[300px] space-y-2">
      <div class="text-sm">Selected NgModel: {{ value }}</div>

      <headwind-radio-group [(ngModel)]="value" class="block space-y-2 rounded-xl bg-white p-6 shadow-xl">
        @for (option of options; track option) {
          <headwind-radio [value]="option" class="flex cursor-pointer select-none items-center space-x-2">
            <headwind-radio-button
              class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300"
            >
              <ng-template headwindRadioSelected>
                <div class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
              </ng-template>
            </headwind-radio-button>

            <div class="text-sm">
              {{ option }}
            </div>
          </headwind-radio>
        }
      </headwind-radio-group>

      <div class="text-sm">Selected FormControl: {{ formControl.value }}</div>

      <headwind-radio-group [formControl]="formControl" class="block space-y-2 rounded-xl bg-white p-6 shadow-xl">
        @for (option of options; track option) {
          <headwind-radio [value]="option" class="flex cursor-pointer select-none items-center space-x-2">
            <headwind-radio-button
              class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300"
            >
              <ng-template headwindRadioSelected>
                <div class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
              </ng-template>
            </headwind-radio-button>

            <div class="text-sm">
              {{ option }}
            </div>
          </headwind-radio>
        }
      </headwind-radio-group>
    </div>
  \`,
})
export class RadioGroupModelBindingExampleComponent {
  value = 'Ishaan Martinez';
  formControl = new FormControl('Tori Day');

  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
\`\`\``;

const section4_0 = `# Disabled State

Setting the \`disabled\` attribute will disable the Radio Group. Styling for the disabled state uses the \`[disabled]\` CSS selector instead of \`:disabled\`.`;

const section4_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-radio-group-disabled-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: \`
    <headwind-radio-group
      value="Tori Day"
      disabled
      class="block w-full max-w-[300px] space-y-2 rounded-xl bg-white p-6 shadow-xl"
    >
      @for (option of options; track option) {
        <headwind-radio [value]="option" class="flex cursor-pointer select-none items-center space-x-2">
          <headwind-radio-button
            class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300"
          >
            <ng-template headwindRadioSelected>
              <div class="selected absolute h-2 w-2 rounded-full bg-rose-500"></div>
            </ng-template>
          </headwind-radio-button>

          <div class="label text-sm">
            {{ option }}
          </div>
        </headwind-radio>
      }
    </headwind-radio-group>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-radio-group[disabled] {
          .headwind-radio {
            @apply cursor-not-allowed;
          }

          .headwind-radio-button {
            @apply bg-zinc-100;

            .selected {
              @apply bg-zinc-300;
            }
          }

          .label {
            @apply text-zinc-300;
          }
        }
      }
    \`,
  ],
})
export class RadioGroupDisabledExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
\`\`\``;

const section5_0 = `# Animation

Bind an animation trigger to the content of \`[headwindRadioSelected]\` to play animation when selected state is toggled.`;

const section5_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindRadioButtonComponent,
  HeadwindRadioComponent,
  HeadwindRadioGroupComponent,
  HeadwindRadioSelectedDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-radio-group-animation-example',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
  ],
  template: \`
    <headwind-radio-group class="block w-full max-w-[300px] space-y-2 rounded-xl bg-white p-6 shadow-xl">
      @for (option of options; track option) {
        <headwind-radio [value]="option" class="flex cursor-pointer select-none items-center space-x-2">
          <headwind-radio-button
            class="relative flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300"
          >
            <ng-template headwindRadioSelected>
              <div [@scaleUp] class="absolute h-2 w-2 rounded-full bg-rose-500"></div>
            </ng-template>
          </headwind-radio-button>

          <div class="text-sm">
            {{ option }}
          </div>
        </headwind-radio>
      }
    </headwind-radio-group>
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
export class RadioGroupAnimationExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
\`\`\``;

const section6_0 = `# Accessibility

## Mouse Interaction

Clicking on \`<headwind-radio>\` selects the option.
## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| \`ArrowDown\`, \`ArrowRight\` | \`<headwind-radio-group>\` | Select the next option. |
| \`ArrowUp\`, \`ArrowLeft\` | \`<headwind-radio-group>\` | Select the previous option. |
`;

const section7_0 = `# API

## HeadwindRadioGroupComponent

A component containing multiple \`<headwind-radio>\`.

### Selector

\`<headwind-radio-group>\`

## Host Class

\`.headwind-radio-group\`

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() set value(value: any)\` | Set the selected value of Radio Group. |
| \`@Input() set disabled(value: boolean)\` | Set the disabled state of Radio Group. |
### Outputs
| Name | Description |
| ---- | ---- |
| \`@Output() valueChange: EventEmitter<any>\` | Emits the changed value of Radio Group. |
### Methods
| Name | Description |
| ---- | ---- |
| \`toPreviousOption()\` | Select the previous option. |
| \`toNextOption()\` | Select the next option. |

## HeadwindRadioComponent

Components for selectable radio options. Must be used with \`<headwind-radio-button>\`
### Selector

\`<headwind-radio>\`
### Host Class

\`.headwind-radio\`<br/>
\`.headwind-selected\` when Radio selected.
### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() value: any\` | Set the value of Radio option. |
### Properties

| Name | Description |
| ---- | ---- |
| \`get selected(): boolean\` | Selected state of radio. |
## HeadwindRadioButtonComponent

Radio button to display selected state.

### Selector

\`<headwind-radio-button>\`

Host Class

\`.headwind-radio-button\`

## HeadwindRadioSelectedDirective

A directive for a template that wraps a selected indicator.

### Selector

\`[headwindRadioSelected]\``;
