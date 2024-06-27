import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesHomeComponent } from './ordenes-home.component';

describe('OrdenesHomeComponent', () => {
  let component: OrdenesHomeComponent;
  let fixture: ComponentFixture<OrdenesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenesHomeComponent]
    });
    fixture = TestBed.createComponent(OrdenesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
