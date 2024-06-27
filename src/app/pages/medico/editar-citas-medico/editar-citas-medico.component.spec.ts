import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCitasMedicoComponent } from './editar-citas-medico.component';

describe('EditarCitasMedicoComponent', () => {
  let component: EditarCitasMedicoComponent;
  let fixture: ComponentFixture<EditarCitasMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCitasMedicoComponent]
    });
    fixture = TestBed.createComponent(EditarCitasMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
