import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTabGroupPageComponent } from './doc-tab-group-page.component';

describe('DocTagGroupPageComponent', () => {
  let component: DocTabGroupPageComponent;
  let fixture: ComponentFixture<DocTabGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocTabGroupPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocTabGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
