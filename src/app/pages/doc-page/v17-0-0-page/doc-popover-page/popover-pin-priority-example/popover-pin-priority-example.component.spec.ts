import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverPinPriorityExampleComponent } from './popover-pin-priority-example.component';

describe('PopoverPinPriorityExampleComponent', () => {
  let component: PopoverPinPriorityExampleComponent;
  let fixture: ComponentFixture<PopoverPinPriorityExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverPinPriorityExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverPinPriorityExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
