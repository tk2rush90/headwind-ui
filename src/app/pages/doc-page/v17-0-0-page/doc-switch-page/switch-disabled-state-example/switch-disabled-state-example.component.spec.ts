import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDisabledStateExampleComponent } from './switch-disabled-state-example.component';

describe('SwitchDisabledStateExampleComponent', () => {
  let component: SwitchDisabledStateExampleComponent;
  let fixture: ComponentFixture<SwitchDisabledStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchDisabledStateExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchDisabledStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
