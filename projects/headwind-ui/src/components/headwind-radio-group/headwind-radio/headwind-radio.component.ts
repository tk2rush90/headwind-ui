import { AfterContentInit, Component, ContentChild, DestroyRef, HostListener, Input } from '@angular/core';
import { HeadwindClickDetector } from '../../../services/headwind-click-detector.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeadwindRadioButtonComponent } from './headwind-radio-button/headwind-radio-button.component';
import { HeadwindRadioGroupService } from '../service/headwind-radio-group.service';

@Component({
  selector: 'headwind-radio',
  standalone: true,
  imports: [],
  templateUrl: './headwind-radio.component.html',
  styleUrl: './headwind-radio.component.scss',
  providers: [HeadwindClickDetector],
  host: {
    class: 'headwind-radio',
    ['[class.headwind-selected]']: 'selected',
  },
})
export class HeadwindRadioComponent implements AfterContentInit {
  @Input({ required: true }) value: any;

  @ContentChild(HeadwindRadioButtonComponent, { descendants: true }) button?: HeadwindRadioButtonComponent;

  private _selected = false;

  constructor(
    private readonly _destroyRef: DestroyRef,
    private readonly _headwindRadioGroupService: HeadwindRadioGroupService,
  ) {}

  get selected(): boolean {
    return this._selected;
  }

  ngAfterContentInit() {
    this._headwindRadioGroupService.value$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((value) => {
      this._selected = this.value === value;

      if (this.button) {
        this.button.selected = this.selected;
      }
    });
  }

  @HostListener('click')
  onHostClick(): void {
    this._headwindRadioGroupService.selectOption.emit(this.value);
  }
}
