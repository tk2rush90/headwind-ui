import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSelectPageComponent } from './doc-select-page.component';

describe('DocSelectPageComponent', () => {
  let component: DocSelectPageComponent;
  let fixture: ComponentFixture<DocSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocSelectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
