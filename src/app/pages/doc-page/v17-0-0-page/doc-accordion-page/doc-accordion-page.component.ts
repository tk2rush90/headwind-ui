import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { DocHeadingNavigatorComponent } from '../../doc-heading-navigator/doc-heading-navigator.component';
import { BasicAccordionExampleComponent } from './basic-accordion-example/basic-accordion-example.component';
import { AccordionClassesExampleComponent } from './accordion-classes-example/accordion-classes-example.component';
import { AccordionOpenedClassExampleComponent } from './accordion-opened-class-example/accordion-opened-class-example.component';
import { AccordionOpenedStateExampleComponent } from './accordion-opened-state-example/accordion-opened-state-example.component';
import { DocumentationService } from '../../../../services/documentation.service';
import { AccordionMethodsExampleComponent } from './accordion-methods-example/accordion-methods-example.component';
import { AccordionAnimationExampleComponent } from './accordion-animation-example/accordion-animation-example.component';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-doc-accordion-page',
  standalone: true,
  imports: [
    MarkdownComponent,
    DocHeadingNavigatorComponent,
    BasicAccordionExampleComponent,
    AccordionClassesExampleComponent,
    AccordionOpenedClassExampleComponent,
    AccordionOpenedStateExampleComponent,
    AccordionMethodsExampleComponent,
    AccordionAnimationExampleComponent,
  ],
  templateUrl: './doc-accordion-page.component.html',
  styleUrl: './doc-accordion-page.component.scss',
  host: {
    class: 'doc-page',
  },
})
export class DocAccordionPageComponent {
  constructor(
    private readonly _seoService: SeoService,
    private readonly _documentationService: DocumentationService,
  ) {
    this._seoService.update({
      title: 'Headwind UI - Accordion',
      description: 'This is a component that can hide or show content using a button.',
      keywords: ['Angular', 'Tailwind', 'Accordion'],
      url: 'https://ng-headwind-ui.github.io/doc/v17/accordion',
    });

    this._documentationService.headingNavigations = [
      {
        label: 'Accordion',
        fragment: 'accordion',
      },
      {
        label: 'Accordion Classes',
        fragment: 'accordion-classes',
        children: [
          {
            label: 'Basic Classes',
            fragment: 'basic-classes',
          },
          {
            label: 'Opened Class',
            fragment: 'opened-class',
          },
        ],
      },
      {
        label: 'Opened State',
        fragment: 'opened-state',
      },
      {
        label: 'toggle, open, close',
        fragment: 'toggle-open-close',
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
            label: 'HeadwindAccordionComponent',
            fragment: 'headwindaccordioncomponent',
          },
          {
            label: 'HeadwindAccordionButtonComponent',
            fragment: 'headwindaccordionbuttoncomponent',
          },
          {
            label: 'HeadwindAccordionContentDirective',
            fragment: 'headwindaccordioncontentdirective',
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
  protected readonly section6_0 = section6_0;
  protected readonly section5_0 = section5_0;
  protected readonly section5_1 = section5_1;
  protected readonly section7_0 = section7_0;
}

const section1_0 = `# Accordion

This is a component that can hide or show content using a button.`;

const section1_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
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
        'From the day I was born, I was a coding prodigy who screamed "console.log(\\'Waah~ Waah~\\')". At the age of 3, I mastered JavaScript and TypeScript, and by the time I turned 7, I had evolved into a flawless full-stack developer.',
    },
    {
      name: 'Alvin Bailey',
      avatarUrl: 'https://picsum.photos/id/322/64',
      job: 'Lawyer',
      biography: 'I am an ordinary lawyer.',
    },
  ];
}
\`\`\``;

const section2_0 = `# Accordion Classes

## Basic Classes

Each component used to implement Accordion has the same class name as its name. You can set styles using the class name as a selector in a style file.`;

const section2_1 = `\`\`\`typescript
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
  template: \`
    <headwind-accordion>
      <headwind-accordion-button> Button </headwind-accordion-button>

      <ng-template headwindAccordionContent>
        <div class="mt-3">Content</div>
      </ng-template>
    </headwind-accordion>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-accordion {
          @apply block w-full max-w-[400px] rounded-2xl bg-white p-8 shadow;
        }

        .headwind-accordion-button {
          @apply flex items-center justify-between rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400;
        }
      }
    \`,
  ],
})
export class AccordionClassesExampleComponent {}
\`\`\``;

const section2_2 = `## Opened Class

When an Accordion is open, the \`<headwind-accordion>\` component has the class \`.headwind-opened\`.`;

const section2_3 = `\`\`\`typescript
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
  template: \`
    <headwind-accordion>
      <headwind-accordion-button> Button</headwind-accordion-button>

      <ng-template headwindAccordionContent>
        <div class="mt-3">Content</div>
      </ng-template>
    </headwind-accordion>
  \`,
  styles: [
    \`
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
    \`,
  ],
})
export class AccordionOpenedClassExampleComponent {}
\`\`\``;

const section3_0 = `# Opened State

You can use the \`opened\` attribute to change the display state of the content. When the opened state changes, the changed value is emitted through the \`openedChange\` emitter.`;

const section3_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class AccordionOpenedStateExampleComponent {
  opened = true;
}
\`\`\``;

const section4_0 = `# toggle, open, close

The \`<headwind-accordion>\` component provides the \`toggle()\`, \`open()\`, and \`close()\` methods.
`;

const section4_1 = `\`\`\`typescript
import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-accordion-methods-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: \`
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
  \`,
})
export class AccordionMethodsExampleComponent {}
\`\`\``;

const section5_0 = `# Animation

Bind an animation trigger to the content of \`[headwindAccordionContent]\` to play animation when content is toggled.`;

const section5_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
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
\`\`\``;

const section6_0 = `# Accessibility

## Mouse Interaction

Clicking on the \`<headwind-accordion-button>\` element toggles its contents.
## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| \`Space\`, \`Enter\` | \`<headwind-accordion-button>\` | Toggle the contents. |
`;

const section7_0 = `# API

## HeadwindAccordionComponent

The root component of Accordion.
### Selector

\`<headwind-accordion>\`

### Host Class

\`.headwind-accordion\`<br/>
\`.headwind-opened\` when Accordion opened.

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() set opened(value: boolean)\` | Set the opened state of content. |
### Outputs
| Name | Description |
| ---- | ---- |
| \`@Output() openedChange: EventEmitter<boolean>\` | Emits the changed opened state of content. |

### Methods
| Name | Description |
| ---- | ---- |
| \`toggle()\` | Toggle the opened state of Content. |
| \`open()\` | Open the content. If it is already open, it is ignored. |
| \`close()\` | Close the content. If it is already closed, it is ignored. |

## HeadwindAccordionButtonComponent

A component that can open and close the Accordion content.

### Selector

\`<headwind-accordion-button>\`

### Host Class

\`.headwind-accordion-button\`

## HeadwindAccordionContentDirective

A directive for a template that wraps Accordion content.
### Selector

\`ng-template[headwindAccordionContent]\``;
