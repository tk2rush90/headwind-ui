import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EmbeddedViewRef,
  OnDestroy,
  SecurityContext,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LogoComponent } from '../../common/logo/logo.component';
import {
  DocHeadingNavigationItem,
  DocHeadingNavigatorComponent,
} from './doc-heading-navigator/doc-heading-navigator.component';
import { DocumentationService } from '../../services/documentation.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { VersionChipComponent } from '../../common/version-chip/version-chip.component';
import { combineLatest } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { HeadwindPlatformService } from '../../../../projects/headwind-ui/src/services/headwind-platform.service';
import { FooterComponent } from '../../common/footer/footer.component';
import { DocNavigationComponent } from './doc-navigation/doc-navigation.component';
import { HeadwindOverlayService } from '@favian/headwind-ui';
import { animate, state, style, transition, trigger } from '@angular/animations';
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

@Component({
  selector: 'app-doc-page',
  standalone: true,
  imports: [
    RouterOutlet,
    LogoComponent,
    RouterLink,
    RouterLinkActive,
    DocHeadingNavigatorComponent,
    VersionChipComponent,
    FooterComponent,
    DocNavigationComponent,
  ],
  templateUrl: './doc-page.component.html',
  styleUrl: './doc-page.component.scss',
  providers: [
    DocumentationService,
    provideMarkdown({
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  host: {
    class: 'min-h-screen flex items-stretch flex-col',
  },
  animations: [
    trigger('mobileNavigation', [
      state(
        'void',
        style({
          transform: 'translateX(-100%)',
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            transform: 'translateX(0)',
          }),
        ),
      ),
      transition(
        '* => void',
        animate(
          '.1s',
          style({
            transform: 'translateX(-100%)',
          }),
        ),
      ),
    ]),
  ],
})
export class DocPageComponent implements AfterContentInit, AfterViewInit, OnDestroy {
  @ViewChild('header', { read: ElementRef }) header?: ElementRef<HTMLElement>;

  version = '';
  headingNavigations: DocHeadingNavigationItem[] = [];

  private _mobileNavigationRef?: EmbeddedViewRef<any>;

  constructor(
    private readonly _destroyRef: DestroyRef,
    private readonly _viewportScroller: ViewportScroller,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _documentationService: DocumentationService,
    private readonly _headwindPlatformService: HeadwindPlatformService,
    private readonly _headwindOverlayService: HeadwindOverlayService,
  ) {}

  ngAfterViewInit() {
    if (this._headwindPlatformService.isBrowser && this.header) {
      const { height } = this.header.nativeElement.getBoundingClientRect();

      this._viewportScroller.setOffset([0, height]);
    }
  }

  ngAfterContentInit() {
    combineLatest([this._documentationService.version$, this._documentationService.headingNavigations$])
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(([version, headingNavigations]) => {
        this.version = version;
        this.headingNavigations = headingNavigations;
        this._changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy() {
    this.closeMobileNavigation();
  }

  openMobileNavigation(templateRef: TemplateRef<any>): void {
    if (!this._mobileNavigationRef) {
      this._mobileNavigationRef = this._headwindOverlayService.open(
        templateRef,
        () => delete this._mobileNavigationRef,
      );
    }
  }

  closeMobileNavigation(): void {
    this._mobileNavigationRef?.destroy();
  }
}
