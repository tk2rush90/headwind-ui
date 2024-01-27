import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultRadioGroupPageComponent } from './default-radio-group-page.component';

describe('DefaultRadioGroupPageComponent', () => {
  let component: DefaultRadioGroupPageComponent;
  let fixture: ComponentFixture<DefaultRadioGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultRadioGroupPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultRadioGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
