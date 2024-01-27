import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindTabGroupComponent } from './headwind-tab-group.component';

describe('HeadwindTabGroupComponent', () => {
  let component: HeadwindTabGroupComponent;
  let fixture: ComponentFixture<HeadwindTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindTabGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
