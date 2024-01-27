import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCheckboxPageComponent } from './default-checkbox-page.component';

describe('DefaultCheckboxPageComponent', () => {
  let component: DefaultCheckboxPageComponent;
  let fixture: ComponentFixture<DefaultCheckboxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCheckboxPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultCheckboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
