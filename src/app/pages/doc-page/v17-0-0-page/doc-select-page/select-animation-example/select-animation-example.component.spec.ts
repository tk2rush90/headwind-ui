import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnimationExampleComponent } from './select-animation-example.component';

describe('SelectAnimationExampleComponent', () => {
  let component: SelectAnimationExampleComponent;
  let fixture: ComponentFixture<SelectAnimationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAnimationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectAnimationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
