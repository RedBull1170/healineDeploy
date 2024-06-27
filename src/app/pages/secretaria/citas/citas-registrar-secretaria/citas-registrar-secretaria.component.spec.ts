import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasRegistrarSecretariaComponent } from './citas-registrar-secretaria.component';

describe('CitasRegistrarSecretariaComponent', () => {
  let component: CitasRegistrarSecretariaComponent;
  let fixture: ComponentFixture<CitasRegistrarSecretariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasRegistrarSecretariaComponent]
    });
    fixture = TestBed.createComponent(CitasRegistrarSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
