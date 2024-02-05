import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleExampleComponent } from './select-multiple-example.component';

describe('SelectMultipleExampleComponent', () => {
  let component: SelectMultipleExampleComponent;
  let fixture: ComponentFixture<SelectMultipleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectMultipleExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectMultipleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
