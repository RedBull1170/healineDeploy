import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFormulasComponent } from './consultar-formulas.component';

describe('ConsultarFormulasComponent', () => {
  let component: ConsultarFormulasComponent;
  let fixture: ComponentFixture<ConsultarFormulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarFormulasComponent]
    });
    fixture = TestBed.createComponent(ConsultarFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
