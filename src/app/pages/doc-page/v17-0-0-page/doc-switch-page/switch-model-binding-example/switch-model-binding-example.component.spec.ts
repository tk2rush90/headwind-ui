import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchModelBindingExampleComponent } from './switch-model-binding-example.component';

describe('SwitchModelBindingExampleComponent', () => {
  let component: SwitchModelBindingExampleComponent;
  let fixture: ComponentFixture<SwitchModelBindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchModelBindingExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchModelBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
