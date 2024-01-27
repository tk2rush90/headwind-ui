import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindRadioGroupComponent } from './headwind-radio-group.component';

describe('HeadwindRadioGroupComponent', () => {
  let component: HeadwindRadioGroupComponent;
  let fixture: ComponentFixture<HeadwindRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindRadioGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
