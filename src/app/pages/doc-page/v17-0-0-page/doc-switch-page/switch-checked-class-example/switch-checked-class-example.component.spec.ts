import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCheckedClassExampleComponent } from './switch-checked-class-example.component';

describe('SwitchCheckedClassExampleComponent', () => {
  let component: SwitchCheckedClassExampleComponent;
  let fixture: ComponentFixture<SwitchCheckedClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCheckedClassExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchCheckedClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
