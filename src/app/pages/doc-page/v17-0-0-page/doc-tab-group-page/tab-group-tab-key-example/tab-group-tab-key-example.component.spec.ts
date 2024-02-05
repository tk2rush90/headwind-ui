import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupTabKeyExampleComponent } from './tab-group-tab-key-example.component';

describe('TabGroupTabKeyExampleComponent', () => {
  let component: TabGroupTabKeyExampleComponent;
  let fixture: ComponentFixture<TabGroupTabKeyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupTabKeyExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabGroupTabKeyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
