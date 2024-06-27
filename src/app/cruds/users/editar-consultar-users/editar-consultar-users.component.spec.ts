import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarUsersComponent } from './editar-consultar-users.component';

describe('EditarConsultarUsersComponent', () => {
  let component: EditarConsultarUsersComponent;
  let fixture: ComponentFixture<EditarConsultarUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarUsersComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
