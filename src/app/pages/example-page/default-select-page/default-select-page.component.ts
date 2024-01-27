import { Component } from '@angular/core';
import { HeadwindOptionComponent } from '../../../../../projects/headwind-ui/src/components/headwind-select/headwind-options-template/headwind-options/headwind-option/headwind-option.component';
import { HeadwindOptionsComponent } from '../../../../../projects/headwind-ui/src/components/headwind-select/headwind-options-template/headwind-options/headwind-options.component';
import { HeadwindSelectComponent } from '../../../../../projects/headwind-ui/src/components/headwind-select/headwind-select.component';
import { HeadwindOptionsTemplateDirective } from '../../../../../projects/headwind-ui/src/components/headwind-select/headwind-options-template/headwind-options-template.directive';

@Component({
  selector: 'app-default-select-page',
  standalone: true,
  imports: [
    HeadwindSelectComponent,
    HeadwindOptionsComponent,
    HeadwindOptionsTemplateDirective,
    HeadwindOptionComponent,
  ],
  templateUrl: './default-select-page.component.html',
  styleUrl: './default-select-page.component.scss',
})
export class DefaultSelectPageComponent {
  value = 'Tori Day';

  options = [
    'Tori Day',
    'Ishaan Martinez',
    'Alvin Bailey',
    'Opal Morton',
    'Evelynn Hobbs',
    'Leila Pacheco',
    'Fatima Shaw',
    'Alexandria Huynh',
  ];
}
