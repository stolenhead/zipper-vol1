import { Component, OnInit ,Renderer2} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { faGlobeAmericas, faShoppingCart, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';


interface Data{
  state:boolean;
  messages: string;
  notification: string;
  articles: string;
  offerts: string;
  boughts: Boolean;
  
} 

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  //public currentUser: User;
  contactForm = new FormGroup({});

  isNavbarMobile: any;
  user: any;
  userData: any;
  prevUrl: any;

  menu = faBars;
  close = faTimes;
  cart = faShoppingCart;

  cartItems: any = 0;

  constructor(
    private renderer: Renderer2,
    ) { }

  ngOnInit() {
    this.isNavbarMobile= true;
    

  //   var cartObject = JSON.parse(localStorage.getItem('currentShoppingObject'))
  //   this.cartItems = cartObject['items'].length;
  }

  openSidebar(bool){
    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 1000) {
      this.isNavbarMobile = !bool;
      const sideElement = document.getElementById('sidebar-nav');
      (bool) ? this.renderer.addClass(sideElement, 'show'): this.renderer.removeClass(sideElement,'show');
   
      // (bool) ? this.renderer.addClass(document.body, 'push-container') : this.renderer.removeClass(document.body, 'push-container');
    
      // $('.navbar-toggler').toggleClass('close');
     // (bool) ? this.renderer.addClass(document.body, 'push-container') : this.renderer.removeClass(document.body, 'push-container')
    }
    else {
      this.isNavbarMobile = true;
      // $('.navbar-toggler').removeClass('close');
     // this.renderer.removeClass(document.body, 'push-container');
    }
  }

  quit() {
   
  }
}
