import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-tab-group-tab-key-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: `
    <headwind-tab-group [(tabKey)]="tabKey" class="block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
            class="flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group class="mt-6 block overflow-hidden">
        @for (tab of tabs; track tab.key) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div>
              {{ tab.content }}
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  `,
})
export class TabGroupTabKeyExampleComponent {
  tabKey = 'tab1';

  tabs = [
    {
      key: 'tab1',
      name: 'Tab 1',
      content: 'Content 1',
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      content: 'Content 2',
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      content: 'Content 3',
    },
  ];
}
