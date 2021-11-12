"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var market_component_1 = require("./market/market.component");
var profile_component_1 = require("./profile/profile.component");
var product_description_component_1 = require("./product-description/product-description.component");
var edit_author_profile_component_1 = require("./edit-author-profile/edit-author-profile.component");
var login_component_1 = require("./login/login.component");
var shop_list_component_1 = require("./shop-list/shop-list.component");
var checkout_component_1 = require("./checkout/checkout.component");
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'product/:name',
        component: product_description_component_1.ProductDescriptionComponent
    },
    {
        path: 'profile/:user',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'account/edit',
        component: edit_author_profile_component_1.EditAuthorProfileComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'comprar',
        component: market_component_1.MarketComponent
    },
    {
        path: 'shop-list',
        component: shop_list_component_1.ShopListComponent
    },
    {
        path: 'shop-list/:name',
        component: shop_list_component_1.ShopListComponent
    },
    {
        path: 'checkout/:id',
        component: checkout_component_1.CheckoutComponent
    },
    {
        path: 'mujeres',
        component: market_component_1.MarketComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [router_1.RouterModule.forRoot(routes), common_1.CommonModule],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
