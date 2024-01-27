import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAccordionPageComponent } from './default-accordion-page.component';

describe('DefaultAccordionPageComponent', () => {
  let component: DefaultAccordionPageComponent;
  let fixture: ComponentFixture<DefaultAccordionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultAccordionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultAccordionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
