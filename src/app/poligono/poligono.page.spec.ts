import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoligonoPage } from './poligono.page';

describe('PoligonoPage', () => {
  let component: PoligonoPage;
  let fixture: ComponentFixture<PoligonoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoligonoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoligonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
