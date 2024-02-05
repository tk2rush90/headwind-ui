import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSelectedClassExampleComponent } from './select-selected-class-example.component';

describe('SelectSelectedClassExampleComponent', () => {
  let component: SelectSelectedClassExampleComponent;
  let fixture: ComponentFixture<SelectSelectedClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSelectedClassExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectSelectedClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
