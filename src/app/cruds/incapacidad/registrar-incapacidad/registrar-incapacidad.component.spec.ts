import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarIncapacidadComponent } from './registrar-incapacidad.component';

describe('RegistrarIncapacidadComponent', () => {
  let component: RegistrarIncapacidadComponent;
  let fixture: ComponentFixture<RegistrarIncapacidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarIncapacidadComponent]
    });
    fixture = TestBed.createComponent(RegistrarIncapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
