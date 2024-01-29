import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPopoverPageComponent } from './doc-popover-page.component';

describe('DocPopoverPageComponent', () => {
  let component: DocPopoverPageComponent;
  let fixture: ComponentFixture<DocPopoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocPopoverPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocPopoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
