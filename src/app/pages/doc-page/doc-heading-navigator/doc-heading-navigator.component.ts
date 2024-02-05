import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

export interface DocHeadingNavigationItem {
  label: string;
  fragment: string;
  children?: DocHeadingNavigationItem[];
}

@Component({
  selector: 'app-doc-heading-navigator',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './doc-heading-navigator.component.html',
  styleUrl: './doc-heading-navigator.component.scss',
  host: {
    class: 'space-y-4 py-8',
  },
})
export class DocHeadingNavigatorComponent {
  @Input() navigations: DocHeadingNavigationItem[] = [];
}
