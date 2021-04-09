import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPozozPrComponent } from './alta-pozoz-pr.component';

describe('AltaPozozPrComponent', () => {
  let component: AltaPozozPrComponent;
  let fixture: ComponentFixture<AltaPozozPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPozozPrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPozozPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
