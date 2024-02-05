import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverClassesExampleComponent } from './popover-classes-example.component';

describe('PopoverClassesExampleComponent', () => {
  let component: PopoverClassesExampleComponent;
  let fixture: ComponentFixture<PopoverClassesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverClassesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverClassesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
