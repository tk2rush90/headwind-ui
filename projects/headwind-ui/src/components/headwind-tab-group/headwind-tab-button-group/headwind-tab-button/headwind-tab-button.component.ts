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

  selected = false;

  constructor(
    private readonly _destroyRef: DestroyRef,
    private readonly _headwindTabGroupService: HeadwindTabGroupService,
  ) {}

  ngOnInit() {
    // to wait until 'tabKey' is provided by input
    this._headwindTabGroupService.tab$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((tabKey) => {
      this.selected = tabKey === this.tabKey;
    });
  }

  @HostListener('click')
  onHostClick(): void {
    this._headwindTabGroupService.tab = this.tabKey;
  }
}
