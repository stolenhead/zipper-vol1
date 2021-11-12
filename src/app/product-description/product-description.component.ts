import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { faLongArrowAltLeft, faHeart, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { Description } from '../models/description';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  productDescription: Description ;
  id : string;
  back = faLongArrowAltLeft;
  heart = faHeart;
  isMobile: boolean ;
  objectKeys = Object.keys;

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.getWidth()
      this.id = this.route.snapshot.paramMap.get('id');
      this.getDescription();
  }

  getDescription(){
    const url = `/cards/${this.id}`;
    
    this.http.get('http://localhost:3333/description').subscribe((res)=>{
      this.productDescription  = <Description> res[0];
    })
    
  }

  getWidth(){
    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 811) {
      this.isMobile = true;
      console.log('kk')
    }else{
      this.isMobile = false;
    }
  }
 
}
