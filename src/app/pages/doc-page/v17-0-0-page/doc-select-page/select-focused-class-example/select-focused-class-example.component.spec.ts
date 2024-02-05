import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFocusedClassExampleComponent } from './select-focused-class-example.component';

describe('SelectFocusedClassExampleComponent', () => {
  let component: SelectFocusedClassExampleComponent;
  let fixture: ComponentFixture<SelectFocusedClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFocusedClassExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectFocusedClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
