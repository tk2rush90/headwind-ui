import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxMethodsExampleComponent } from './checkbox-methods-example.component';

describe('CheckboxMethodsExampleComponent', () => {
  let component: CheckboxMethodsExampleComponent;
  let fixture: ComponentFixture<CheckboxMethodsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxMethodsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxMethodsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
