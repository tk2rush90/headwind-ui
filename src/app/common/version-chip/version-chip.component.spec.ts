import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionChipComponent } from './version-chip.component';

describe('VersionChipComponent', () => {
  let component: VersionChipComponent;
  let fixture: ComponentFixture<VersionChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionChipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersionChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
