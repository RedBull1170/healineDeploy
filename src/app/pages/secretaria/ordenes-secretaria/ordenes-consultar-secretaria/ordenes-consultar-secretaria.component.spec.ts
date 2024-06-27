import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesConsultarSecretariaComponent } from './ordenes-consultar-secretaria.component';

describe('OrdenesConsultarSecretariaComponent', () => {
  let component: OrdenesConsultarSecretariaComponent;
  let fixture: ComponentFixture<OrdenesConsultarSecretariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenesConsultarSecretariaComponent]
    });
    fixture = TestBed.createComponent(OrdenesConsultarSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
