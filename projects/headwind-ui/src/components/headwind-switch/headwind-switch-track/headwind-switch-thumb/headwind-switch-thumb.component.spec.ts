import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindSwitchThumbComponent } from './headwind-switch-thumb.component';

describe('HeadwindSwitchThumbComponent', () => {
  let component: HeadwindSwitchThumbComponent;
  let fixture: ComponentFixture<HeadwindSwitchThumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindSwitchThumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindSwitchThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
