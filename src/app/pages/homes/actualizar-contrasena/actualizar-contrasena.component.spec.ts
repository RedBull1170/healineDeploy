import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarContrasenaComponent } from './actualizar-contrasena.component';

describe('ActualizarContrasenaComponent', () => {
  let component: ActualizarContrasenaComponent;
  let fixture: ComponentFixture<ActualizarContrasenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarContrasenaComponent]
    });
    fixture = TestBed.createComponent(ActualizarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
