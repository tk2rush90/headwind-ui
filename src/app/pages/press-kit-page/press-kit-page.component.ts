import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../common/page-header/page-header.component';
import { IconPreviewComponent } from './icon-preview/icon-preview.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-press-kit-page',
  standalone: true,
  imports: [PageHeaderComponent, IconPreviewComponent, FooterComponent],
  templateUrl: './press-kit-page.component.html',
  styleUrl: './press-kit-page.component.scss',
  host: {
    class: 'flex flex-col items-stretch min-h-screen',
  },
})
export class PressKitPageComponent {
  constructor(private readonly _seoService: SeoService) {
    this._seoService.update({
      title: 'Headwind UI - Press Kit',
      description: 'Headwind UI Press Kit',
      keywords: ['Angular', 'Tailwind'],
      url: 'https://ng-headwind-ui.github.io/press-kit',
    });
  }
}
