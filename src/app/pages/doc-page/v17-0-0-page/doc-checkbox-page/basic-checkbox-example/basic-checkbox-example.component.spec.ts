import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCheckboxExampleComponent } from './basic-checkbox-example.component';

describe('BasicCheckboxExampleComponent', () => {
  let component: BasicCheckboxExampleComponent;
  let fixture: ComponentFixture<BasicCheckboxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCheckboxExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicCheckboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
