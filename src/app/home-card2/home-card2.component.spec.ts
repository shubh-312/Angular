import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCard2Component } from './home-card2.component';

describe('HomeCard2Component', () => {
  let component: HomeCard2Component;
  let fixture: ComponentFixture<HomeCard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCard2Component]
    });
    fixture = TestBed.createComponent(HomeCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
