"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MarketComponent = void 0;
var core_1 = require("@angular/core");
var MarketComponent = /** @class */ (function () {
    function MarketComponent(http) {
        this.http = http;
    }
    MarketComponent.prototype.ngOnInit = function () {
        this.getProductData();
    };
    MarketComponent.prototype.getProductData = function () {
        var _this = this;
        this.http.get('https://stolenhead.github.io/general-json/data/data.json').subscribe(function (res) {
            _this.products = res.cards;
        });
    };
    MarketComponent = __decorate([
        core_1.Component({
            selector: 'app-market',
            templateUrl: './market.component.html',
            styleUrls: ['./market.component.scss']
        })
    ], MarketComponent);
    return MarketComponent;
}());
exports.MarketComponent = MarketComponent;
