import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupSelectedClassExampleComponent } from './tab-group-selected-class-example.component';

describe('TabGroupSelectedStateExampleComponent', () => {
  let component: TabGroupSelectedClassExampleComponent;
  let fixture: ComponentFixture<TabGroupSelectedClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupSelectedClassExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabGroupSelectedClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
