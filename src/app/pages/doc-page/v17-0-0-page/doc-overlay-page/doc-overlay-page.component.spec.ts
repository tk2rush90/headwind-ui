import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocOverlayPageComponent } from './doc-overlay-page.component';

describe('DocOverlayPageComponent', () => {
  let component: DocOverlayPageComponent;
  let fixture: ComponentFixture<DocOverlayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocOverlayPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocOverlayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
