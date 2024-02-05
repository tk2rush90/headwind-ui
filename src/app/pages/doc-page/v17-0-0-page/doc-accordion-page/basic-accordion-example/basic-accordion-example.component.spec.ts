import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccordionExampleComponent } from './basic-accordion-example.component';

describe('BasicAccordionExampleComponent', () => {
  let component: BasicAccordionExampleComponent;
  let fixture: ComponentFixture<BasicAccordionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAccordionExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicAccordionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
