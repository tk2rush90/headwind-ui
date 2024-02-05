import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionMethodsExampleComponent } from './accordion-methods-example.component';

describe('AccordionMethodsExampleComponent', () => {
  let component: AccordionMethodsExampleComponent;
  let fixture: ComponentFixture<AccordionMethodsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionMethodsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionMethodsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
