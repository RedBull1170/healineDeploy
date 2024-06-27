import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulasHomeComponent } from './formulas-home.component';

describe('FormulasHomeComponent', () => {
  let component: FormulasHomeComponent;
  let fixture: ComponentFixture<FormulasHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulasHomeComponent]
    });
    fixture = TestBed.createComponent(FormulasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
