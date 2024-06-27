import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRolesComponent } from './registrar-roles.component';

describe('RegistrarRolesComponent', () => {
  let component: RegistrarRolesComponent;
  let fixture: ComponentFixture<RegistrarRolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarRolesComponent]
    });
    fixture = TestBed.createComponent(RegistrarRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
