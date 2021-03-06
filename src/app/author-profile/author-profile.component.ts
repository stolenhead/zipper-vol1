import { Component, OnInit } from '@angular/core';
import { faCalendar, faHeart, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent implements OnInit {

  heart = faCalendar;
  calendar = faHeart;
  user = faUserCircle
  cards: Product[];
  observer;

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProductData()
  }

  getProductData(){
    this.http.get('https://stolenhead.github.io/general-json/data/data.json').subscribe((res:any)=>{
      this.cards = <Product[]>res.cards;
     
    })
  }

}
