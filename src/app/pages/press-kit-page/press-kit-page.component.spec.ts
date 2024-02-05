import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressKitPageComponent } from './press-kit-page.component';

describe('PressKitPageComponent', () => {
  let component: PressKitPageComponent;
  let fixture: ComponentFixture<PressKitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressKitPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressKitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
