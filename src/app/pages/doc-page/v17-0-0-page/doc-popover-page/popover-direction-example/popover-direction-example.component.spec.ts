import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDirectionExampleComponent } from './popover-direction-example.component';

describe('PopoverDirectionExampleComponent', () => {
  let component: PopoverDirectionExampleComponent;
  let fixture: ComponentFixture<PopoverDirectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverDirectionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverDirectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
