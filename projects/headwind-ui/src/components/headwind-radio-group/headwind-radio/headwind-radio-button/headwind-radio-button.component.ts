import { AfterViewInit, Component, ContentChild, EmbeddedViewRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HeadwindRadioSelectedDirective } from './headwind-radio-selected/headwind-radio-selected.directive';

@Component({
  selector: 'headwind-radio-button',
  standalone: true,
  imports: [],
  templateUrl: './headwind-radio-button.component.html',
  styleUrl: './headwind-radio-button.component.scss',
  host: {
    class: 'headwind-radio-button',
  },
})
export class HeadwindRadioButtonComponent implements AfterViewInit {
  @ViewChild('radioSelectedContainer', { read: ViewContainerRef }) radioSelectedContainer?: ViewContainerRef;
  @ContentChild(HeadwindRadioSelectedDirective, { descendants: true }) radioSelected?: HeadwindRadioSelectedDirective;

  private _selectedEmbeddedViewRef?: EmbeddedViewRef<any>;

  /** Internal selected status to show and hide selected icon */
  private _selected = false;

  get selected(): boolean {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;
    this._renderRadioSelected();
  }

  ngAfterViewInit() {
    this._renderRadioSelected();
  }

  private _renderRadioSelected(): void {
    if (this.radioSelectedContainer && this.radioSelected) {
      if (this.selected) {
        if (!this._selectedEmbeddedViewRef) {
          this._selectedEmbeddedViewRef = this.radioSelectedContainer.createEmbeddedView(
            this.radioSelected.templateRef,
          );
        }
      } else {
        this._selectedEmbeddedViewRef?.destroy();
        delete this._selectedEmbeddedViewRef;
      }
    }
  }
}
