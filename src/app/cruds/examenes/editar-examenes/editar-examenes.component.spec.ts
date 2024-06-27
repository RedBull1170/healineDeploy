import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenesComponent } from './editar-examenes.component';

describe('EditarExamenesComponent', () => {
  let component: EditarExamenesComponent;
  let fixture: ComponentFixture<EditarExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarExamenesComponent]
    });
    fixture = TestBed.createComponent(EditarExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
