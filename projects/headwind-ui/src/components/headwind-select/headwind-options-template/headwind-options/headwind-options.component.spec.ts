import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindOptionsComponent } from './headwind-options.component';

describe('HeadwindOptionsComponent', () => {
  let component: HeadwindOptionsComponent;
  let fixture: ComponentFixture<HeadwindOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
