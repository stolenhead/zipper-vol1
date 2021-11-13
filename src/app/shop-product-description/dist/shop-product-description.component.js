"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShopProductDescriptionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ShopProductDescriptionComponent = /** @class */ (function () {
    function ShopProductDescriptionComponent(fb) {
        this.fb = fb;
        this.seleccionado = '1';
        this.editProductQuantity = this.fb.group({
            quantity: ['', [forms_1.Validators.required]]
        });
        this.lista = ['1', '2', '3', '4'];
    }
    ShopProductDescriptionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], ShopProductDescriptionComponent.prototype, "seleccionado");
    __decorate([
        core_1.Input()
    ], ShopProductDescriptionComponent.prototype, "shopListData");
    ShopProductDescriptionComponent = __decorate([
        core_1.Component({
            selector: 'app-shop-product-description',
            templateUrl: './shop-product-description.component.html',
            styleUrls: ['./shop-product-description.component.scss']
        })
    ], ShopProductDescriptionComponent);
    return ShopProductDescriptionComponent;
}());
exports.ShopProductDescriptionComponent = ShopProductDescriptionComponent;
