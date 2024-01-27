import { Component } from '@angular/core';
import { HeadwindOptionComponent } from '../../../../../projects/headwind-ui/src/components/headwind-select/headwind-options-template/headwind-options/headwind-option/headwind-option.component';
import { HeadwindOptionsComponent } from '../../../../../projects/headwind-ui/src/components/headwind-select/headwind-options-template/headwind-options/headwind-options.component';
import { HeadwindSelectComponent } from '../../../../../projects/headwind-ui/src/components/headwind-select/headwind-select.component';
import { HeadwindOptionsTemplateDirective } from '../../../../../projects/headwind-ui/src/components/headwind-select/headwind-options-template/headwind-options-template.directive';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { YDirections } from '../../../../../projects/headwind-ui/src/types/y-directions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-default-select-page',
  standalone: true,
  imports: [
    HeadwindSelectComponent,
    HeadwindOptionsComponent,
    HeadwindOptionsTemplateDirective,
    HeadwindOptionComponent,
    FormsModule,
  ],
  templateUrl: './default-select-page.component.html',
  styleUrl: './default-select-page.component.scss',
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            opacity: 1,
          }),
        ),
      ),
      transition('* => void', animate('.1s')),
    ]),
  ],
})
export class DefaultSelectPageComponent {
  value = '';

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

  actualDirection: YDirections = 'bottom';

  onActualDirectionChange(direction: YDirections): void {
    this.actualDirection = direction;
  }
}
