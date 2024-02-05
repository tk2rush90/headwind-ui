import { Component, DestroyRef, HostListener, Input, OnInit } from '@angular/core';
import { HeadwindTabGroupService } from '../../service/headwind-tab-group.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'headwind-tab-button',
  standalone: true,
  imports: [],
  templateUrl: './headwind-tab-button.component.html',
  styleUrl: './headwind-tab-button.component.scss',
  host: {
    role: 'button',
    tabindex: '0',
    class: 'headwind-tab-button',
    ['[class.headwind-selected]']: 'selected',
  },
})
export class HeadwindTabButtonComponent implements OnInit {
  @Input({ required: true }) tabKey!: any;

  constructor(
    private readonly _destroyRef: DestroyRef,
    private readonly _headwindTabGroupService: HeadwindTabGroupService,
  ) {}

  private _selected = false;

  get selected(): boolean {
    return this._selected;
  }

  ngOnInit() {
    // to wait until 'tabKey' is provided by input
    this._headwindTabGroupService.tab$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((tabKey) => {
      this._selected = tabKey === this.tabKey;
    });
  }

  @HostListener('click')
  onHostClick(): void {
    this._headwindTabGroupService.tab = this.tabKey;
  }

  @HostListener('keydown.space', ['$event'])
  onHostSpaceKeydown(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this._headwindTabGroupService.tab = this.tabKey;
  }

  @HostListener('keydown.enter', ['$event'])
  onHostEnterKeydown(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this._headwindTabGroupService.tab = this.tabKey;
  }
}
