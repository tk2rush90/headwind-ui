import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSwitchExampleComponent } from './basic-switch-example.component';

describe('BasicSwitchExampleComponent', () => {
  let component: BasicSwitchExampleComponent;
  let fixture: ComponentFixture<BasicSwitchExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSwitchExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicSwitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
