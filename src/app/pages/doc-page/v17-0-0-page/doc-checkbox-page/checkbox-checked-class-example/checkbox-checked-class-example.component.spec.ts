import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCheckedClassExampleComponent } from './checkbox-checked-class-example.component';

describe('CheckboxCheckedClassExampleComponent', () => {
  let component: CheckboxCheckedClassExampleComponent;
  let fixture: ComponentFixture<CheckboxCheckedClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxCheckedClassExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxCheckedClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
