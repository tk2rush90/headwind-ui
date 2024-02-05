import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { DocHeadingNavigatorComponent } from '../../doc-heading-navigator/doc-heading-navigator.component';
import { DocumentationService } from '../../../../services/documentation.service';

@Component({
  selector: 'app-doc-getting-started-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MarkdownComponent, DocHeadingNavigatorComponent],
  templateUrl: './doc-getting-started-page.component.html',
  styleUrl: './doc-getting-started-page.component.scss',
  host: {
    class: 'doc-page',
  },
})
export class DocGettingStartedPageComponent {
  constructor(private readonly _documentationService: DocumentationService) {
    this._documentationService.headingNavigations = [
      {
        label: 'Getting Started',
        fragment: 'getting-started',
      },
    ];
  }

  section1_1 = section1_1;
}

const section1_1 = `# Getting Started

Headwind UI is a styleless Angular components library.<br/>
Designed to integrate with Tailwind CSS.

To get started, install Headwind UI via npm.

\`\`\`shell
npm install @favian/headwind-ui
\`\`\`

Some components of Headwind UI have a \`tabindex\` attribute for accessibility.<br/>
Set outline to \`0\` to disable the Browser's default focus effect.

\`\`\`scss
@layer components {
  [class*="headwind-"] {
    @apply outline-0;
  }
}
\`\`\``;
