import {
  AfterContentInit,
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
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
  },
})
export class HeadwindRadioComponent implements AfterContentInit {
  @Input() value: any;

  @ContentChild(HeadwindRadioButtonComponent, { descendants: true }) button?: HeadwindRadioButtonComponent;

  selected = false;

  constructor(
    private readonly _renderer: Renderer2,
    private readonly _destroyRef: DestroyRef,
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _headwindRadioGroupService: HeadwindRadioGroupService,
  ) {}

  ngAfterContentInit() {
    this._headwindRadioGroupService.value$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((value) => {
      if (this.value === value) {
        this._setAttribute('selected', '');
      } else {
        this._removeAttribute('selected');
      }

      this.selected = this.value === value;

      if (this.button) {
        this.button.selected = this.selected;
      }
    });
  }

  @HostListener('click')
  onHostClick(): void {
    this._headwindRadioGroupService.selectOption.emit(this.value);
  }

  private _setAttribute(attribute: string, value = ''): void {
    if (this._elementRef.nativeElement) {
      this._renderer.setAttribute(this._elementRef.nativeElement, attribute, value);
    }
  }

  private _removeAttribute(attribute: string): void {
    if (this._elementRef.nativeElement) {
      this._renderer.removeAttribute(this._elementRef.nativeElement, attribute);
    }
  }
}
