import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { EditAuthorProfileComponent} from './edit-author-profile/edit-author-profile.component';
import { LoginComponent } from './login/login.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path:'home' , 
    component: HomeComponent
  },
  {
    path:'profile' , 
    component: ProfileComponent
  },
  {
    path:'product/:name' , 
    component: ProductDescriptionComponent
  },
  {
    path:'profile/:user' , 
    component: ProfileComponent
  },
  {
    path:'account/edit' , 
    component: EditAuthorProfileComponent
  },
  {
    path:'login' , 
    component: LoginComponent
  },
  {
    path:'comprar' , 
    component: MarketComponent
  },
  {
    path:'shop-list',
    component: ShopListComponent
  },
  {
    path:'shop-list/:name',
    component: ShopListComponent
  },
  {
    path:'checkout/:id',
    component: CheckoutComponent
  },
  {
    path:'mujeres' , 
    component: MarketComponent
  },
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  }
];


@NgModule({
  declarations: [
  ],

  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
