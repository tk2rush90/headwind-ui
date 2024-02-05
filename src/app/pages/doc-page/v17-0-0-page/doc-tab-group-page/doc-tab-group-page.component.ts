import { Component } from '@angular/core';
import { DocumentationService } from '../../../../services/documentation.service';
import { BasicTabGroupExampleComponent } from './basic-tab-group-example/basic-tab-group-example.component';
import { MarkdownComponent } from 'ngx-markdown';
import { TabGroupTabKeyExampleComponent } from './tab-group-tab-key-example/tab-group-tab-key-example.component';
import { TabGroupClassesExampleComponent } from './tab-group-classes-example/tab-group-classes-example.component';
import { TabGroupSelectedClassExampleComponent } from './tab-group-selected-class-example/tab-group-selected-class-example.component';
import { TabGroupAnimationExampleComponent } from './tab-group-animation-example/tab-group-animation-example.component';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-doc-tab-group-page',
  standalone: true,
  imports: [
    BasicTabGroupExampleComponent,
    MarkdownComponent,
    TabGroupTabKeyExampleComponent,
    TabGroupClassesExampleComponent,
    TabGroupSelectedClassExampleComponent,
    TabGroupAnimationExampleComponent,
  ],
  templateUrl: './doc-tab-group-page.component.html',
  styleUrl: './doc-tab-group-page.component.scss',
})
export class DocTabGroupPageComponent {
  constructor(
    private readonly _seoService: SeoService,
    private readonly _documentationService: DocumentationService,
  ) {
    this._seoService.update({
      title: 'Headwind UI - Tab Group',
      description:
        'A component that consists of several tab buttons and content, and allows tabs to be activated according to the tab key.',
      keywords: ['Angular', 'Tailwind', 'Tab Group'],
      url: 'https://ng-headwind-ui.github.io/doc/v17.0.0/tab-group',
    });

    this._documentationService.headingNavigations = [
      {
        label: 'Tab Group',
        fragment: 'tab-group',
      },
      {
        label: 'Tab Key',
        fragment: 'tab-key',
      },
      {
        label: 'Tab Group Classes',
        fragment: 'tab-group-classes',
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
            label: 'HeadwindTabGroupComponent',
            fragment: 'headwindtabgroupcomponent',
          },
          {
            label: 'HeadwindTabButtonGroupComponent',
            fragment: 'headwindtabbuttongroupcomponent',
          },
          {
            label: 'HeadwindTabButtonComponent',
            fragment: 'headwindtabbuttoncomponent',
          },
          {
            label: 'HeadwindTabContentGroupComponent',
            fragment: 'headwindtabcontentgroupcomponent',
          },
          {
            label: 'HeadwindTabContentDirective',
            fragment: 'headwindtabcontentdirective',
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
  protected readonly section3_2 = section3_2;
  protected readonly section3_3 = section3_3;
  protected readonly section4_0 = section4_0;
  protected readonly section4_1 = section4_1;
  protected readonly section5_0 = section5_0;
  protected readonly section6_0 = section6_0;
}

const section1_0 = `# Tab Group

A component that consists of several tab buttons and content, and allows tabs to be activated according to the tab key.`;

const section1_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
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
        'From the day I was born, I was a coding prodigy who screamed "console.log(\\'Waah~ Waah~\\')". At the age of 3, I mastered JavaScript and TypeScript, and by the time I turned 7, I had evolved into a flawless full-stack developer.',
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
\`\`\``;

const section2_0 = `# Tab Key

\`tabKey\` is an attribute for setting the tab to be activated. \`<headwind-tab-button>\` and \`[headwindTabContent]\` to be activated must have the same \`tabKey\`.

\`<headwind-tab-group>\` can set the currently active tab using the \`tabKey\` property and emits the changed value using the \`tabKeyChange\` emitter.`;

const section2_1 = `\`\`\`typescript
import { Component } from '@angular/core';
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
  template: \`
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
  \`,
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
\`\`\``;

const section3_0 = `# Tab Group Classes

## Basic Classes

Each component used to implement Tab Group has the same class name as its name. You can set styles using the class name as a selector in a style file.`;

const section3_1 = `\`\`\`typescript
import { Component } from '@angular/core';
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
  template: \`
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
  \`,
  styles: [
    \`
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
    \`,
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
\`\`\``;

const section3_2 = `## Selected Class

When an tab is activated, the \`<headwind-tab-button>\` component has the class \`.headwind-selected\`.`;

const section3_3 = `\`\`\`typescript
import { Component } from '@angular/core';
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
  template: \`
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
  \`,
  styles: [
    \`
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
    \`,
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
\`\`\``;

const section4_0 = `# Animation

Implementing animation in a Tab Group can be a bit tricky. In order to implement a slide animation according to tab activation, the leaving and entering elements must be controlled using the \`query()\` function.`;

const section4_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
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
\`\`\``;

const section5_0 = `# Accessibility

## Mouse Interaction

Clicking \`<headwind-tab-button>\` activates the tab
## Keyboard Interaction

| Comment | Target | Description |
| ---- | ---- | ---- |
| \`Space\`, \`Enter\` | \`<headwind-tab-button>\` | Activates the tab. |
`;

const section6_0 = `# API

## HeadwindTabGroupComponent

The root component of Tab Group.

### Selector

\`<headwind-tab-group>\`

### Host Class

\`.headwind-tab-group\`

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() tabKey: any\` | Set the tab key for the activated tab. |

### Outputs

| Name | Description |
| ---- | ---- |
| \`@Output() tabKeyChange: EventEmitter<any>\` | Emits the tab key for activated tab. |
## HeadwindTabButtonGroupComponent

A group component containing multiple tab buttons.
### Selector

\`<headwind-tab-button-group>\`

### Host Class

\`.headwind-tab-button-group\`
## HeadwindTabButtonComponent

Button component that allows tabs to be activated through user interaction.
### Selector

\`<headwind-tab-button>\`

### Host Class

\`.headwind-tab-button\`<br/>
\`.headwind-selected\` when tab activated.

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() tabKey: any\` | Set the tab key of the button to activate tab. |
## HeadwindTabContentGroupComponent

A group component containing multiple tab contents.
### Selector

\`<headwind-tab-content-group>\`

### Host Class

\`.headwind-tab-content-group\`

## HeadwindTabContentDirective

A directive for the template that wraps the content elements.
### Selector

\`[headwindTabContent]\`
### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() tabKey: any\` | Set the tab key of the tab. |
`;
