import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIncapacidadComponent } from './editar-incapacidad.component';

describe('EditarIncapacidadComponent', () => {
  let component: EditarIncapacidadComponent;
  let fixture: ComponentFixture<EditarIncapacidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarIncapacidadComponent]
    });
    fixture = TestBed.createComponent(EditarIncapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
