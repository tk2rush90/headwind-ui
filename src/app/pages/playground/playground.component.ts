import { Component, TemplateRef } from '@angular/core';
import { HeadwindSelectComponent } from '../../../../projects/headwind-ui/src/components/headwind-select/headwind-select.component';
import { HeadwindOptionsComponent } from '../../../../projects/headwind-ui/src/components/headwind-select/headwind-options-template/headwind-options/headwind-options.component';
import { HeadwindOptionComponent } from '../../../../projects/headwind-ui/src/components/headwind-select/headwind-options-template/headwind-options/headwind-option/headwind-option.component';
import { HeadwindOverlayService } from '../../../../projects/headwind-ui/src/services/headwind-overlay.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadwindCheckboxComponent } from '../../../../projects/headwind-ui/src/components/headwind-checkbox/headwind-checkbox.component';
import { HeadwindRadioGroupComponent } from '../../../../projects/headwind-ui/src/components/headwind-radio-group/headwind-radio-group.component';
import { HeadwindRadioComponent } from '../../../../projects/headwind-ui/src/components/headwind-radio-group/headwind-radio/headwind-radio.component';
import { HeadwindCheckboxButtonComponent } from '../../../../projects/headwind-ui/src/components/headwind-checkbox/headwind-checkbox-button/headwind-checkbox-button.component';
import { HeadwindCheckboxCheckedDirective } from '../../../../projects/headwind-ui/src/components/headwind-checkbox/headwind-checkbox-button/headwind-checkbox-checked/headwind-checkbox-checked.directive';
import { HeadwindRadioButtonComponent } from '../../../../projects/headwind-ui/src/components/headwind-radio-group/headwind-radio/headwind-radio-button/headwind-radio-button.component';
import { HeadwindRadioSelectedDirective } from '../../../../projects/headwind-ui/src/components/headwind-radio-group/headwind-radio/headwind-radio-button/headwind-radio-selected/headwind-radio-selected.directive';
import { HeadwindAccordionComponent } from '../../../../projects/headwind-ui/src/components/headwind-accordion/headwind-accordion.component';
import { HeadwindAccordionButtonComponent } from '../../../../projects/headwind-ui/src/components/headwind-accordion/headwind-accordion-button/headwind-accordion-button.component';
import { HeadwindAccordionContentDirective } from '../../../../projects/headwind-ui/src/components/headwind-accordion/headwind-accordion-content/headwind-accordion-content.directive';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HeadwindTabGroupComponent } from '../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-group.component';
import { HeadwindTabButtonGroupComponent } from '../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-button-group/headwind-tab-button-group.component';
import { HeadwindTabContentGroupComponent } from '../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-content-group/headwind-tab-content-group.component';
import { HeadwindTabButtonComponent } from '../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-button-group/headwind-tab-button/headwind-tab-button.component';
import { HeadwindTabContentDirective } from '../../../../projects/headwind-ui/src/components/headwind-tab-group/headwind-tab-content-group/headwind-tab-content/headwind-tab-content.directive';
import { HeadwindPopoverButtonDirective } from '../../../../projects/headwind-ui/src/components/headwind-popover/headwind-popover-button/headwind-popover-button.directive';
import { HeadwindPopoverComponent } from '../../../../projects/headwind-ui/src/components/headwind-popover/headwind-popover.component';
import { HeadwindPopoverOverlayComponent } from '../../../../projects/headwind-ui/src/components/headwind-popover/headwind-popover-overlay/headwind-popover-overlay.component';
import { HeadwindOptionsTemplateDirective } from '../../../../projects/headwind-ui/src/components/headwind-select/headwind-options-template/headwind-options-template.directive';
import { HeadwindPopoverOverlayTemplateDirective } from '../../../../projects/headwind-ui/src/components/headwind-popover/headwind-popover-overlay-template/headwind-popover-overlay-template.directive';
import { RouterLink } from '@angular/router';
import { HeadwindSwitchComponent } from '../../../../projects/headwind-ui/src/components/headwind-switch/headwind-switch.component';
import { HeadwindSwitchTrackComponent } from '../../../../projects/headwind-ui/src/components/headwind-switch/headwind-switch-track/headwind-switch-track.component';
import { HeadwindSwitchThumbComponent } from '../../../../projects/headwind-ui/src/components/headwind-switch/headwind-switch-track/headwind-switch-thumb/headwind-switch-thumb.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    HeadwindSelectComponent,
    HeadwindOptionsComponent,
    HeadwindOptionComponent,
    FormsModule,
    ReactiveFormsModule,
    HeadwindCheckboxComponent,
    HeadwindCheckboxButtonComponent,
    HeadwindCheckboxCheckedDirective,
    HeadwindRadioGroupComponent,
    HeadwindRadioComponent,
    HeadwindRadioButtonComponent,
    HeadwindRadioSelectedDirective,
    HeadwindAccordionComponent,
    HeadwindAccordionButtonComponent,
    HeadwindAccordionContentDirective,
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentDirective,
    HeadwindPopoverButtonDirective,
    HeadwindPopoverComponent,
    HeadwindPopoverOverlayComponent,
    HeadwindOptionsTemplateDirective,
    HeadwindPopoverOverlayTemplateDirective,
    RouterLink,
    HeadwindSwitchComponent,
    HeadwindSwitchTrackComponent,
    HeadwindSwitchThumbComponent,
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  animations: [
    trigger('fade', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      state(
        'show',
        style({
          opacity: 1,
        }),
      ),
      transition('void <=> show', animate('.1s')),
    ]),
    trigger('slide', [
      state(
        'void',
        style({
          height: 0,
        }),
      ),
      state(
        'show',
        style({
          height: '*',
        }),
      ),
      transition('void <=> show', animate('.1s')),
    ]),
  ],
})
export class PlaygroundComponent {
  selectValue = 'Banana';
  selectArrayValue = [];
  selectArrayValueControl = new FormControl([]);
  checkboxValue = true;
  radioValue = 'Pineapple';
  options = ['Banana', 'Apple', 'Melon', 'Kiwi', 'Orange', 'Mandarin', 'Pineapple'];

  tabs = [
    {
      key: 'Key 1',
      label: 'Label 1',
      content: 'Content 1',
    },
    {
      key: 'Key 2',
      label: 'Label 2',
      content: 'Content 2',
    },
    {
      key: 'Key 3',
      label: 'Label 3',
      content: 'Content 3',
    },
  ];

  constructor(private readonly _headwindOverlayService: HeadwindOverlayService) {}

  onValueChange(value: any): void {
    this.selectValue = value;
  }

  openOverlay(overlay: TemplateRef<any>): void {
    this._headwindOverlayService.open(overlay);
  }
}
