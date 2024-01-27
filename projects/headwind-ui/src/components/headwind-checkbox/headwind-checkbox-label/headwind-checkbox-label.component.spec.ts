import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindCheckboxLabelComponent } from './headwind-checkbox-label.component';

describe('HeadwindCheckboxLabelComponent', () => {
  let component: HeadwindCheckboxLabelComponent;
  let fixture: ComponentFixture<HeadwindCheckboxLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindCheckboxLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindCheckboxLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
