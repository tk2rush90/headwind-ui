import { Component } from '@angular/core';
import {
  HeadwindAccordionButtonComponent,
  HeadwindAccordionComponent,
  HeadwindAccordionContentDirective,
} from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-basic-accordion-example',
  standalone: true,
  imports: [HeadwindAccordionComponent, HeadwindAccordionButtonComponent, HeadwindAccordionContentDirective],
  template: `
    <div class="w-full max-w-[400px] space-y-2 rounded-2xl bg-white p-8 shadow">
      @for (person of people; track person.name) {
        <headwind-accordion #accordion class="block space-y-2">
          <headwind-accordion-button
            class="flex items-center justify-between rounded-md bg-rose-500 px-3 py-2 text-sm text-white transition-colors hover:bg-rose-400"
          >
            <div>
              {{ person.name }}
            </div>

            <svg
              [@rotate]="accordion.opened ? 'rotated' : 'none'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </headwind-accordion-button>

          <ng-template headwindAccordionContent>
            <div [@expand] class="space-y-4 overflow-hidden py-3 text-sm">
              <div class="flex items-center space-x-1">
                <img
                  [src]="person.avatarUrl"
                  [alt]="person.name"
                  class="block h-10 w-10 rounded-full bg-zinc-200 object-cover"
                />

                <div>
                  <div class="font-semibold">
                    {{ person.name }}
                  </div>

                  <div class="text-xs text-zinc-400">
                    {{ person.job }}
                  </div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="text-xs text-zinc-400">Biography</div>

                <div>
                  {{ person.biography }}
                </div>
              </div>
            </div>
          </ng-template>
        </headwind-accordion>
      }
    </div>
  `,
  animations: [
    trigger('expand', [
      state(
        'void',
        style({
          height: 0,
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            height: '*',
          }),
        ),
      ),
      transition(
        '* => void',
        animate(
          '.1s',
          style({
            height: 0,
          }),
        ),
      ),
    ]),
    trigger('rotate', [
      state(
        'none',
        style({
          transform: 'rotate(0)',
        }),
      ),
      state(
        'rotated',
        style({
          transform: 'rotate(180deg)',
        }),
      ),
      transition('none <=> rotated', animate('.1s')),
    ]),
  ],
})
export class BasicAccordionExampleComponent {
  people = [
    {
      name: 'Tori Day',
      avatarUrl: 'https://picsum.photos/id/174/64',
      job: 'Designer',
      biography:
        'I can fit 6 brushes and pencils on each of my fingers and draw a picture. When working on a computer, I attach 4 mouses to my hands and feet, allowing me to work at a speed 5 times faster than others.',
    },
    {
      name: 'Ishaan Martinez',
      avatarUrl: 'https://picsum.photos/id/213/64',
      job: 'Full-Stack Developer',
      biography:
        'From the day I was born, I was a coding prodigy who screamed "console.log(\'Waah~ Waah~\')". At the age of 3, I mastered JavaScript and TypeScript, and by the time I turned 7, I had evolved into a flawless full-stack developer.',
    },
    {
      name: 'Alvin Bailey',
      avatarUrl: 'https://picsum.photos/id/322/64',
      job: 'Lawyer',
      biography: 'I am an ordinary lawyer.',
    },
  ];
}
