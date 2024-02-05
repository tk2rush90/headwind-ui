import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink } from '@angular/router';
import { LogoIconComponent } from '../logo-icon/logo-icon.component';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [LogoComponent, RouterLink, LogoIconComponent],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {}
