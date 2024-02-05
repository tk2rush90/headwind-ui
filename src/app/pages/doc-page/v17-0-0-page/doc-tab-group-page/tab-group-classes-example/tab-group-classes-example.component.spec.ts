import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupClassesExampleComponent } from './tab-group-classes-example.component';

describe('TabGroupClassesExampleComponent', () => {
  let component: TabGroupClassesExampleComponent;
  let fixture: ComponentFixture<TabGroupClassesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupClassesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabGroupClassesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
