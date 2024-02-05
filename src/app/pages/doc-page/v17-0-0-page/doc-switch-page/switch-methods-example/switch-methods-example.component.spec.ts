import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMethodsExampleComponent } from './switch-methods-example.component';

describe('SwitchMethodsExampleComponent', () => {
  let component: SwitchMethodsExampleComponent;
  let fixture: ComponentFixture<SwitchMethodsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMethodsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchMethodsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
