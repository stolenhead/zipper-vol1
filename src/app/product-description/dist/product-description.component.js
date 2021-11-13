"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDescriptionComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ProductDescriptionComponent = /** @class */ (function () {
    function ProductDescriptionComponent(http, route) {
        this.http = http;
        this.route = route;
        this.back = free_solid_svg_icons_1.faLongArrowAltLeft;
        this.heart = free_solid_svg_icons_1.faHeart;
        this.objectKeys = Object.keys;
    }
    ProductDescriptionComponent.prototype.ngOnInit = function () {
        this.getWidth();
        this.id = this.route.snapshot.paramMap.get('id');
        this.getDescription();
    };
    ProductDescriptionComponent.prototype.getDescription = function () {
        var _this = this;
        var url = "/cards/" + this.id;
        this.http.get('https://stolenhead.github.io/general-json/data/data.json').subscribe(function (res) {
            _this.productDescription = res.description[0];
        });
    };
    ProductDescriptionComponent.prototype.getWidth = function () {
        if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 811) {
            this.isMobile = true;
            console.log('kk');
        }
        else {
            this.isMobile = false;
        }
    };
    ProductDescriptionComponent = __decorate([
        core_1.Component({
            selector: 'app-product-description',
            templateUrl: './product-description.component.html',
            styleUrls: ['./product-description.component.scss']
        })
    ], ProductDescriptionComponent);
    return ProductDescriptionComponent;
}());
exports.ProductDescriptionComponent = ProductDescriptionComponent;
