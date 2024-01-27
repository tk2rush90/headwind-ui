import { DestroyRef, Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { HeadwindTabGroupService } from '../../service/headwind-tab-group.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[headwindTabButton]',
  standalone: true,
  host: {
    class: 'headwind-tab-button',
  },
})
export class HeadwindTabButtonDirective implements OnInit {
  @Input({ required: true }) tabKey!: any;

  @HostBinding('class.headwind-selected') selected = false;

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
