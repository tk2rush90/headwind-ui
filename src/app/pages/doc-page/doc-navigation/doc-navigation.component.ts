import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-doc-navigation',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './doc-navigation.component.html',
  styleUrl: './doc-navigation.component.scss',
})
export class DocNavigationComponent {
  @Output() navigationClick = new EventEmitter<void>();
}
