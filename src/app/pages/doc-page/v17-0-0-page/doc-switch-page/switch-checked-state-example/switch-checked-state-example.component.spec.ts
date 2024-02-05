import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCheckedStateExampleComponent } from './switch-checked-state-example.component';

describe('SwitchCheckedStateExampleComponent', () => {
  let component: SwitchCheckedStateExampleComponent;
  let fixture: ComponentFixture<SwitchCheckedStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCheckedStateExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchCheckedStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
