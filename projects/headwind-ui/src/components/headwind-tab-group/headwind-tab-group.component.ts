import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeadwindTabGroupService } from './service/headwind-tab-group.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'headwind-tab-group',
  standalone: true,
  imports: [],
  templateUrl: './headwind-tab-group.component.html',
  styleUrl: './headwind-tab-group.component.scss',
  host: {
    class: 'headwind-tab-group',
  },
  providers: [HeadwindTabGroupService],
})
export class HeadwindTabGroupComponent {
  @Output() tabKeyChange = new EventEmitter<any>();

  private _previousTabKey: any;

  constructor(private readonly _headwindTabGroupService: HeadwindTabGroupService) {
    this._headwindTabGroupService.tab$.pipe(takeUntilDestroyed()).subscribe((tabKey) => {
      if (this._previousTabKey !== tabKey) {
        this._previousTabKey = tabKey;
        this.tabKeyChange.emit(tabKey);
      }
    });
  }

  @Input()
  set tabKey(value: any) {
    this._headwindTabGroupService.tab = value;
  }
}
