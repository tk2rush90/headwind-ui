import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxClassesExampleComponent } from './checkbox-classes-example.component';

describe('CheckboxClassesExampleComponent', () => {
  let component: CheckboxClassesExampleComponent;
  let fixture: ComponentFixture<CheckboxClassesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxClassesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxClassesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
