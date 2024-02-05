import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectValueExampleComponent } from './select-value-example.component';

describe('SelectValueExampleComponent', () => {
  let component: SelectValueExampleComponent;
  let fixture: ComponentFixture<SelectValueExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectValueExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectValueExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
