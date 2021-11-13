"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewsProductComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var NewsProductComponent = /** @class */ (function () {
    function NewsProductComponent(http) {
        this.http = http;
        this.left = free_solid_svg_icons_1.faArrowLeft;
        this.right = free_solid_svg_icons_1.faArrowRight;
        this.slides = [
            { img: "assets/images/landing/welcome_1.jpg" },
            { img: "assets/images/landing/welcome_2.jpg" },
            { img: "assets/images/landing/welcome_3.jpg" },
        ];
        this.slideConfig2 = {
            "slidesToShow": 5,
            "slidesToScroll": 1,
            "dots": false,
            "infinite": true,
            "arrows": true,
            "speed": 400,
            "cssEase": 'linear',
            "swipe": true,
            "responsive": [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    }
    NewsProductComponent.prototype.ngOnInit = function () {
        this.getProductData();
        this.gutterSize = '20';
    };
    NewsProductComponent.prototype.getProductData = function () {
        var _this = this;
        this.http.get('https://stolenhead.github.io/general-json/data/data.json').subscribe(function (res) {
            _this.cards = res.cards;
        });
    };
    NewsProductComponent.prototype.slickInit = function (e) {
        console.log('slick initialized');
    };
    NewsProductComponent.prototype.breakpoint = function (e) {
        console.log('breakpoint');
    };
    NewsProductComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    NewsProductComponent.prototype.beforeChange = function (e) {
        console.log('beforeChange');
    };
    __decorate([
        core_1.Input()
    ], NewsProductComponent.prototype, "gutterSize");
    NewsProductComponent = __decorate([
        core_1.Component({
            selector: 'app-news-product',
            templateUrl: './news-product.component.html',
            styleUrls: ['./news-product.component.scss']
        })
    ], NewsProductComponent);
    return NewsProductComponent;
}());
exports.NewsProductComponent = NewsProductComponent;
