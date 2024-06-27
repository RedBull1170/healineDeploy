import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarRolesComponent } from './editar-consultar-roles.component';

describe('EditarConsultarRolesComponent', () => {
  let component: EditarConsultarRolesComponent;
  let fixture: ComponentFixture<EditarConsultarRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarRolesComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
