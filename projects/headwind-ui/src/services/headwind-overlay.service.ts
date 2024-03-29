import { ApplicationRef, EmbeddedViewRef, Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { HeadwindOverlayOutletComponent } from '../components/headwind-overlay-outlet/headwind-overlay-outlet.component';

@Injectable({
  providedIn: 'root',
})
export class HeadwindOverlayService {
  private _openedViewRefs: EmbeddedViewRef<any>[] = [];

  /**
   * By default, opening an overlay will create viewContainerRef to render overlay.
   * Once viewContainerRef is created, that is cached to this property to prevent creating multiple viewContainerRefs.
   */
  private _cachedViewContainerRef?: ViewContainerRef;

  constructor(private readonly _applicationRef: ApplicationRef) {}

  get viewContainerRef(): ViewContainerRef {
    if (!this._cachedViewContainerRef) {
      const rootViewContainerRef = this._applicationRef.components[0].injector.get(ViewContainerRef);
      const overlayOutletRef = rootViewContainerRef.createComponent(HeadwindOverlayOutletComponent);

      overlayOutletRef.changeDetectorRef.detectChanges();

      this._cachedViewContainerRef = overlayOutletRef.instance.viewContainerRef;
    }

    return this._cachedViewContainerRef;
  }

  /**
   * Open a template as overlay
   * @param templateRef - TemplateRef to open as an overlay
   * @param onDestroy - Callback to call when destroying EmbeddedViewRef
   */
  open<C = any>(templateRef: TemplateRef<C>, onDestroy?: () => void): EmbeddedViewRef<C> {
    const embeddedViewRef = this.viewContainerRef.createEmbeddedView(templateRef);

    this._openedViewRefs.push(embeddedViewRef);

    embeddedViewRef.onDestroy(() => {
      this._openedViewRefs = this._openedViewRefs.filter((_openedViewRef) => _openedViewRef !== embeddedViewRef);

      if (onDestroy) {
        onDestroy();
      }
    });

    return embeddedViewRef;
  }

  closeLatest(): void {
    const latestViewRef = this._openedViewRefs[this._openedViewRefs.length - 1]; // item is removed from the `onDestroy()` method

    latestViewRef?.destroy();
  }
}
