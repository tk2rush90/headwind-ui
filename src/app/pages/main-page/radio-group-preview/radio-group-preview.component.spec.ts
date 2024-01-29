import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupPreviewComponent } from './radio-group-preview.component';

describe('RadioGroupPreviewComponent', () => {
  let component: RadioGroupPreviewComponent;
  let fixture: ComponentFixture<RadioGroupPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioGroupPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
