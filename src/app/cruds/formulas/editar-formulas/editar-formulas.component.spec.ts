import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormulasComponent } from './editar-formulas.component';

describe('EditarFormulasComponent', () => {
  let component: EditarFormulasComponent;
  let fixture: ComponentFixture<EditarFormulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFormulasComponent]
    });
    fixture = TestBed.createComponent(EditarFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
