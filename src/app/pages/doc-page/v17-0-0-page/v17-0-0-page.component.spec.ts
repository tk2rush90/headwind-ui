import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1700PageComponent } from './v17-0-0-page.component';

describe('V1700PageComponent', () => {
  let component: V1700PageComponent;
  let fixture: ComponentFixture<V1700PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V1700PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(V1700PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
