import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRadioGroupExampleComponent } from './basic-radio-group-example.component';

describe('BasicRadioGroupExampleComponent', () => {
  let component: BasicRadioGroupExampleComponent;
  let fixture: ComponentFixture<BasicRadioGroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicRadioGroupExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicRadioGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
