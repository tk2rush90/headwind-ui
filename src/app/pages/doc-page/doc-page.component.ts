import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LogoComponent } from '../../common/logo/logo.component';

@Component({
  selector: 'app-doc-page',
  standalone: true,
  imports: [RouterOutlet, LogoComponent, RouterLink],
  templateUrl: './doc-page.component.html',
  styleUrl: './doc-page.component.scss',
})
export class DocPageComponent {}
