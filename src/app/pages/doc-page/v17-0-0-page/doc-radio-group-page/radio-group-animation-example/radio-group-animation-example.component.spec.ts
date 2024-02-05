import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupAnimationExampleComponent } from './radio-group-animation-example.component';

describe('RadioGroupAnimationExampleComponent', () => {
  let component: RadioGroupAnimationExampleComponent;
  let fixture: ComponentFixture<RadioGroupAnimationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupAnimationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioGroupAnimationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
