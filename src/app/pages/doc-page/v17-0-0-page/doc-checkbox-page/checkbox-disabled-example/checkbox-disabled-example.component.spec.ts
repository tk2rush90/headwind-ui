import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDisabledExampleComponent } from './checkbox-disabled-example.component';

describe('CheckboxDisabledExampleComponent', () => {
  let component: CheckboxDisabledExampleComponent;
  let fixture: ComponentFixture<CheckboxDisabledExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxDisabledExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
