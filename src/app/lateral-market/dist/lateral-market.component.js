"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LateralMarketComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var forms_1 = require("@angular/forms");
var LateralMarketComponent = /** @class */ (function () {
    function LateralMarketComponent(http, fb, renderer) {
        this.http = http;
        this.fb = fb;
        this.renderer = renderer;
        this.heart = free_solid_svg_icons_1.faCalendar;
        this.calendar = free_solid_svg_icons_1.faHeart;
        this.user = free_solid_svg_icons_1.faUserCircle;
        this.arrowRight = free_solid_svg_icons_1.faChevronRight;
        this.showIcon = false;
        this.arrowActive = true;
        this.isFilterMob = true;
        this.categories = [
            {
                id: 'tops',
                name: 'tops'
            },
            {
                id: 'pantalón',
                name: 'pantalón'
            },
            {
                id: 'faldas',
                name: 'faldas'
            },
            {
                id: 'shorts',
                name: 'shorts'
            },
            {
                id: 'vestidos',
                name: 'vestidos'
            },
            {
                id: 'chaquetas',
                name: 'chaquetas'
            },
            {
                id: 'accesorios',
                name: 'accesorios'
            },
            {
                id: 'zapatos',
                name: 'zapatos'
            }
        ];
        this.categoriesForm = this.fb.group({
            category: ['', [forms_1.Validators.required]]
        });
    }
    LateralMarketComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.calcWindowWidth();
    };
    LateralMarketComponent.prototype.calcWindowWidth = function () {
        if (this.innerWidth < '520') {
            this.showIcon = true;
        }
    };
    LateralMarketComponent.prototype.openSidebar = function (bool) {
        if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 1000) {
            this.isFilterMob = !bool;
            var sideElement = document.getElementById('lateral');
            (bool) ? this.renderer.addClass(sideElement, 'show') : this.renderer.removeClass(sideElement, 'show');
        }
        else {
            this.isFilterMob = true;
        }
    };
    LateralMarketComponent = __decorate([
        core_1.Component({
            selector: 'app-lateral-market',
            templateUrl: './lateral-market.component.html',
            styleUrls: ['./lateral-market.component.scss']
        })
    ], LateralMarketComponent);
    return LateralMarketComponent;
}());
exports.LateralMarketComponent = LateralMarketComponent;
