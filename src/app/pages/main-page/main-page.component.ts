import { Component } from '@angular/core';
import { LogoComponent } from '../../common/logo/logo.component';
import { GithubIconComponent } from '../../common/github-icon/github-icon.component';
import { LogoIconComponent } from '../../common/logo-icon/logo-icon.component';
import { AccordionPreviewComponent } from './accordion-preview/accordion-preview.component';
import { CheckboxPreviewComponent } from './checkbox-preview/checkbox-preview.component';
import { PopoverPreviewComponent } from './popover-preview/popover-preview.component';
import { OverlayPreviewComponent } from './overlay-preview/overlay-preview.component';
import { RadioGroupPreviewComponent } from './radio-group-preview/radio-group-preview.component';
import { SelectPreviewComponent } from './select-preview/select-preview.component';
import { SwitchPreviewComponent } from './switch-preview/switch-preview.component';
import { TabGroupPreviewComponent } from './tab-group-preview/tab-group-preview.component';
import { PreviewItemComponent } from './preview-item/preview-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    LogoComponent,
    GithubIconComponent,
    LogoIconComponent,
    AccordionPreviewComponent,
    CheckboxPreviewComponent,
    PopoverPreviewComponent,
    OverlayPreviewComponent,
    RadioGroupPreviewComponent,
    SelectPreviewComponent,
    SwitchPreviewComponent,
    TabGroupPreviewComponent,
    PreviewItemComponent,
    RouterLink,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
