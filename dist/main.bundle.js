webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <div class=\"row\"></div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"contents\">\r\n      <div class=\"col-md-12\">\r\n        <app-menu></app-menu>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_components_footer_component__ = __webpack_require__("../../../../../src/app/shared/components/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_components_header_header_component__ = __webpack_require__("../../../../../src/app/shared/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_components_menu_menu_component__ = __webpack_require__("../../../../../src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_encoding_encoding_module__ = __webpack_require__("../../../../../src/app/encoding/encoding.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_encryption_encryption_module__ = __webpack_require__("../../../../../src/app/encryption/encryption.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_format_convertor_format_convertor_module__ = __webpack_require__("../../../../../src/app/format-convertor/format-convertor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_hashing_hashing_module__ = __webpack_require__("../../../../../src/app/hashing/hashing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_number_convertor_number_convertor_module__ = __webpack_require__("../../../../../src/app/number-convertor/number-convertor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_other_utility_other_utility_module__ = __webpack_require__("../../../../../src/app/other-utility/other-utility.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_formatter_formatter_module__ = __webpack_require__("../../../../../src/app/formatter/formatter.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Components




// Modules







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_components_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_encoding_encoding_module__["a" /* EncodingModule */],
            __WEBPACK_IMPORTED_MODULE_13_app_formatter_formatter_module__["a" /* FormatterModule */],
            __WEBPACK_IMPORTED_MODULE_8_app_encryption_encryption_module__["a" /* EncryptionModule */],
            __WEBPACK_IMPORTED_MODULE_9_app_format_convertor_format_convertor_module__["a" /* FormatConvertorModule */],
            __WEBPACK_IMPORTED_MODULE_10_app_hashing_hashing_module__["a" /* HashingModule */],
            __WEBPACK_IMPORTED_MODULE_11_app_number_convertor_number_convertor_module__["a" /* NumberConvertorModule */],
            __WEBPACK_IMPORTED_MODULE_12_app_other_utility_other_utility_module__["a" /* OtherUtilityModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/encoding/components/base64/base64.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n  <div class=\"col-md-7\">\r\n    <p class=\"utility-heading\">Base64 Encoding</p>\r\n    <div class=\"nav-tabs-custom\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li id=\"nav-tab-head-1\" class=\"active\">\r\n          <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\r\n        </li>\r\n        <li id=\"nav-tab-head-2\">\r\n          <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\" id=\"tab_1\">\r\n          <textarea name=\"input\" class=\"form-control\" placeholder=\"Enter text for encode or decode into base64 or in plain text...\" id=\"input\" cols=\"20\"\r\n            rows=\"18\" [ngModel]=\"defaultInput\" required></textarea>\r\n        </div>\r\n        <!-- /.tab-pane -->\r\n        <div class=\"tab-pane\" id=\"tab_2\">\r\n          <textarea name=\"result\" placeholder=\"Here will be the expected result...\" class=\"form-control\" id=\"result\" cols=\"20\" rows=\"18\" [(ngModel)]=\"resultText\"\r\n            [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!-- /.tab-content -->\r\n    </div>\r\n\r\n    <!-- Error Message -->\r\n    <div *ngIf=\"errorText\" class=\"alert alert-danger\">\r\n      <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">×</button>\r\n      <h4>\r\n        <i class=\"icon fa fa-ban\"></i> Alert!</h4>\r\n      <br>\r\n      <p>{{ errorText }}</p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-md-3\">\r\n\r\n    <div class=\"box box-solid\">\r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title\">Actions</h3>\r\n      </div>\r\n      <!-- /.box-header -->\r\n      <div class=\"box-body\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"stringToBase64(form)\">Encode</button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"base64ToString(form)\">Decode</button>\r\n        <hr>\r\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"setDefaultValue()\">Sample Text</button>\r\n      </div>\r\n      <!-- /.box-body -->\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/encoding/components/base64/base64.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base64Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Base64Component = (function () {
    function Base64Component() {
    }
    Base64Component.prototype.setDefaultValue = function () {
        this.defaultInput = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
    };
    Base64Component.prototype.stringToBase64 = function (form) {
        var input = form.value.input;
        this.resultText = btoa(input);
        this.focusOnResultTab();
    };
    Base64Component.prototype.base64ToString = function (form) {
        try {
            var input = form.value.input;
            this.resultText = atob(input);
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = "Please enter valid Base64 text. (This string to be decoded is not correctly encoded).";
        }
    };
    Base64Component.prototype.closeAlert = function () {
        this.errorText = "";
    };
    Base64Component.prototype.focusOnResultTab = function () {
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    return Base64Component;
}());
Base64Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-base64',
        template: __webpack_require__("../../../../../src/app/encoding/components/base64/base64.component.html")
    })
], Base64Component);

//# sourceMappingURL=base64.component.js.map

/***/ }),

/***/ "../../../../../src/app/encoding/components/html/html.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n  <div class=\"col-md-7\">\r\n    <p class=\"utility-heading\">HTML Encoding</p>\r\n    <div class=\"nav-tabs-custom\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li id=\"nav-tab-head-1\" class=\"active\">\r\n          <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\r\n        </li>\r\n        <li id=\"nav-tab-head-2\">\r\n          <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\" id=\"tab_1\">\r\n          <textarea name=\"input\" class=\"form-control\" placeholder=\"Enter HTML Text for encoded or decoded...\" id=\"input\" cols=\"20\"\r\n          rows=\"18\" [ngModel]=\"defaultInput\" required></textarea>\r\n        </div>\r\n        <!-- /.tab-pane -->\r\n        <div class=\"tab-pane\" id=\"tab_2\">\r\n          <textarea class=\"form-control\" cols=\"20\" rows=\"18\" placeholder=\"Here will be the expected result...\" \r\n          [(ngModel)]=\"resultText\" [ngModelOptions]=\"{standalone:true}\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!-- /.tab-content -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-3\">\r\n\r\n    <div class=\"box box-solid\">\r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title\">Actions</h3>\r\n      </div>\r\n      <!-- /.box-header -->\r\n      <div class=\"box-body\">\r\n        <input type=\"button\" [disabled]=\"!form.valid\" class=\"btn btn-primary\" value=\"Encode\" (click)=\"encodeHTML(form)\">\r\n        <input type=\"button\" [disabled]=\"!form.valid\" class=\"btn btn-primary\" value=\"Decode\" (click)=\"decodeHTML(form)\">\r\n        <hr>\r\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"setDefaultValue()\">Sample HTML</button>\r\n      </div>\r\n      <!-- /.box-body -->\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/encoding/components/html/html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HtmlComponent = (function () {
    function HtmlComponent() {
    }
    HtmlComponent.prototype.setDefaultValue = function () {
        this.defaultInput = "<html><head><title></title><head><body>&nbsp; &copy;HTML Encoder</body></html>";
    };
    HtmlComponent.prototype.encodeHTML = function (form) {
        var input = form.value.input;
        this.resultText = this.htmlEscape(input);
        this.focusOnResultTab();
    };
    HtmlComponent.prototype.decodeHTML = function (form) {
        var input = form.value.input;
        this.resultText = this.htmlUnescape(input);
        this.focusOnResultTab();
    };
    HtmlComponent.prototype.focusOnResultTab = function () {
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    HtmlComponent.prototype.htmlEscape = function (text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };
    HtmlComponent.prototype.htmlUnescape = function (text) {
        return text
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
    };
    return HtmlComponent;
}());
HtmlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-html',
        template: __webpack_require__("../../../../../src/app/encoding/components/html/html.component.html"),
        providers: []
    })
], HtmlComponent);

//# sourceMappingURL=html.component.js.map

/***/ }),

/***/ "../../../../../src/app/encoding/components/url/url.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n  <div class=\"col-md-7\">\r\n    <p class=\"utility-heading\">URL Encoding</p>\r\n    <div class=\"nav-tabs-custom\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li id=\"nav-tab-head-1\" class=\"active\">\r\n          <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\r\n        </li>\r\n        <li id=\"nav-tab-head-2\">\r\n          <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\" id=\"tab_1\">\r\n          <textarea name=\"input\" class=\"form-control\" id=\"input\" placeholder=\"Enter URI to encode or decode...\" cols=\"20\" rows=\"18\"\r\n            [ngModel]=\"defaultInput\" required></textarea>\r\n        </div>\r\n        <!-- /.tab-pane -->\r\n        <div class=\"tab-pane\" id=\"tab_2\">\r\n          <textarea class=\"form-control\" cols=\"20\" rows=\"18\" placeholder=\"Here will be expected result...\" [(ngModel)]=\"resultText\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!-- /.tab-content -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-3\">\r\n\r\n    <div class=\"box box-solid\">\r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title\">Actions</h3>\r\n      </div>\r\n      <!-- /.box-header -->\r\n      <div class=\"box-body\">\r\n        <input type=\"button\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" value=\"Encode\" (click)=\"simpleToEncodedUrl(form)\">\r\n        <input type=\"button\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" value=\"Decode\" (click)=\"encodedToSimpleUrl(form)\">\r\n        <hr>\r\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"setDefaultValue()\">Sample URI</button>\r\n      </div>\r\n      <!-- /.box-body -->\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/encoding/components/url/url.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
1. encodeURI — encodes characters that are not allowed (raw) in URLs (use it to fix up broken URIs if you can't fix them beforehand)

2. encodeURIComponent — as encodeURI plus characters with special meaning in URIs (use it to encode data for inserting into a URI)
*/
var UrlComponent = (function () {
    function UrlComponent() {
    }
    UrlComponent.prototype.setDefaultValue = function () {
        this.defaultInput = "https://www.google.co.in/search?q=angular+4+introduction&rlz=1C1CHBF_enIN726IN726&oq=angular+4+intr&aqs=chrome.1.69i57j0l3.10742j0j1&sourceid=chrome&ie=UTF-8";
    };
    UrlComponent.prototype.simpleToEncodedUrl = function (form) {
        var input = form.value.input;
        this.resultText = encodeURIComponent(input);
        this.focusOnResultTab();
    };
    UrlComponent.prototype.encodedToSimpleUrl = function (form) {
        var input = form.value.input;
        this.resultText = decodeURIComponent(input);
        this.focusOnResultTab();
    };
    UrlComponent.prototype.focusOnResultTab = function () {
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    return UrlComponent;
}());
UrlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-url',
        template: __webpack_require__("../../../../../src/app/encoding/components/url/url.component.html")
    })
], UrlComponent);

//# sourceMappingURL=url.component.js.map

/***/ }),

/***/ "../../../../../src/app/encoding/encoding.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_encoding_components_base64_base64_component__ = __webpack_require__("../../../../../src/app/encoding/components/base64/base64.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_encoding_components_html_html_component__ = __webpack_require__("../../../../../src/app/encoding/components/html/html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_encoding_components_url_url_component__ = __webpack_require__("../../../../../src/app/encoding/components/url/url.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncodingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EncodingModule = (function () {
    function EncodingModule() {
    }
    return EncodingModule;
}());
EncodingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_encoding_components_base64_base64_component__["a" /* Base64Component */],
            __WEBPACK_IMPORTED_MODULE_5_app_encoding_components_html_html_component__["a" /* HtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_encoding_components_url_url_component__["a" /* UrlComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                { 'path': 'base64', component: __WEBPACK_IMPORTED_MODULE_4_app_encoding_components_base64_base64_component__["a" /* Base64Component */] },
                { 'path': 'html', component: __WEBPACK_IMPORTED_MODULE_5_app_encoding_components_html_html_component__["a" /* HtmlComponent */] },
                { 'path': 'url', component: __WEBPACK_IMPORTED_MODULE_6_app_encoding_components_url_url_component__["a" /* UrlComponent */] }
            ])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4_app_encoding_components_base64_base64_component__["a" /* Base64Component */],
            __WEBPACK_IMPORTED_MODULE_5_app_encoding_components_html_html_component__["a" /* HtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_encoding_components_url_url_component__["a" /* UrlComponent */]
        ],
        providers: []
    })
], EncodingModule);

//# sourceMappingURL=encoding.module.js.map

/***/ }),

/***/ "../../../../../src/app/encryption/encryption.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncryptionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EncryptionModule = (function () {
    function EncryptionModule() {
    }
    return EncryptionModule;
}());
EncryptionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [],
        imports: [],
        providers: []
    })
], EncryptionModule);

//# sourceMappingURL=encryption.module.js.map

/***/ }),

/***/ "../../../../../src/app/format-convertor/components/json2xml-convertor/json2xml-convertor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Json2XmlConvertorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Json2XmlConvertorComponent = (function () {
    function Json2XmlConvertorComponent() {
        this.xml2json = new X2JS();
    }
    Json2XmlConvertorComponent.prototype.convertToXml = function (form) {
        try {
            var input = form.value.input;
            var json = this.xml2json.json2xml_str(JSON.parse(input));
            this.resultText = json;
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = err + ". Invalid JSON, Please validate it first or be ensure JSON object propeties are be in double quotes.";
        }
    };
    Json2XmlConvertorComponent.prototype.setDefaultText = function () {
        this.defaultInput = '{"colors":[{"color":"black","category":"hue","type":"primary","code":{"rgba":[255,255,255,1],"hex":"#000"}},{"color":"white","category":"value","code":{"rgba":[0,0,0,1],"hex":"#FFF"}},{"color":"red","category":"hue","type":"primary","code":{"rgba":[255,0,0,1],"hex":"#FF0"}},{"color":"blue","category":"hue","type":"primary","code":{"rgba":[0,0,255,1],"hex":"#00F"}},{"color":"yellow","category":"hue","type":"primary","code":{"rgba":[255,255,0,1],"hex":"#FF0"}},{"color":"green","category":"hue","type":"secondary","code":{"rgba":[0,255,0,1],"hex":"#0F0"}}]}';
    };
    Json2XmlConvertorComponent.prototype.closeAlert = function () {
        this.errorText = "";
    };
    Json2XmlConvertorComponent.prototype.focusOnResultTab = function () {
        this.errorText = "";
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    return Json2XmlConvertorComponent;
}());
Json2XmlConvertorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-json2xml-convertor',
        template: __webpack_require__("../../../../../src/app/format-convertor/components/json2xml-convertor/json2xml-convertor.html")
    }),
    __metadata("design:paramtypes", [])
], Json2XmlConvertorComponent);

//# sourceMappingURL=json2xml-convertor.component.js.map

/***/ }),

/***/ "../../../../../src/app/format-convertor/components/json2xml-convertor/json2xml-convertor.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n\r\n  <div class=\"col-md-7\">\r\n    <p class=\"utility-heading\">JSON To XML</p>\r\n    <div class=\"nav-tabs-custom\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li id=\"nav-tab-head-1\" class=\"active\">\r\n          <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\r\n        </li>\r\n        <li id=\"nav-tab-head-2\">\r\n          <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\" id=\"tab_1\">\r\n          <textarea name=\"input\" class=\"form-control\" placeholder=\"Enter JSON for convert into XML...\" id=\"input\" cols=\"20\" rows=\"18\"\r\n            [ngModel]=\"defaultInput\" required></textarea>\r\n        </div>\r\n        <!-- /.tab-pane -->\r\n        <div class=\"tab-pane\" id=\"tab_2\">\r\n          <textarea name=\"result\" placeholder=\"Here will be the expected result...\" class=\"form-control\" id=\"result\" cols=\"20\" rows=\"18\" [(ngModel)]=\"resultText\"\r\n            [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!-- /.tab-content -->\r\n    </div>\r\n\r\n    <div *ngIf=\"errorText\" class=\"alert alert-danger\">\r\n      <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">×</button>\r\n      <h4>\r\n        <i class=\"icon fa fa-ban\"></i> Alert!</h4>\r\n      <br>\r\n      <p>{{ errorText }}</p>\r\n    </div>\r\n    <!-- / error message -->\r\n  </div>\r\n\r\n  <div class=\"col-md-3\">\r\n\r\n    <div class=\"box box-solid\">\r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title\">Actions</h3>\r\n      </div>\r\n      <!-- /.box-header -->\r\n      <div class=\"box-body\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"convertToXml(form)\">To XML</button>\r\n        <hr>\r\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"setDefaultText()\">Sample JOSN</button>\r\n      </div>\r\n      <!-- /.box-body -->\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/format-convertor/components/xml2json-convertor/xml2json-convertor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Xml2JsonConvertorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Xml2JsonConvertorComponent = (function () {
    function Xml2JsonConvertorComponent() {
        this.xml2json = new X2JS();
    }
    Xml2JsonConvertorComponent.prototype.convertToJson = function (form) {
        try {
            var input = form.value.input;
            this.resultText = JSON.stringify(this.xml2json.xml_str2json(input));
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = err;
        }
    };
    Xml2JsonConvertorComponent.prototype.closeAlert = function () {
        this.errorText = "";
    };
    Xml2JsonConvertorComponent.prototype.setDefaultText = function () {
        this.defaultInput = "<employee><name>John H</name><mobile>+1-998988938293</mobile><email>john.h@abc.com</email></employee>";
    };
    Xml2JsonConvertorComponent.prototype.focusOnResultTab = function () {
        this.errorText = "";
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    return Xml2JsonConvertorComponent;
}());
Xml2JsonConvertorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-xml2json-convertor',
        template: __webpack_require__("../../../../../src/app/format-convertor/components/xml2json-convertor/xml2json-convertor.html")
    }),
    __metadata("design:paramtypes", [])
], Xml2JsonConvertorComponent);

//# sourceMappingURL=xml2json-convertor.component.js.map

/***/ }),

/***/ "../../../../../src/app/format-convertor/components/xml2json-convertor/xml2json-convertor.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n    <div class=\"col-md-7\">\r\n        <p class=\"utility-heading\">XML To JSON</p>\r\n      <div class=\"nav-tabs-custom\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li id=\"nav-tab-head-1\" class=\"active\">\r\n            <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\r\n          </li>\r\n          <li id=\"nav-tab-head-2\">\r\n            <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\r\n          </li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <div class=\"tab-pane active\" id=\"tab_1\">\r\n            <textarea name=\"input\" class=\"form-control\" placeholder=\"Enter XML for convert into JSON...\" id=\"input\" cols=\"20\" rows=\"18\" [ngModel]=\"defaultInput\" required></textarea>\r\n          </div>\r\n          <!-- /.tab-pane -->\r\n          <div class=\"tab-pane\" id=\"tab_2\">\r\n            <textarea name=\"result\" placeholder=\"Here will be the expected result...\" class=\"form-control\" id=\"result\" cols=\"20\" rows=\"18\" [(ngModel)]=\"resultText\"\r\n            [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n          </div>\r\n        </div>\r\n        <!-- /.tab-content -->\r\n      </div>\r\n\r\n      <div *ngIf=\"errorText\" class=\"alert alert-danger\">\r\n          <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">×</button>\r\n          <h4>\r\n              <i class=\"icon fa fa-ban\"></i> Alert!</h4>\r\n          <br>\r\n          <p>{{ errorText }}</p>\r\n      </div>\r\n      <!-- / error message -->\r\n    </div>\r\n  \r\n    <div class=\"col-md-3\">\r\n  \r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header with-border\">\r\n          <h3 class=\"box-title\">Actions</h3>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"convertToJson(form)\">To JSON</button>\r\n            <hr>\r\n            <button type=\"submit\" class=\"btn btn-info\" (click)=\"setDefaultText()\">Sample XML</button>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "../../../../../src/app/format-convertor/format-convertor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_format_convertor_components_xml2json_convertor_xml2json_convertor_component__ = __webpack_require__("../../../../../src/app/format-convertor/components/xml2json-convertor/xml2json-convertor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_format_convertor_components_json2xml_convertor_json2xml_convertor_component__ = __webpack_require__("../../../../../src/app/format-convertor/components/json2xml-convertor/json2xml-convertor.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatConvertorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormatConvertorModule = (function () {
    function FormatConvertorModule() {
    }
    return FormatConvertorModule;
}());
FormatConvertorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_format_convertor_components_xml2json_convertor_xml2json_convertor_component__["a" /* Xml2JsonConvertorComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_format_convertor_components_json2xml_convertor_json2xml_convertor_component__["a" /* Json2XmlConvertorComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'xml2json', component: __WEBPACK_IMPORTED_MODULE_4_app_format_convertor_components_xml2json_convertor_xml2json_convertor_component__["a" /* Xml2JsonConvertorComponent */] },
                { path: 'json2xml', component: __WEBPACK_IMPORTED_MODULE_5_app_format_convertor_components_json2xml_convertor_json2xml_convertor_component__["a" /* Json2XmlConvertorComponent */] }
            ])
        ],
        providers: []
    })
], FormatConvertorModule);

//# sourceMappingURL=format-convertor.module.js.map

/***/ }),

/***/ "../../../../../src/app/formatter/components/json-formatter/json-formatter.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\n  <div class=\"col-md-7\">\n    <p class=\"utility-heading\">JSON Formatter</p>\n    <div class=\"nav-tabs-custom\">\n      <ul class=\"nav nav-tabs\">\n        <li id=\"nav-tab-head-1\" class=\"active\">\n          <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\n        </li>\n        <li id=\"nav-tab-head-2\">\n          <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"tab_1\">\n          <textarea name=\"input\" class=\"form-control\" placeholder=\"Enter JSON and select action what you want to do...\" id=\"input\" cols=\"20\" rows=\"18\" [ngModel]=\"defulatInput\" required></textarea>\n        </div>\n        <!-- /.tab-pane -->\n        <div class=\"tab-pane\" id=\"tab_2\">\n          <textarea name=\"result\" placeholder=\"Here will be the expected JSON...\" class=\"form-control\" id=\"result\" cols=\"20\" rows=\"18\" [(ngModel)]=\"resultText\"\n            [ngModelOptions]=\"{standalone: true}\"></textarea>\n        </div>\n      </div>\n      <!-- /.tab-content -->\n    </div>\n\n    <div *ngIf=\"errorText\" class=\"alert alert-danger\">\n        <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">×</button>\n        <h4>\n            <i class=\"icon fa fa-ban\"></i> Alert!</h4>\n        <br>\n        <p>{{ errorText }}</p>\n    </div>\n    <!-- / error message -->\n\n  </div>\n\n  <div class=\"col-md-3\">\n\n    <div class=\"box box-solid\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Actions</h3>\n      </div>\n      <!-- /.box-header -->\n      <div class=\"box-body\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" onclick=\"alert('This Feature will be introduce soon..')\">Validate</button>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"makeBeautify(form)\">Beautify</button>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"makeMinify(form)\">Minify</button>\n        <hr>\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"setDefaultText()\">Sample JSON</button>\n      </div>\n      <!-- /.box-body -->\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/formatter/components/json-formatter/json-formatter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pretty_data__ = __webpack_require__("../../../../pretty-data/pretty-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pretty_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pretty_data__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonFormatterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JsonFormatterComponent = (function () {
    function JsonFormatterComponent() {
    }
    JsonFormatterComponent.prototype.makeBeautify = function (form) {
        try {
            var input = form.value.input;
            this.resultText = __WEBPACK_IMPORTED_MODULE_1_pretty_data__["pd"].json(input);
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = err;
        }
    };
    JsonFormatterComponent.prototype.makeMinify = function (form) {
        try {
            var input = form.value.input;
            this.resultText = __WEBPACK_IMPORTED_MODULE_1_pretty_data__["pd"].jsonmin(input);
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = err;
        }
    };
    JsonFormatterComponent.prototype.setDefaultText = function () {
        this.defulatInput = '{"colors":[{"color":"black","category":"hue","type":"primary","code":{"rgba":[255,255,255,1],"hex":"#000"}},{"color":"white","category":"value","code":{"rgba":[0,0,0,1],"hex":"#FFF"}},{"color":"red","category":"hue","type":"primary","code":{"rgba":[255,0,0,1],"hex":"#FF0"}},{"color":"blue","category":"hue","type":"primary","code":{"rgba":[0,0,255,1],"hex":"#00F"}},{"color":"yellow","category":"hue","type":"primary","code":{"rgba":[255,255,0,1],"hex":"#FF0"}},{"color":"green","category":"hue","type":"secondary","code":{"rgba":[0,255,0,1],"hex":"#0F0"}}]}';
    };
    JsonFormatterComponent.prototype.closeAlert = function () {
        this.errorText = "";
    };
    JsonFormatterComponent.prototype.focusOnResultTab = function () {
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    return JsonFormatterComponent;
}());
JsonFormatterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-json-formatter',
        template: __webpack_require__("../../../../../src/app/formatter/components/json-formatter/json-formatter.component.html"),
        providers: []
    })
], JsonFormatterComponent);

//# sourceMappingURL=json-formatter.component.js.map

/***/ }),

/***/ "../../../../../src/app/formatter/components/xml-formatter/xml-formatter.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\n  <div class=\"col-md-7\">\n    <p class=\"utility-heading\">XML Beautifier</p>\n    <div class=\"nav-tabs-custom\">\n      <ul class=\"nav nav-tabs\">\n        <li id=\"nav-tab-head-1\" class=\"active\">\n          <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\n        </li>\n        <li id=\"nav-tab-head-2\">\n          <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\">\n        <div class=\"tab-pane active\" id=\"tab_1\">\n          <textarea name=\"input\" class=\"form-control\" placeholder=\"Enter XML and select action what you want to do...\" id=\"input\" cols=\"20\" rows=\"18\" [ngModel]=\"defulatInput\" required></textarea>\n        </div>\n        <!-- /.tab-pane -->\n        <div class=\"tab-pane\" id=\"tab_2\">\n          <textarea name=\"result\" placeholder=\"Here will be the result...\" class=\"form-control\" id=\"result\" cols=\"20\" rows=\"18\" [(ngModel)]=\"resultText\"\n            [ngModelOptions]=\"{standalone: true}\"></textarea>\n        </div>\n      </div>\n      <!-- /.tab-content -->\n    </div>\n    \n    <div *ngIf=\"errorText\" class=\"alert alert-danger\">\n        <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">×</button>\n        <h4>\n            <i class=\"icon fa fa-ban\"></i> Alert!</h4>\n        <br>\n        <p>{{ errorText }}</p>\n    </div>\n    <!-- / error message -->\n\n  </div>\n\n  <div class=\"col-md-3\">\n\n    <div class=\"box box-solid\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Actions</h3>\n      </div>\n      <!-- /.box-header -->\n      <div class=\"box-body actions\">\n        <!-- /.box-header -->\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" onclick=\"alert('This feature will be introduce soon..')\">Validate</button>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"makeBeautify(form)\">Beautify</button>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"makeMinify(form)\">Minify</button>\n        <hr>\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"setDefaultText()\">Sample XML</button>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box-body -->\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/formatter/components/xml-formatter/xml-formatter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pretty_data__ = __webpack_require__("../../../../pretty-data/pretty-data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pretty_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pretty_data__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XmlFormatterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var XmlFormatterComponent = (function () {
    function XmlFormatterComponent() {
    }
    XmlFormatterComponent.prototype.makeBeautify = function (form) {
        try {
            var input = form.value.input;
            this.resultText = __WEBPACK_IMPORTED_MODULE_1_pretty_data__["pd"].xml(input);
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = err;
        }
    };
    XmlFormatterComponent.prototype.makeMinify = function (form) {
        try {
            var input = form.value.input;
            this.resultText = __WEBPACK_IMPORTED_MODULE_1_pretty_data__["pd"].xmlmin(input, '');
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = err;
        }
    };
    XmlFormatterComponent.prototype.setDefaultText = function () {
        this.defulatInput = "<employee><name>John H</name><mobile>+1-998988938293</mobile><email>john.h@abc.com</email></employee>";
    };
    XmlFormatterComponent.prototype.closeAlert = function () {
        this.errorText = "";
    };
    XmlFormatterComponent.prototype.focusOnResultTab = function () {
        this.errorText = "";
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    return XmlFormatterComponent;
}());
XmlFormatterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-xml-formatter',
        template: __webpack_require__("../../../../../src/app/formatter/components/xml-formatter/xml-formatter.component.html")
    })
], XmlFormatterComponent);

//# sourceMappingURL=xml-formatter.component.js.map

/***/ }),

/***/ "../../../../../src/app/formatter/formatter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_formatter_components_json_formatter_json_formatter_component__ = __webpack_require__("../../../../../src/app/formatter/components/json-formatter/json-formatter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_formatter_components_xml_formatter_xml_formatter_component__ = __webpack_require__("../../../../../src/app/formatter/components/xml-formatter/xml-formatter.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components


var FormatterModule = (function () {
    function FormatterModule() {
    }
    return FormatterModule;
}());
FormatterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_formatter_components_json_formatter_json_formatter_component__["a" /* JsonFormatterComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_formatter_components_xml_formatter_xml_formatter_component__["a" /* XmlFormatterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'json-formatter', component: __WEBPACK_IMPORTED_MODULE_4_app_formatter_components_json_formatter_json_formatter_component__["a" /* JsonFormatterComponent */] },
                { path: 'xml-formatter', component: __WEBPACK_IMPORTED_MODULE_5_app_formatter_components_xml_formatter_xml_formatter_component__["a" /* XmlFormatterComponent */] }
            ])
        ],
        exports: []
    })
], FormatterModule);

//# sourceMappingURL=formatter.module.js.map

/***/ }),

/***/ "../../../../../src/app/hashing/components/hmac-hashing/hmac-hashing.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\n    <div class=\"col-md-7\">\n        <p class=\"utility-heading\">HMAC Hashing</p>\n        <div class=\"nav-tabs-custom\">\n            <ul class=\"nav nav-tabs\">\n                <li id=\"nav-tab-head-1\" class=\"active\">\n                    <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\n                </li>\n                <li id=\"nav-tab-head-2\">\n                    <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\n                </li>\n            </ul>\n            <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"tab_1\">\n                    <textarea name=\"input\" class=\"form-control\" placeholder=\"Enter text, select hashing type and enter key for HMAC...\" id=\"input\" cols=\"20\" rows=\"18\" ngModel\n                        required></textarea>\n                </div>\n                <!-- /.tab-pane -->\n                <div class=\"tab-pane\" id=\"tab_2\">\n                    <textarea name=\"result\" placeholder=\"Here will be the result...\" class=\"form-control\" id=\"result\" cols=\"20\" rows=\"18\" [(ngModel)]=\"resultText\"\n                        [ngModelOptions]=\"{standalone: true}\"></textarea>\n                </div>\n            </div>\n\n            <!-- /.tab-content -->\n        </div>\n\n        <!-- Error Message -->\n        <div *ngIf=\"errorText\" class=\"alert alert-danger\">\n            <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">×</button>\n            <h4>\n                <i class=\"icon fa fa-ban\"></i> Alert!</h4>\n            <br>\n            <p>{{ errorText }}</p>\n        </div>\n        <!-- / error message -->\n    </div>\n\n    <div class=\"col-md-3\">\n\n        <div class=\"box box-solid\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Options</h3>\n            </div>\n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <div class=\"box-body options\">\n\n                    <div class=\"form-group\">\n                        <label for=\"\">Hashing Key</label>\n                        <input type=\"text\" name=\"hmacKey\" id=\"hmacKey\" placeholder=\"Key\" class=\"form-control\" ngModel required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"mode\">Hashing Mode</label>\n                        <select name=\"mode\" id=\"mode\" class=\"form-control\" [ngModel]=\"defaultMode\">\n                            <option *ngFor=\"let item of modes\" value=\"{{ item.modeValue }}\">{{ item.modeText }}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <!-- /.box-body -->\n        </div>\n\n        <div class=\"box box-solid\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Actions</h3>\n            </div>\n            <!-- /.box-header -->\n            <div class=\"box-body actions\">\n                <div class=\"box-body\">\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"getHMAC(form)\">Make HMAC</button>\n                </div>\n            </div>\n            <!-- /.box-body -->\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/hashing/components/hmac-hashing/hmac-hashing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HmacHashingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HmacHashingComponent = (function () {
    function HmacHashingComponent() {
        this.modes = [
            { modeValue: 'MD5', modeText: 'HMAC with MD5' },
            { modeValue: 'SHA-1', modeText: 'HMAC with SHA-1' },
            { modeValue: 'SHA-256', modeText: 'HMAC with SHA-256' },
            { modeValue: 'SHA3-256', modeText: 'HMAC with SHA3-256' },
            { modeValue: 'SHA-384', modeText: 'HMAC with SHA-384' },
            { modeValue: 'SHA3-384', modeText: 'HMAC with SHA3-384' },
            { modeValue: 'SHA-512', modeText: 'HMAC with SHA-512' },
            { modeValue: 'SHA3-512', modeText: 'HMAC with SHA3-512' }
        ];
        this.defaultMode = "MD5";
    }
    HmacHashingComponent.prototype.getHMAC = function (form) {
        try {
            var mode = form.value.mode;
            var input = form.value.input;
            var hmacKey = form.value.hmacKey;
            if (mode == "MD5") {
                this.resultText = this.hmacWithMD5(input, hmacKey);
            }
            else {
                this.resultText = this.hmacWithSHA(mode, input, hmacKey);
            }
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = "The problem has occurred with this entered input text, selected mode and key, Please send this info to the development team to rectify the same issue.";
        }
    };
    HmacHashingComponent.prototype.hmacWithMD5 = function (input, key) {
        return md5(input, key);
    };
    HmacHashingComponent.prototype.hmacWithSHA = function (mode, input, key) {
        this.shaObject = new jsSHA(mode, 'TEXT');
        this.shaObject.setHMACKey(key, 'TEXT');
        this.shaObject.update(input);
        return this.shaObject.getHMAC('HEX');
    };
    HmacHashingComponent.prototype.closeAlert = function () {
        this.errorText = "";
    };
    HmacHashingComponent.prototype.focusOnResultTab = function () {
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    return HmacHashingComponent;
}());
HmacHashingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-hmac-hashing',
        template: __webpack_require__("../../../../../src/app/hashing/components/hmac-hashing/hmac-hashing.component.html")
    }),
    __metadata("design:paramtypes", [])
], HmacHashingComponent);

//# sourceMappingURL=hmac-hashing.component.js.map

/***/ }),

/***/ "../../../../../src/app/hashing/components/md5-hashing/md5-hashing.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n    <div class=\"col-md-7\">\r\n        <p class=\"utility-heading\">MD5 Hashing</p>\r\n        <div class=\"nav-tabs-custom\">\r\n            <ul class=\"nav nav-tabs\">\r\n                <li id=\"nav-tab-head-1\" class=\"active\">\r\n                    <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\r\n                </li>\r\n                <li id=\"nav-tab-head-2\">\r\n                    <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\" id=\"tab_1\">\r\n                    <textarea name=\"input\" class=\"form-control\" placeholder=\"Enter plain text for MD5...\" id=\"input\" cols=\"20\" rows=\"18\" [ngModel]=\"defulatInput\" required></textarea>\r\n                </div>\r\n                <!-- /.tab-pane -->\r\n                <div class=\"tab-pane\" id=\"tab_2\">\r\n                    <textarea name=\"result\" placeholder=\"Here will be the expected result...\" class=\"form-control\" id=\"result\" cols=\"20\" rows=\"18\" [(ngModel)]=\"resultText\"\r\n                        [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n                </div>\r\n            </div>\r\n            <!-- /.tab-content -->\r\n        </div>\r\n\r\n        <div *ngIf=\"errorText\" class=\"alert alert-danger\">\r\n            <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">×</button>\r\n            <h4>\r\n                <i class=\"icon fa fa-ban\"></i> Alert!</h4>\r\n            <br>\r\n            <p>{{ errorText }}</p>\r\n        </div>\r\n        <!-- / error message -->\r\n    </div>\r\n\r\n    <div class=\"col-md-3\">\r\n        <div class=\"box box-solid\">\r\n            <div class=\"box-header with-border\">\r\n                <h3 class=\"box-title\">Actions</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"makeMd5(form)\">Make MD5</button>\r\n                <hr>\r\n                <button type=\"submit\" class=\"btn btn-info\" (click)=\"setDefaultText()\">Sample Text</button>\r\n            </div>\r\n            <!-- /.box-body -->\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/hashing/components/md5-hashing/md5-hashing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MD5HashingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MD5HashingComponent = (function () {
    function MD5HashingComponent() {
    }
    MD5HashingComponent.prototype.makeMd5 = function (form) {
        try {
            var input = form.value.input;
            this.resultText = md5(input);
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = "The problem has occurred with this entered input text, Please send it to the development team to rectify the same issue.";
        }
    };
    MD5HashingComponent.prototype.setDefaultText = function () {
        this.defulatInput = "Hello Oxigen";
    };
    MD5HashingComponent.prototype.closeAlert = function () {
        this.errorText = "";
    };
    MD5HashingComponent.prototype.focusOnResultTab = function () {
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    return MD5HashingComponent;
}());
MD5HashingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-md5-hashing',
        template: __webpack_require__("../../../../../src/app/hashing/components/md5-hashing/md5-hashing.component.html"),
        providers: []
    })
], MD5HashingComponent);

//# sourceMappingURL=md5-hashing.component.js.map

/***/ }),

/***/ "../../../../../src/app/hashing/components/sha-hashing/sha-hashing.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\n    <div class=\"col-md-7\">\n        <p class=\"utility-heading\">SHA Hashing</p>\n        <div class=\"nav-tabs-custom\">\n            <ul class=\"nav nav-tabs\">\n                <li id=\"nav-tab-head-1\" class=\"active\">\n                    <a href=\"#tab_1\" data-toggle=\"tab\">Input Text</a>\n                </li>\n                <li id=\"nav-tab-head-2\">\n                    <a href=\"#tab_2\" data-toggle=\"tab\">Result Text</a>\n                </li>\n            </ul>\n            <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"tab_1\">\n                    <textarea name=\"input\" class=\"form-control\" placeholder=\"Enter plain text and select SHA mode for hash...\" id=\"input\" cols=\"20\" rows=\"18\" ngModel required></textarea>\n                </div>\n                <!-- /.tab-pane -->\n                <div class=\"tab-pane\" id=\"tab_2\">\n                    <textarea name=\"result\" placeholder=\"Here will be the expected result...\" class=\"form-control\" id=\"result\" cols=\"20\" rows=\"18\" [(ngModel)]=\"resultText\"\n                        [ngModelOptions]=\"{standalone: true}\"></textarea>\n                </div>\n            </div>\n            <!-- /.tab-content -->\n            <div *ngIf=\"errorText\" class=\"alert alert-danger\">\n                <button type=\"button\" class=\"close\" (click)=\"closeAlert()\">×</button>\n                <h4>\n                    <i class=\"icon fa fa-ban\"></i> Alert!</h4>\n                <br>\n                <p>{{ errorText }}</p>\n            </div>\n            <!-- / error message -->\n            \n        </div>\n\n    </div>\n\n    <div class=\"col-md-3\">\n\n        <div class=\"box box-solid\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Options</h3>\n            </div>\n\n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <div class=\"box-body options\">\n                    <div class=\"form-group\">\n                        <label for=\"mode\">Hashing Mode</label>\n                        <select name=\"mode\" id=\"mode\" class=\"form-control\" [ngModel]=\"defaultMode\">\n                            <option *ngFor=\"let item of modes\" value=\"{{ item.modeValue }}\">{{ item.modeText }}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <!-- /.box-body -->\n        </div>\n\n        <div class=\"box box-solid\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Actions</h3>\n            </div>\n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\" (click)=\"getSHAHashed(form)\">Make SHA</button>\n            </div>\n            <!-- /.box-body -->\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/hashing/components/sha-hashing/sha-hashing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaHashingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShaHashingComponent = (function () {
    function ShaHashingComponent() {
        this.modes = [
            { modeValue: 'SHA-1', modeText: 'SHA 1' },
            { modeValue: 'SHA-256', modeText: 'SHA 256' },
            { modeValue: 'SHA3-256', modeText: 'SHA3 - 256' },
            { modeValue: 'SHA-384', modeText: 'SHA 384' },
            { modeValue: 'SHA3-384', modeText: 'SHA3 - 384' },
            { modeValue: 'SHA-512', modeText: 'SHA 512' },
            { modeValue: 'SHA3-512', modeText: 'SHA3 - 512' }
        ];
        this.defaultMode = "SHA-1";
    }
    ShaHashingComponent.prototype.getSHAHashed = function (form) {
        try {
            var mode = form.value.mode;
            var input = form.value.input;
            this.shaObject = new jsSHA(mode, 'TEXT');
            this.shaObject.update(input);
            this.resultText = this.shaObject.getHash('HEX');
            this.focusOnResultTab();
        }
        catch (err) {
            this.errorText = "The problem has occurred with this entered input text and selected mode, Please send this info to the development team to rectify the same issue.";
        }
    };
    ShaHashingComponent.prototype.closeAlert = function () {
        this.errorText = "";
    };
    ShaHashingComponent.prototype.focusOnResultTab = function () {
        document.getElementById("nav-tab-head-1").classList.remove('active');
        document.getElementById("nav-tab-head-2").classList.add('active');
        document.getElementById("tab_1").classList.remove('active');
        document.getElementById("tab_2").classList.add('active');
    };
    return ShaHashingComponent;
}());
ShaHashingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-sha-hashing',
        template: __webpack_require__("../../../../../src/app/hashing/components/sha-hashing/sha-hashing.component.html"),
    }),
    __metadata("design:paramtypes", [])
], ShaHashingComponent);

//# sourceMappingURL=sha-hashing.component.js.map

/***/ }),

/***/ "../../../../../src/app/hashing/hashing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_hashing_components_md5_hashing_md5_hashing_component__ = __webpack_require__("../../../../../src/app/hashing/components/md5-hashing/md5-hashing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_hashing_components_sha_hashing_sha_hashing_component__ = __webpack_require__("../../../../../src/app/hashing/components/sha-hashing/sha-hashing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_hashing_components_hmac_hashing_hmac_hashing_component__ = __webpack_require__("../../../../../src/app/hashing/components/hmac-hashing/hmac-hashing.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HashingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HashingModule = (function () {
    function HashingModule() {
    }
    return HashingModule;
}());
HashingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_hashing_components_md5_hashing_md5_hashing_component__["a" /* MD5HashingComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_hashing_components_sha_hashing_sha_hashing_component__["a" /* ShaHashingComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_hashing_components_hmac_hashing_hmac_hashing_component__["a" /* HmacHashingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                { 'path': 'md5-hashing', component: __WEBPACK_IMPORTED_MODULE_4_app_hashing_components_md5_hashing_md5_hashing_component__["a" /* MD5HashingComponent */] },
                { 'path': 'sha-hashing', component: __WEBPACK_IMPORTED_MODULE_5_app_hashing_components_sha_hashing_sha_hashing_component__["a" /* ShaHashingComponent */] },
                { 'path': 'hmac-hashing', component: __WEBPACK_IMPORTED_MODULE_6_app_hashing_components_hmac_hashing_hmac_hashing_component__["a" /* HmacHashingComponent */] }
            ])
        ],
        providers: []
    })
], HashingModule);

//# sourceMappingURL=hashing.module.js.map

/***/ }),

/***/ "../../../../../src/app/number-convertor/number-convertor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberConvertorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberConvertorModule = (function () {
    function NumberConvertorModule() {
    }
    return NumberConvertorModule;
}());
NumberConvertorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [],
        imports: [],
        providers: []
    })
], NumberConvertorModule);

//# sourceMappingURL=number-convertor.module.js.map

/***/ }),

/***/ "../../../../../src/app/other-utility/other-utility.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherUtilityModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OtherUtilityModule = (function () {
    function OtherUtilityModule() {
    }
    return OtherUtilityModule;
}());
OtherUtilityModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([])
        ],
        exports: [],
        providers: []
    })
], OtherUtilityModule);

//# sourceMappingURL=other-utility.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-footer',
        template: "\n    <footer class=\"footer\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">Developed by NxTxN Team @ Oxigen - 2017</div>\n            <div class=\"col-md-6\">Version 0.0.1</div>\n        </div>\n    </footer>\n    "
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\r\n  <div class=\"col-md-8\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5\">\r\n        <div class=\"logo\">\r\n          <b> {{ '{&nbsp;&nbsp;}' }} Utility</b> Tools\r\n        </div>\r\n        <div class=\"quote\">\r\n          <span>[ &nbsp;Everything @ one place &nbsp;]</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n\r\n    <ul class=\"menu\">\r\n      <li>\r\n        <a href=\"https://github.com/mukeshdutt/utility-tools\" target=\"_blank\">Github.com</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">Why Utility Tools</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/shared/components/header/header.component.html")
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-2\">\r\n  <div class=\"box box-solid\" style=\"font-size: 12px\">\r\n    <div class=\"box-body no-padding utilities-menu\">\r\n      <ul class=\"nav nav-pills nav-stacked\">\r\n        <li>\r\n          <a [routerLink]=\"['/xml-formatter']\">XML Beautifier</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/json-formatter']\">JSON Beautifier</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/xml2json']\">XML To JSON</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/json2xml']\">JSON To XML</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/md5-hashing']\">MD5 Hashing</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/sha-hashing']\">SHA Hashing</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/hmac-hashing']\">HMAC Hashing</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/base64']\">Base64 Encoding</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/url']\">URL Encoding</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/html']\">HTML Encoding</a>\r\n        </li>\r\n        <li>\r\n          <a onclick=\"alert('This feature will be introduce very soon..')\">More...</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!-- /.box-body -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/shared/components/menu/menu.component.html")
    })
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map