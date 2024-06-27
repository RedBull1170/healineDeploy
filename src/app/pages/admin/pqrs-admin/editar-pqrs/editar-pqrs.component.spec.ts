import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPqrsComponent } from './editar-pqrs.component';

describe('EditarPqrsComponent', () => {
  let component: EditarPqrsComponent;
  let fixture: ComponentFixture<EditarPqrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPqrsComponent]
    });
    fixture = TestBed.createComponent(EditarPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
