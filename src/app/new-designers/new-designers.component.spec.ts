import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDesignersComponent } from './new-designers.component';

describe('NewDesignersComponent', () => {
  let component: NewDesignersComponent;
  let fixture: ComponentFixture<NewDesignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDesignersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDesignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
