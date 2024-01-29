import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSwitchPageComponent } from './doc-switch-page.component';

describe('DocSwitchPageComponent', () => {
  let component: DocSwitchPageComponent;
  let fixture: ComponentFixture<DocSwitchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocSwitchPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocSwitchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
