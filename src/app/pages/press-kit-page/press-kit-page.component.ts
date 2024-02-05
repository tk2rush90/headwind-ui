import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../common/page-header/page-header.component';
import { IconPreviewComponent } from './icon-preview/icon-preview.component';
import { FooterComponent } from '../../common/footer/footer.component';

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
export class PressKitPageComponent {}
