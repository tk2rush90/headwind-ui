import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDirectionPriorityExampleComponent } from './popover-direction-priority-example.component';

describe('PopoverDirectionPriorityExampleComponent', () => {
  let component: PopoverDirectionPriorityExampleComponent;
  let fixture: ComponentFixture<PopoverDirectionPriorityExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverDirectionPriorityExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverDirectionPriorityExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
