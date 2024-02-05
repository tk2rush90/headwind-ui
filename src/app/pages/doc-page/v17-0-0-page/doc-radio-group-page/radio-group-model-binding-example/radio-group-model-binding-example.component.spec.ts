import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupModelBindingExampleComponent } from './radio-group-model-binding-example.component';

describe('RadioGroupModelBindingExampleComponent', () => {
  let component: RadioGroupModelBindingExampleComponent;
  let fixture: ComponentFixture<RadioGroupModelBindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupModelBindingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioGroupModelBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
