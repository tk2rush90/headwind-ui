import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-preview',
  standalone: true,
  imports: [],
  templateUrl: './icon-preview.component.html',
  styleUrl: './icon-preview.component.scss',
  host: {
    class: 'block space-y-2',
  },
})
export class IconPreviewComponent {
  @Input({ required: true }) name = '';
  @Input({ required: true }) src = '';
}
