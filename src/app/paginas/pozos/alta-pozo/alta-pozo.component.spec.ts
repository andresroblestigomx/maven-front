import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPozoComponent } from './alta-pozo.component';

describe('AltaPozoComponent', () => {
  let component: AltaPozoComponent;
  let fixture: ComponentFixture<AltaPozoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPozoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
