import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindRadioButtonComponent } from './headwind-radio-button.component';

describe('HeadwindRadioButtonComponent', () => {
  let component: HeadwindRadioButtonComponent;
  let fixture: ComponentFixture<HeadwindRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindRadioButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
