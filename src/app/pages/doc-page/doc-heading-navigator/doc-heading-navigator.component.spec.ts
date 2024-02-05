import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocHeadingNavigatorComponent } from './doc-heading-navigator.component';

describe('DocHeadingNavigatorComponent', () => {
  let component: DocHeadingNavigatorComponent;
  let fixture: ComponentFixture<DocHeadingNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocHeadingNavigatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocHeadingNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
