import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindCheckboxComponent } from './headwind-checkbox.component';

describe('HeadwindCheckboxComponent', () => {
  let component: HeadwindCheckboxComponent;
  let fixture: ComponentFixture<HeadwindCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
