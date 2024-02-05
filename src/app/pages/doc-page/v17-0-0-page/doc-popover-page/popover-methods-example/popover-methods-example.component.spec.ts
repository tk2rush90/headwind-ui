import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverMethodsExampleComponent } from './popover-methods-example.component';

describe('PopoverMethodsExampleComponent', () => {
  let component: PopoverMethodsExampleComponent;
  let fixture: ComponentFixture<PopoverMethodsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverMethodsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoverMethodsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
