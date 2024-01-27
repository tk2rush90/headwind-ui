import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTabGroupPageComponent } from './default-tab-group-page.component';

describe('DefaultTabGroupPageComponent', () => {
  let component: DefaultTabGroupPageComponent;
  let fixture: ComponentFixture<DefaultTabGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultTabGroupPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultTabGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
