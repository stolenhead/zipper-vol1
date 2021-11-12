"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var navigation_component_1 = require("./navigation/navigation.component");
var menu_1 = require("@angular/material/menu");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var input_1 = require("@angular/material/input");
var grid_list_1 = require("@angular/material/grid-list");
var sidenav_1 = require("@angular/material/sidenav");
var dialog_1 = require("@angular/material/dialog");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var home_component_1 = require("./home/home.component");
var product_card_component_1 = require("./product-card/product-card.component");
var offert_card_component_1 = require("./offert-card/offert-card.component");
var profile_component_1 = require("./profile/profile.component");
var app_routing_module_1 = require("./app-routing.module");
var bids_component_1 = require("./bids/bids.component");
var author_profile_component_1 = require("./author-profile/author-profile.component");
var product_description_component_1 = require("./product-description/product-description.component");
var ngx_image_zoom_1 = require("ngx-image-zoom");
var tabs_1 = require("@angular/material/tabs");
var ngx_slick_carousel_1 = require("ngx-slick-carousel");
var flex_layout_1 = require("@angular/flex-layout");
var new_designers_component_1 = require("./new-designers/new-designers.component");
var vertical_space_component_1 = require("./vertical-space/vertical-space.component");
var lateral_market_component_1 = require("./lateral-market/lateral-market.component");
var profile_photo_component_1 = require("./profile-photo/profile-photo.component");
var forms_1 = require("@angular/forms");
var news_product_component_1 = require("./news-product/news-product.component");
var benefits_component_1 = require("./benefits/benefits.component");
var footer_component_1 = require("./footer/footer.component");
var market_component_1 = require("./market/market.component");
var bottom_author_profile_component_1 = require("./bottom-author-profile/bottom-author-profile.component");
var edit_author_profile_component_1 = require("./edit-author-profile/edit-author-profile.component");
var modal_component_1 = require("./modal/modal.component");
var login_component_1 = require("./login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                home_component_1.HomeComponent,
                product_card_component_1.ProductCardComponent,
                offert_card_component_1.OffertCardComponent,
                profile_component_1.ProfileComponent,
                bids_component_1.BidsComponent,
                author_profile_component_1.AuthorProfileComponent,
                product_description_component_1.ProductDescriptionComponent,
                new_designers_component_1.NewDesignersComponent,
                vertical_space_component_1.VerticalSpaceComponent,
                lateral_market_component_1.LateralMarketComponent,
                profile_photo_component_1.ProfilePhotoComponent,
                news_product_component_1.NewsProductComponent,
                benefits_component_1.BenefitsComponent,
                footer_component_1.FooterComponent,
                market_component_1.MarketComponent,
                bottom_author_profile_component_1.BottomAuthorProfileComponent,
                edit_author_profile_component_1.EditAuthorProfileComponent,
                modal_component_1.ModalComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                menu_1.MatMenuModule,
                button_1.MatButtonModule,
                angular_fontawesome_1.FontAwesomeModule,
                http_1.HttpClientModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                app_routing_module_1.AppRoutingModule,
                tabs_1.MatTabsModule,
                ngx_image_zoom_1.NgxImageZoomModule,
                ngx_slick_carousel_1.SlickCarouselModule,
                flex_layout_1.FlexLayoutModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                input_1.MatInputModule,
                sidenav_1.MatSidenavModule,
                dialog_1.MatDialogModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
