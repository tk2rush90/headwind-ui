import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDisabledStateExampleComponent } from './select-disabled-state-example.component';

describe('SelectDisabledStateExampleComponent', () => {
  let component: SelectDisabledStateExampleComponent;
  let fixture: ComponentFixture<SelectDisabledStateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDisabledStateExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectDisabledStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
