import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindPopoverOverlayComponent } from './headwind-popover-overlay.component';

describe('HeadwindPopoverOverlayComponent', () => {
  let component: HeadwindPopoverOverlayComponent;
  let fixture: ComponentFixture<HeadwindPopoverOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindPopoverOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindPopoverOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
