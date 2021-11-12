import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomAuthorProfileComponent } from './bottom-author-profile.component';

describe('BottomAuthorProfileComponent', () => {
  let component: BottomAuthorProfileComponent;
  let fixture: ComponentFixture<BottomAuthorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomAuthorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomAuthorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
