import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupAnimationExampleComponent } from './tab-group-animation-example.component';

describe('TabGroupAnimationExampleComponent', () => {
  let component: TabGroupAnimationExampleComponent;
  let fixture: ComponentFixture<TabGroupAnimationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupAnimationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabGroupAnimationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
