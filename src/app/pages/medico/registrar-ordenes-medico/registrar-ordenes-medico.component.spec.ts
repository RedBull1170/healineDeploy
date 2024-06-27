import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOrdenesMedicoComponent } from './registrar-ordenes-medico.component';

describe('RegistrarOrdenesMedicoComponent', () => {
  let component: RegistrarOrdenesMedicoComponent;
  let fixture: ComponentFixture<RegistrarOrdenesMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarOrdenesMedicoComponent]
    });
    fixture = TestBed.createComponent(RegistrarOrdenesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
