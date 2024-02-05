import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersioningPageComponent } from './versioning-page.component';

describe('VersioningPageComponent', () => {
  let component: VersioningPageComponent;
  let fixture: ComponentFixture<VersioningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersioningPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersioningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
