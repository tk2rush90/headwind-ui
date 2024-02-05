import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClassesExampleComponent } from './select-classes-example.component';

describe('SelectClassesExampleComponent', () => {
  let component: SelectClassesExampleComponent;
  let fixture: ComponentFixture<SelectClassesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectClassesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectClassesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
