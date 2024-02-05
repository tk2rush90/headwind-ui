import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxAnimationExampleComponent } from './checkbox-animation-example.component';

describe('CheckboxAnimationExampleComponent', () => {
  let component: CheckboxAnimationExampleComponent;
  let fixture: ComponentFixture<CheckboxAnimationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxAnimationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxAnimationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
