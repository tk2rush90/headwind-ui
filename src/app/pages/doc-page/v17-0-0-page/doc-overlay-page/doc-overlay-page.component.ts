import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { BasicOverlayExampleComponent } from './basic-overlay-example/basic-overlay-example.component';
import { DocumentationService } from '../../../../services/documentation.service';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-doc-overlay-page',
  standalone: true,
  imports: [MarkdownComponent, BasicOverlayExampleComponent],
  templateUrl: './doc-overlay-page.component.html',
  styleUrl: './doc-overlay-page.component.scss',
  host: {
    class: 'doc-page',
  },
})
export class DocOverlayPageComponent {
  constructor(
    private readonly _seoService: SeoService,
    private readonly _documentationService: DocumentationService,
  ) {
    this._seoService.update({
      title: 'Headwind UI - Overlay',
      description:
        'Creates a transparent layer that appears layered on top of other elements. It can be used when implementing screens such as modals, pop-ups, dialog boxes, tooltips, etc.',
      keywords: ['Angular', 'Tailwind', 'Overlay'],
      url: 'https://ng-headwind-ui.github.io/doc/v17/overlay',
    });

    this._documentationService.headingNavigations = [
      {
        label: 'Overlay',
        fragment: 'overlay',
      },
      {
        label: 'HeadwindOverlayOutlet',
        fragment: 'headwindoverlayoutlet',
      },
      {
        label: 'Accessibility',
        fragment: 'accessibility',
        children: [
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
            label: 'HeadwindOverlayService',
            fragment: 'headwindoverlayservice',
          },
        ],
      },
    ];
  }

  protected readonly section1_0 = section1_0;
  protected readonly section1_1 = section1_1;
  protected readonly section2_0 = section2_0;
  protected readonly section3_0 = section3_0;
  protected readonly section4_0 = section4_0;
}

const section1_0 = `# Overlay

Creates a transparent layer that appears layered on top of other elements. It can be used when implementing screens such as modals, pop-ups, dialog boxes, tooltips, etc.

To create an overlay, \`HeadwindOverlayService\` and [TemplateRef](https://angular.io/api/core/TemplateRef) are required. Pass a TemplateRef to use as an overlay to the \`open()\` method. The \`open()\` method returns \`EmbeddedViewRef\`.

To close the overlay, use the \`destroy()\` method of \`EmbeddedViewRef\`.`;

const section1_1 = `\`\`\`typescript
import { Component, EmbeddedViewRef, OnDestroy, TemplateRef } from '@angular/core';
import { HeadwindOverlayService } from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-overlay-example',
  standalone: true,
  imports: [],
  template: \`
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
  \`,
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
\`\`\``;

const section2_0 = `# HeadwindOverlayOutlet

When an overlay is created, \`<headwind-overlay-outlet>\` is created dynamically. \`<headwind-overlay-outlet>\` is a fixed component that covers the entire screen, and user interaction is not possible because \`pointer-events: none\` is set.

Child elements of \`<headwind-overlay-outlet>\` are set to \`pointer-events: auto\` so all interactions are possible.`;

const section3_0 = `# Accessibility
## Keyboard Interaction

| Command | Target | Description |
| ---- | ---- | ---- |
| \`Escape\` | \`window\` | Close the latest overlay. |`;

const section4_0 = `# API

## HeadwindOverlayService

### Methods
| Name | Description |
| ---- | ---- |
| \`open<C = any>(templateRef: TemplateRef<C>, onDestroy?: () => void): EmbeddedViewRef<C>\` | Open a template as overlay. Can pass \`onDestroy\` callback function to call when destroying \`EmbeddedViewRef\` |
| \`closeLatest()\` | Close the latest overlay. |`;
