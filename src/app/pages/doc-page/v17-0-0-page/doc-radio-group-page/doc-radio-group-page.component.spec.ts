import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocRadioGroupPageComponent } from './doc-radio-group-page.component';

describe('DocRadioGroupPageComponent', () => {
  let component: DocRadioGroupPageComponent;
  let fixture: ComponentFixture<DocRadioGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocRadioGroupPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocRadioGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
