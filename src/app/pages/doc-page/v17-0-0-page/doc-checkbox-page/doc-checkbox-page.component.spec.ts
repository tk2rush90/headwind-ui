import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCheckboxPageComponent } from './doc-checkbox-page.component';

describe('DocCheckboxPageComponent', () => {
  let component: DocCheckboxPageComponent;
  let fixture: ComponentFixture<DocCheckboxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocCheckboxPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocCheckboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
