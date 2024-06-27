import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoFormulasComponent } from './medico-formulas.component';

describe('MedicoFormulasComponent', () => {
  let component: MedicoFormulasComponent;
  let fixture: ComponentFixture<MedicoFormulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoFormulasComponent]
    });
    fixture = TestBed.createComponent(MedicoFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
