import { Component } from '@angular/core';
import { DocumentationService } from '../../../../services/documentation.service';
import { MarkdownComponent } from 'ngx-markdown';
import { BasicSelectExampleComponent } from './basic-select-example/basic-select-example.component';
import { SelectClassesExampleComponent } from './select-classes-example/select-classes-example.component';
import { SelectFocusedClassExampleComponent } from './select-focused-class-example/select-focused-class-example.component';
import { SelectSelectedClassExampleComponent } from './select-selected-class-example/select-selected-class-example.component';
import { SelectValueExampleComponent } from './select-value-example/select-value-example.component';
import { SelectModelBindingExampleComponent } from './select-model-binding-example/select-model-binding-example.component';
import { SelectDisabledStateExampleComponent } from './select-disabled-state-example/select-disabled-state-example.component';
import { SelectMultipleExampleComponent } from './select-multiple-example/select-multiple-example.component';
import { SelectAnimationExampleComponent } from './select-animation-example/select-animation-example.component';

@Component({
  selector: 'app-doc-select-page',
  standalone: true,
  imports: [
    MarkdownComponent,
    BasicSelectExampleComponent,
    SelectClassesExampleComponent,
    SelectFocusedClassExampleComponent,
    SelectSelectedClassExampleComponent,
    SelectValueExampleComponent,
    SelectModelBindingExampleComponent,
    SelectDisabledStateExampleComponent,
    SelectMultipleExampleComponent,
    SelectAnimationExampleComponent,
  ],
  templateUrl: './doc-select-page.component.html',
  styleUrl: './doc-select-page.component.scss',
  host: {
    class: 'doc-page',
  },
})
export class DocSelectPageComponent {
  constructor(private readonly _documentationService: DocumentationService) {
    this._documentationService.headingNavigations = [
      {
        label: 'Select',
        fragment: 'select',
      },
      {
        label: 'Select Classes',
        fragment: 'select-classes',
        children: [
          {
            label: 'Basic Classes',
            fragment: 'basic-classes',
          },
          {
            label: 'Focused Class',
            fragment: 'focused-class',
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
        label: 'Multiple',
        fragment: 'multiple',
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
            label: 'HeadwindSelectComponent',
            fragment: 'headwindselectcomponent',
          },
          {
            label: 'HeadwindOptionsOverlayDirective',
            fragment: 'headwindoptionsoverlaydirective',
          },
          {
            label: 'HeadwindOptionsOverlayComponent',
            fragment: 'headwindoptionsoverlaycomponent',
          },
          {
            label: 'HeadwindOptionComponent',
            fragment: 'headwindoptioncomponent',
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
  protected readonly section9_1 = section9_1;
  protected readonly section10_0 = section10_0;
  protected readonly section11_0 = section11_0;
}

const section1_0 = `# Select

A component that allows the user to select one item from a list of options that can be opened and closed.`;

const section1_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-select-example',
  standalone: true,
  imports: [
    HeadwindSelectComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindOptionComponent,
  ],
  template: \`
    <headwind-select
      #select
      [(value)]="value"
      [class]="select.opened ? 'border-rose-500 outline outline-1 outline-rose-500' : 'border-zinc-300'"
      class="inline-flex h-10 w-full max-w-[200px] cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3 focus:border-rose-500 focus:outline focus:outline-1 focus:outline-rose-500"
    >
      <div [class.text-zinc-400]="!value" class="text-sm">
        {{ value ? value : 'Select Option' }}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>

      <ng-template headwindOptionsOverlay>
        <headwind-options-overlay [@fadeIn] class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
          @for (option of options; track option) {
            <headwind-option
              #headwindOption
              [class.text-rose-500]="headwindOption.selected"
              [class.bg-rose-50]="headwindOption.focused"
              [value]="option"
              class="block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50"
            >
              {{ option }}
            </headwind-option>
          }
        </headwind-options-overlay>
      </ng-template>
    </headwind-select>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-options-overlay::-webkit-scrollbar-track {
          @apply my-2;
        }
      }
    \`,
  ],
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            opacity: 1,
          }),
        ),
      ),
      transition('* => void', animate('.1s')),
    ]),
  ],
})
export class BasicSelectExampleComponent {
  value = '';

  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
\`\`\``;

const section2_0 = `# Select Classes

## Basic Classes

Each component used to implement Select has the same class name as its name. You can set styles using the class name as a selector in a style file.`;

const section2_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-select-classes-example',
  standalone: true,
  imports: [
    HeadwindSelectComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindOptionComponent,
  ],
  template: \`
    <headwind-select #select>
      <div [class.text-zinc-400]="!select.value" class="text-sm">
        {{ select.value ? select.value : 'Select Option' }}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>

      <ng-template headwindOptionsOverlay>
        <headwind-options-overlay>
          @for (option of options; track option) {
            <headwind-option [value]="option">
              {{ option }}
            </headwind-option>
          }
        </headwind-options-overlay>
      </ng-template>
    </headwind-select>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-select {
          @apply inline-flex h-10 w-full max-w-[200px] cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3;
        }

        .headwind-options-overlay {
          @apply block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl;
        }

        .headwind-option {
          @apply block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50;
        }
      }
    \`,
  ],
})
export class SelectClassesExampleComponent {
  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
\`\`\``;

const section3_0 = `## Focused Class

When \`<headwind-options-overlay>\` is opened, the focus target is placed on the overlay. Each \`<headwind-option>\` uses the internal property of the overlay component to give the effect of being focused. When \`<headwind-option>\` is brought to the focused state by the overlay component, the \`.headwind-focused\` class is added.`;

const section3_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-select-focused-class-example',
  standalone: true,
  imports: [
    HeadwindSelectComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindOptionComponent,
  ],
  template: \`
    <headwind-select #select>
      <div [class.text-zinc-400]="!select.value" class="text-sm">
        {{ select.value ? select.value : 'Select Option' }}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>

      <ng-template headwindOptionsOverlay>
        <headwind-options-overlay>
          @for (option of options; track option) {
            <headwind-option [value]="option">
              {{ option }}
            </headwind-option>
          }
        </headwind-options-overlay>
      </ng-template>
    </headwind-select>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-select {
          @apply inline-flex h-10 w-full max-w-[200px] cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3;
        }

        .headwind-options-overlay {
          @apply block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl;
        }

        .headwind-option {
          @apply block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50;

          &.headwind-focused {
            @apply bg-rose-50;
          }
        }
      }
    \`,
  ],
})
export class SelectFocusedClassExampleComponent {
  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
\`\`\``;

const section4_0 = `## Selected Class

When a option is selected, the \`<headwind-option>\` component has the class \`.headwind-selected\`.`;

const section4_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-select-selected-class-example',
  standalone: true,
  imports: [
    HeadwindSelectComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindOptionComponent,
  ],
  template: \`
    <headwind-select #select>
      <div [class.text-zinc-400]="!select.value" class="text-sm">
        {{ select.value ? select.value : 'Select Option' }}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>

      <ng-template headwindOptionsOverlay>
        <headwind-options-overlay>
          @for (option of options; track option) {
            <headwind-option [value]="option">
              {{ option }}
            </headwind-option>
          }
        </headwind-options-overlay>
      </ng-template>
    </headwind-select>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-select {
          @apply inline-flex h-10 w-full max-w-[200px] cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3;
        }

        .headwind-options-overlay {
          @apply block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl;
        }

        .headwind-option {
          @apply block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50;

          &.headwind-selected {
            @apply text-rose-500;
          }

          &.headwind-focused {
            @apply bg-rose-50;
          }
        }
      }
    \`,
  ],
})
export class SelectSelectedClassExampleComponent {
  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
\`\`\``;

const section5_0 = `# Value

Select can bind value to property using \`value\` input and \`valueChange\` output.`;

const section5_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-select-value-example',
  standalone: true,
  imports: [
    HeadwindOptionComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindSelectComponent,
  ],
  template: \`
    <headwind-select
      [(value)]="value"
      class="inline-flex h-10 w-full max-w-[200px] cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3"
    >
      <div [class.text-zinc-400]="!value" class="text-sm">
        {{ value ? value : 'Select Option' }}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>

      <ng-template headwindOptionsOverlay>
        <headwind-options-overlay class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
          @for (option of options; track option) {
            <headwind-option
              #headwindOption
              [class.text-rose-500]="headwindOption.selected"
              [class.bg-rose-50]="headwindOption.focused"
              [value]="option"
              class="block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50"
            >
              {{ option }}
            </headwind-option>
          }
        </headwind-options-overlay>
      </ng-template>
    </headwind-select>
  \`,
})
export class SelectValueExampleComponent {
  value = 'Evelynn Hobbs';

  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
\`\`\``;

const section6_0 = `# NgModel, FormControl

The \`<headwind-select>\` component can bind value using \`NgModel\` or \`FormControl\`.`;

const section6_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-model-binding-example',
  standalone: true,
  imports: [
    HeadwindOptionComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindSelectComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: \`
    <div class="w-full max-w-[250px] space-y-2 rounded-xl bg-white p-8 shadow-xl">
      <headwind-select
        [(ngModel)]="value"
        class="flex h-10 w-full cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3"
      >
        <div [class.text-zinc-400]="!value" class="text-sm">
          {{ value ? value : 'Select Option' }}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

        <ng-template headwindOptionsOverlay>
          <headwind-options-overlay class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
            @for (option of options; track option) {
              <headwind-option
                #headwindOption
                [class.text-rose-500]="headwindOption.selected"
                [class.bg-rose-50]="headwindOption.focused"
                [value]="option"
                class="block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50"
              >
                {{ option }}
              </headwind-option>
            }
          </headwind-options-overlay>
        </ng-template>
      </headwind-select>

      <headwind-select
        [formControl]="formControl"
        class="flex h-10 w-full cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3"
      >
        <div [class.text-zinc-400]="!formControl.value" class="text-sm">
          {{ formControl.value ? formControl.value : 'Select Option' }}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

        <ng-template headwindOptionsOverlay>
          <headwind-options-overlay class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
            @for (option of options; track option) {
              <headwind-option
                #headwindOption
                [class.text-rose-500]="headwindOption.selected"
                [class.bg-rose-50]="headwindOption.focused"
                [value]="option"
                class="block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50"
              >
                {{ option }}
              </headwind-option>
            }
          </headwind-options-overlay>
        </ng-template>
      </headwind-select>
    </div>
  \`,
})
export class SelectModelBindingExampleComponent {
  value = '';
  formControl = new FormControl('');

  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
\`\`\``;

const section7_0 = `# Disabled State

Setting the \`disabled\` attribute will disable the Select. Styling for the disabled state uses the \`[disabled]\` CSS selector instead of \`:disabled\`.`;

const section7_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-select-disabled-state-example',
  standalone: true,
  imports: [
    HeadwindOptionComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindSelectComponent,
  ],
  template: \`
    <headwind-select
      [(value)]="value"
      disabled
      class="inline-flex h-10 w-full max-w-[200px] cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3"
    >
      <div [class.text-zinc-400]="!value" class="placeholder text-sm">
        {{ value ? value : 'Select Option' }}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>

      <ng-template headwindOptionsOverlay>
        <headwind-options-overlay class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
          @for (option of options; track option) {
            <headwind-option
              #headwindOption
              [class.text-rose-500]="headwindOption.selected"
              [class.bg-rose-50]="headwindOption.focused"
              [value]="option"
              class="block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50"
            >
              {{ option }}
            </headwind-option>
          }
        </headwind-options-overlay>
      </ng-template>
    </headwind-select>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-select[disabled] {
          @apply cursor-not-allowed bg-zinc-100;

          .placeholder {
            @apply text-zinc-400;
          }

          svg {
            @apply stroke-zinc-400;
          }
        }
      }
    \`,
  ],
})
export class SelectDisabledStateExampleComponent {
  value = 'Evelynn Hobbs';

  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
\`\`\``;

const section8_0 = `# Multiple

You can set the \`multiple\` attribute on \`<headwind-select>\` to enable selection of multiple options. The value must be in the form of an array, and if a non-array value is provided, the value is ignored and a new array is created.`;

const section8_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-select-multiple-example',
  standalone: true,
  imports: [
    HeadwindOptionComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindSelectComponent,
  ],
  template: \`
    <div class="w-full max-w-[250px] space-y-4 rounded-xl bg-white p-8 shadow-xl">
      <div class="space-y-2">
        <div class="text-lg font-semibold">Selected...</div>

        @if (value.length > 0) {
          <ul class="list-inside list-disc space-y-1 text-sm">
            @for (item of value; track item) {
              <li>
                {{ item }}
              </li>
            }
          </ul>
        } @else {
          <div class="text-sm text-zinc-400">Nothing Selected</div>
        }
      </div>

      <headwind-select
        [(value)]="value"
        multiple
        class="inline-flex h-10 w-full cursor-pointer select-none items-center justify-between space-x-2 rounded-lg border bg-white px-3"
      >
        <div [class.text-zinc-400]="value.length === 0" class="truncate text-sm">
          {{ value.length > 0 ? value : 'Select Option' }}
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

        <ng-template headwindOptionsOverlay>
          <headwind-options-overlay class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
            @for (option of options; track option) {
              <headwind-option
                #headwindOption
                [class.text-rose-500]="headwindOption.selected"
                [class.bg-rose-50]="headwindOption.focused"
                [value]="option"
                class="block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50"
              >
                {{ option }}
              </headwind-option>
            }
          </headwind-options-overlay>
        </ng-template>
      </headwind-select>
    </div>
  \`,
})
export class SelectMultipleExampleComponent {
  value: string[] = [];

  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
\`\`\``;

const section9_0 = `# Animation

Bind an animation trigger to \`<headwind-options-overlay>\` to play animation when options opened state is toggled.`;

const section9_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  HeadwindOptionComponent,
  HeadwindOptionsOverlayComponent,
  HeadwindOptionsOverlayDirective,
  HeadwindSelectComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-select-animation-example',
  standalone: true,
  imports: [
    HeadwindOptionComponent,
    HeadwindOptionsOverlayComponent,
    HeadwindOptionsOverlayDirective,
    HeadwindSelectComponent,
  ],
  template: \`
    <headwind-select
      #select
      class="inline-flex h-10 w-full max-w-[200px] cursor-pointer select-none items-center justify-between rounded-lg border bg-white px-3"
    >
      <div [class.text-zinc-400]="!select.value" class="text-sm">
        {{ select.value ? select.value : 'Select Option' }}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>

      <ng-template headwindOptionsOverlay>
        <headwind-options-overlay [@fadeIn] class="block max-h-[200px] overflow-auto rounded-md bg-white p-2 shadow-xl">
          @for (option of options; track option) {
            <headwind-option
              #headwindOption
              [class.text-rose-500]="headwindOption.selected"
              [class.bg-rose-50]="headwindOption.focused"
              [value]="option"
              class="block cursor-pointer select-none px-3 py-2 text-sm hover:bg-rose-50"
            >
              {{ option }}
            </headwind-option>
          }
        </headwind-options-overlay>
      </ng-template>
    </headwind-select>
  \`,
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            opacity: 1,
          }),
        ),
      ),
      transition('* => void', animate('.1s')),
    ]),
  ],
})
export class SelectAnimationExampleComponent {
  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
\`\`\``;

const section10_0 = `# Accessibility

## Mouse Interaction

Clicking on \`<headwind-select>\` opens the options.<br/>
Clicking outside of \`<headwind-options-overlay>\` closes the options overlay.<br/>
Clicking on \`<headwind-option>\` changes the value of Select.
## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| \`Enter\`, \`ArrowDown\`, \`ArrowUp\` | \`<headwind-select>\` | Toggle the opened state of options. |
| \`ArrowDown\` | \`<headwind-options-overlay>\` | Focus to the next option. |
| \`ArrowUp\` | \`<headwind-options-overlay>\` | Focus to the previous option. |
| \`Enter\`, \`Space\` | \`<headwind-options-overlay>\` | Select focused option. |
| \`Escape\` | \`window\` | Close the opened options. |`;

const section11_0 = `# API

## HeadwindSelectComponent

A component that toggles \`<headwind-options-overlay>\` and reflects the selected value.

### Selector

\`<headwind-select>\`

### Host Class

\`.headwind-select\`

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() set value(value: any)\` | Set the selected value of Select. |
| \`@Input() set multiple(value: boolean)\` | Set to select multiple options. |
| \`@Input() set disabled(value: boolean)\` | Set the disabled state of Select. |
### Outputs
| Name | Description |
| ---- | ---- |
| \`@Output() valueChange: EventEmitter<any>\` | Emits the changed value of Select. |

### Properties

| Name | Description |
| ---- | ---- |
| \`get opened(): boolean\` | Get the opened state of options. |
### Methods
| Name | Description |
| ---- | ---- |
| \`open()\` | Open the options. If it is already opened, it is ignored. |
| \`close()\` | Select the next option. If it is already closed, it is ignored. |
## HeadwindOptionsOverlayDirective

A directive for the template that wraps \`<headwind-popover-overlay>\`.
### Selector

\`ng-template[headwindOptionsOverlay]\`
## HeadwindOptionsOverlayComponent

An options overlay component containing multiple \`<headwind-option>\`.

### Selector

\`<headwind-options-overlay>\`

### Host Class

\`.headwind-options-overlay\`

### Outputs

| Name | Description |
| ---- | ---- |
| \`@Output() actualDirectionChange: EventEmitter<YDirection>\` | The direction in which the actual options overlay is rendered is emitted every \`RequestAnimationFrame\`. |
## HeadwindOptionComponent

An option component whose value can be reflected in \`<headwind-select>\` when selected.

### Selector

\`<headwind-option>\`

### Host Class

\`.headwind-option\`<br/>
\`.headwind-selected\` when option selected.
\`.headwind-focused\` when option focused.
### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() value: any\` | Set the value of option. |
### Properties

| Name | Description |
| ---- | ---- |
| \`get focused(): boolean\` | Focused state of option. |
| \`get selected(): boolean\` | Selected state of option. |
`;
