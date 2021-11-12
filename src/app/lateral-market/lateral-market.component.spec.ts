import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralProfileComponent } from './lateral-market.component';

describe('LateralProfileComponent', () => {
  let component: LateralProfileComponent;
  let fixture: ComponentFixture<LateralProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
