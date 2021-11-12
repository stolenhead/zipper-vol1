import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators } from "@angular/forms";

import {Shop } from '../models/shop';

@Component({
  selector: 'app-shop-product-description',
  templateUrl: './shop-product-description.component.html',
  styleUrls: ['./shop-product-description.component.scss']
})

export class ShopProductDescriptionComponent implements OnInit {

  @Input() seleccionado: string = '1';
  @Input() shopListData: Shop;

  editProductQuantity = this.fb.group({
    quantity: ['', [Validators.required]]
  })

  lista:any = ['1', '2','3','4']

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log(this.shopListData, 'list')
  }

}
