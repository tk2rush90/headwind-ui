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
