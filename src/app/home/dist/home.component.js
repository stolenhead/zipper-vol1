"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(host, http) {
        this.host = host;
        this.http = http;
        this.left = free_solid_svg_icons_1.faArrowLeft;
        this.right = free_solid_svg_icons_1.faArrowRight;
        this.slides = [
            { img: "../../assets/images/landing/welcome_1.jpg" },
            { img: "../../assets/images/landing/welcome_2.jpg" },
            { img: "../../assets/images/landing/welcome_3.jpg" },
        ];
        this.slideConfig = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "arrows": false,
            "dots": true,
            "infinite": false,
            "swipe": true
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProductData();
        this.gutterSize = '20';
    };
    HomeComponent.prototype.getProductData = function () {
        var _this = this;
        this.http.get('/cards').subscribe(function (res) {
            _this.cards = res;
        });
    };
    __decorate([
        core_1.Input()
    ], HomeComponent.prototype, "gutterSize");
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
