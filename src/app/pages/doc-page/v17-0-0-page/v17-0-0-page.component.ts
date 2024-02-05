import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentationService } from '../../../services/documentation.service';

@Component({
  selector: 'app-v17-0-0-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './v17-0-0-page.component.html',
  styleUrl: './v17-0-0-page.component.scss',
})
export class V1700PageComponent {
  constructor(private readonly _documentationService: DocumentationService) {
    this._documentationService.version = 'v17.0.0';
  }
}
