(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*****************************************!*\
  !*** multi ./projects/wpdx/src/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/wpdx-apps/wpdx-apps/projects/wpdx/src/main.ts */"y+2f");


/***/ }),

/***/ "BMTv":
/*!**********************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/map-layer/map-layer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MapLayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapLayerComponent", function() { return MapLayerComponent; });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MapLayerComponent {
    constructor(el) {
        this.el = el;
        this.ACCESS_TOKEN = 'pk.eyJ1Ijoid3BkeCIsImEiOiJja2ptdDljN3kwbHpsMnpxcHJvdDlmbTF1In0.vXVq027cJzHuy7Xa_tAkWQ';
        this.map = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapboxgl = mapbox_gl__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnChanges() {
        if (!this.theMap && this.style) {
            console.log('MAPBOX', this.style, this.mapboxgl);
            this.mapboxgl.accessToken = this.ACCESS_TOKEN;
            this.theMap = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["Map"]({
                container: this.el.nativeElement,
                style: this.style,
            });
            this.map.next(this.theMap);
        }
    }
}
MapLayerComponent.ɵfac = function MapLayerComponent_Factory(t) { return new (t || MapLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
MapLayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapLayerComponent, selectors: [["app-map-layer"]], inputs: { style: "style" }, outputs: { map: "map" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function MapLayerComponent_Template(rf, ctx) { }, styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwibWFwLWxheWVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksMkNBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0E7RUFDSSwyQ0FBQTtBQ1BKO0FEV0k7RUFZQTtJQUNJLHdCQUFBO0VDcEJOO0FBQ0Y7QURZSTtFQVlBO0lBQ0ksd0JBQUE7RUNyQk47QUFDRjtBQWRBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZ0JKIiwiZmlsZSI6Im1hcC1sYXllci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQHByaW1hcnlCcmFuZDogIzNFQzJGRjtcblxuQHpJbmRleEhlYWRlcjogMTtcbkB6SW5kZXhGaWx0ZXJzOiAyO1xuQHpJbmRleFNpZGVQYW5lbDogMztcblxuLmZvbnRTYW5zIHtcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLm5pY2Utc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubW9iaWxlKEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4uZGVza3RvcChAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLm1vYmlsZSh7XG4gICAgOjpuZy1kZWVwIC5sYXlvdXQtZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcblxuLmRlc2t0b3Aoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcbiIsIkBpbXBvcnQgJy4uL2NvbW1vbi5sZXNzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "BuCV":
/*!*********************************************!*\
  !*** ./projects/wpdx/src/app/app.module.ts ***!
  \*********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "lnpR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Jy/D");
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common-components/common-components.module */ "z6Ay");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/main-page.component */ "Oob0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_7__["CommonComponentsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_7__["CommonComponentsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]] }); })();


/***/ }),

/***/ "Jy/D":
/*!************************************************!*\
  !*** ./projects/wpdx/src/app/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'wpdx';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "OLJs":
/*!**************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/about-panel/about-panel.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AboutPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPanelComponent", function() { return AboutPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout.service */ "Zrm7");
/* harmony import */ var _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-panel/side-panel.component */ "uvF/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logos_bar_logos_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logos-bar/logos-bar.component */ "iI9D");







function AboutPanelComponent_app_logos_bar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logos-bar", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logosKey", ctx_r0.logosKey);
} }
const _c0 = ["*"];
class AboutPanelComponent {
    constructor(layout) {
        this.layout = layout;
        this.open = false;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    get position() {
        return this.layout.mobile() ? 'bottom' : 'right';
    }
}
AboutPanelComponent.ɵfac = function AboutPanelComponent_Factory(t) { return new (t || AboutPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"])); };
AboutPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPanelComponent, selectors: [["app-about-panel"]], inputs: { open: "open", logosKey: "logosKey" }, outputs: { closed: "closed" }, ngContentSelectors: _c0, decls: 7, vars: 3, consts: [[3, "position", "open"], [1, "about"], [1, "close", 3, "click"], ["aria-hidden", "false", "aria-label", "close icon"], [3, "logosKey", 4, "ngIf"], [3, "logosKey"]], template: function AboutPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-side-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutPanelComponent_Template_div_click_2_listener() { return ctx.closed.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AboutPanelComponent_app_logos_bar_6_Template, 1, 1, "app-logos-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx.position)("open", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logosKey);
    } }, directives: [_side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_2__["SidePanelComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _logos_bar_logos_bar_component__WEBPACK_IMPORTED_MODULE_5__["LogosBarComponent"]], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.about[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 100%;\n  width: 100%;\n  min-width: 340px;\n}\n@media only screen and (min-width: 601px) {\n  .about[_ngcontent-%COMP%] {\n    max-width: 460px;\n    padding: 40px 24px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .about[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.about[_ngcontent-%COMP%]    > .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwiYWJvdXQtcGFuZWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLDJDQUFBO0FDUEo7QURXSTtFQVlBO0lBQ0ksd0JBQUE7RUNwQk47QUFDRjtBRFlJO0VBWUE7SUFDSSx3QkFBQTtFQ3JCTjtBQUNGO0FBZEE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBZ0JKO0FEQ0k7RUFBQTtJQ2RJLGdCQUFBO0lBQ0Esa0JBQUE7RUFpQk47QUFDRjtBRFhJO0VBQUE7SUNKSSxrQkFBQTtFQW1CTjtBQUNGO0FBL0JBO0VBY1Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFvQlIiLCJmaWxlIjoiYWJvdXQtcGFuZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBwcmltYXJ5QnJhbmQ6ICMzRUMyRkY7XG5cbkB6SW5kZXhIZWFkZXI6IDE7XG5AekluZGV4RmlsdGVyczogMjtcbkB6SW5kZXhTaWRlUGFuZWw6IDM7XG5cbi5mb250U2FucyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5uaWNlLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vYmlsZShAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLmRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5tb2JpbGUoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cbi5kZXNrdG9wKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG4iLCJAaW1wb3J0ICcuLi9jb21tb24ubGVzcyc7XG5cbi5hYm91dCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xuICAgIC8vIGJveC1zaGFkb3c6IC0xMHB4IDBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIC5kZXNrdG9wKHtcbiAgICAgICAgbWF4LXdpZHRoOiA0NjBweDtcbiAgICAgICAgcGFkZGluZzogNDBweCAyNHB4O1xuICAgIH0pO1xuICAgIC5tb2JpbGUoe1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgfSk7XG4gICAgPiAuY2xvc2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "Oob0":
/*!****************************************************************!*\
  !*** ./projects/wpdx/src/app/main-page/main-page.component.ts ***!
  \****************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 3, vars: 0, consts: [["href", "/status-predictions/"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status Predictions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "TRlM":
/*!***************************************************!*\
  !*** ./projects/wpdx/src/app/airtable.service.ts ***!
  \***************************************************/
/*! exports provided: AirtableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirtableService", function() { return AirtableService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AirtableService {
    constructor(http) {
        this.http = http;
        this.AIRTABLE_BASE = 'https://api.airtable.com/v0';
        this.BASE_WPDX_TOOLS = 'appuaFaGEiIMszJYb';
        this.BASE_KEY = 'keyGX9PZzIM6ioXXa';
    }
    airtableFetch(base, table, view, record, fields) {
        const headers = {
            'Authorization': `Bearer ${this.BASE_KEY}`
        };
        let url = `${this.AIRTABLE_BASE}/${base}/${table}`;
        let params = {};
        if (record) {
            url += `/${record}`;
        }
        else {
            params = {
                maxRecords: 1000,
                view,
            };
            if (fields) {
                params.fields = fields;
            }
        }
        return this.http.get(url, { headers, params });
    }
    airtableToMapping() {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((response) => {
            const ret = {};
            response.records.forEach((i) => {
                ret[i.fields.key] = Object.assign(i.fields, { id: i.id });
            });
            return ret;
        });
    }
    airtableToArray() {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((response) => {
            const ret = [];
            response.records.forEach((i) => {
                ret.push(Object.assign(i.fields, { id: i.id }));
            });
            return ret;
        });
    }
    fetchWpdxTools() {
        return this.airtableFetch(this.BASE_WPDX_TOOLS, 'Tool Descriptions', 'website').pipe(this.airtableToMapping());
    }
    fetchLogos(logosKey) {
        return this.airtableFetch(this.BASE_WPDX_TOOLS, 'Logos', 'website').pipe(this.airtableToArray(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((logos) => logos.filter((l) => (l.tool.indexOf(logosKey) >= 0))));
    }
}
AirtableService.ɵfac = function AirtableService_Factory(t) { return new (t || AirtableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AirtableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AirtableService, factory: AirtableService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UMjF":
/*!************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/app-layout/app-layout.component.ts ***!
  \************************************************************************************/
/*! exports provided: AppLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutComponent", function() { return AppLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



const _c0 = [[["", 8, "title"]], [["", 8, "content"]]];
const _c1 = [".title", ".content"];
class AppLayoutComponent {
    constructor() {
        this.info = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
AppLayoutComponent.ɵfac = function AppLayoutComponent_Factory(t) { return new (t || AppLayoutComponent)(); };
AppLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLayoutComponent, selectors: [["app-layout"]], outputs: { info: "info" }, ngContentSelectors: _c1, decls: 10, vars: 0, consts: [[1, "app"], [1, "header"], ["src", "assets/img/logo.png", 1, "logo"], [1, "info", 3, "click"], ["aria-hidden", "false", "aria-label", "info icon", "fontSet", "material-icons-outlined"], [1, "content"]], template: function AppLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppLayoutComponent_Template_div_click_5_listener() { return ctx.info.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-flow: column;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%] {\n  flex: 0 0 70px;\n  height: 70px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 8px 16px;\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n  color: #3EC2FF;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n@media only screen and (min-width: 601px) {\n  [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%] {\n    height: 80%;\n  }\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-inline-start: 32px;\n}\n@media only screen and (min-width: 601px) {\n  [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 24px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 16px;\n  }\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  margin-inline-end: 16px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwiYXBwLWxheW91dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksMkNBQUE7QUNQSjtBRFdJO0VBWUE7SUFDSSx3QkFBQTtFQ3BCTjtBQUNGO0FEWUk7RUFZQTtJQUNJLHdCQUFBO0VDckJOO0FBQ0Y7QUFaQTtFQUNHLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWNIO0FBakJBO0VBTUksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFjSjtBQXZCQTtFQVdRLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VEWkosMkNBQUE7RUFDQSxrQkFBQTtFQ2FJLGNBQUE7RURUSiwyQ0FBQTtFQ1dJLFVBQUE7QUFnQlI7QURqQkk7RUFBQTtJQ0tZLFlBQUE7RUFnQmQ7QUFDRjtBRDVCSTtFQUFBO0lDY1ksV0FBQTtFQWtCZDtBQUNGO0FBOUNBO0VBK0JZLFNBQUE7RUFDQSx5QkFBQTtBQWtCWjtBRC9CSTtFQUFBO0lDZVksZUFBQTtJQUNBLGlCQUFBO0VBb0JkO0FBQ0Y7QUQzQ0k7RUFBQTtJQ3lCWSxlQUFBO0lBQ0EsaUJBQUE7RUFzQmQ7QUFDRjtBQTlEQTtFQTJDWSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQXNCWjtBQW5FQTtFQWlEUSxjQUFBO0FBcUJSIiwiZmlsZSI6ImFwcC1sYXlvdXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBwcmltYXJ5QnJhbmQ6ICMzRUMyRkY7XG5cbkB6SW5kZXhIZWFkZXI6IDE7XG5AekluZGV4RmlsdGVyczogMjtcbkB6SW5kZXhTaWRlUGFuZWw6IDM7XG5cbi5mb250U2FucyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5uaWNlLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vYmlsZShAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLmRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5tb2JpbGUoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cbi5kZXNrdG9wKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG4iLCJAaW1wb3J0ICcuLi9jb21tb24ubGVzcyc7XG5cbkBoZWFkZXJTaXplOiA3MHB4O1xuXG46aG9zdCB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIGhlaWdodDogMTAwJTtcbiAgIHdpZHRoOiAxMDAlO1xuICAgXG4gICA+IGRpdi5hcHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgID4gLmhlYWRlciB7XG4gICAgICAgIGZsZXg6IDAgMCBAaGVhZGVyU2l6ZTtcbiAgICAgICAgaGVpZ2h0OiBAaGVhZGVyU2l6ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAuZm9udFNhbnM7XG4gICAgICAgIGNvbG9yOiBAcHJpbWFyeUJyYW5kO1xuICAgICAgICAubmljZS1zaGFkb3c7XG4gICAgICAgIHotaW5kZXg6IEB6SW5kZXhIZWFkZXI7XG4gICAgICAgIFxuICAgICAgICA+IC5sb2dvIHtcbiAgICAgICAgICAgIC5kZXNrdG9wKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC5tb2JpbGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgPiBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAzMnB4O1xuICAgICAgICAgICAgLmRlc2t0b3Aoe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLm1vYmlsZSh7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxNnB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgID4gLmNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICB9XG4gICB9XG59Il19 */"] });


/***/ }),

/***/ "Xqxw":
/*!****************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/adm-selector/adm-selector.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdmSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmSelectorComponent", function() { return AdmSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");








function AdmSelectorComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4.value, " ");
} }
function AdmSelectorComponent_mat_card_actions_8_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6.value, " ");
} }
function AdmSelectorComponent_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AdmSelectorComponent_mat_card_actions_8_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.adm1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdmSelectorComponent_mat_card_actions_8_mat_option_4_Template, 2, 2, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.adm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.adm1_options);
} }
function AdmSelectorComponent_mat_card_actions_9_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r10.value, " ");
} }
function AdmSelectorComponent_mat_card_actions_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AdmSelectorComponent_mat_card_actions_9_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.adm2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdmSelectorComponent_mat_card_actions_9_mat_option_4_Template, 2, 2, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.adm2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.adm2_options);
} }
function AdmSelectorComponent_mat_card_actions_10_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r14.value, " ");
} }
function AdmSelectorComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AdmSelectorComponent_mat_card_actions_10_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.adm3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdmSelectorComponent_mat_card_actions_10_mat_option_4_Template, 2, 2, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.adm3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.adm3_options);
} }
class AdmSelectorComponent {
    constructor(http) {
        this.http = http;
        this.optionsUrl = '';
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._country_name = {};
        this.country_name_options = [];
        this._adm1 = {};
        this.adm1_options = [];
        this._adm2 = {};
        this.adm2_options = [];
        this._adm3 = {};
        this.adm3_options = [];
    }
    ngOnInit() {
        if (this.optionsUrl) {
            this.http.get(this.optionsUrl).subscribe((levels) => {
                console.log('RESULT', levels);
                this.country_name_options = levels;
            });
        }
    }
    set country_name(value) {
        this._country_name = value;
        this.adm1 = {};
        this.adm1_options = value.items || [];
    }
    get country_name() {
        return this._country_name;
    }
    set adm1(value) {
        this._adm1 = value;
        this.adm2 = {};
        this.adm2_options = value.items || [];
    }
    get adm1() {
        return this._adm1;
    }
    set adm2(value) {
        this._adm2 = value;
        this.adm3 = {};
        this.adm3_options = value.items || [];
    }
    get adm2() {
        return this._adm2;
    }
    set adm3(value) {
        this._adm3 = value;
        this.sendState();
    }
    get adm3() {
        return this._adm3;
    }
    sendState() {
        var _a, _b, _c;
        const state = {
            country_name: this.country_name.value,
            adm1: (_a = this.adm1) === null || _a === void 0 ? void 0 : _a.value,
            adm2: (_b = this.adm2) === null || _b === void 0 ? void 0 : _b.value,
            adm3: (_c = this.adm3) === null || _c === void 0 ? void 0 : _c.value,
            bounds: this.adm3.bounds || this.adm2.bounds || this.adm1.bounds || this.country_name.bounds
        };
        this.state.next(state);
    }
}
AdmSelectorComponent.ɵfac = function AdmSelectorComponent_Factory(t) { return new (t || AdmSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdmSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdmSelectorComponent, selectors: [["app-adm-selector"]], inputs: { optionsUrl: "optionsUrl" }, outputs: { state: "state" }, decls: 11, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2702200797962830082$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS_1 = goog.getMsg("Region");
        i18n_0 = MSG_EXTERNAL_2702200797962830082$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `Region`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_699240523726627926$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS_3 = goog.getMsg("Country Name");
        i18n_2 = MSG_EXTERNAL_699240523726627926$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `Country Name`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4378362537654725826$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__5 = goog.getMsg("Adm Level 1");
        i18n_4 = MSG_EXTERNAL_4378362537654725826$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `Adm Level 1`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_391829695663470593$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__7 = goog.getMsg("Adm Level 2");
        i18n_6 = MSG_EXTERNAL_391829695663470593$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `Adm Level 2`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5815377210509671009$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__9 = goog.getMsg("Adm Level 3");
        i18n_8 = MSG_EXTERNAL_5815377210509671009$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `Adm Level 3`;
    } return [i18n_0, i18n_2, [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], i18n_4, i18n_6, i18n_8]; }, template: function AdmSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AdmSelectorComponent_Template_mat_select_valueChange_6_listener($event) { return ctx.country_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdmSelectorComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdmSelectorComponent_mat_card_actions_8_Template, 5, 2, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdmSelectorComponent_mat_card_actions_9_Template, 5, 2, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdmSelectorComponent_mat_card_actions_10_Template, 5, 2, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.country_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country_name_options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adm1_options && ctx.adm1_options.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adm2_options && ctx.adm2_options.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adm3_options && ctx.adm3_options.length);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]], styles: ["mat-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbS1zZWxlY3Rvci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYWRtLXNlbGVjdG9yLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"] });


/***/ }),

/***/ "Zrm7":
/*!*************************************************!*\
  !*** ./projects/wpdx/src/app/layout.service.ts ***!
  \*************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LayoutService {
    constructor() { }
    mobile() {
        return window.innerWidth <= 600;
    }
    desktop() {
        return window.innerWidth > 600;
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(); };
LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "iI9D":
/*!**********************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/logos-bar/logos-bar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LogosBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogosBarComponent", function() { return LogosBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airtable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airtable.service */ "TRlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function LogosBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const logo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", logo_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", logo_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", logo_r1.logo[0].thumbnails.large.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class LogosBarComponent {
    constructor(airtable) {
        this.airtable = airtable;
        this.logos = [];
    }
    ngOnInit() {
        if (this.logosKey) {
            this.airtable.fetchLogos(this.logosKey).subscribe((logos) => {
                console.log('LGOSO', logos);
                this.logos = logos;
            });
        }
    }
}
LogosBarComponent.ɵfac = function LogosBarComponent_Factory(t) { return new (t || LogosBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_airtable_service__WEBPACK_IMPORTED_MODULE_1__["AirtableService"])); };
LogosBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogosBarComponent, selectors: [["app-logos-bar"]], inputs: { logosKey: "logosKey" }, decls: 2, vars: 1, consts: [[1, "logos"], ["class", "logo", 4, "ngFor", "ngForOf"], [1, "logo"], ["target", "_blank", 3, "href", "title"], [3, "src"]], template: function LogosBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LogosBarComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".logos[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 24px;\n}\n.logos[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 40px;\n  max-width: 150px;\n  margin-inline-end: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ29zLWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBUEE7RUFVWSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFBWiIsImZpbGUiOiJsb2dvcy1iYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIFxuICAgIC5sb2dvIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "lnpR":
/*!*****************************************************!*\
  !*** ./projects/wpdx/src/app/app-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ "Oob0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'status-predictions', loadChildren: () => __webpack_require__.e(/*! import() | data-robot-data-robot-module */ "data-robot-data-robot-module").then(__webpack_require__.bind(null, /*! ./data-robot/data-robot.module */ "FnTO")).then(m => m.DataRobotModule) },
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "pikz":
/*!*******************************************************!*\
  !*** ./projects/wpdx/src/environments/environment.ts ***!
  \*******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "uvF/":
/*!************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/side-panel/side-panel.component.ts ***!
  \************************************************************************************/
/*! exports provided: SidePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidePanelComponent", function() { return SidePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
class SidePanelComponent {
    constructor() {
        this.open = false;
        this.position = 'right';
    }
    ngOnInit() {
    }
}
SidePanelComponent.ɵfac = function SidePanelComponent_Factory(t) { return new (t || SidePanelComponent)(); };
SidePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidePanelComponent, selectors: [["app-side-panel"]], inputs: { open: "open", position: "position" }, ngContentSelectors: _c0, decls: 2, vars: 10, consts: [[1, "panel"]], template: function SidePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open)("top", ctx.position === "top")("bottom", ctx.position === "bottom")("left", ctx.position === "left")("right", ctx.position === "right");
    } }, styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n[_nghost-%COMP%]    > div.panel[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  transition-property: transform;\n  transition-duration: 250ms;\n}\n[_nghost-%COMP%]    > div.panel.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-height: 100%;\n  overflow-y: scroll;\n  transform: translateX(0) translateY(100%);\n}\n[_nghost-%COMP%]    > div.panel.left[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  height: 100%;\n  max-width: 100%;\n  overflow-x: scroll;\n  transform: translateX(-100%) translateY(0);\n}\n[_nghost-%COMP%]    > div.panel.right[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  height: 100%;\n  max-width: 100%;\n  overflow-x: scroll;\n  transform: translateX(100%) translateY(0);\n}\n[_nghost-%COMP%]    > div.panel.top[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-height: 100%;\n  overflow-y: scroll;\n  transform: translateX(0) translateY(-100%);\n}\n[_nghost-%COMP%]    > div.panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0) translateY(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwic2lkZS1wYW5lbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksMkNBQUE7QUNQSjtBRFdJO0VBWUE7SUFDSSx3QkFBQTtFQ3BCTjtBQUNGO0FEWUk7RUFZQTtJQUNJLHdCQUFBO0VDckJOO0FBQ0Y7QUFkQTtFQUVRLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsMEJBQUE7QUFjUjtBQVpRO0VBQ0ksU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBY1o7QUFaUTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBY1o7QUFaUTtFQUNJLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBY1o7QUFaUTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQWNaO0FBWlE7RUFDSSxzQ0FBQTtBQWNaIiwiZmlsZSI6InNpZGUtcGFuZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBwcmltYXJ5QnJhbmQ6ICMzRUMyRkY7XG5cbkB6SW5kZXhIZWFkZXI6IDE7XG5AekluZGV4RmlsdGVyczogMjtcbkB6SW5kZXhTaWRlUGFuZWw6IDM7XG5cbi5mb250U2FucyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5uaWNlLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vYmlsZShAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLmRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5tb2JpbGUoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cbi5kZXNrdG9wKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG4iLCJAaW1wb3J0ICcuLi9jb21tb24ubGVzcyc7XG5cbjpob3N0IHtcbiAgICA+IGRpdi5wYW5lbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogQHpJbmRleFNpZGVQYW5lbDtcblxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuXG4gICAgICAgICYuYm90dG9tIHtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgxMDAlKTtcbiAgICAgICAgfVxuICAgICAgICAmLmxlZnQge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSl0cmFuc2xhdGVZKDApIDtcbiAgICAgICAgfVxuICAgICAgICAmLnJpZ2h0IHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpdHJhbnNsYXRlWSgwKSA7XG4gICAgICAgIH1cbiAgICAgICAgJi50b3Age1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgfVxuICAgICAgICAmLm9wZW4ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCkgO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "y+2f":
/*!***********************************!*\
  !*** ./projects/wpdx/src/main.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "BuCV");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "pikz");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "z6Ay":
/*!*****************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/common-components.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CommonComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return CommonComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-layout/app-layout.component */ "UMjF");
/* harmony import */ var _map_layer_map_layer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-layer/map-layer.component */ "BMTv");
/* harmony import */ var _adm_selector_adm_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adm-selector/adm-selector.component */ "Xqxw");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side-panel/side-panel.component */ "uvF/");
/* harmony import */ var _about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-panel/about-panel.component */ "OLJs");
/* harmony import */ var _logos_bar_logos_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logos-bar/logos-bar.component */ "iI9D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class CommonComponentsModule {
}
CommonComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CommonComponentsModule });
CommonComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function CommonComponentsModule_Factory(t) { return new (t || CommonComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CommonComponentsModule, { declarations: [_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__["AppLayoutComponent"],
        _map_layer_map_layer_component__WEBPACK_IMPORTED_MODULE_2__["MapLayerComponent"],
        _adm_selector_adm_selector_component__WEBPACK_IMPORTED_MODULE_3__["AdmSelectorComponent"],
        _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_7__["SidePanelComponent"],
        _about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_8__["AboutPanelComponent"],
        _logos_bar_logos_bar_component__WEBPACK_IMPORTED_MODULE_9__["LogosBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]], exports: [_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__["AppLayoutComponent"],
        _map_layer_map_layer_component__WEBPACK_IMPORTED_MODULE_2__["MapLayerComponent"],
        _adm_selector_adm_selector_component__WEBPACK_IMPORTED_MODULE_3__["AdmSelectorComponent"],
        _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_7__["SidePanelComponent"],
        _about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_8__["AboutPanelComponent"]] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map