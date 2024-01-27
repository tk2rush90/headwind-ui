import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-documentation-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './documentation-page.component.html',
  styleUrl: './documentation-page.component.scss',
})
export class DocumentationPageComponent {}
