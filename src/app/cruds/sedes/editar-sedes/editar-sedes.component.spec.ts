import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSedesComponent } from './editar-sedes.component';

describe('EditarSedesComponent', () => {
  let component: EditarSedesComponent;
  let fixture: ComponentFixture<EditarSedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSedesComponent]
    });
    fixture = TestBed.createComponent(EditarSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
