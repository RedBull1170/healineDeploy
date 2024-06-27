import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsListarSecretariaComponent } from './pqrs-listar-secretaria.component';

describe('PqrsListarSecretariaComponent', () => {
  let component: PqrsListarSecretariaComponent;
  let fixture: ComponentFixture<PqrsListarSecretariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PqrsListarSecretariaComponent]
    });
    fixture = TestBed.createComponent(PqrsListarSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
