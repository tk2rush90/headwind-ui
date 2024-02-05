import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindOptionsOverlayComponent } from './headwind-options-overlay.component';

describe('HeadwindOptionsComponent', () => {
  let component: HeadwindOptionsOverlayComponent;
  let fixture: ComponentFixture<HeadwindOptionsOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindOptionsOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadwindOptionsOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
