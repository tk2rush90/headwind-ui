import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindPopoverComponent } from './headwind-popover.component';

describe('HeadwindPopoverComponent', () => {
  let component: HeadwindPopoverComponent;
  let fixture: ComponentFixture<HeadwindPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindPopoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
