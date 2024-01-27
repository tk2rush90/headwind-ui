import { Component } from '@angular/core';
import { HeadwindPopoverComponent } from '../../../../../projects/headwind-ui/src/components/headwind-popover/headwind-popover.component';
import { HeadwindPopoverButtonDirective } from '../../../../../projects/headwind-ui/src/components/headwind-popover/headwind-popover-button/headwind-popover-button.directive';
import { HeadwindPopoverOverlayTemplateDirective } from '../../../../../projects/headwind-ui/src/components/headwind-popover/headwind-popover-overlay-template/headwind-popover-overlay-template.directive';
import { HeadwindPopoverOverlayComponent } from '../../../../../projects/headwind-ui/src/components/headwind-popover/headwind-popover-overlay/headwind-popover-overlay.component';
import { XYDirections } from '../../../../../projects/headwind-ui/src/types/xy-directions';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-default-popover-page',
  standalone: true,
  imports: [
    HeadwindPopoverComponent,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverOverlayTemplateDirective,
    HeadwindPopoverOverlayComponent,
  ],
  templateUrl: './default-popover-page.component.html',
  styleUrl: './default-popover-page.component.scss',
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
export class DefaultPopoverPageComponent {
  options = ['Tori Day', 'Ishaan Martinez', 'Alvin Bailey', 'Opal Morton', 'Evelynn Hobbs'];

  actualDirection: XYDirections = 'bottom';
  actualPin: XYDirections = 'left';

  onActualDirectionChange(actualDirection: XYDirections): void {
    this.actualDirection = actualDirection;
  }

  onActualPinChange(actualPin: XYDirections): void {
    this.actualPin = actualPin;
  }
}
