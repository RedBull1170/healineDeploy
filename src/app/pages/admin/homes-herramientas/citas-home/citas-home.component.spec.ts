import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasHomeComponent } from './citas-home.component';

describe('CitasHomeComponent', () => {
  let component: CitasHomeComponent;
  let fixture: ComponentFixture<CitasHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasHomeComponent]
    });
    fixture = TestBed.createComponent(CitasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
