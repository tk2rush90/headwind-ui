# Headwind UI

To see documentation with live examples, visit [Headwind UI Homepage](https://ng-headwind-ui.github.io).

# Getting Started

Headwind UI is a styleless Angular components library.<br/>
Designed to integrate with Tailwind CSS.

To get started, install Headwind UI via npm.

```shell
npm install @favian/headwind-ui
```

Some components of Headwind UI have a `tabindex` attribute for accessibility.<br/>
Set outline to `0` to disable the Browser's default focus effect.

```scss
@layer components {
  [class*="headwind-"] {
    @apply outline-0;
  }
}
```

# Accordion

This is a component that can hide or show content using a button.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-accordion-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: `
    <div class="w-full max-w-[400px] space-y-2 rounded-2xl bg-white p-8 shadow">
      @for (person of people; track person.name) {
        <headwind-accordion #accordion class="block space-y-2">
          <headwind-accordion-button
            class="flex items-center justify-between rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400"
          >
            <div>
              {{ person.name }}
            </div>

            <svg
              [@rotate]="accordion.opened ? 'rotated' : 'none'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </headwind-accordion-button>

          <ng-template headwindAccordionContent>
            <div [@expand] class="space-y-4 overflow-hidden py-3 text-sm">
              <div class="flex items-center space-x-1">
                <img
                  [src]="person.avatarUrl"
                  [alt]="person.name"
                  class="block h-10 w-10 rounded-full bg-zinc-200 object-cover"
                />

                <div>
                  <div class="font-semibold">
                    {{ person.name }}
                  </div>

                  <div class="text-xs text-zinc-400">
                    {{ person.job }}
                  </div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="text-xs text-zinc-400">Biography</div>

                <div>
                  {{ person.biography }}
                </div>
              </div>
            </div>
          </ng-template>
        </headwind-accordion>
      }
    </div>
  `,
  animations: [
    trigger('expand', [
      state(
        'void',
        style({
          height: 0,
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            height: '*',
          }),
        ),
      ),
      transition(
        '* => void',
        animate(
          '.1s',
          style({
            height: 0,
          }),
        ),
      ),
    ]),
    trigger('rotate', [
      state(
        'none',
        style({
          transform: 'rotate(0)',
        }),
      ),
      state(
        'rotated',
        style({
          transform: 'rotate(180deg)',
        }),
      ),
      transition('none <=> rotated', animate('.1s')),
    ]),
  ],
})
export class BasicAccordionExampleComponent {
  people = [
    {
      name: 'Tori Day',
      avatarUrl: 'https://picsum.photos/id/174/64',
      job: 'Designer',
      biography:
        'I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others.',
    },
    {
      name: 'Ishaan Martinez',
      avatarUrl: 'https://picsum.photos/id/213/64',
      job: 'Full-Stack Developer',
      biography:
        'From the day I was born, I was a coding prodigy who screamed "console.log(\'Waah~ Waah~\')". At the age of 3, I mastered JavaScript and TypeScript, and by the time I turned 7, I had evolved into a flawless full-stack developer.',
    },
    {
      name: 'Alvin Bailey',
      avatarUrl: 'https://picsum.photos/id/322/64',
      job: 'Lawyer',
      biography: 'I am an ordinary lawyer.',
    },
  ];
}
```

# Accordion Classes

## Basic Classes

Each component used to implement Accordion has the same class name as its name. You can set styles using the class name as a selector in a style file.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-accordion-classes-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: `
    <headwind-accordion>
      <headwind-accordion-button> Button </headwind-accordion-button>

      <ng-template headwindAccordionContent>
        <div class="mt-3">Content</div>
      </ng-template>
    </headwind-accordion>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-accordion {
          @apply block w-full max-w-[400px] rounded-2xl bg-white p-8 shadow;
        }

        .headwind-accordion-button {
          @apply flex items-center justify-between rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400;
        }
      }
    `,
  ],
})
export class AccordionClassesExampleComponent {}
```

## Opened Class

When an Accordion is open, the `<headwind-accordion>` component has the class `.headwind-opened`.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-accordion-opened-class-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: `
    <headwind-accordion>
      <headwind-accordion-button> Button</headwind-accordion-button>

      <ng-template headwindAccordionContent>
        <div class="mt-3">Content</div>
      </ng-template>
    </headwind-accordion>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-accordion {
          @apply block w-full max-w-[400px] rounded-2xl bg-white p-8 shadow;

          &.headwind-opened {
            .headwind-accordion-button {
              @apply bg-indigo-400;
            }
          }
        }

        .headwind-accordion-button {
          @apply flex items-center justify-between rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400;
        }
      }
    `,
  ],
})
export class AccordionOpenedClassExampleComponent {}
```

# Opened State

You can use the `opened` attribute to change the display state of the content. When the opened state changes, the changed value is emitted through the `openedChange` emitter.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-accordion-opened-state-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: `
    <headwind-accordion
      [(opened)]="opened"
      class="block w-full max-w-[400px] space-y-2 rounded-2xl bg-white p-8 shadow"
    >
      <headwind-accordion-button
        class="block rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400"
      >
        Button Opened: {{ opened }}
      </headwind-accordion-button>

      <ng-template headwindAccordionContent>
        <div class="mt-3">Content</div>
      </ng-template>
    </headwind-accordion>
  `,
})
export class AccordionOpenedStateExampleComponent {
  opened = true;
}
```

# toggle, open, close

The `<headwind-accordion>` component provides the `toggle()`, `open()`, and `close()` methods.

```typescript
importimport { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-accordion-methods-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: `
    <div class="w-full max-w-[400px]">
      <div class="flex flex-wrap items-stretch gap-2">
        <button
          (click)="accordion.toggle()"
          class="min-h-8 flex-[1_1_0] rounded-md bg-rose-500 px-3 text-sm text-white"
        >
          Toggle Accordion
        </button>
        <button (click)="accordion.open()" class="min-h-8 flex-[1_1_0] rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Accordion
        </button>
        <button (click)="accordion.close()" class="min-h-8 flex-[1_1_0] rounded-md bg-rose-500 px-3 text-sm text-white">
          Close Accordion
        </button>
      </div>

      <headwind-accordion #accordion class="mt-3 block space-y-2 rounded-2xl bg-white p-8 shadow">
        <headwind-accordion-button
          class="block rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400"
        >
          Button
        </headwind-accordion-button>

        <ng-template headwindAccordionContent>
          <div class="mt-3">Content</div>
        </ng-template>
      </headwind-accordion>
    </div>
  `,
})
export class AccordionMethodsExampleComponent {}
```

# Animation

Bind an animation trigger to `*headwindAccordionContent` to play animation when content is toggled.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-accordion-animation-example',
  standalone: true,
  imports: [HeadwindAccordionButtonComponent, HeadwindAccordionComponent, HeadwindAccordionContentDirective],
  template: `
    <headwind-accordion class="mt-3 block w-full max-w-[400px] space-y-2 rounded-2xl bg-white p-8 shadow">
      <headwind-accordion-button
        class="block rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400"
      >
        Button
      </headwind-accordion-button>

      <ng-template headwindAccordionContent>
        <div [@expand] class="mt-3">Content</div>
      </ng-template>
    </headwind-accordion>
  `,
  animations: [
    trigger('expand', [
      state(
        'void',
        style({
          height: 0,
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            height: '*',
          }),
        ),
      ),
      transition(
        '* => void',
        animate(
          '.1s',
          style({
            height: 0,
          }),
        ),
      ),
    ]),
  ],
})
export class AccordionAnimationExampleComponent {}
```

# Accessibility

## Mouse Interaction

Clicking on the `<headwind-accordion-button>` element toggles its contents.

## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| `Space`, `Enter` | `<headwind-accordion-button>` | Toggle the contents. |

# API

## HeadwindAccordionComponent

The root component of Accordion.

### Selector

`<headwind-accordion>`

### Host Class

`.headwind-accordion`<br/>
`.headwind-opened` when Accordion opened.

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() set opened(value: boolean)` | Set the opened state of content. |

### Outputs

| Name | Description |
| ---- | ---- |
| `@Output() openedChange: EventEmitter<boolean>` | Emits the changed opened state of content. |

### Methods

| Name | Description |
| ---- | ---- |
| `toggle()` | Toggle the opened state of Content. |
| `open()` | Open the content. If it is already open, it is ignored. |
| `close()` | Close the content. If it is already closed, it is ignored. |

## HeadwindAccordionButtonComponent

A component that can open and close the Accordion content.

### Selector

`<headwind-accordion-button>`

### Host Class

`.headwind-accordion-button`

## HeadwindAccordionContentDirective

A directive for a template that wraps Accordion content.

### Selector

`ng-template[headwindAccordionContent]`

# Checkbox

Component that toggles boolean state.

```typescript
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
  template: `
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
  `,
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
```

# Checkbox Classes

## Basic Classes

Each component used to implement Checkbox has the same class name as its name. You can set styles using the class name as a selector in a style file.

```typescript
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
  template: `
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
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-checkbox {
          @apply inline-block cursor-pointer select-none;
        }

        .headwind-checkbox-button {
          @apply relative flex h-5 w-5 items-center justify-center rounded border border-zinc-300 bg-white;
        }
      }
    `,
  ],
})
export class CheckboxClassesExampleComponent {}
```

## Checked Class

When a Checkbox is checked, the `<headwind-checkbox>` component has the class `.headwind-checked`.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
  ],
})
export class CheckboxCheckedClassExampleComponent {}
```

# Checked State

You can use the `checked` attribute to toggle the checked state. When the checked state changes, the changed value is emitted through the `checkedChange` emitter.

```typescript
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
  template: `
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
  `,
})
export class CheckboxCheckedStateExampleComponent {
  checked = true;
}
```

# toggle, check, uncheck

The `<headwind-checkbox>` component provides the `toggle()`, `check()`, and `uncheck()` methods.

```typescript
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
  template: `
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
  `,
})
export class CheckboxMethodsExampleComponent {}
```

# NgModel, FormControl

The `<headwind-checkbox>` component can bind value using `NgModel` or `FormControl`.

```typescript
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
  template: `
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
  `,
})
export class CheckboxModelBindingExampleComponent {
  checked = false;
  checkControl = new FormControl(false);
}
```

# Disabled State

Setting the `disabled` attribute will disable the checkbox. Styling for the disabled state uses the `[disabled]` CSS selector instead of `:disabled`.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
  ],
})
export class CheckboxDisabledExampleComponent {}
```

# Animation

Bind an animation trigger to `[headwindCheckboxChecked]` to play animation when checked state is toggled.

```typescript
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
  template: `
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
  `,
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
```

# Accessibility

## Mouse Interaction

Clicking on the `<headwind-checkbox>` element toggles its checked state.

## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| `Space` | `<headwind-checkbox>` | Toggle the checked state. |

# API

## HeadwindCheckboxComponent

The root component of Checkbox.

### Selector

`<headwind-checkbox>`

### Host Class

`.headwind-checkbox`<br/>
`.headwind-checked` when Checkbox checked.

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() set checked(value: boolean)` | Set the checked state of checkbox. |
| `@Input() set disabled(value: boolean)` | Set the disabled state of checkbox. |

### Outputs

| Name | Description |
| ---- | ---- |
| `@Output() checkedChange: EventEmitter<boolean>` | Emits the changed checked state of checkbox. |

### Methods

| Name | Description |
| ---- | ---- |
| `toggle()` | Toggle the checked state of Checkbox. |
| `check()` | Check the checkbox. If it is already checked, it is ignored. |
| `uncheck()` | Uncheck the checkbox. If it is already unchecked, it is ignored. |

## HeadwindCheckboxButtonComponent

A component for drawing a checkbox containing a checked icon.

### Selector

`<headwind-checkbox-button>`

### Host Class

`.headwind-checkbox-button`

## HeadwindCheckboxCheckedDirective

A directive for a template that wraps a checked indicator.

### Selector

`ng-template[headwindCheckboxChecked]`

# Overlay

Creates a transparent layer that appears layered on top of other elements. It can be used when implementing screens such as modals, pop-ups, dialog boxes, tooltips, etc.

To create an overlay, `HeadwindOverlayService` and [TemplateRef](https://angular.io/api/core/TemplateRef) are required. Pass a TemplateRef to use as an overlay to the `open()` method. The `open()` method returns `EmbeddedViewRef`.

To close the overlay, use the `destroy()` method of `EmbeddedViewRef`.

```typescript
import { Component, EmbeddedViewRef, OnDestroy, TemplateRef } from '@angular/core';
import { HeadwindOverlayService } from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-overlay-example',
  standalone: true,
  imports: [],
  template: `
    <button (click)="open(modal)" class="h-8 rounded-md bg-rose-500 px-3 text-sm text-white">Open Overlay</button>

    <ng-template #modal>
      <div [@fadeIn]="'show'" class="absolute h-full w-full bg-white/[0.3] backdrop-blur-md"></div>

      <div [@fadeIn]="'show'" class="absolute flex h-full w-full items-center justify-center p-8">
        <div class="w-full max-w-[400px] space-y-4 rounded-2xl bg-white p-8 shadow-2xl">
          <div class="text-lg font-semibold">It's Headwind Overlay</div>

          <div class="text-sm">Any TemplateRef can be opened as an overlay.</div>

          <button
            (click)="openedModal?.destroy()"
            class="h-10 w-full rounded-md border border-zinc-200 text-sm font-semibold transition-colors hover:bg-zinc-200"
          >
            Okay
          </button>
        </div>
      </div>
    </ng-template>
  `,
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      state(
        'show',
        style({
          opacity: 1,
        }),
      ),
      transition('void <=> show', animate('.1s')),
    ]),
  ],
})
export class BasicOverlayExampleComponent implements OnDestroy {
  openedModal?: EmbeddedViewRef<any>;

  constructor(private readonly _headwindOverlayService: HeadwindOverlayService) {}

  ngOnDestroy() {
    this.openedModal?.destroy();
  }

  open(templateRef: TemplateRef<any>): void {
    if (!this.openedModal) {
      this.openedModal = this._headwindOverlayService.open(templateRef, () => delete this.openedModal);
    }
  }
}
```

# HeadwindOverlayOutlet

When an overlay is created, `<headwind-overlay-outlet>` is created dynamically. `<headwind-overlay-outlet>` is a fixed component that covers the entire screen, and user interaction is not possible because `pointer-events: none` is set.

Child elements of `<headwind-overlay-outlet>` are set to `pointer-events: auto` so all interactions are possible.

# Accessibility

## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| `Escape` | `window` | Close the latest overlay. |

# API

## HeadwindOverlayService

### Methods

| Name | Description |
| ---- | ---- |
| `open<C = any>(templateRef: TemplateRef<C>, onDestroy?: () => void): EmbeddedViewRef<C>` | Open a template as overlay. Can pass `onDestroy` callback function to call when destroying `EmbeddedViewRef` |
| `closeLatest()` | Close the latest overlay. |

# Popover

A small information box that appears when you click or hover over an element and is used to provide additional content or interact with the user.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayTemplateDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-popover-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayTemplateDirective,
  ],
  template: `
    <headwind-popover>
      <div class="flex w-[250px] items-center justify-between rounded-2xl bg-white p-4 shadow-xl">
        <div class="flex items-center space-x-2">
          <img [src]="user.avatarUrl" [alt]="user.name" class="block h-10 w-10 rounded-full bg-zinc-100" />

          <div>
            <div class="font-semibold">
              {{ user.name }}
            </div>

            <div class="text-sm text-zinc-400">
              {{ user.job }}
            </div>
          </div>
        </div>

        <svg
          headwindPopoverButton
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6 cursor-pointer stroke-zinc-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>

      <ng-template headwindPopoverOverlay>
        <headwind-popover-overlay
          [@fadeIn]
          pinPriority="left"
          directionPriority="bottom"
          class="block w-full max-w-[250px] space-y-4 rounded-xl bg-black/[0.8] p-4 text-xs text-white shadow-2xl"
        >
          {{ user.biography }}
        </headwind-popover-overlay>
      </ng-template>
    </headwind-popover>
  `,
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
export class BasicPopoverExampleComponent {
  user = {
    name: 'Tori Day',
    avatarUrl: 'https://picsum.photos/id/174/64',
    job: 'Designer',
    biography:
      'I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others.',
  };
}
```

# Popover Classes

Each component used to implement Popover has the same class name as its name. You can set styles using the class name as a selector in a style file.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayTemplateDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-popover-classes-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayTemplateDirective,
  ],
  template: `
    <headwind-popover>
      <button headwindPopoverButton>Open</button>

      <ng-template headwindPopoverOverlay>
        <headwind-popover-overlay> Popover Overlay </headwind-popover-overlay>
      </ng-template>
    </headwind-popover>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-popover-button {
          @apply h-10 rounded-md bg-rose-500 px-3 text-sm text-white;
        }

        .headwind-popover-overlay {
          @apply block w-full max-w-[250px] space-y-4 rounded-xl bg-white p-4 text-sm shadow-2xl;
        }
      }
    `,
  ],
})
export class PopoverClassesExampleComponent {}
```

# direction

`<headwind-popover-overlay>` can specify the display direction using the `direction` attribute. You can specify 'vertical' or 'horizontal', the default is `vertical`.

When `vertical`, the overlay is displayed above or below `[headwindPopoverButton]`, and when `horizontal`, it is displayed on the left or right.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayTemplateDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-popover-direction-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayTemplateDirective,
    HeadwindPopoverButtonDirective,
  ],
  template: `
    <div class="flex w-full max-w-[400px] flex-col items-center space-y-2">
      <headwind-popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Vertical Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay direction="vertical" class="rounded-md bg-white p-4 text-sm shadow-xl">
            Vertical Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>

      <headwind-popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Horizontal Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay direction="horizontal" class="rounded-md bg-white p-4 text-sm shadow-xl">
            Horizontal Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>
    </div>
  `,
})
export class PopoverDirectionExampleComponent {}
```

# Direction Priority

`<headwind-popover-overlay>` sets the display direction priority using the `directionPriority` attribute. When `direction` is `vertical`, you can set `top` or `bottom`, and when `direction` is `horizontal`, you can set `left` or `right`.

If `directionPriority` is set, the popover overlay will display in the set direction whenever possible. If there is not enough space in that direction, it will be displayed in the opposite direction.

When `direction` is `vertical`, the default value is `bottom`, and when `horizontal`, the default value is `right`.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayTemplateDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-popover-direction-priority-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayTemplateDirective,
    HeadwindPopoverButtonDirective,
  ],
  template: `
    <div class="flex w-full max-w-[400px] flex-col items-center space-y-2">
      <headwind-popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Top Direction Priority Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay
            direction="vertical"
            directionPriority="top"
            class="rounded-md bg-white p-4 text-sm shadow-xl"
          >
            Top Direction Priority Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>

      <headwind-popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Left Direction Priority Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay
            direction="horizontal"
            directionPriority="left"
            class="rounded-md bg-white p-4 text-sm shadow-xl"
          >
            Left Direction Priority Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>
    </div>
  `,
})
export class PopoverDirectionPriorityExampleComponent {}
```

# Pin Priority

Popover overlays are pinned in one direction. You can also set the priority in the pin direction using the `pinPriority` attribute. If `direction` is `vertical`, pin priority can be set to `left` or `right`, and if `horizontal`, pin priority can be set to `top` or `bottom`.

If `pinPriority` is set, the popover overlay will be pinned to the configured side whenever possible. If there is not enough space to pin on that side, it will be pinned on the other side.

If `direction` is `vertical`, the default is `left`, if `horizontal`, the default is `top`.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayTemplateDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-popover-pin-priority-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayTemplateDirective,
    HeadwindPopoverButtonDirective,
  ],
  template: `
    <div class="flex w-full max-w-[400px] flex-col items-center space-y-2">
      <headwind-popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Right Pin Priority Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay
            pinPriority="right"
            direction="vertical"
            directionPriority="top"
            class="rounded-md bg-white p-4 text-sm shadow-xl"
          >
            Right Pin Priority Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>

      <headwind-popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Open Bottom Pin Priority Popover
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay
            pinPriority="bottom"
            direction="horizontal"
            directionPriority="left"
            class="rounded-md bg-white p-4 text-sm shadow-xl"
          >
            Bottom Pin Priority Popover
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>
    </div>
  `,
})
export class PopoverPinPriorityExampleComponent {}
```

# actualDirectionChange, actualPinChange

Popover overlay uses `RequestAnimationFrame` to dynamically change its position depending on its position on the screen. And the actual rendered direction and pin are emitted through the `actualDirectionChange` emitter and `actualPinChange` emitter.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayTemplateDirective,
} from '@favian/headwind-ui';
import { XYDirections } from '../../../../../../../projects/headwind-ui/src/types/xy-directions';

@Component({
  selector: 'app-popover-actual-change-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayTemplateDirective,
  ],
  template: `
    <headwind-popover>
      <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">Open Popover</button>

      <ng-template headwindPopoverOverlay>
        <headwind-popover-overlay
          (actualDirectionChange)="actualDirection = $event"
          (actualPinChange)="actualPin = $event"
          class="block w-full max-w-[300px] space-y-4 rounded-md bg-white p-4 text-sm shadow-xl"
        >
          <div class="text-lg font-semibold">Changed Directions</div>

          <div class="space-y-1 text-sm">
            <div>Actual Direction: {{ actualDirection }}</div>

            <div>Actual Pin: {{ actualPin }}</div>
          </div>
        </headwind-popover-overlay>
      </ng-template>
    </headwind-popover>
  `,
})
export class PopoverActualChangeExampleComponent {
  actualDirection: XYDirections = 'bottom';
  actualPin: XYDirections = 'left';
}
```

# open, close

`<headwind-popover>` has `open()` and `close()` methods for opening and closing the popover overlay.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayTemplateDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-popover-methods-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayTemplateDirective,
  ],
  template: `
    <div class="flex flex-col items-center space-y-2">
      <button (click)="popover.open()" class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
        Outer Popover Button
      </button>

      <headwind-popover #popover>
        <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">
          Inner Popover Button
        </button>

        <ng-template headwindPopoverOverlay>
          <headwind-popover-overlay class="w-full max-w-[250px] rounded-md bg-white p-4 text-sm shadow-xl">
            Popover overlays are closed by clicking outside the overlay or by pressing the Escape key.
          </headwind-popover-overlay>
        </ng-template>
      </headwind-popover>
    </div>
  `,
})
export class PopoverMethodsExampleComponent {}
```

# Animation

Bind an animation trigger to `<headwind-popover-overlay>` to play animation when popover overlay is displayed or hidden.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindPopoverButtonDirective,
  HeadwindPopoverComponent,
  HeadwindPopoverOverlayComponent,
  HeadwindPopoverOverlayTemplateDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-popover-animation-example',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayComponent,
    HeadwindPopoverOverlayTemplateDirective,
  ],
  template: `
    <headwind-popover>
      <button headwindPopoverButton class="h-10 rounded-md bg-rose-500 px-3 text-sm text-white">Open</button>

      <ng-template headwindPopoverOverlay>
        <headwind-popover-overlay
          [@fadeIn]
          class="block w-full max-w-[250px] rounded-xl bg-white p-4 text-sm shadow-2xl"
        >
          With Animation
        </headwind-popover-overlay>
      </ng-template>
    </headwind-popover>
  `,
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
export class PopoverAnimationExampleComponent {}
```

# Accessibility

## Mouse Interaction

Clicking on the `[headwindPopoverButton]` element opens popover overlay.<br/>
Clicking outside of `<headwind-popover-overlay>` closes the popover overlay.

## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| `Escape` | `window` | Close the popover overlay when it is opened. |

# API

## HeadwindPopoverComponent

Popover's container component. All components or directives related to Popover must be inside this component.

### Selector

`<headwind-popover>`

### Host Class

`.headwind-popover`

### Methods

| Name | Description |
| ---- | ---- |
| `open()` | Open the popover overlay. If it is already opened, it is ignored. |
| `close()` | Closes the popover overlay. If it is already closed, it is ignored. |

## HeadwindPopoverButtonDirective

A directive to bind to the button that will be used to open the Popover overlay.

### Selector

`[headwindPopoverButton]`

### Host Class

`.headwind-popover-button`

## HeadwindPopoverOverlayComponent

This is a component to be used as an overlay. Must be used with `[*headwindPopoverOverlayTemplate]`.

### Selector

`<headwind-popover-overlay>`

### Host Class

`.headwind-popover-overlay`

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() direction: LinearDirection` | Set the direction in which the Popover overlay will be displayed. When `vertical`, it is displayed as the top or bottom of the button, and when `horizontal`, it is displayed to the left or right of the button. The default is `vertical`.. |
| `@Input() directionPriority: XYdirection` | Set the priority of the direction in which the Popover overlay will be displayed. When `direction` is `vertical`, you can set `top` or `bottom`, and when `direction` is `horizontal`, you can set `left` or `right`. When `direction` is `vertical`, the default value is `bottom`, and when `horizontal`, the default value is `right`. |
| `@Input() pinPriority: XYDirection` | Set the priority of the side on which the popover overlay is pinned. If `direction` is `vertical`, pin priority can be set to `left` or `right`, and if `horizontal`, pin priority can be set to `top` or `bottom`. If `direction` is `vertical`, the default is `left`, if `horizontal`, the default is `top`. |

### Outputs

| Name | Description |
| ---- | ---- |
| `@Output() actualDirectionChange: EventEmitter<XYDirection>` | The direction in which the actual popover overlay is rendered is emitted every `RequestAnimationFrame`. |
| `@Output() actualPinChange: EventEmitter<XYDirection>` | The pin side where the actual popover overlay is rendered is emitted every `RequestAnimationFrame`. |

## HeadwindPopoverOverlayDirective

A directive for the template that wraps `<headwind-popover-overlay>`.

### Selector

`ng-template[headwindPopoverOverlay]`

# Radio Group

A component that allows the user to select one of several choices. Multiple radio buttons grouped together.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
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
```

# Radio Group Classes

## Basic Classes

Each component used to implement Radio Group has the same class name as its name. You can set styles using the class name as a selector in a style file.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
  ],
})
export class RadioGroupClassesExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
```

## Selected Class

When a Radio is selected, the `<headwind-radio>` component has the class `.headwind-selected`.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
  ],
})
export class RadioGroupSelectedClassExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
```

# Value

Radio Group can bind value to property using `value` input and `valueChange` output.

```typescript
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
  template: `
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
  `,
})
export class RadioGroupValueExampleComponent {
  value = 'Ishaan Martinez';

  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
```

# NgModel, FormControl

The `<headwind-radio-group>` component can bind value using `NgModel` or `FormControl`.

```typescript
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
  template: `
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
  `,
})
export class RadioGroupModelBindingExampleComponent {
  value = 'Ishaan Martinez';
  formControl = new FormControl('Tori Day');

  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
```

# Disabled State

Setting the `disabled` attribute will disable the Radio Group. Styling for the disabled state uses the `[disabled]` CSS selector instead of `:disabled`.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
  ],
})
export class RadioGroupDisabledExampleComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey'];
}
```

# Animation

Bind an animation trigger to `*headwindRadioSelected` to play animation when selected state is toggled.

```typescript
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
  template: `
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
  `,
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
```

# Accessibility

## Mouse Interaction

Clicking on `<headwind-radio>` selects the option

## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| `ArrowDown`, `ArrowRight` | `<headwind-radio-group>` | Select the next option. |
| `ArrowUp`, `ArrowLeft` | `<headwind-radio-group>` | Select the previous option. |

# API

## HeadwindRadioGroupComponent

A component containing multiple `<headwind-radio>`.

### Selector

`<headwind-radio-group>`

## Host Class

`.headwind-radio-group`

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() set value(value: any)` | Set the selected value of Radio Group. |
| `@Input() set disabled(value: boolean)` | Set the disabled state of Radio Group. |

### Outputs

| Name | Description |
| ---- | ---- |
| `@Output() valueChange: EventEmitter<any>` | Emits the changed value of Radio Group. |

### Methods

| Name | Description |
| ---- | ---- |
| `toPreviousOption()` | Select the previous option. |
| `toNextOption()` | Select the next option. |

## HeadwindRadioComponent

Components for selectable radio options. Must be used with `<headwind-radio-button>`

### Selector

`<headwind-radio>`

### Host Class

`.headwind-radio`<br/>
`.headwind-selected` when Radio selected.

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() value: any` | Set the value of Radio option. |

### Properties

| Name | Description |
| ---- | ---- |
| `get selected(): boolean` | Selected state of radio. |

## HeadwindRadioButtonComponent

Radio button to display selected state. Must include `[*headwindRadioSelected]`.

### Selector

`<headwind-radio-button>`

Host Class

`.headwind-radio-button`

## HeadwindRadioSelectedDirective

A directive for a template that wraps a selected indicator.

### Selector

`[headwindRadioSelected]`

# Select

A component that allows the user to select one item from a list of options that can be opened and closed.

```typescript
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
  template: `
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
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-options-overlay::-webkit-scrollbar-track {
          @apply my-2;
        }
      }
    `,
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
```

# Select Classes

## Basic Classes

Each component used to implement Select has the same class name as its name. You can set styles using the class name as a selector in a style file.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
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
```

## Focused Class

Each `<headwind-option>` uses the internal property of the overlay component to give the effect of being focused. When `<headwind-option>` is brought to the focused state by the overlay component, the `.headwind-focused` class is added.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
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
```

## Selected Class

When a option is selected, the `<headwind-option>` component has the class `.headwind-selected`.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
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
```

# Value

Select can bind value to property using `value` input and `valueChange` output.

```typescript
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
  template: `
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
  `,
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
```

# NgModel, FormControl

The `<headwind-select>` component can bind value using `NgModel` or `FormControl`.

```typescript
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
  template: `
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
  `,
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
```

# Disabled State

Setting the `disabled` attribute will disable the Select. Styling for the disabled state uses the `[disabled]` CSS selector instead of `:disabled`.

```typescript
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
  template: `
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
  `,
  styles: [
    `
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
    `,
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
```

# Multiple

You can set the `multiple` attribute on `<headwind-select>` to enable selection of multiple options. The value must be in the form of an array, and if a non-array value is provided, the value is ignored and a new array is created.

```typescript
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
  template: `
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
  `,
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
```

# Animation

Bind an animation trigger to `<headwind-options-overlay>` to play animation when options opened state is toggled.

```typescript
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
  template: `
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
  `,
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
```

# Accessibility

## Mouse Interaction

Clicking on `<headwind-select>` opens the options.<br/>
Clicking outside of `<headwind-options-overlay>` closes the options overlay.<br/>
Clicking on `<headwind-option>` changes the value of Select.

## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| `Enter`, `ArrowDown`, `ArrowUp` | `<headwind-select>` | Toggle the opened state of options. |
| `ArrowDown` | `<headwind-options-overlay>` | Focus to the next option. |
| `ArrowUp` | `<headwind-options-overlay>` | Focus to the previous option. |
| `Enter`, `Space` | `<headwind-options-overlay>` | Select focused option. |
| `Escape` | `window` | Close the opened options. |

# API

## HeadwindSelectComponent

A component that toggles `<headwind-options-overlay>` and reflects the selected value.

### Selector

`<headwind-select>`

### Host Class

`.headwind-select`

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() set value(value: any)` | Set the selected value of Select. |
| `@Input() set multiple(value: boolean)` | Set to select multiple options. |
| `@Input() set disabled(value: boolean)` | Set the disabled state of Select. |

### Outputs

| Name | Description |
| ---- | ---- |
| `@Output() valueChange: EventEmitter<any>` | Emits the changed value of Select. |

### Properties

| Name | Description |
| ---- | ---- |
| `get opened(): boolean` | Get the opened state of options. |

### Methods

| Name | Description |
| ---- | ---- |
| `open()` | Open the options. If it is already opened, it is ignored. |
| `close()` | Select the next option. If it is already closed, it is ignored. |

## HeadwindOptionsOverlayDirective

A directive for the template that wraps `<headwind-options-overlay>`.

### Selector

`ng-template[headwindOptionsOverlay]`

## HeadwindOptionsOverlayComponent

An options overlay component containing multiple `<headwind-option>`.

### Selector

`<headwind-options-overlay>`

### Host Class

`.headwind-options-overlay`

### Outputs

| Name | Description |
| ---- | ---- |
| `@Output() actualDirectionChange: EventEmitter<YDirection>` | The direction in which the actual options overlay is rendered is emitted every `RequestAnimationFrame`. |

## HeadwindOptionComponent

An option component whose value can be reflected in `<headwind-select>` when selected.

### Selector

`<headwind-option>`

### Host Class

`.headwind-option`<br/>
`.headwind-selected` when option selected.
`.headwind-focused` when option focused.

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() value: any` | Set the value of option. |

### Properties

| Name | Description |
| ---- | ---- |
| `get focused(): boolean` | Focused state of option. |
| `get selected(): boolean` | Selected state of option. |

# Switch

Components that control toggleable settings such as on/off, enabled/disabled, visible/hidden, etc.

```typescript
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
```

# Switch Classes

## Basic Classes

Each component used to implement Switch has the same class name as its name. You can set styles using the class name as a selector in a style file.

```typescript
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
```

## Checked Class

When a Switch is checked, the `<headwind-switch>` component has the class `.headwind-checked`.

```typescript
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
  template: `
    <headwind-switch>
      <headwind-switch-track>
        <headwind-switch-thumb></headwind-switch-thumb>
      </headwind-switch-track>
    </headwind-switch>
  `,
  styles: [
    `
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
    `,
  ],
})
export class SwitchCheckedClassExampleComponent {}
```

# Checked State

You can use the `checked` attribute to toggle the checked state. When the checked state changes, the changed value is emitted through the `checkedChange` emitter.

```typescript
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
```

# toggle, check, uncheck

The `<headwind-switch>` component provides the `toggle()`, `check()`, and `uncheck()` methods.

```typescript
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
```

# NgModel, FormControl

The `<headwind-switch>` component can bind value using `NgModel` or `FormControl`.

```typescript
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
```

# Disabled State

Setting the `disabled` attribute will disable the switch. Styling for the disabled state uses the `[disabled]` CSS selector instead of `:disabled`.

```typescript
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
```

# Accessibility

## Mouse Interaction

Clicking on the `<headwind-switch>` element toggles its checked state.

## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| `space` | `<headwind-switch>` | Toggle the checked state. |

# API

## HeadwindSwitchComponent

The root component of Switch.

### Selector

`<headwind-switch>`

### Host Class

`.headwind-switch`<br/>
`.headwind-checked` when Switch checked.

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() set checked(value: boolean)` | Set the checked state of Switch. |
| `@Input() set disabled(value: boolean)` | Set the disabled state of Switch. |

### Outputs

| Name | Description |
| ---- | ---- |
| `@Output() checkedChange: EventEmitter<boolean>()` | Emits the changed checked state of Switch. |

### Methods

| Name | Description |
| ---- | ---- |
| `toggle()` | Toggle the checked state of Switch. |
| `check()` | Check the switch. If it is already checked, it is ignored. |
| `uncheck()` | Uncheck the switch. If it is already unchecked, it is ignored. |

## HeadwindSwitchTrackComponent

Component for a track on which the thumb can move.

### Selector

`<headwind-switch-track>`

### Host Class

`.headwind-switch-track`

## HeadwindSwitchThumbComponent

A thumb component that represents the state of the switch.

### Selector

`<headwind-switch-thumb>`

### Host Class

`.headwind-switch-thumb`

# Tab Group

A component that consists of several tab buttons and content, and allows tabs to be activated according to the tab key.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-tab-group-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: `
    <headwind-tab-group [(tabKey)]="tabKey" class="block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.name) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
            class="flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group [@slide]="tabKey" class="relative mt-6 block overflow-hidden">
        @for (tab of tabs; track tab.name) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <img [alt]="tab.name" [src]="tab.avatarUrl" class="h-10 w-10 rounded-full bg-zinc-200 object-cover" />

                <div>
                  <div class="font-semibold">
                    {{ tab.name }}
                  </div>

                  <div class="text-sm text-zinc-400">
                    {{ tab.job }}
                  </div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="text-xs text-zinc-400">Biography</div>

                <div class="text-sm">
                  {{ tab.biography }}
                </div>
              </div>
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  `,
  animations: [
    trigger('slide', [
      transition('1 => 2, 2 => 3, 1 => 3', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(-100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
      transition('3 => 2, 2 => 1, 3 => 1', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(-100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
    ]),
  ],
})
export class BasicTabGroupExampleComponent {
  tabKey = 1;

  tabs = [
    {
      key: 1,
      name: 'Tori Day',
      avatarUrl: 'https://picsum.photos/id/174/64',
      job: 'Designer',
      biography:
        'I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others.',
    },
    {
      key: 2,
      name: 'Ishaan Martinez',
      avatarUrl: 'https://picsum.photos/id/213/64',
      job: 'Full-Stack Developer',
      biography:
        'From the day I was born, I was a coding prodigy who screamed "console.log(\'Waah~ Waah~\')". At the age of 3, I mastered JavaScript and TypeScript, and by the time I turned 7, I had evolved into a flawless full-stack developer.',
    },
    {
      key: 3,
      name: 'Alvin Bailey',
      avatarUrl: 'https://picsum.photos/id/322/64',
      job: 'Lawyer',
      biography: 'I am an ordinary lawyer.',
    },
  ];
}
```

# Tab Key

`tabKey` is an attribute for setting the tab to be activated. `<headwind-tab-button>` and `[headwindTabContent]` to be activated must have the same `tabKey`.

`<headwind-tab-group>` can set the currently active tab using the `tabKey` property and emits the changed value using the `tabKeyChange` emitter.

```typescript
import {Component} from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-tab-group-tab-key-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: `
    <headwind-tab-group [(tabKey)]="tabKey" class="block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
            class="flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group class="mt-6 block overflow-hidden">
        @for (tab of tabs; track tab.key) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div>
              {{ tab.content }}
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  `,
})
export class TabGroupTabKeyExampleComponent {
  tabKey = 'tab1';

  tabs = [
    {
      key: 'tab1',
      name: 'Tab 1',
      content: 'Content 1',
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      content: 'Content 2',
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      content: 'Content 3',
    },
  ];
}
```

# Tab Group Classes

## Basic Classes

Each component used to implement Tab Group has the same class name as its name. You can set styles using the class name as a selector in a style file.

```typescript
import {Component} from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-tab-group-classes-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: `
    <headwind-tab-group [(tabKey)]="tabKey">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group>
        @for (tab of tabs; track tab.key) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div>
              {{ tab.content }}
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-tab-group {
          @apply block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl;
        }

        .headwind-tab-button {
          @apply flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold;
        }

        .headwind-tab-content-group {
          @apply mt-6 block overflow-hidden;
        }
      }
    `,
  ],
})
export class TabGroupClassesExampleComponent {
  tabKey = 'tab1';

  tabs = [
    {
      key: 'tab1',
      name: 'Tab 1',
      content: 'Content 1',
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      content: 'Content 2',
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      content: 'Content 3',
    },
  ];
}
```

## Selected Class

When an tab is activated, the `<headwind-tab-button>` component has the class `.headwind-selected`.

```typescript
import {Component} from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-tab-group-selected-class-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: `
    <headwind-tab-group [(tabKey)]="tabKey">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button [tabKey]="tab.key">
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group>
        @for (tab of tabs; track tab.key) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div>
              {{ tab.content }}
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  `,
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-tab-group {
          @apply block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl;
        }

        .headwind-tab-button {
          @apply flex flex-[1_0_auto] select-none items-center justify-center border-b-2 border-b-transparent px-3 text-center text-sm font-semibold text-zinc-400;

          &.headwind-selected {
            @apply border-b-rose-500 text-rose-500;
          }
        }

        .headwind-tab-content-group {
          @apply mt-6 block overflow-hidden;
        }
      }
    `,
  ],
})
export class TabGroupSelectedClassExampleComponent {
  tabKey = 'tab1';

  tabs = [
    {
      key: 'tab1',
      name: 'Tab 1',
      content: 'Content 1',
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      content: 'Content 2',
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      content: 'Content 3',
    },
  ];
}
```

# Animation

Implementing animation in a Tab Group can be a bit tricky. In order to implement a slide animation according to tab activation, the leaving and entering elements must be controlled using the `query()` function.

```typescript
import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-tab-group-animation-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: `
    <headwind-tab-group [(tabKey)]="tabKey" class="block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
            class="flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group [@slide]="tabKey" class="relative mt-6 block overflow-hidden">
        @for (tab of tabs; track tab.key) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div>
              {{ tab.content }}
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  `,
  animations: [
    trigger('slide', [
      transition('tab1 => tab2, tab2 => tab3, tab1 => tab3', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(-100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
      transition('tab3 => tab2, tab2 => tab1, tab3 => tab1', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(-100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
    ]),
  ],
})
export class TabGroupAnimationExampleComponent {
  tabKey = 'tab1';

  tabs = [
    {
      key: 'tab1',
      name: 'Tab 1',
      content: 'Content 1',
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      content: 'Content 2',
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      content: 'Content 3',
    },
  ];
}
```

# Accessibility

## Mouse Interaction

Clicking `<headwind-tab-button>` activates the tab

## Keyboard Interaction

| Comment | Target | Description |
| ---- | ---- | ---- |
| `Space`, `Enter` | `<headwind-tab-button>` | Activates the tab. |

# API

## HeadwindTabGroupComponent

The root component of Tab Group.

### Selector

`<headwind-tab-group>`

### Host Class

`.headwind-tab-group`

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() tabKey: any` | Set the tab key for the activated tab. |

### Outputs

| Name | Description |
| ---- | ---- |
| `@Output() tabKeyChange: EventEmitter<any>` | Emits the tab key for activated tab. |

## HeadwindTabButtonGroupComponent

A group component containing multiple tab buttons.

### Selector

`<headwind-tab-button-group>`

### Host Class

`.headwind-tab-button-group`

## HeadwindTabButtonComponent

Button component that allows tabs to be activated through user interaction.

### Selector

`<headwind-tab-button>`

### Host Class

`.headwind-tab-button`<br/>
`.headwind-selected` when tab activated.

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() tabKey: any` | Set the tab key of the button to activate tab. |

## HeadwindTabContentGroupComponent

A group component containing multiple tab contents.

### Selector

`<headwind-tab-content-group>`

### Host Class

`.headwind-tab-content-group`

## HeadwindTabContentDirective

A directive for the template that wraps the content elements.

### Selector

`[headwindTabContent]`

### Inputs

| Name | Description |
| ---- | ---- |
| `@Input() tabKey: any` | Set the tab key of the tab. |
