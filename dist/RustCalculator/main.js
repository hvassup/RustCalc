(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/*! exports provided: imgPathPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgPathPrefix", function() { return imgPathPrefix; });
var imgPathPrefix = '../RustCalculator';


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-item *ngFor=\"let item of items\" [ngClass]=\"item === selectedItem ? 'selected' : 'not-selected'\" [item]=\"item\" class=\"not-selected\" (click)=\"selectItem(item)\"></app-item>\n<app-burn-chart *ngIf=\"selectedItem\" [itemToBurn]=\"selectedItem\"></app-burn-chart>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-item {\n  margin: 10px; }\n  app-item.not-selected {\n    opacity: 0.5; }\n  app-item.selected {\n    opacity: 1; }\n  app-burn-chart {\n  display: block;\n  margin-top: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxKZW5zXFxXZWJzdG9ybVByb2plY3RzXFxSdXN0Q2FsY3VsYXRvci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWSxFQU9iO0VBUkQ7SUFHSSxhQUFZLEVBQ2I7RUFKSDtJQU1JLFdBQVUsRUFDWDtFQUVIO0VBQ0UsZUFBYztFQUNkLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pdGVtIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgJi5ub3Qtc2VsZWN0ZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAmLnNlbGVjdGVkIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbmFwcC1idXJuLWNoYXJ0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Item */ "./src/model/Item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.items = _model_Item__WEBPACK_IMPORTED_MODULE_1__["burnableItems"];
    }
    AppComponent.prototype.selectItem = function (item) {
        this.selectedItem = item;
        console.log(this.selectedItem);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _burn_chart_burn_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./burn-chart/burn-chart.component */ "./src/app/burn-chart/burn-chart.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"],
                _burn_chart_burn_chart_component__WEBPACK_IMPORTED_MODULE_4__["BurnChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/burn-chart/burn-chart.component.html":
/*!******************************************************!*\
  !*** ./src/app/burn-chart/burn-chart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"inputContainer\">\n  <p>Item amount</p>\n  <input [(ngModel)]=\"itemAmount\" (input)=\"numbersChanged()\"/>\n  <p>Stack count</p>\n  <input [(ngModel)]=\"splitCount\" (input)=\"numbersChanged()\"/>\n</div>\n\n<div class=\"numbered-image first\" >\n  <img src=\"{{_itemToBurn.image}}\" height=\"40\" width=\"40\"/>\n  <p *ngIf=\"itemAmount\">\n    {{splitCount}}x{{stackSize}}\n  </p>\n</div>\n<div class=\"numbered-image\">\n  <img src=\"../RustCalculator/assets/images/wood.png\" height=\"40\" width=\"40\"/>\n  <img class=\"burn\" src=\"../RustCalculator/assets/images/fuel.png\" height=\"20\" width=\"20\"/>\n  <p *ngIf=\"requiredWoodAmount > 1\">\n    x{{requiredWoodAmount}}\n  </p>\n</div>\n<img src=\"../RustCalculator/assets/images/rarrow.png\" height=\"13\" width=\"32\"/>\n\n<div class=\"numbered-image\">\n  <img src=\"{{_itemToBurn.burnsTo.image}}\" height=\"40\" width=\"40\"/>\n  <p *ngIf=\"_itemToBurn.burnsToAmount * itemAmount\">\n    x{{_itemToBurn.burnsToAmount * itemAmount}}\n  </p>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/burn-chart/burn-chart.component.scss":
/*!******************************************************!*\
  !*** ./src/app/burn-chart/burn-chart.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#inputContainer {\n  margin-bottom: 20px; }\n\np {\n  color: #fff; }\n\ninput {\n  text-align: right;\n  display: inline-block; }\n\nimg {\n  display: inline-block; }\n\n.numbered-image {\n  width: 40px;\n  height: 40px;\n  margin: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative; }\n\n.numbered-image.first {\n    margin-right: -15px; }\n\n.numbered-image .burn {\n    position: absolute;\n    right: 2px;\n    top: -2px; }\n\n.numbered-image p {\n    position: absolute;\n    width: 100%;\n    text-align: right;\n    line-height: 12px;\n    font-size: 12px;\n    color: #ffffff;\n    bottom: -8px;\n    right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVybi1jaGFydC9DOlxcVXNlcnNcXEplbnNcXFdlYnN0b3JtUHJvamVjdHNcXFJ1c3RDYWxjdWxhdG9yL3NyY1xcYXBwXFxidXJuLWNoYXJ0XFxidXJuLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osYUFBWTtFQUlaLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsbUJBQWtCLEVBZ0JuQjs7QUF6QkQ7SUFLSSxvQkFBbUIsRUFDcEI7O0FBTkg7SUFXSSxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFVBQVMsRUFDVjs7QUFkSDtJQWdCSSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGtCQUFpQjtJQUNqQixrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixlQUFjO0lBQ2QsYUFBWTtJQUNaLFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2J1cm4tY2hhcnQvYnVybi1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnB1dENvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5wIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5udW1iZXJlZC1pbWFnZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICAmLmZpcnN0IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgfVxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuYnVybiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMnB4O1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm90dG9tOiAtOHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/burn-chart/burn-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/burn-chart/burn-chart.component.ts ***!
  \****************************************************/
/*! exports provided: BurnChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurnChartComponent", function() { return BurnChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BurnChartComponent = /** @class */ (function () {
    function BurnChartComponent() {
        this.itemAmount = 1;
        this.splitCount = 1;
        this.requiredWoodAmount = 0;
    }
    Object.defineProperty(BurnChartComponent.prototype, "itemToBurn", {
        set: function (item) {
            this._itemToBurn = item;
            this.numbersChanged();
        },
        enumerable: true,
        configurable: true
    });
    BurnChartComponent.prototype.ngOnInit = function () {
    };
    BurnChartComponent.prototype.numbersChanged = function () {
        this.requiredWoodAmount = Math.ceil(Math.ceil(this.itemAmount / this.splitCount) * this._itemToBurn.burnrate);
        if (this.requiredWoodAmount === Infinity || this.requiredWoodAmount === NaN) {
            this.requiredWoodAmount = 0;
        }
        var tmp = Math.ceil(this.itemAmount / this.splitCount);
        if (tmp === Infinity || tmp === NaN) {
            this.stackSize = '';
        }
        else {
            this.stackSize = '' + tmp;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BurnChartComponent.prototype, "itemToBurn", null);
    BurnChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-burn-chart',
            template: __webpack_require__(/*! ./burn-chart.component.html */ "./src/app/burn-chart/burn-chart.component.html"),
            styles: [__webpack_require__(/*! ./burn-chart.component.scss */ "./src/app/burn-chart/burn-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BurnChartComponent);
    return BurnChartComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src='{{item.image}}' alt=\"{{item.name}}\"/>\n"

/***/ }),

/***/ "./src/app/item/item.component.scss":
/*!******************************************!*\
  !*** ./src/app/item/item.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "item", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.scss */ "./src/app/item/item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/model/Item.ts":
/*!***************************!*\
  !*** ./src/model/Item.ts ***!
  \***************************/
/*! exports provided: items, burnableItems, getItemFromName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "burnableItems", function() { return burnableItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemFromName", function() { return getItemFromName; });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");

var items = [
    { name: 'Metal Fragments', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/metal.fragments.png' },
    { name: 'High Quality Metal', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/metal.refined.png' },
    { name: 'Sulphur', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/sulfur.png' },
    { name: 'Charcoal', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/charcoal.png' }
];
var burnableItems = [
    { name: 'Can of beans', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/can.beans.empty.png', burnrate: 15, burnsTo: getItemFromName('Metal Fragments'), burnsToAmount: 15 },
    { name: 'Can of tuna', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/can.tuna.empty.png', burnrate: 15, burnsTo: getItemFromName('Metal Fragments'), burnsToAmount: 10 },
    { name: 'High Quality Metal Ore', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/hq.metal.ore.png', burnrate: 10, burnsTo: getItemFromName('High Quality Metal'), burnsToAmount: 1 },
    { name: 'Metal Ore', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/metal.ore.png', burnrate: 5, burnsTo: getItemFromName('Metal Fragments'), burnsToAmount: 1 },
    { name: 'Sulphur Ore', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/sulfur.ore.png', burnrate: 2.5, burnsTo: getItemFromName('Sulphur'), burnsToAmount: 1 },
    { name: 'Wood', image: _Config__WEBPACK_IMPORTED_MODULE_0__["imgPathPrefix"] + '/assets/images/wood.png', burnrate: 1, burnsTo: getItemFromName('Charcoal'), burnsToAmount: 1 }
];
function getItemFromName(name) {
    return items.find(function (i) { return i.name === name; }) || burnableItems.find(function (i) { return i.name === name; });
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jens\WebstormProjects\RustCalculator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map