(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/components/main-content/main-content.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content/main-content.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h1>\n      Main Content\n  </h1>\n</mat-card>"

/***/ }),

/***/ "./src/app/dashboard/components/main-content/main-content.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content/main-content.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/main-content/main-content.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content/main-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
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

var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/dashboard/components/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/dashboard/components/main-content/main-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/side-nav/side-nav.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/side-nav/side-nav.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container claas=\"app-sidenav-container\">\n  <mat-sidenav class=\"app-sidenav mat-elevation-z10\"\n \n  mode=\"isScreenSmall() ? 'over': 'side'\"\n  #sidenav>\n  <mat-toolbar color=\"primary\">Dashboard</mat-toolbar>\n  <mat-nav-list>\n    <a mat-list-item [routerLink] = [link.url] *ngFor=\"let link of links\">{{link.name}}</a> \n  </mat-nav-list>\n  </mat-sidenav>\n  <div class=\"app-sidenav-content\">\n      <app-toolbar (toggleSidenav)=\"sidenav.toggle()\"></app-toolbar>\n      <br><br><br><br>\n      <div class=\"wrapper\">\n        <router-outlet></router-outlet>\n      </div>\n  </div>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/dashboard/components/side-nav/side-nav.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/side-nav/side-nav.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-sidenav-container {\n  flex: 1;\n  position: fixed;\n  width: 100%;\n  min-width: 100;\n  height: 100%;\n  min-height: 100%; }\n\n.app-sidenav-content {\n  display: flex;\n  height: 100%;\n  flex-direction: column; }\n\n.app-sidenav {\n  width: 540px;\n  height: 500px; }\n\n.wrapper {\n  margin: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2lkZS1uYXYvRTpcXEFuZ3VsYXJcXHZhaXpcXGRhc2hib2FyZC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxzaWRlLW5hdlxcc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxRQUFPO0VBQ1AsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsZUFBYztFQUNkLGFBQVk7RUFDWixpQkFDRixFQUFDOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFDWix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osY0FBYSxFQUNkOztBQUNEO0VBQ0UsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJVxyXG4gIH1cclxuICBcclxuICAuYXBwLXNpZGVuYXYtY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuYXBwLXNpZGVuYXZ7XHJcbiAgICB3aWR0aDogNTQwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuICAud3JhcHBlcntcclxuICAgIG1hcmdpbjogNTBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/components/side-nav/side-nav.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/side-nav/side-nav.component.ts ***!
  \*********************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
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

var MAX_WIDTH_BREAKPOINT = 720;
var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(zone) {
        var _this = this;
        this.mediaMatcher = matchMedia('(max-width : ${MAX_WIDTH_BREAKPOINT}px)');
        this.links = [{
                name: 'Quotations',
                url: 'quotations'
            },
            {
                name: 'Purchaseorder',
                url: 'purchaseorder'
            },
            {
                name: 'Invoices',
                url: 'invoices'
            }];
        this.mediaMatcher.addListener(function (mql) {
            zone.run(function () { return _this.mediaMatcherList = mql; });
        });
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/dashboard/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/dashboard/components/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/toolbar/toolbar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/toolbar/toolbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-button (click) =\"toggleSidenav.emit()\">\n    <mat-icon>\n      menu\n    </mat-icon>\n  </button>\n  <span>Quotation</span>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/dashboard/components/toolbar/toolbar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/toolbar/toolbar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-toggle {\n  display: none;\n  padding: 0;\n  margin: 8px;\n  min-width: 56px; }\n\n@media (max-width: 720px) {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\nmat-icon {\n  font-size: 30px;\n  height: 56px;\n  width: 56px;\n  line-height: 56px;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvdG9vbGJhci9FOlxcQW5ndWxhclxcdmFpelxcZGFzaGJvYXJkL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXHRvb2xiYXJcXHRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFhO0VBQ2IsV0FBUztFQUNULFlBQVc7RUFDWCxnQkFOYSxFQU9oQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBb0I7RUFDcEIsd0JBQXVCLEVBQUE7O0FBRTFCO0VBQ0ksZ0JBQWU7RUFDaEIsYUFoQmE7RUFpQmIsWUFqQmE7RUFrQmIsa0JBbEJhO0VBbUJiLGFBQWEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpY29uV2lkdGggOiA1NnB4O1xyXG5cclxuLnNpZGVuYXYtdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIG1pbi13aWR0aCA6ICRpY29uV2lkdGg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoIDogNzIwcHgpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogIGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiBtYXQtaWNvbiB7XHJcbiAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAkaWNvbldpZHRoO1xyXG4gICAgd2lkdGg6ICRpY29uV2lkdGg7XHJcbiAgICBsaW5lLWhlaWdodDogJGljb25XaWR0aDtcclxuICAgIGNvbG9yIDogd2hpdGU7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/components/toolbar/toolbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/toolbar/toolbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
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

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidenav", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/dashboard/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/dashboard/components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-content/main-content.component */ "./src/app/dashboard/components/main-content/main-content.component.ts");
/* harmony import */ var _invoices_components_invoice_listing_invoice_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../invoices/components/invoice-listing/invoice-listing.component */ "./src/app/invoices/components/invoice-listing/invoice-listing.component.ts");
/* harmony import */ var _quotations_components_quotations_listing_quotations_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quotations/components/quotations-listing/quotations-listing.component */ "./src/app/quotations/components/quotations-listing/quotations-listing.component.ts");
/* harmony import */ var _purchaseorder_components_purchaseorder_listing_purchaseorder_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component */ "./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            {
                path: '',
                component: _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__["MainContentComponent"]
            },
            {
                path: 'quotations',
                component: _quotations_components_quotations_listing_quotations_listing_component__WEBPACK_IMPORTED_MODULE_5__["QuotationsListingComponent"]
            },
            {
                path: 'purchaseorder',
                component: _purchaseorder_components_purchaseorder_listing_purchaseorder_listing_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseorderListingComponent"]
            },
            {
                path: 'invoices',
                component: _invoices_components_invoice_listing_invoice_listing_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceListingComponent"]
            }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: "\n   <app-side-nav></app-side-nav>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-content/main-content.component */ "./src/app/dashboard/components/main-content/main-content.component.ts");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/dashboard/components/side-nav/side-nav.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/dashboard/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _invoices_invoices_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../invoices/invoices.module */ "./src/app/invoices/invoices.module.ts");
/* harmony import */ var _purchaseorder_purchaseorder_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../purchaseorder/purchaseorder.module */ "./src/app/purchaseorder/purchaseorder.module.ts");
/* harmony import */ var _quotations_quotations_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../quotations/quotations.module */ "./src/app/quotations/quotations.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_4__["MainContentComponent"],
                _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _invoices_invoices_module__WEBPACK_IMPORTED_MODULE_9__["InvoicesModule"],
                _purchaseorder_purchaseorder_module__WEBPACK_IMPORTED_MODULE_10__["PurchaseorderModule"],
                _quotations_quotations_module__WEBPACK_IMPORTED_MODULE_11__["QuotationsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/invoices/components/invoice-listing/invoice-listing.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/invoices/components/invoice-listing/invoice-listing.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  \n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n  \n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n</mat-card>"

/***/ }),

/***/ "./src/app/invoices/components/invoice-listing/invoice-listing.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/invoices/components/invoice-listing/invoice-listing.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZXMvY29tcG9uZW50cy9pbnZvaWNlLWxpc3RpbmcvRTpcXEFuZ3VsYXJcXHZhaXpcXGRhc2hib2FyZC9zcmNcXGFwcFxcaW52b2ljZXNcXGNvbXBvbmVudHNcXGludm9pY2UtbGlzdGluZ1xcaW52b2ljZS1saXN0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZXMvY29tcG9uZW50cy9pbnZvaWNlLWxpc3RpbmcvaW52b2ljZS1saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/invoices/components/invoice-listing/invoice-listing.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/invoices/components/invoice-listing/invoice-listing.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InvoiceListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListingComponent", function() { return InvoiceListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/invoice.service */ "./src/app/invoices/services/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceListingComponent = /** @class */ (function () {
    function InvoiceListingComponent(invoiceSerivce) {
        this.invoiceSerivce = invoiceSerivce;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    InvoiceListingComponent.prototype.ngOnInit = function () {
        this.invoiceSerivce
            .getInvoices()
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.error(err);
        });
    };
    InvoiceListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-listing',
            template: __webpack_require__(/*! ./invoice-listing.component.html */ "./src/app/invoices/components/invoice-listing/invoice-listing.component.html"),
            styles: [__webpack_require__(/*! ./invoice-listing.component.scss */ "./src/app/invoices/components/invoice-listing/invoice-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_invoice_service__WEBPACK_IMPORTED_MODULE_1__["InvoiceService"]])
    ], InvoiceListingComponent);
    return InvoiceListingComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


/***/ }),

/***/ "./src/app/invoices/invoices.module.ts":
/*!*********************************************!*\
  !*** ./src/app/invoices/invoices.module.ts ***!
  \*********************************************/
/*! exports provided: InvoicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesModule", function() { return InvoicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_invoice_listing_invoice_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/invoice-listing/invoice-listing.component */ "./src/app/invoices/components/invoice-listing/invoice-listing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/invoice.service */ "./src/app/invoices/services/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [_components_invoice_listing_invoice_listing_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceListingComponent"]],
            exports: [_components_invoice_listing_invoice_listing_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceListingComponent"]],
            providers: [_services_invoice_service__WEBPACK_IMPORTED_MODULE_6__["InvoiceService"]]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());



/***/ }),

/***/ "./src/app/invoices/services/invoice.service.ts":
/*!******************************************************!*\
  !*** ./src/app/invoices/services/invoice.service.ts ***!
  \******************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BASE_URL = 'http://localhost:3000/api';
var InvoiceService = /** @class */ (function () {
    function InvoiceService(httpClient) {
        this.httpClient = httpClient;
    }
    InvoiceService.prototype.getInvoices = function () {
        return this.httpClient.get('${BASE_URL}/invoices');
    };
    InvoiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n <h1>purchaseorder-listing works!</h1>\n  \n</mat-card>\n"

/***/ }),

/***/ "./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1cmNoYXNlb3JkZXIvY29tcG9uZW50cy9wdXJjaGFzZW9yZGVyLWxpc3RpbmcvcHVyY2hhc2VvcmRlci1saXN0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PurchaseorderListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseorderListingComponent", function() { return PurchaseorderListingComponent; });
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

var PurchaseorderListingComponent = /** @class */ (function () {
    function PurchaseorderListingComponent() {
    }
    PurchaseorderListingComponent.prototype.ngOnInit = function () {
    };
    PurchaseorderListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchaseorder-listing',
            template: __webpack_require__(/*! ./purchaseorder-listing.component.html */ "./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.html"),
            styles: [__webpack_require__(/*! ./purchaseorder-listing.component.scss */ "./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PurchaseorderListingComponent);
    return PurchaseorderListingComponent;
}());



/***/ }),

/***/ "./src/app/purchaseorder/purchaseorder.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/purchaseorder/purchaseorder.module.ts ***!
  \*******************************************************/
/*! exports provided: PurchaseorderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseorderModule", function() { return PurchaseorderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_purchaseorder_listing_purchaseorder_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/purchaseorder-listing/purchaseorder-listing.component */ "./src/app/purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PurchaseorderModule = /** @class */ (function () {
    function PurchaseorderModule() {
    }
    PurchaseorderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [_components_purchaseorder_listing_purchaseorder_listing_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseorderListingComponent"]],
            exports: [_components_purchaseorder_listing_purchaseorder_listing_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseorderListingComponent"]]
        })
    ], PurchaseorderModule);
    return PurchaseorderModule;
}());



/***/ }),

/***/ "./src/app/quotations/components/quotations-listing/quotations-listing.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/quotations/components/quotations-listing/quotations-listing.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  quotations-listing works!\n</p>\n"

/***/ }),

/***/ "./src/app/quotations/components/quotations-listing/quotations-listing.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/quotations/components/quotations-listing/quotations-listing.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RhdGlvbnMvY29tcG9uZW50cy9xdW90YXRpb25zLWxpc3RpbmcvcXVvdGF0aW9ucy1saXN0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/quotations/components/quotations-listing/quotations-listing.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/quotations/components/quotations-listing/quotations-listing.component.ts ***!
  \******************************************************************************************/
/*! exports provided: QuotationsListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationsListingComponent", function() { return QuotationsListingComponent; });
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

var QuotationsListingComponent = /** @class */ (function () {
    function QuotationsListingComponent() {
    }
    QuotationsListingComponent.prototype.ngOnInit = function () {
    };
    QuotationsListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotations-listing',
            template: __webpack_require__(/*! ./quotations-listing.component.html */ "./src/app/quotations/components/quotations-listing/quotations-listing.component.html"),
            styles: [__webpack_require__(/*! ./quotations-listing.component.scss */ "./src/app/quotations/components/quotations-listing/quotations-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuotationsListingComponent);
    return QuotationsListingComponent;
}());



/***/ }),

/***/ "./src/app/quotations/quotations.module.ts":
/*!*************************************************!*\
  !*** ./src/app/quotations/quotations.module.ts ***!
  \*************************************************/
/*! exports provided: QuotationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationsModule", function() { return QuotationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_quotations_listing_quotations_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quotations-listing/quotations-listing.component */ "./src/app/quotations/components/quotations-listing/quotations-listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuotationsModule = /** @class */ (function () {
    function QuotationsModule() {
    }
    QuotationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_quotations_listing_quotations_listing_component__WEBPACK_IMPORTED_MODULE_2__["QuotationsListingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], QuotationsModule);
    return QuotationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map