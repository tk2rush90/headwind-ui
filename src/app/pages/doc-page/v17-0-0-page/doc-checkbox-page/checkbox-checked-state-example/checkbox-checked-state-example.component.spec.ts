import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCheckedStateExampleComponent } from './checkbox-checked-state-example.component';

describe('CheckboxCheckedStateExampleComponent', () => {
  let component: CheckboxCheckedStateExampleComponent;
  let fixture: ComponentFixture<CheckboxCheckedStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxCheckedStateExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxCheckedStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
