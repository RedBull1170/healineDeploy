import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHome2Component } from './admin-home-2.component';

describe('AdminHome2Component', () => {
  let component: AdminHome2Component;
  let fixture: ComponentFixture<AdminHome2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHome2Component]
    });
    fixture = TestBed.createComponent(AdminHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
