import { Component } from '@angular/core';

@Component({
  selector: 'app-version-chip',
  standalone: true,
  imports: [],
  templateUrl: './version-chip.component.html',
  styleUrl: './version-chip.component.scss',
  host: {
    class: 'inline-block text-xs text-white bg-stone-500 px-1.5 py-0.5 rounded',
  },
})
export class VersionChipComponent {}
