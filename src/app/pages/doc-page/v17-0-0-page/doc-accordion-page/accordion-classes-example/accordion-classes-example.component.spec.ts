import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionClassesExampleComponent } from './accordion-classes-example.component';

describe('AccordionOpenedStateExampleComponent', () => {
  let component: AccordionClassesExampleComponent;
  let fixture: ComponentFixture<AccordionClassesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionClassesExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionClassesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
