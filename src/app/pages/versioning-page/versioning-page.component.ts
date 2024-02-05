import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../common/page-header/page-header.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-versioning-page',
  standalone: true,
  imports: [PageHeaderComponent, FooterComponent],
  templateUrl: './versioning-page.component.html',
  styleUrl: './versioning-page.component.scss',
  host: {
    class: 'flex flex-col items-stretch min-h-screen',
  },
})
export class VersioningPageComponent {}
