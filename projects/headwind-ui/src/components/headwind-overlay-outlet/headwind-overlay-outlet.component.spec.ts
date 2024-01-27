import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindOverlayOutletComponent } from './headwind-overlay-outlet.component';

describe('HeadwindOverlayOutletComponent', () => {
  let component: HeadwindOverlayOutletComponent;
  let fixture: ComponentFixture<HeadwindOverlayOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindOverlayOutletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindOverlayOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
