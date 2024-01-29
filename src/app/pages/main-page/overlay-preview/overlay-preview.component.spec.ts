import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPreviewComponent } from './overlay-preview.component';

describe('OverlayPreviewComponent', () => {
  let component: OverlayPreviewComponent;
  let fixture: ComponentFixture<OverlayPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverlayPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
