import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchClassesExampleComponent } from './switch-classes-example.component';

describe('SwitchClassesExampleComponent', () => {
  let component: SwitchClassesExampleComponent;
  let fixture: ComponentFixture<SwitchClassesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchClassesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchClassesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
