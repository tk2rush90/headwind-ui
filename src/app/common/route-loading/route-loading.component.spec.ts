import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLoadingComponent } from './route-loading.component';

describe('RouteLoadingComponent', () => {
  let component: RouteLoadingComponent;
  let fixture: ComponentFixture<RouteLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
