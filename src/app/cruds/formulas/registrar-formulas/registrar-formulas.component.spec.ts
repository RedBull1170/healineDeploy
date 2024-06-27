import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFormulasComponent } from './registrar-formulas.component';

describe('RegistrarFormulasComponent', () => {
  let component: RegistrarFormulasComponent;
  let fixture: ComponentFixture<RegistrarFormulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarFormulasComponent]
    });
    fixture = TestBed.createComponent(RegistrarFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
