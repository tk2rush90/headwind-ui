import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindCheckboxButtonComponent } from './headwind-checkbox-button.component';

describe('HeadwindCheckboxButtonComponent', () => {
  let component: HeadwindCheckboxButtonComponent;
  let fixture: ComponentFixture<HeadwindCheckboxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindCheckboxButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindCheckboxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
