import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindAccordionComponent } from './headwind-accordion.component';

describe('HeadwindAccordionComponent', () => {
  let component: HeadwindAccordionComponent;
  let fixture: ComponentFixture<HeadwindAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
