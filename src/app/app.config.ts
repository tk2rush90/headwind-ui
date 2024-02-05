import { ApplicationConfig, SecurityContext } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MARKED_OPTIONS, MarkedOptions, MarkedRenderer, provideMarkdown } from 'ngx-markdown';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.heading = (text: string, level: number, raw: string): string => {
    return `<h${level} id="${text
      .toLowerCase()
      .trim()
      .replace(/[^\s\w]/g, '')
      .split(' ')
      .join('-')}">${text}</h${level}>`;
  };

  const tableRenderer = renderer.table;

  renderer.table = (header, body) => {
    const table = tableRenderer.call(renderer, header, body);

    return `<div class="overflow-auto w-full">${table}</div>`;
  };

  return {
    renderer,
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
    provideClientHydration(),
    provideAnimations(),
    provideMarkdown({
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
};
