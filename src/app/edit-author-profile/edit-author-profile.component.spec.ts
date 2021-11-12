import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuthorProfileComponent } from './edit-author-profile.component';

describe('EditAuthorProfileComponent', () => {
  let component: EditAuthorProfileComponent;
  let fixture: ComponentFixture<EditAuthorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAuthorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAuthorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
