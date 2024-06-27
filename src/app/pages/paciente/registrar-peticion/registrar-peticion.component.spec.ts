import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPeticionComponent } from './registrar-peticion.component';

describe('RegistrarPeticionComponent', () => {
  let component: RegistrarPeticionComponent;
  let fixture: ComponentFixture<RegistrarPeticionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPeticionComponent]
    });
    fixture = TestBed.createComponent(RegistrarPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
