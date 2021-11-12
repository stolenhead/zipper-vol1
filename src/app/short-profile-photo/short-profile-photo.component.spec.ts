import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortProfilePhotoComponent } from './short-profile-photo.component';

describe('ShortProfilePhotoComponent', () => {
  let component: ShortProfilePhotoComponent;
  let fixture: ComponentFixture<ShortProfilePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortProfilePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
