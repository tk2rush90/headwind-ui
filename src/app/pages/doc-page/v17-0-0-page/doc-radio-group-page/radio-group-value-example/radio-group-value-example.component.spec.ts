import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupValueExampleComponent } from './radio-group-value-example.component';

describe('RadioGroupValueExampleComponent', () => {
  let component: RadioGroupValueExampleComponent;
  let fixture: ComponentFixture<RadioGroupValueExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupValueExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioGroupValueExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
