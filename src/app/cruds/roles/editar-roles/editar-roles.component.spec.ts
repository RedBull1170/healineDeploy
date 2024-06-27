import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRolesComponent } from './editar-roles.component';

describe('EditarRolesComponent', () => {
  let component: EditarRolesComponent;
  let fixture: ComponentFixture<EditarRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRolesComponent]
    });
    fixture = TestBed.createComponent(EditarRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
