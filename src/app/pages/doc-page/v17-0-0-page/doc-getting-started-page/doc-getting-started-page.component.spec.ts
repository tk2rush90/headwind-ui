import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocGettingStartedPageComponent } from './doc-getting-started-page.component';

describe('DocGettingStartedPageComponent', () => {
  let component: DocGettingStartedPageComponent;
  let fixture: ComponentFixture<DocGettingStartedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocGettingStartedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocGettingStartedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
