import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule} from '@angular/material/card'; 
import { MatInputModule} from '@angular/material/input'; 
import { MatGridListModule} from '@angular/material/grid-list'; 
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { OffertCardComponent } from './offert-card/offert-card.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { BidsComponent } from './bids/bids.component';
import { AuthorProfileComponent } from './author-profile/author-profile.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MatTabsModule } from '@angular/material/tabs'; 
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewDesignersComponent } from './new-designers/new-designers.component';
import { VerticalSpaceComponent } from './vertical-space/vertical-space.component';
import { LateralMarketComponent } from './lateral-market/lateral-market.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NewsProductComponent } from './news-product/news-product.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FooterComponent } from './footer/footer.component';
import { MarketComponent } from './market/market.component';
import { BottomAuthorProfileComponent } from './bottom-author-profile/bottom-author-profile.component';
import { EditAuthorProfileComponent } from './edit-author-profile/edit-author-profile.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { ShortProfilePhotoComponent } from './short-profile-photo/short-profile-photo.component';
import { FollowBtnComponent } from './follow-btn/follow-btn.component';
import { ProductCarouselPhotosComponent } from './product-carousel-photos/product-carousel-photos.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopProductDescriptionComponent } from './shop-product-description/shop-product-description.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductCardComponent,
    OffertCardComponent,
    ProfileComponent,
    BidsComponent,
    AuthorProfileComponent,
    ProductDescriptionComponent,
    NewDesignersComponent,
    VerticalSpaceComponent,
    LateralMarketComponent,
    ProfilePhotoComponent,
    NewsProductComponent,
    BenefitsComponent,
    FooterComponent,
    MarketComponent,
    BottomAuthorProfileComponent,
    EditAuthorProfileComponent,
    ModalComponent,
    LoginComponent,
    ShortProfilePhotoComponent,
    FollowBtnComponent,
    ProductCarouselPhotosComponent,
    ShopListComponent,
    CheckoutComponent,
    ShopProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule,
    MatTabsModule,
    NgxImageZoomModule,
    SlickCarouselModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
