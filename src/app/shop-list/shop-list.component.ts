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
    this.http.get('http://localhost:3333/shop').subscribe((res:any)=>{
        this.shopList = res.products;
        this.shopId = res.id;
    })
  }


}
