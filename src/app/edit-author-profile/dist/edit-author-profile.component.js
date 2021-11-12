"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditAuthorProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var EditAuthorProfileComponent = /** @class */ (function () {
    function EditAuthorProfileComponent(fb, cd) {
        this.fb = fb;
        this.cd = cd;
        this.plus = free_solid_svg_icons_1.faPlusCircle;
        this.back = free_solid_svg_icons_1.faLongArrowAltLeft;
        this.editProfileForm = this.fb.group({
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
        this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
        this.editFile = true;
        this.removeUpload = false;
        this.submitted = false;
    }
    EditAuthorProfileComponent.prototype.ngOnInit = function () {
    };
    EditAuthorProfileComponent.prototype.uploadFile = function (event) {
        var _this = this;
        var reader = new FileReader(); // HTML5 FileReader API
        var file = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(file);
            // When file uploads set it to file formcontrol
            reader.onload = function () {
                _this.imageUrl = reader.result;
                _this.editPhoto.patchValue({
                    file: reader.result
                });
                _this.editFile = false;
                _this.removeUpload = true;
            };
            // ChangeDetectorRef since file is loading outside the zone
            this.cd.markForCheck();
        }
    };
    EditAuthorProfileComponent.prototype.removeUploadedFile = function () {
        var newFileList = Array.from(this.el.nativeElement.files);
        this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
        this.editFile = true;
        this.removeUpload = false;
        this.editPhoto.patchValue({
            file: [null]
        });
    };
    EditAuthorProfileComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.editPhoto.valid) {
            alert('Please fill all the required fields to create a super hero!');
            return false;
        }
        else {
            console.log(this.editPhoto.value);
        }
    };
    __decorate([
        core_1.ViewChild('fileInput')
    ], EditAuthorProfileComponent.prototype, "el");
    EditAuthorProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-author-profile',
            templateUrl: './edit-author-profile.component.html',
            styleUrls: ['./edit-author-profile.component.scss']
        })
    ], EditAuthorProfileComponent);
    return EditAuthorProfileComponent;
}());
exports.EditAuthorProfileComponent = EditAuthorProfileComponent;
