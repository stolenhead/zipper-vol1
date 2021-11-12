import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

interface Images {
  src: string;
}

@Component({
  selector: 'app-product-carousel-photos',
  templateUrl: './product-carousel-photos.component.html',
  styleUrls: ['./product-carousel-photos.component.scss']
})

export class ProductCarouselPhotosComponent  implements OnInit {
 
  constructor(
    public http: HttpClient) {}

   @Input() images: Images[];

  left = faArrowLeft;
  right = faArrowRight;
  
  observer;


  slideConfigMob = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots":true,
    "infinite":true,
    "arrows": false,
		"speed": 400,
    "cssEase": 'linear',
    "swipe": true,
  };

  ngOnInit(): void {
    console.log('pp')
  }

  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
}

