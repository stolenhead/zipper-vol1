"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BottomAuthorProfileComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var modal_component_1 = require("../modal/modal.component");
var BottomAuthorProfileComponent = /** @class */ (function () {
    function BottomAuthorProfileComponent(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.add = free_solid_svg_icons_1.faPlus;
    }
    BottomAuthorProfileComponent.prototype.ngOnInit = function () {
        this.getProductData();
    };
    BottomAuthorProfileComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(modal_component_1.ModalComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    BottomAuthorProfileComponent.prototype.getProductData = function () {
        var _this = this;
        this.http.get('/cards').subscribe(function (res) {
            _this.products = res;
        });
    };
    BottomAuthorProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-bottom-author-profile',
            templateUrl: './bottom-author-profile.component.html',
            styleUrls: ['./bottom-author-profile.component.scss']
        })
    ], BottomAuthorProfileComponent);
    return BottomAuthorProfileComponent;
}());
exports.BottomAuthorProfileComponent = BottomAuthorProfileComponent;
