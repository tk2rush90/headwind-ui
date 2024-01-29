import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupPreviewComponent } from './tab-group-preview.component';

describe('TabGroupPreviewComponent', () => {
  let component: TabGroupPreviewComponent;
  let fixture: ComponentFixture<TabGroupPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabGroupPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
