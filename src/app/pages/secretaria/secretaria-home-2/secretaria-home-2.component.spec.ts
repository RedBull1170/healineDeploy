import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariaHome2Component } from './secretaria-home-2.component';

describe('SecretariaHome2Component', () => {
  let component: SecretariaHome2Component;
  let fixture: ComponentFixture<SecretariaHome2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecretariaHome2Component]
    });
    fixture = TestBed.createComponent(SecretariaHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
