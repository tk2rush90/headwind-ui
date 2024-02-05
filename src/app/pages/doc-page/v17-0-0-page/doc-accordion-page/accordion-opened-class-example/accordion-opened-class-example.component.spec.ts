import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionOpenedClassExampleComponent } from './accordion-opened-class-example.component';

describe('AccordionOpenedClassExampleComponent', () => {
  let component: AccordionOpenedClassExampleComponent;
  let fixture: ComponentFixture<AccordionOpenedClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionOpenedClassExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionOpenedClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
