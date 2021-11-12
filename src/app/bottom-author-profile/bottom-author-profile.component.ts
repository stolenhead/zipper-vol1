import { Component, OnInit } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-bottom-author-profile',
  templateUrl: './bottom-author-profile.component.html',
  styleUrls: ['./bottom-author-profile.component.scss']
})
export class BottomAuthorProfileComponent implements OnInit {

  add = faPlus;

  products: Product[];

  constructor(
    public http: HttpClient,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProductData();
  }

  openDialog() {
    const dialogRef = this.dialog.open( ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getProductData(){
    this.http.get('http://localhost:3333/cards').subscribe((res:Product[])=>{
        this.products = res;
    })
  }

}
