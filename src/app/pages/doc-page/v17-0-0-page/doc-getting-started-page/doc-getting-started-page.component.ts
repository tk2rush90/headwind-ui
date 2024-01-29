import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-doc-getting-started-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './doc-getting-started-page.component.html',
  styleUrl: './doc-getting-started-page.component.scss',
})
export class DocGettingStartedPageComponent {}
