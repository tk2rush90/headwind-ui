import { Component } from '@angular/core';
import { DocumentationService } from '../../../../services/documentation.service';
import { MarkdownComponent } from 'ngx-markdown';
import { BasicPopoverExampleComponent } from './basic-popover-example/basic-popover-example.component';
import { PopoverDirectionExampleComponent } from './popover-direction-example/popover-direction-example.component';
import { PopoverDirectionPriorityExampleComponent } from './popover-direction-priority-example/popover-direction-priority-example.component';
import { PopoverPinPriorityExampleComponent } from './popover-pin-priority-example/popover-pin-priority-example.component';
import { PopoverActualChangeExampleComponent } from './popover-actual-change-example/popover-actual-change-example.component';
import { PopoverMethodsExampleComponent } from './popover-methods-example/popover-methods-example.component';
import { PopoverAnimationExampleComponent } from './popover-animation-example/popover-animation-example.component';
import { PopoverClassesExampleComponent } from './popover-classes-example/popover-classes-example.component';

@Component({
  selector: 'app-doc-popover-page',
  standalone: true,
  imports: [
    MarkdownComponent,
    BasicPopoverExampleComponent,
    PopoverDirectionExampleComponent,
    PopoverDirectionPriorityExampleComponent,
    PopoverPinPriorityExampleComponent,
    PopoverActualChangeExampleComponent,
    PopoverMethodsExampleComponent,
    PopoverAnimationExampleComponent,
    PopoverClassesExampleComponent,
  ],
  templateUrl: './doc-popover-page.component.html',
  styleUrl: './doc-popover-page.component.scss',
  host: {
    class: 'doc-page',
  },
})
export class DocPopoverPageComponent {
  constructor(private readonly _documentationService: DocumentationService) {
    this._documentationService.headingNavigations = [
      {
        label: 'Popover',
        fragment: 'popover',
      },
      {
        label: 'Popover Classes',
        fragment: 'popover-classes',
      },
      {
        label: 'direction',
        fragment: 'direction',
      },
      {
        label: 'directionPriority',
        fragment: 'directionpriority',
      },
      {
        label: 'pinPriority',
        fragment: 'pinpriority',
      },
      {
        label: 'actualDirectionChange, actualPinChange',
        fragment: 'actualdirectionchange-actualpinchange',
      },
      {
        label: 'open, close',
        fragment: 'open-close',
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
            label: 'HeadwindPopoverComponent',
            fragment: 'headwindpopovercomponent',
          },
          {
            label: 'HeadwindPopoverButtonDirective',
            fragment: 'headwindpopoverbuttondirective',
          },
          {
            label: 'HeadwindPopoverOverlayComponent',
            fragment: 'headwindpopoveroverlaycomponent',
          },
          {
            label: 'HeadwindPopoverOverlayDirective',
            fragment: 'headwindpopoveroverlaydirective',
          },
        ],
      },
    ];
  }

  protected readonly section1_0 = section1_0;
  protected readonly section2_0 = section2_0;
  protected readonly section1_1 = section1_1;
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
  protected readonly section1_2 = section1_2;
  protected readonly section1_3 = section1_3;
  protected readonly section9_0 = section9_0;
}

const section1_0 = `# Popover

A small information box that appears when you click or hover over an element and is used to provide additional content or interact with the user.`;

const section1_1 = `\`\`\`typescript
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
  template: \`
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
export class BasicPopoverExampleComponent {
  user = {
    name: 'Tori Day',
    avatarUrl: 'https://picsum.photos/id/174/64',
    job: 'Designer',
    biography:
      'I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others.',
  };
}
\`\`\``;

const section1_2 = `# Popover Classes

Each component used to implement Popover has the same class name as its name. You can set styles using the class name as a selector in a style file.`;

const section1_3 = `\`\`\`typescript
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
  template: \`
    <headwind-popover>
      <button headwindPopoverButton>Open</button>

      <ng-template headwindPopoverOverlay>
        <headwind-popover-overlay> Popover Overlay </headwind-popover-overlay>
      </ng-template>
    </headwind-popover>
  \`,
  styles: [
    \`
      @tailwind components;

      @layer components {
        .headwind-popover-button {
          @apply h-10 rounded-md bg-rose-500 px-3 text-sm text-white;
        }

        .headwind-popover-overlay {
          @apply block w-full max-w-[250px] space-y-4 rounded-xl bg-white p-4 text-sm shadow-2xl;
        }
      }
    \`,
  ],
})
export class PopoverClassesExampleComponent {}
\`\`\``;

const section2_0 = `# Direction

\`<headwind-popover-overlay>\` can specify the display direction using the \`direction\` attribute. You can specify 'vertical' or 'horizontal', the default is \`vertical\`.

When \`vertical\`, the popover overlay is displayed above or below \`[headwindPopoverButton]\`, and when \`horizontal\`, it is displayed on the left or right.`;

const section2_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class PopoverDirectionExampleComponent {}
\`\`\``;

const section3_0 = `# directionPriority

\`<headwind-popover-overlay>\` sets the display direction priority using the \`directionPriority\` attribute. When \`direction\` is \`vertical\`, you can set \`top\` or \`bottom\`, and when \`direction\` is \`horizontal\`, you can set \`left\` or \`right\`.

If \`directionPriority\` is set, the popover overlay will display in the set direction whenever possible. If there is not enough space in that direction, it will be displayed in the opposite direction.

When \`direction\` is \`vertical\`, the default value is \`bottom\`, and when \`horizontal\`, the default value is \`right\`.`;

const section3_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class PopoverDirectionPriorityExampleComponent {}
\`\`\``;

const section4_0 = `# pinPriority

Popover overlays are pinned in one direction. You can also set the priority in the pin direction using the \`pinPriority\` attribute. If \`direction\` is \`vertical\`, pin priority can be set to \`left\` or \`right\`, and if \`horizontal\`, pin priority can be set to \`top\` or \`bottom\`.

If \`pinPriority\` is set, the popover overlay will be pinned to the configured side whenever possible. If there is not enough space to pin on that side, it will be pinned on the other side.

If \`direction\` is \`vertical\`, the default is \`left\`, if \`horizontal\`, the default is \`top\`.`;

const section4_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class PopoverPinPriorityExampleComponent {}
\`\`\``;

const section5_0 = `# actualDirectionChange, actualPinChange

Popover overlay uses \`RequestAnimationFrame\` to dynamically change its position depending on its position on the screen. And the actual rendered direction and pin are emitted through the \`actualDirectionChange\` emitter and \`actualPinChange\` emitter.`;

const section5_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class PopoverActualChangeExampleComponent {
  actualDirection: XYDirections = 'bottom';
  actualPin: XYDirections = 'left';
}
\`\`\``;

const section6_0 = `# open, close

\`<headwind-popover>\` has \`open()\` and \`close()\` methods for opening and closing the popover overlay.`;

const section6_1 = `\`\`\`typescript
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
  template: \`
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
  \`,
})
export class PopoverMethodsExampleComponent {}
\`\`\``;

const section7_0 = `# Animation

Bind an animation trigger to \`<headwind-popover-overlay>\` to play animation when popover overlay is displayed or hidden.`;

const section7_1 = `\`\`\`typescript
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
  template: \`
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
export class PopoverAnimationExampleComponent {}
\`\`\``;

const section8_0 = `# Accessibility

## Mouse Interaction

Clicking on the \`[headwindPopoverButton]\` element opens popover overlay.<br/>
Clicking outside of \`<headwind-popover-overlay>\` closes the popover overlay.
## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| \`Escape\` | \`window\` | Close the popover overlay when it is opened. |`;

const section9_0 = `# API

## HeadwindPopoverComponent

Popover's container component. All components or directives related to Popover must be inside this component.

### Selector

\`<headwind-popover>\`

### Host Class

\`.headwind-popover\`
### Methods
| Name | Description |
| ---- | ---- |
| \`open()\` | Open the popover overlay. If it is already opened, it is ignored. |
| \`close()\` | Closes the popover overlay. If it is already closed, it is ignored. |
## HeadwindPopoverButtonDirective

A directive to bind to the button that will be used to open the Popover overlay.

### Selector

\`[headwindPopoverButton]\`

### Host Class

\`.headwind-popover-button\`
## HeadwindPopoverOverlayComponent

This is a component to be used as an overlay.

### Selector

\`<headwind-popover-overlay>\`

### Host Class

\`.headwind-popover-overlay\`

### Inputs

| Name | Description |
| ---- | ---- |
| \`@Input() direction: LinearDirection\` | Set the direction in which the Popover overlay will be displayed. When \`vertical\`, it is displayed as the top or bottom of the button, and when \`horizontal\`, it is displayed to the left or right of the button. The default is \`vertical\`.. |
| \`@Input() directionPriority: XYdirection\` | Set the priority of the direction in which the Popover overlay will be displayed. When \`direction\` is \`vertical\`, you can set \`top\` or \`bottom\`, and when \`direction\` is \`horizontal\`, you can set \`left\` or \`right\`. When \`direction\` is \`vertical\`, the default value is \`bottom\`, and when \`horizontal\`, the default value is \`right\`. |
| \`@Input() pinPriority: XYDirection\` | Set the priority of the side on which the popover overlay is pinned. If \`direction\` is \`vertical\`, pin priority can be set to \`left\` or \`right\`, and if \`horizontal\`, pin priority can be set to \`top\` or \`bottom\`. If \`direction\` is \`vertical\`, the default is \`left\`, if \`horizontal\`, the default is \`top\`. |

### Outputs
| Name | Description |
| ---- | ---- |
| \`@Output() actualDirectionChange: EventEmitter<XYDirection>\` | The direction in which the actual popover overlay is rendered is emitted every \`RequestAnimationFrame\`. |
| \`@Output() actualPinChange: EventEmitter<XYDirection>\` | The pin side where the actual popover overlay is rendered is emitted every \`RequestAnimationFrame\`. |
## HeadwindPopoverOverlayDirective

A directive for the template that wraps \`<headwind-popover-overlay>\`.
### Selector

\`ng-template[headwindPopoverOverlay]\``;
