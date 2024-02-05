import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverActualChangeExampleComponent } from './popover-actual-change-example.component';

describe('PopoverActualChangeExampleComponent', () => {
  let component: PopoverActualChangeExampleComponent;
  let fixture: ComponentFixture<PopoverActualChangeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverActualChangeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverActualChangeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
