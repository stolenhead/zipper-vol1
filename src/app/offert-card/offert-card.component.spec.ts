import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertCardComponent } from './offert-card.component';

describe('OffertCardComponent', () => {
  let component: OffertCardComponent;
  let fixture: ComponentFixture<OffertCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffertCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
