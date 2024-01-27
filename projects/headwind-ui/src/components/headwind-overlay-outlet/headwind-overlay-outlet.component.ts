import { Component, HostListener, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { HeadwindOverlayService } from '../../services/headwind-overlay.service';

@Component({
  selector: 'headwind-overlay-outlet',
  standalone: true,
  imports: [],
  templateUrl: './headwind-overlay-outlet.component.html',
  styleUrl: './headwind-overlay-outlet.component.scss',
  host: {
    class: 'headwind-overlay-outlet',
  },
  encapsulation: ViewEncapsulation.None,
})
export class HeadwindOverlayOutletComponent {
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  constructor(private readonly _headwindOverlayService: HeadwindOverlayService) {}

  @HostListener('window:keydown.escape')
  onWindowEscapeKeydown(): void {
    if (this._headwindOverlayService.escapeClosing === 'enable') {
      this._headwindOverlayService.closeLatest();
    }
  }
}
