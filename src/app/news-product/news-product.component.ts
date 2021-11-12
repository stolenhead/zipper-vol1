import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news-product',
  templateUrl: './news-product.component.html',
  styleUrls: ['./news-product.component.scss']
})
export class NewsProductComponent implements OnInit {
  
  
  constructor(
    public http: HttpClient) {}

  cards: Product[];
  left = faArrowLeft;
  right = faArrowRight;
  categories:Array<object>;
  @Input() gutterSize: string;
  
  observer;

  slides = [
    {img: "../../assets/images/landing/welcome_1.jpg"},
    {img: "../../assets/images/landing/welcome_2.jpg"},
    {img: "../../assets/images/landing/welcome_3.jpg"},
  ];

  slideConfig2 = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots":false,
    "infinite":true,
    "arrows": true,
		"speed": 400,
    "cssEase": 'linear',
    "swipe": true,
    "responsive": [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
    ]
  };

  ngOnInit(): void {
    this.getProductData();
    this.getCategories();
    this.gutterSize = '20' 
  }

  getProductData(){
  this.http.get('http://localhost:3333/cards').subscribe((res:Product[])=>{
      this.cards = res;
    })
  }

  getCategories(){
    this.http.get('http://localhost:3333/categories').subscribe((res:Product[])=>{
      this.categories = res;
      
    })
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
