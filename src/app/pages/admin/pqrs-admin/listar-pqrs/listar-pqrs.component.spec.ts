import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPqrsComponent } from './listar-pqrs.component';

describe('ListarPqrsComponent', () => {
  let component: ListarPqrsComponent;
  let fixture: ComponentFixture<ListarPqrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPqrsComponent]
    });
    fixture = TestBed.createComponent(ListarPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
