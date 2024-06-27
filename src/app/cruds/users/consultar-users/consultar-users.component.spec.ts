import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUsersComponent } from './consultar-users.component';

describe('ConsultarUsersComponent', () => {
  let component: ConsultarUsersComponent;
  let fixture: ComponentFixture<ConsultarUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarUsersComponent]
    });
    fixture = TestBed.createComponent(ConsultarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
