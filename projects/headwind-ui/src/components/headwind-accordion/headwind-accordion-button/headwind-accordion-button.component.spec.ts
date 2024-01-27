import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindAccordionButtonComponent } from './headwind-accordion-button.component';

describe('HeadwindAccordionButtonComponent', () => {
  let component: HeadwindAccordionButtonComponent;
  let fixture: ComponentFixture<HeadwindAccordionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindAccordionButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindAccordionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
