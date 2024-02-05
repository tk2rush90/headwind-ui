import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupSelectedClassExampleComponent } from './radio-group-selected-class-example.component';

describe('RadioGroupSelectedClassExampleComponent', () => {
  let component: RadioGroupSelectedClassExampleComponent;
  let fixture: ComponentFixture<RadioGroupSelectedClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupSelectedClassExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioGroupSelectedClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
