import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTabGroupExampleComponent } from './basic-tab-group-example.component';

describe('BasicTabGroupExampleComponent', () => {
  let component: BasicTabGroupExampleComponent;
  let fixture: ComponentFixture<BasicTabGroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTabGroupExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicTabGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
