import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductDescriptionComponent } from './shop-product-description.component';

describe('ShopProductDescriptionComponent', () => {
  let component: ShopProductDescriptionComponent;
  let fixture: ComponentFixture<ShopProductDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
