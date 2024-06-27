import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFormulasMedicoComponent } from './registrar-formulas-medico.component';

describe('RegistrarFormulasMedicoComponent', () => {
  let component: RegistrarFormulasMedicoComponent;
  let fixture: ComponentFixture<RegistrarFormulasMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarFormulasMedicoComponent]
    });
    fixture = TestBed.createComponent(RegistrarFormulasMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
