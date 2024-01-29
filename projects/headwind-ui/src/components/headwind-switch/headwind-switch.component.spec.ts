import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindSwitchComponent } from './headwind-switch.component';

describe('HeadwindSwitchComponent', () => {
  let component: HeadwindSwitchComponent;
  let fixture: ComponentFixture<HeadwindSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
