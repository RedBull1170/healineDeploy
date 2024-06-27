import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenesComponent } from './editar-ordenes.component';

describe('EditarOrdenesComponent', () => {
  let component: EditarOrdenesComponent;
  let fixture: ComponentFixture<EditarOrdenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarOrdenesComponent]
    });
    fixture = TestBed.createComponent(EditarOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
