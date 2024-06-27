import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilSecretariaComponent } from './editar-perfil-secretaria.component';

describe('EditarPerfilSecretariaComponent', () => {
  let component: EditarPerfilSecretariaComponent;
  let fixture: ComponentFixture<EditarPerfilSecretariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPerfilSecretariaComponent]
    });
    fixture = TestBed.createComponent(EditarPerfilSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
