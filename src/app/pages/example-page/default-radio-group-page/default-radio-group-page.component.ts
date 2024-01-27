import { Component } from '@angular/core';
import { HeadwindRadioComponent } from '../../../../../projects/headwind-ui/src/components/headwind-radio-group/headwind-radio/headwind-radio.component';
import { HeadwindRadioGroupComponent } from '../../../../../projects/headwind-ui/src/components/headwind-radio-group/headwind-radio-group.component';
import { HeadwindRadioButtonComponent } from '../../../../../projects/headwind-ui/src/components/headwind-radio-group/headwind-radio/headwind-radio-button/headwind-radio-button.component';
import { HeadwindRadioSelectedDirective } from '../../../../../projects/headwind-ui/src/components/headwind-radio-group/headwind-radio/headwind-radio-button/headwind-radio-selected/headwind-radio-selected.directive';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-default-radio-group-page',
  standalone: true,
  imports: [
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
    FormsModule,
  ],
  templateUrl: './default-radio-group-page.component.html',
  styleUrl: './default-radio-group-page.component.scss',
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
export class DefaultRadioGroupPageComponent {
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
}
