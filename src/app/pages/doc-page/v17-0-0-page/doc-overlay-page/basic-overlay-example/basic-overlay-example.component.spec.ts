import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOverlayExampleComponent } from './basic-overlay-example.component';

describe('BasicOverlayExampleComponent', () => {
  let component: BasicOverlayExampleComponent;
  let fixture: ComponentFixture<BasicOverlayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicOverlayExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicOverlayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
