import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAccordionPageComponent } from './doc-accordion-page.component';

describe('DocAccordionPageComponent', () => {
  let component: DocAccordionPageComponent;
  let fixture: ComponentFixture<DocAccordionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocAccordionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocAccordionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
