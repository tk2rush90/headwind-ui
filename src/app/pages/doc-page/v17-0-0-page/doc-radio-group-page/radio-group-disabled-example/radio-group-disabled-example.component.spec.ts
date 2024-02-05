import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupDisabledExampleComponent } from './radio-group-disabled-example.component';

describe('RadioGroupDisabledExampleComponent', () => {
  let component: RadioGroupDisabledExampleComponent;
  let fixture: ComponentFixture<RadioGroupDisabledExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupDisabledExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioGroupDisabledExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
