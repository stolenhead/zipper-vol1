
import { NgModule, Component, ElementRef, NgZone, OnInit, OnDestroy, Input } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
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

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true,
    "infinite": false,
    "swipe": true,
  };

  constructor(
    private host: ElementRef,
    public http: HttpClient) {}

    ngOnInit(): void {
      this.getProductData();
    
      this.gutterSize = '20' 
    }
  
    getProductData(){
    this.http.get('/cards').subscribe((res)=>{
        this.cards = <Product[]>res;
      
      })
    }
 

}
