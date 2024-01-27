import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindTabContentGroupComponent } from './headwind-tab-content-group.component';

describe('HeadwindTabContentGroupComponent', () => {
  let component: HeadwindTabContentGroupComponent;
  let fixture: ComponentFixture<HeadwindTabContentGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindTabContentGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindTabContentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
