import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEtapasComponent } from './alta-etapas.component';

describe('AltaEtapasComponent', () => {
  let component: AltaEtapasComponent;
  let fixture: ComponentFixture<AltaEtapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaEtapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
