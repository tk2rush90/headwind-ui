import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionOpenedStateExampleComponent } from './accordion-opened-state-example.component';

describe('AccordionOpenedStateExampleComponent', () => {
  let component: AccordionOpenedStateExampleComponent;
  let fixture: ComponentFixture<AccordionOpenedStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionOpenedStateExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionOpenedStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
