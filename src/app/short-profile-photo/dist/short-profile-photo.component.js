"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShortProfilePhotoComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ShortProfilePhotoComponent = /** @class */ (function () {
    function ShortProfilePhotoComponent() {
        this.star = free_solid_svg_icons_1.faStar;
        this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    }
    ShortProfilePhotoComponent.prototype.ngOnInit = function () {
    };
    ShortProfilePhotoComponent = __decorate([
        core_1.Component({
            selector: 'app-short-profile-photo',
            templateUrl: './short-profile-photo.component.html',
            styleUrls: ['./short-profile-photo.component.scss']
        })
    ], ShortProfilePhotoComponent);
    return ShortProfilePhotoComponent;
}());
exports.ShortProfilePhotoComponent = ShortProfilePhotoComponent;
