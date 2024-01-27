import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindRadioComponent } from './headwind-radio.component';

describe('HeadwindRadioComponent', () => {
  let component: HeadwindRadioComponent;
  let fixture: ComponentFixture<HeadwindRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
