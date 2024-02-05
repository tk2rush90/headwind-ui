import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModelBindingExampleComponent } from './select-model-binding-example.component';

describe('SelectModelBindingExampleComponent', () => {
  let component: SelectModelBindingExampleComponent;
  let fixture: ComponentFixture<SelectModelBindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectModelBindingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectModelBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
