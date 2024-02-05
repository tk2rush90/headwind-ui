import { Component } from '@angular/core';
import {
  HeadwindTabButtonComponent,
  HeadwindTabButtonGroupComponent,
  HeadwindTabContentDirective,
  HeadwindTabContentGroupComponent,
  HeadwindTabGroupComponent,
} from '@favian/headwind-ui';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-tab-group-example',
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
        @for (tab of tabs; track tab.name) {
          <headwind-tab-button
            [tabKey]="tab.key"
            [class]="tabKey === tab.key ? 'border-b-rose-500 text-rose-500' : 'border-b-transparent text-zinc-400'"
            class="flex flex-[1_0_auto] select-none items-center justify-center border-b-2 px-3 text-center text-sm font-semibold"
          >
            {{ tab.name }}
          </headwind-tab-button>
        }
      </headwind-tab-button-group>

      <headwind-tab-content-group [@slide]="tabKey" class="relative mt-6 block overflow-hidden">
        @for (tab of tabs; track tab.name) {
          <ng-template headwindTabContent [tabKey]="tab.key">
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <img [alt]="tab.name" [src]="tab.avatarUrl" class="h-10 w-10 rounded-full bg-zinc-200 object-cover" />

                <div>
                  <div class="font-semibold">
                    {{ tab.name }}
                  </div>

                  <div class="text-sm text-zinc-400">
                    {{ tab.job }}
                  </div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="text-xs text-zinc-400">Biography</div>

                <div class="text-sm">
                  {{ tab.biography }}
                </div>
              </div>
            </div>
          </ng-template>
        }
      </headwind-tab-content-group>
    </headwind-tab-group>
  `,
  animations: [
    trigger('slide', [
      transition('1 => 2, 2 => 3, 1 => 3', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(-100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
      transition('3 => 2, 2 => 1, 3 => 1', [
        group([
          query(
            ':leave',
            [
              style({
                position: 'absolute',
                width: '100%',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(100%)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
          query(
            ':enter',
            [
              style({
                transform: 'translateX(-100%)',
              }),
              animate(
                '.1s',
                style({
                  transform: 'translateX(0)',
                }),
              ),
            ],
            {
              optional: true,
            },
          ),
        ]),
      ]),
    ]),
  ],
})
export class BasicTabGroupExampleComponent {
  tabKey = 1;

  tabs = [
    {
      key: 1,
      name: 'Tori Day',
      avatarUrl: 'https://picsum.photos/id/174/64',
      job: 'Designer',
      biography:
        'I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others.',
    },
    {
      key: 2,
      name: 'Ishaan Martinez',
      avatarUrl: 'https://picsum.photos/id/213/64',
      job: 'Full-Stack Developer',
      biography:
        'From the day I was born, I was a coding prodigy who screamed "console.log(\'Waah~ Waah~\')". At the age of 3, I mastered JavaScript and TypeScript, and by the time I turned 7, I had evolved into a flawless full-stack developer.',
    },
    {
      key: 3,
      name: 'Alvin Bailey',
      avatarUrl: 'https://picsum.photos/id/322/64',
      job: 'Lawyer',
      biography: 'I am an ordinary lawyer.',
    },
  ];
}
