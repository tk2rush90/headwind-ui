import { Component, Input } from '@angular/core';
import { CheckboxPreviewComponent } from '../checkbox-preview/checkbox-preview.component';

@Component({
  selector: 'app-preview-item',
  standalone: true,
  imports: [CheckboxPreviewComponent],
  templateUrl: './preview-item.component.html',
  styleUrl: './preview-item.component.scss',
  host: {
    class: 'block space-y-2',
  },
})
export class PreviewItemComponent {
  @Input({ required: true }) name!: string;
}
