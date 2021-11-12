"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductCarouselPhotosComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ProductCarouselPhotosComponent = /** @class */ (function () {
    function ProductCarouselPhotosComponent(http) {
        this.http = http;
        this.left = free_solid_svg_icons_1.faArrowLeft;
        this.right = free_solid_svg_icons_1.faArrowRight;
        this.slideConfigMob = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "dots": true,
            "infinite": true,
            "arrows": false,
            "speed": 400,
            "cssEase": 'linear',
            "swipe": true
        };
    }
    ProductCarouselPhotosComponent.prototype.ngOnInit = function () {
        console.log('pp');
    };
    ProductCarouselPhotosComponent.prototype.slickInit = function (e) {
        console.log('slick initialized');
    };
    ProductCarouselPhotosComponent.prototype.breakpoint = function (e) {
        console.log('breakpoint');
    };
    ProductCarouselPhotosComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    ProductCarouselPhotosComponent.prototype.beforeChange = function (e) {
        console.log('beforeChange');
    };
    __decorate([
        core_1.Input()
    ], ProductCarouselPhotosComponent.prototype, "images");
    ProductCarouselPhotosComponent = __decorate([
        core_1.Component({
            selector: 'app-product-carousel-photos',
            templateUrl: './product-carousel-photos.component.html',
            styleUrls: ['./product-carousel-photos.component.scss']
        })
    ], ProductCarouselPhotosComponent);
    return ProductCarouselPhotosComponent;
}());
exports.ProductCarouselPhotosComponent = ProductCarouselPhotosComponent;
