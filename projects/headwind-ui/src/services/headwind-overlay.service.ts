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
   */
  open<C = any>(templateRef: TemplateRef<C>): EmbeddedViewRef<C> {
    const embeddedViewRef = this.viewContainerRef.createEmbeddedView(templateRef);

    this._openedViewRefs.push(embeddedViewRef);

    return embeddedViewRef;
  }

  closeLatest(): void {
    const latestViewRef = this._openedViewRefs.pop();

    latestViewRef?.destroy();
  }
}
