import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCitasMedicoComponent } from './registrar-citas-medico.component';

describe('RegistrarCitasMedicoComponent', () => {
  let component: RegistrarCitasMedicoComponent;
  let fixture: ComponentFixture<RegistrarCitasMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarCitasMedicoComponent]
    });
    fixture = TestBed.createComponent(RegistrarCitasMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
