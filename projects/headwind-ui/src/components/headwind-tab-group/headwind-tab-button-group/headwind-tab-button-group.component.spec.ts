import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadwindTabButtonGroupComponent } from './headwind-tab-button-group.component';

describe('HeadwindTabButtonGroupComponent', () => {
  let component: HeadwindTabButtonGroupComponent;
  let fixture: ComponentFixture<HeadwindTabButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadwindTabButtonGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadwindTabButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
