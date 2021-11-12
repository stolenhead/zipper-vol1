"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(fb, cd, renderer) {
        this.fb = fb;
        this.cd = cd;
        this.renderer = renderer;
        this.back = free_solid_svg_icons_1.faLongArrowAltLeft;
        this.plus = free_solid_svg_icons_1.faPlusCircle;
        this.upload = free_solid_svg_icons_1.faUpload;
        this.close = free_solid_svg_icons_1.faTimesCircle;
        this.submitPhoto = this.fb.group({
            name: ['', [forms_1.Validators.required]],
            userName: ['', [forms_1.Validators.required]],
            wsspLink: ['', [forms_1.Validators.required]],
            bio: [''],
            email: ['', [forms_1.Validators.required]],
            number: [''],
            country: ['']
        });
        this.editPhoto = this.fb.group({
            file: [null]
        });
        this.images = [];
        this.imageUrl = '';
        this.editFile = true;
        this.removeUpload = false;
        this.submitted = false;
        this.photoUpload = false;
        this.nextStep = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var reader = new FileReader(); // HTML5 FileReader API
        var file = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(file);
            // When file uploads set it to file formcontrol
            reader.onload = function () {
                _this.imageUrl = reader.result;
                _this.images.push(reader.result);
                _this.editPhoto.patchValue({
                    file: reader.result
                });
                _this.photoUpload = true;
                console.log('pororo');
                var sideElement = document.getElementById('imagePreviewModal');
                var preview = document.getElementById('modalSubmitPhotoBox');
                if (_this.photoUpload) {
                    _this.renderer.addClass(sideElement, 'show');
                    _this.renderer.addClass(preview, 'show');
                }
                else {
                    console.log('llala');
                    _this.renderer.removeClass(sideElement, 'show');
                    _this.renderer.removeClass(preview, 'show');
                }
                _this.editFile = false;
                _this.removeUpload = true;
            };
            // ChangeDetectorRef since file is loading outside the zone
            this.cd.markForCheck();
        }
    };
    ModalComponent.prototype.removeUploadedFile = function () {
        var newFileList = Array.from(this.el.nativeElement.files);
        this.imageUrl = '';
        this.editFile = true;
        this.removeUpload = false;
        this.editPhoto.patchValue({
            file: [null]
        });
    };
    ModalComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.editPhoto.valid) {
            alert('Please fill all the required fields to create a super hero!');
            return false;
        }
        else {
            console.log('kkk');
        }
    };
    __decorate([
        core_1.ViewChild('filePhoto')
    ], ModalComponent.prototype, "el");
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss']
        })
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
