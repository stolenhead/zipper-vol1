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
    this.http.get('/cards').subscribe((res:Product[])=>{
        this.products = res;
    })
  }
}

