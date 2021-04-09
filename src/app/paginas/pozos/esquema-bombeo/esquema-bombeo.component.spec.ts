import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquemaBombeoComponent } from './esquema-bombeo.component';

describe('EsquemaBombeoComponent', () => {
  let component: EsquemaBombeoComponent;
  let fixture: ComponentFixture<EsquemaBombeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsquemaBombeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsquemaBombeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
