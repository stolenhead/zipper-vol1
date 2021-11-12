import { Component, OnInit, Renderer2 } from '@angular/core';
import { faCalendar, faHeart, faUserCircle, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { FormBuilder, FormGroup,FormArray, Validators } from "@angular/forms";


interface ProfileList {
  name: string;
  icon: object;
  active: boolean;
}

interface Category {
  id:string;
  name: string;
}

@Component({
  selector: 'app-lateral-market',
  templateUrl: './lateral-market.component.html',
  styleUrls: ['./lateral-market.component.scss']
})
export class LateralMarketComponent implements OnInit {

  heart = faCalendar;
  calendar = faHeart;
  user = faUserCircle;
  arrowRight = faChevronRight;

  showIcon:boolean = false;
  arrowActive:boolean = true;
  isFilterMob: boolean = true;
  cards: Product[];

  categories: Category[]= [
    {
      id:'tops',
      name:'tops'
    },
    {
      id:'pantalón',
      name:'pantalón'
    },
    {
      id:'faldas',
      name:'faldas'
    },
    {
      id:'shorts',
      name:'shorts'
    },
    {
      id:'vestidos',
      name:'vestidos'
    },
    {
      id:'chaquetas',
      name:'chaquetas'
    },
    {
      id:'accesorios',
      name:'accesorios'
    },
    {
      id:'zapatos',
      name:'zapatos'
    }
  ]

  categoriesForm = this.fb.group({
    category: ['', [Validators.required]]
  })

  observer;
  public innerWidth: any;


  constructor(
    public http: HttpClient,
    public fb: FormBuilder,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.calcWindowWidth();
  }


  calcWindowWidth(){
    if(this.innerWidth < '520'){
      this.showIcon= true
    }
  }

  openSidebar(bool){
    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 1000) {
      this.isFilterMob = !bool;
      const sideElement = document.getElementById('lateral');
      (bool) ? this.renderer.addClass(sideElement, 'show'): this.renderer.removeClass(sideElement,'show');
    }
    else {
      this.isFilterMob = true;
    }
  }
}
