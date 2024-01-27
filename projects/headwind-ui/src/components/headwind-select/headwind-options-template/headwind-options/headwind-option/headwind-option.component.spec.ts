import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindOptionComponent } from './headwind-option.component';

describe('HeadwindOptionComponent', () => {
  let component: HeadwindOptionComponent;
  let fixture: ComponentFixture<HeadwindOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
