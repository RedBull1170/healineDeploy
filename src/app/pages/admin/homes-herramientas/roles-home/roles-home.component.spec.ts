import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesHomeComponent } from './roles-home.component';

describe('RolesHomeComponent', () => {
  let component: RolesHomeComponent;
  let fixture: ComponentFixture<RolesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesHomeComponent]
    });
    fixture = TestBed.createComponent(RolesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
