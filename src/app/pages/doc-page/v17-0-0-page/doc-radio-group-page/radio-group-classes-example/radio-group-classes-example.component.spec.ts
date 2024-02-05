import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupClassesExampleComponent } from './radio-group-classes-example.component';

describe('RadioGroupClassesExampleComponent', () => {
  let component: RadioGroupClassesExampleComponent;
  let fixture: ComponentFixture<RadioGroupClassesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupClassesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioGroupClassesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
