import { Component } from '@angular/core';
import { HeadwindTabGroupComponent } from '../../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-group.component';
import { HeadwindTabButtonGroupComponent } from '../../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-button-group/headwind-tab-button-group.component';
import { HeadwindTabButtonComponent } from '../../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-button-group/headwind-tab-button/headwind-tab-button.component';
import { HeadwindTabContentGroupComponent } from '../../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-content-group/headwind-tab-content-group.component';
import { HeadwindTabContentDirective } from '../../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-content-group/headwind-tab-content/headwind-tab-content.directive';

@Component({
  selector: 'app-default-tab-group-page',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  templateUrl: './default-tab-group-page.component.html',
  styleUrl: './default-tab-group-page.component.scss',
})
export class DefaultTabGroupPageComponent {
  tabKey = 'Tory Day';

  users = [
    {
      name: 'Tory Day',
      avatarUrl: 'https://picsum.photos/id/174/64',
      job: 'Designer',
      biography:
        'I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others.',
    },
    {
      name: 'Ishaan Martinez',
      avatarUrl: 'https://picsum.photos/id/213/64',
      job: 'Full-Stack Developer',
      biography:
        'From the day I was born, I was a coding prodigy who screamed "console.log(\'Waah~ Waah~\')". At the age of 3, I mastered JavaScript and TypeScript, and by the time I turned 7, I had evolved into a flawless full-stack developer.',
    },
    {
      name: 'Alvin Bailey',
      avatarUrl: 'https://picsum.photos/id/322/64',
      job: 'Lawyer',
      biography: 'I am an ordinary lawyer.',
    },
  ];
}
