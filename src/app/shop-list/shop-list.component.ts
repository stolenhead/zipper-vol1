import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Shop} from '../models/shop';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  shopList: Shop[];
  close = faTimes;
  shopId: string = '';

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    this.http.get('https://stolenhead.github.io/general-json/data/data.json').subscribe((res:any)=>{
        this.shopList = res.shop.products;
        this.shopId = res.shop.id;
    })
  }


}
