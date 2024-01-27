import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindRadioLabelComponent } from './headwind-radio-label.component';

describe('HeadwindRadioLabelComponent', () => {
  let component: HeadwindRadioLabelComponent;
  let fixture: ComponentFixture<HeadwindRadioLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindRadioLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindRadioLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
