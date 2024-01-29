import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindSwitchTrackComponent } from './headwind-switch-track.component';

describe('HeadwindSwitchTrackComponent', () => {
  let component: HeadwindSwitchTrackComponent;
  let fixture: ComponentFixture<HeadwindSwitchTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindSwitchTrackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindSwitchTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
