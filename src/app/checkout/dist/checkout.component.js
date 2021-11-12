"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckoutComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
;
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(fb) {
        this.fb = fb;
        this.submitCheckout = this.fb.group({
            name: ['', [forms_1.Validators.required]],
            lastName: ['', [forms_1.Validators.required]],
            country: ['', [forms_1.Validators.required]],
            street: [''],
            optionalStreet: ['', [forms_1.Validators.required]],
            region: ['', [forms_1.Validators.required]],
            zipCode: ['', [forms_1.Validators.required]],
            email: ['', [forms_1.Validators.required]],
            terms: ['', [forms_1.Validators.required]],
            number: ['', [forms_1.Validators.required]],
            city: ['', [forms_1.Validators.required]],
            notes: ['']
        });
        this.submitPay = this.fb.group({
            payWay: ['', [forms_1.Validators.required]]
        });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.scss']
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
