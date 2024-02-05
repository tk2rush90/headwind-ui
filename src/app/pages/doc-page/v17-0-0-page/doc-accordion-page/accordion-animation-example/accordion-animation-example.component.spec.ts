import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAnimationExampleComponent } from './accordion-animation-example.component';

describe('AccordionAnimationExampleComponent', () => {
  let component: AccordionAnimationExampleComponent;
  let fixture: ComponentFixture<AccordionAnimationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionAnimationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionAnimationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
