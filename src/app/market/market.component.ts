import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  products: Product[];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    this.http.get('https://stolenhead.github.io/general-json/data/data.json/').subscribe((res:any)=>{
        this.products =  res.cards;
       
    })
  }
}

