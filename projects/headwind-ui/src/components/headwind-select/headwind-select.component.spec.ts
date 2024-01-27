import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindSelectComponent } from './headwind-select.component';

describe('HeadwindSelectComponent', () => {
  let component: HeadwindSelectComponent;
  let fixture: ComponentFixture<HeadwindSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
