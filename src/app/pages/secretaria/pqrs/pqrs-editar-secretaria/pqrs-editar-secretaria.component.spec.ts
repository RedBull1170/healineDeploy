import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsEditarSecretariaComponent } from './pqrs-editar-secretaria.component';

describe('PqrsEditarSecretariaComponent', () => {
  let component: PqrsEditarSecretariaComponent;
  let fixture: ComponentFixture<PqrsEditarSecretariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PqrsEditarSecretariaComponent]
    });
    fixture = TestBed.createComponent(PqrsEditarSecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
