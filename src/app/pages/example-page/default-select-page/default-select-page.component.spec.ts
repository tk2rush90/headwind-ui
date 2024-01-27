import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSelectPageComponent } from './default-select-page.component';

describe('DefaultSelectPageComponent', () => {
  let component: DefaultSelectPageComponent;
  let fixture: ComponentFixture<DefaultSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSelectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
