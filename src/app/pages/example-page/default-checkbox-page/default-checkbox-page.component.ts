import { Component } from '@angular/core';
import { HeadwindCheckboxComponent } from '../../../../../projects/headwind-ui/src/components/headwind-checkbox/headwind-checkbox.component';
import { HeadwindCheckboxButtonComponent } from '../../../../../projects/headwind-ui/src/components/headwind-checkbox/headwind-checkbox-button/headwind-checkbox-button.component';
import { HeadwindCheckboxCheckedDirective } from '../../../../../projects/headwind-ui/src/components/headwind-checkbox/headwind-checkbox-button/headwind-checkbox-checked/headwind-checkbox-checked.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-default-checkbox-page',
  standalone: true,
  imports: [HeadwindCheckboxComponent, HeadwindCheckboxButtonComponent, HeadwindCheckboxCheckedDirective, FormsModule],
  templateUrl: './default-checkbox-page.component.html',
  styleUrl: './default-checkbox-page.component.scss',
})
export class DefaultCheckboxPageComponent {
  checked = false;
}
