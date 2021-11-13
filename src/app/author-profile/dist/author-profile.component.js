"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthorProfileComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var AuthorProfileComponent = /** @class */ (function () {
    function AuthorProfileComponent(http) {
        this.http = http;
        this.heart = free_solid_svg_icons_1.faCalendar;
        this.calendar = free_solid_svg_icons_1.faHeart;
        this.user = free_solid_svg_icons_1.faUserCircle;
    }
    AuthorProfileComponent.prototype.ngOnInit = function () {
        this.getProductData();
    };
    AuthorProfileComponent.prototype.getProductData = function () {
        var _this = this;
        this.http.get('https://stolenhead.github.io/general-json/data/data.json').subscribe(function (res) {
            _this.cards = res.cards;
        });
    };
    AuthorProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-author-profile',
            templateUrl: './author-profile.component.html',
            styleUrls: ['./author-profile.component.scss']
        })
    ], AuthorProfileComponent);
    return AuthorProfileComponent;
}());
exports.AuthorProfileComponent = AuthorProfileComponent;
