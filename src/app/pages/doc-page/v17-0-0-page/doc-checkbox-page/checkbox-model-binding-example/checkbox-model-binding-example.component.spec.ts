import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxModelBindingExampleComponent } from './checkbox-model-binding-example.component';

describe('CheckboxModelBindingExampleComponent', () => {
  let component: CheckboxModelBindingExampleComponent;
  let fixture: ComponentFixture<CheckboxModelBindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModelBindingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxModelBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
