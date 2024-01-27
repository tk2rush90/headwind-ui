import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPopoverPageComponent } from './default-popover-page.component';

describe('DefaultPopupPageComponent', () => {
  let component: DefaultPopoverPageComponent;
  let fixture: ComponentFixture<DefaultPopoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultPopoverPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultPopoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
