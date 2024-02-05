import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';

@Component({
  selector: 'app-tab-group-classes-example',
  standalone: true,
  imports: [
    HeadwindTabGroupComponent,
    HeadwindTabButtonGroupComponent,
    HeadwindTabButtonComponent,
    HeadwindTabContentGroupComponent,
    HeadwindTabContentDirective,
  ],
  template: `
    <headwind-tab-group [(tabKey)]="tabKey">
      <headwind-tab-button-group class="flex h-10 items-stretch gap-2 overflow-auto">
        @for (tab of tabs; track tab.key) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group>
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
  styles: [
    `
      @tailwind components;

      @layer components {
        .headwind-tab-group {
          @apply block w-full max-w-[400px] rounded-xl bg-white p-8 shadow-xl;
        }

        .headwind-tab-button {
          @apply flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold;
        }

        .headwind-tab-content-group {
          @apply mt-6 block overflow-hidden;
        }
      }
    `,
  ],
})
export class TabGroupClassesExampleComponent {
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
