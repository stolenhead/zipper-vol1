"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShopListComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ShopListComponent = /** @class */ (function () {
    function ShopListComponent(http) {
        this.http = http;
        this.close = free_solid_svg_icons_1.faTimes;
        this.shopId = '';
    }
    ShopListComponent.prototype.ngOnInit = function () {
        this.getProductData();
    };
    ShopListComponent.prototype.getProductData = function () {
        var _this = this;
        this.http.get('/shop').subscribe(function (res) {
            _this.shopList = res.products;
            _this.shopId = res.id;
        });
    };
    ShopListComponent = __decorate([
        core_1.Component({
            selector: 'app-shop-list',
            templateUrl: './shop-list.component.html',
            styleUrls: ['./shop-list.component.scss']
        })
    ], ShopListComponent);
    return ShopListComponent;
}());
exports.ShopListComponent = ShopListComponent;
