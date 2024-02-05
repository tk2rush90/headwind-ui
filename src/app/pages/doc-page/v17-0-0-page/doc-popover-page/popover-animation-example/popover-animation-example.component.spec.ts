import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverAnimationExampleComponent } from './popover-animation-example.component';

describe('PopoverAnimationExampleComponent', () => {
  let component: PopoverAnimationExampleComponent;
  let fixture: ComponentFixture<PopoverAnimationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverAnimationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverAnimationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
