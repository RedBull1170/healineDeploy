import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFalseComponent } from './user-false.component';

describe('UserFalseComponent', () => {
  let component: UserFalseComponent;
  let fixture: ComponentFixture<UserFalseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFalseComponent]
    });
    fixture = TestBed.createComponent(UserFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
