import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarouselPhotosComponent } from './product-carousel-photos.component';

describe('ProductCarouselPhotosComponent', () => {
  let component: ProductCarouselPhotosComponent;
  let fixture: ComponentFixture<ProductCarouselPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCarouselPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
