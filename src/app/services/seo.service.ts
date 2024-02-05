import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface UpdateSeo {
  title: string;
  description: string;
  keywords: string[];
  /** Only for Opengraph */
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private readonly _title: Title,
    private readonly _meta: Meta,
  ) {}

  get defaultOptions(): UpdateSeo {
    return {
      title: 'Headwind UI - Angular with Tailwind CSS',
      description: 'Styleless Angular components to integrate with Tailwind CSS',
      keywords: ['Angular', 'Tailwind'],
      url: 'https://ng-headwind-ui.github.io',
    };
  }

  update(options: UpdateSeo): void {
    const { title, description, keywords, url } = options;

    this._title.setTitle(title);
    this._meta.updateTag(
      {
        content: title,
      },
      'property="og:title"',
    );
    this._meta.updateTag(
      {
        content: title,
      },
      'name="twitter:title"',
    );
    this._meta.updateTag(
      {
        content: description,
      },
      'name="description"',
    );
    this._meta.updateTag(
      {
        content: description,
      },
      'property="og:description"',
    );
    this._meta.updateTag(
      {
        content: description,
      },
      'name="twitter:description"',
    );
    this._meta.updateTag(
      {
        content: keywords.join(','),
      },
      'name="keywords"',
    );
    this._meta.updateTag(
      {
        content: url,
      },
      'property="og:url"',
    );
  }
}
