import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

interface CardType {
  new: boolean;
  profile: boolean;
  market: boolean;
} 

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
 
  @Input() data: Product;
  @Input() new: boolean = false ;
  @Input() profile: boolean = false;
  @Input() market: boolean = false;

  dataCasted: Product;
  // type: CardType  ={
  //   new: false,
  //   profile: false ,
  //   market: false 
  // };

  constructor() { }

  ngOnInit(): void {
    this.new = this.new !== undefined;
    this.profile = this.profile !== undefined;
    this.market = this.market !== undefined;

    this.getProductData()
  }


  getProductData(){
    this.dataCasted = <Product>this.data;
  }
}
