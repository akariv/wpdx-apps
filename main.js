"use strict";
(self["webpackChunkwpdx"] = self["webpackChunkwpdx"] || []).push([["main"],{

/***/ 70110:
/*!***************************************************!*\
  !*** ./projects/wpdx/src/app/airtable.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AirtableService": () => (/* binding */ AirtableService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class AirtableService {
    constructor(http) {
        this.http = http;
        this.AIRTABLE_BASE = 'https://api.airtable.com/v0';
        this.BASE_WPDX_TOOLS = 'appuaFaGEiIMszJYb';
        this.BASE_KEY = 'keyGX9PZzIM6ioXXa';
    }
    airtableFetch(base, table, view, record, fields) {
        const headers = {
            Authorization: `Bearer ${this.BASE_KEY}`
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
        return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            const ret = {};
            response.records.forEach((i) => {
                ret[i.fields.key] = Object.assign(i.fields, { id: i.id });
            });
            return ret;
        });
    }
    airtableToArray() {
        return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
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
        return this.airtableFetch(this.BASE_WPDX_TOOLS, 'Logos', 'website').pipe(this.airtableToArray(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((logos) => logos.filter((l) => (l.tool.indexOf(logosKey) >= 0))));
    }
}
AirtableService.ɵfac = function AirtableService_Factory(t) { return new (t || AirtableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AirtableService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AirtableService, factory: AirtableService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13954:
/*!*****************************************************!*\
  !*** ./projects/wpdx/src/app/app-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    { path: 'status-predictions', loadChildren: () => __webpack_require__.e(/*! import() */ "projects_wpdx_src_app_data-robot_data-robot_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./data-robot/data-robot.module */ 8289)).then(m => m.DataRobotModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() */ "projects_wpdx_src_app_rehab-prio_rehab-prio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rehab-prio/rehab-prio.module */ 23678)).then(m => m.RehabPrioModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 61276:
/*!************************************************!*\
  !*** ./projects/wpdx/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AppComponent {
    constructor() {
        this.title = 'wpdx';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 40167:
/*!*********************************************!*\
  !*** ./projects/wpdx/src/app/app.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 13954);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 61276);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-components/common-components.module */ 93566);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ 79185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__.MainPageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule] }); })();


/***/ }),

/***/ 78781:
/*!**************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/about-panel/about-panel.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPanelComponent": () => (/* binding */ AboutPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layout.service */ 27024);
/* harmony import */ var _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-panel/side-panel.component */ 76177);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _logos_bar_logos_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos-bar/logos-bar.component */ 16886);







function AboutPanelComponent_app_logos_bar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-logos-bar", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("logosKey", ctx_r0.logosKey);
} }
const _c0 = ["*"];
class AboutPanelComponent {
    constructor(layout) {
        this.layout = layout;
        this.open = false;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    get position() {
        return this.layout.mobile() ? 'bottom' : 'right';
    }
}
AboutPanelComponent.ɵfac = function AboutPanelComponent_Factory(t) { return new (t || AboutPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService)); };
AboutPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AboutPanelComponent, selectors: [["app-about-panel"]], inputs: { open: "open", logosKey: "logosKey" }, outputs: { closed: "closed" }, ngContentSelectors: _c0, decls: 7, vars: 3, consts: [[3, "position", "open"], [1, "about"], [1, "close", 3, "click"], ["aria-hidden", "false", "aria-label", "close icon"], [3, "logosKey", 4, "ngIf"], [3, "logosKey"]], template: function AboutPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-side-panel", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AboutPanelComponent_Template_div_click_2_listener() { return ctx.closed.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AboutPanelComponent_app_logos_bar_6_Template, 1, 1, "app-logos-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("position", ctx.position)("open", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.logosKey);
    } }, directives: [_side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_1__.SidePanelComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _logos_bar_logos_bar_component__WEBPACK_IMPORTED_MODULE_2__.LogosBarComponent], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n.about[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 100%;\n  width: 100%;\n  min-width: 340px;\n}\n@media only screen and (min-width: 601px) {\n  .about[_ngcontent-%COMP%] {\n    max-width: 460px;\n    padding: 40px 24px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .about[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n}\n.about[_ngcontent-%COMP%]    > .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwiYWJvdXQtcGFuZWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLDJDQUFBO0FDUEo7QURXSTtFQVlBO0lBQ0ksd0JBQUE7RUNwQk47QUFDRjtBRFlJO0VBWUE7SUFDSSx3QkFBQTtFQ3JCTjtBQUNGO0FEeUJBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBWUEsK0JBQUE7QUNuQ0o7QUR5Qkk7O0VBRUUsc0JBQUE7QUN2Qk47QUQwQkk7O0VBRUksc0JBQUE7QUN4QlI7QUQ2Qkk7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUMzQlI7QUQ4Qkk7RUFDSSxrSEFBQTtBQzVCUjtBRHFDQTtFQUNJO0lBQ0Usb0NBQUE7RUNuQ0o7RURxQ0U7SUFDRSxpREFBQTtFQ25DSjtBQUNGO0FBckRBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXVESjtBRHRDSTtFQUFBO0lDZEksZ0JBQUE7SUFDQSxrQkFBQTtFQXdETjtBQUNGO0FEbERJO0VBQUE7SUNKSSxrQkFBQTtFQTBETjtBQUNGO0FBdEVBO0VBY1Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUEyRFIiLCJmaWxlIjoiYWJvdXQtcGFuZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBwcmltYXJ5QnJhbmQ6ICMzRUMyRkY7XG5cbkB6SW5kZXhIZWFkZXI6IDE7XG5AekluZGV4RmlsdGVyczogMjtcbkB6SW5kZXhTaWRlUGFuZWw6IDM7XG5cbi5mb250U2FucyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5uaWNlLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vYmlsZShAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLmRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5tb2JpbGUoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cbi5kZXNrdG9wKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cblxuLmxvYWRpbmcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjM5LCAyNDEsIDI0Nikgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQ6ICNkZGQgbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHggMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcbiAgICAgICAgKTtcbiAgICB9XG59ICBcblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYygyMDBweCArIDEwMHZ3KSwgMCwgMCk7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uL2NvbW1vbi5sZXNzJztcblxuLmFib3V0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzQwcHg7XG4gICAgLy8gYm94LXNoYWRvdzogLTEwcHggMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgLmRlc2t0b3Aoe1xuICAgICAgICBtYXgtd2lkdGg6IDQ2MHB4O1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDI0cHg7XG4gICAgfSk7XG4gICAgLm1vYmlsZSh7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICB9KTtcbiAgICA+IC5jbG9zZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 94936:
/*!********************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/adm-search-bar/adm-search-bar.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmSearchBarComponent": () => (/* binding */ AdmSearchBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db.service */ 76358);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 88133);












function AdmSearchBarComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelectionChange", function AdmSearchBarComponent_mat_option_7_Template_mat_option_onSelectionChange_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const option_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.sendState(option_r2.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r2.value || option_r2.display)("innerHTML", option_r2.display, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class AdmSearchBarComponent {
    constructor(db) {
        this.db = db;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.wpdx_id = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.searchBarControlForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
        this.options = [];
        this.wpdx_id_regex = /^([A-Z]|[0-9]){8}\+([A-Z]|[0-9]){3}$/;
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([
            this.db.fetchByAdmLevel('adm0'),
            this.db.fetchByAdmLevel('adm1'),
            this.db.fetchByAdmLevel('adm2'),
            this.db.fetchByAdmLevel('adm3'),
            this.db.fetchByAdmLevel('adm4'),
        ]).subscribe((results) => {
            console.log('GOT RESULTS', results);
            results.forEach(rows => {
                this.processDBResults(rows);
                this.filteredOptions = this.searchBarControlForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(value => this._filter(value || '')));
            });
        });
    }
    _filter(value) {
        if (this.wpdx_id_regex.test(value)) {
            const option = {
                display: `Go to point&nbsp;&nbsp;<strong><em>${value}</em></strong>`,
                value,
                state: value
            };
            return [option];
        }
        const filterValue = value.toLowerCase();
        const splittedValue = filterValue.split(' ');
        let filteredArray = this.options;
        for (const val of splittedValue) {
            filteredArray = filteredArray.filter(option => option.display.toLowerCase().includes(val));
        }
        const slicedArray = filteredArray.slice(0, 50);
        return slicedArray;
    }
    processDBResults(items) {
        for (const item of items) {
            const option = {
                'display': (item.clean_adm4 ? item.clean_adm4 + ', ' : '') +
                    (item.clean_adm3 ? item.clean_adm3 + ', ' : '') +
                    (item.clean_adm2 ? item.clean_adm2 + ', ' : '') +
                    (item.clean_adm1 ? item.clean_adm1 + ', ' : '') +
                    item.clean_country_name,
                'state': {
                    country_name: item.clean_country_name,
                    adm1: item.clean_adm1,
                    adm2: item.clean_adm2,
                    adm3: item.clean_adm3,
                    adm4: item.clean_adm4,
                    bounds: item.bounds
                }
            };
            this.options.push(option);
        }
    }
    sendState(state) {
        if (this.wpdx_id_regex.test(state)) {
            this.wpdx_id.next(state);
        }
        else {
            this.state.next(state);
        }
    }
}
AdmSearchBarComponent.ɵfac = function AdmSearchBarComponent_Factory(t) { return new (t || AdmSearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService)); };
AdmSearchBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdmSearchBarComponent, selectors: [["app-adm-search-bar"]], outputs: { state: "state", wpdx_id: "wpdx_id" }, decls: 9, vars: 5, consts: [["appearance", "outline"], ["type", "text", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "innerHTML", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "value", "innerHTML", "onSelectionChange"]], template: function AdmSearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form")(1, "mat-form-field", 0)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Search region or WPDx-ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-autocomplete", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdmSearchBarComponent_mat_option_7_Template, 1, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchBarControlForm)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, ctx.filteredOptions));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["[_nghost-%COMP%]     mat-form-field {\n  width: 300px;\n}\n[_nghost-%COMP%]     mat-form-field .mat-form-field-outline {\n  background: white;\n  border-radius: 5px;\n}\n[_nghost-%COMP%]     mat-form-field .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]     mat-form-field.mat-form-field-should-float .mat-form-field-label mat-label {\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbS1zZWFyY2gtYmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksWUFBQTtBQURaO0FBRkE7RUFLZ0IsaUJBQUE7RUFDQSxrQkFBQTtBQUFoQjtBQU5BO0VBU2dCLGlCQUFBO0FBQWhCO0FBRVk7RUFHWSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZ4QiIsImZpbGUiOiJhZG0tc2VhcmNoLWJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IHtcbiAgICAgICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXQtbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 83444:
/*!****************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/adm-selector/adm-selector.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmSelectorComponent": () => (/* binding */ AdmSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db.service */ 76358);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ 750);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);











function AdmSelectorComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r5.value, " ");
} }
function AdmSelectorComponent_mat_card_actions_8_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r7.value, " ");
} }
function AdmSelectorComponent_mat_card_actions_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-actions")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function AdmSelectorComponent_mat_card_actions_8_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.adm1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdmSelectorComponent_mat_card_actions_8_mat_option_4_Template, 2, 2, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.adm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.adm1_options);
} }
function AdmSelectorComponent_mat_card_actions_9_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r11.value, " ");
} }
function AdmSelectorComponent_mat_card_actions_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-actions")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function AdmSelectorComponent_mat_card_actions_9_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.adm2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdmSelectorComponent_mat_card_actions_9_mat_option_4_Template, 2, 2, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.adm2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.adm2_options);
} }
function AdmSelectorComponent_mat_card_actions_10_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r15.value, " ");
} }
function AdmSelectorComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-actions")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function AdmSelectorComponent_mat_card_actions_10_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.adm3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdmSelectorComponent_mat_card_actions_10_mat_option_4_Template, 2, 2, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r3.adm3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.adm3_options);
} }
function AdmSelectorComponent_mat_card_actions_11_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r19.value, " ");
} }
function AdmSelectorComponent_mat_card_actions_11_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-actions")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function AdmSelectorComponent_mat_card_actions_11_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.adm4 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdmSelectorComponent_mat_card_actions_11_mat_option_4_Template, 2, 2, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r4.adm4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.adm4_options);
} }
class AdmSelectorComponent {
    constructor(http, db, stateSvc) {
        this.http = http;
        this.db = db;
        this.stateSvc = stateSvc;
        this.optionsUrl = '';
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this._countryName = {};
        this.countryNameOptions = [];
        this._adm1 = {};
        this.adm1_options = [];
        this._adm2 = {};
        this.adm2_options = [];
        this._adm3 = {};
        this.adm3_options = [];
        this._adm4 = {};
        this.adm4_options = [];
    }
    ngOnInit() {
        if (this.optionsUrl) {
            this.http.get(this.optionsUrl).subscribe((levels) => {
                this.countryNameOptions = levels;
            });
        }
        else {
            this.db.fetchAdmLevelsResult.subscribe((rows) => {
                this.processDBResults(rows);
            });
        }
    }
    processDBResults(items) {
        items = this.groupBy(items, ['clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3'], 'clean_adm4');
        items = this.groupBy(items, ['clean_country_name', 'clean_adm1', 'clean_adm2'], 'clean_adm3');
        items = this.groupBy(items, ['clean_country_name', 'clean_adm1'], 'clean_adm2');
        items = this.groupBy(items, ['clean_country_name'], 'clean_adm1');
        items.forEach((item) => item.value = item.clean_country_name);
        this.countryNameOptions = items;
        for (const l1 of this.countryNameOptions) {
            if (l1.value === this.stateSvc.props.country_name) {
                this._countryName = l1;
                this.adm1_options = l1.items || [];
                for (const l2 of this.adm1_options) {
                    if (l2.value === this.stateSvc.props.adm1) {
                        this._adm1 = l2;
                        this.adm2_options = l2.items;
                        for (const l3 of this.adm2_options) {
                            if (l3.value === this.stateSvc.props.adm2) {
                                this._adm2 = l3;
                                this.adm3_options = l3.items;
                                for (const l4 of this.adm3_options) {
                                    if (l4.value === this.stateSvc.props.adm3) {
                                        this._adm3 = l4;
                                        this.adm4_options = l4.items;
                                        for (const l5 of this.adm4_options) {
                                            if (l5.value === this.stateSvc.props.adm4) {
                                                this._adm4 = l5;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    groupBy(items, keyFields, valueField) {
        const ret = {};
        for (const item_ of items) {
            const item = Object.assign({}, item_);
            const key = keyFields.map((f) => item[f]).join('/');
            if (!ret[key]) {
                ret[key] = [];
            }
            item.value = item[valueField];
            if (!item.value) {
                console.log('BAD VALUE FOR', valueField, item);
            }
            // if (!item.bounds) {
            //   item.bounds = [
            //     item.lon_min,
            //     item.lat_min,
            //     item.lon_max,
            //     item.lat_max,
            //   ];
            // }
            delete item[valueField];
            ret[key].push(item);
        }
        const newItems = [];
        Object.values(ret).forEach((_items) => {
            const item = {};
            item.items = _items;
            for (const f of keyFields) {
                item[f] = _items[0][f];
            }
            item.bounds = [
                Math.min(...item.items.map(x => x.bounds[0])),
                Math.min(...item.items.map(x => x.bounds[1])),
                Math.max(...item.items.map(x => x.bounds[2])),
                Math.max(...item.items.map(x => x.bounds[3])),
            ];
            newItems.push(item);
        });
        return newItems;
    }
    set country_name(value) {
        this._countryName = value;
        this.adm1 = {};
        this.adm1_options = value.items || [];
    }
    get country_name() {
        return this._countryName;
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
        // console.log('SET ADM3', value, value.items);
        this.adm4 = {};
        this.adm4_options = value.items || [];
    }
    get adm3() {
        return this._adm3;
    }
    set adm4(value) {
        this._adm4 = value;
        this.sendState();
    }
    get adm4() {
        return this._adm4;
    }
    sendState() {
        var _a, _b, _c, _d, _e;
        const state = {
            country_name: (_a = this.country_name) === null || _a === void 0 ? void 0 : _a.value,
            adm1: (_b = this.adm1) === null || _b === void 0 ? void 0 : _b.value,
            adm2: (_c = this.adm2) === null || _c === void 0 ? void 0 : _c.value,
            adm3: (_d = this.adm3) === null || _d === void 0 ? void 0 : _d.value,
            adm4: (_e = this.adm4) === null || _e === void 0 ? void 0 : _e.value,
            bounds: this.adm4.bounds || this.adm3.bounds || this.adm2.bounds || this.adm1.bounds || this.country_name.bounds,
        };
        this.state.next(state);
    }
    nonempty(x) {
        return x !== undefined && x !== null && Object.keys(x).length > 0;
    }
    clearVisible() {
        return this.nonempty(this.country_name) ||
            this.nonempty(this.adm1) ||
            this.nonempty(this.adm2) ||
            this.nonempty(this.adm3) ||
            this.nonempty(this.adm4);
    }
    clear() {
        this.country_name = {};
    }
}
AdmSelectorComponent.ɵfac = function AdmSelectorComponent_Factory(t) { return new (t || AdmSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService)); };
AdmSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdmSelectorComponent, selectors: [["app-adm-selector"]], inputs: { optionsUrl: "optionsUrl" }, outputs: { state: "state" }, decls: 16, vars: 8, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2702200797962830082$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS_1 = goog.getMsg("Region");
        i18n_0 = MSG_EXTERNAL_2702200797962830082$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `Region`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_699240523726627926$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS_3 = goog.getMsg("Country Name");
        i18n_2 = MSG_EXTERNAL_699240523726627926$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `Country Name`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4378362537654725826$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__5 = goog.getMsg("Adm Level 1");
        i18n_4 = MSG_EXTERNAL_4378362537654725826$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `Adm Level 1`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_391829695663470593$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__7 = goog.getMsg("Adm Level 2");
        i18n_6 = MSG_EXTERNAL_391829695663470593$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `Adm Level 2`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5815377210509671009$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__9 = goog.getMsg("Adm Level 3");
        i18n_8 = MSG_EXTERNAL_5815377210509671009$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `Adm Level 3`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8819362675794026670$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__11 = goog.getMsg("Adm Level 4");
        i18n_10 = MSG_EXTERNAL_8819362675794026670$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ADM_SELECTOR_ADM_SELECTOR_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `Adm Level 4`;
    } return [i18n_0, i18n_2, [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "clear", 3, "click"], [3, "value"], i18n_4, i18n_6, i18n_8, i18n_10]; }, template: function AdmSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-actions")(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function AdmSelectorComponent_Template_mat_select_valueChange_6_listener($event) { return ctx.country_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdmSelectorComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdmSelectorComponent_mat_card_actions_8_Template, 5, 2, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AdmSelectorComponent_mat_card_actions_9_Template, 5, 2, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AdmSelectorComponent_mat_card_actions_10_Template, 5, 2, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AdmSelectorComponent_mat_card_actions_11_Template, 5, 2, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdmSelectorComponent_Template_div_click_12_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.country_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countryNameOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.adm1_options && ctx.adm1_options.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.adm2_options && ctx.adm2_options.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.adm3_options && ctx.adm3_options.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.adm4_options && ctx.adm4_options.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("visible", ctx.clearVisible());
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 300px;\n}\nmat-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.clear[_ngcontent-%COMP%] {\n  display: none;\n  flex-flow: row;\n  align-items: center;\n  justify-content: flex-end;\n  cursor: pointer;\n  margin: 8px 0;\n}\n.clear.visible[_ngcontent-%COMP%] {\n  display: flex;\n}\n.clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbS1zZWxlY3Rvci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBS0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUxKO0FBRkk7RUFDSSxhQUFBO0FBSVI7QUFSQTtFQWFRLGFBQUE7QUFGUiIsImZpbGUiOiJhZG0tc2VsZWN0b3IuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxubWF0LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2xlYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmLnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogOHB4IDA7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 98904:
/*!**********************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/airtable-layout/airtable-layout.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AirtableLayoutComponent": () => (/* binding */ AirtableLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ 59938);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _airtable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../airtable.service */ 70110);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout.service */ 27024);
/* harmony import */ var _first_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../first-time.service */ 90271);
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-layout/app-layout.component */ 38627);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _map_layer_map_layer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map-layer/map-layer.component */ 48396);
/* harmony import */ var _about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-panel/about-panel.component */ 78781);












const _c0 = ["drawer"];
function AirtableLayoutComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AirtableLayoutComponent_div_8_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const filter_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.selectFilter(filter_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", filter_r3.icon)("aria-label", filter_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](filter_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](filter_r3.title);
} }
const _c1 = [[["", 8, "menu"]], [["", 8, "content"]], [["", 8, "top-bar"]], "*"];
const _c2 = [".menu", ".content", ".top-bar", "*"];
class AirtableLayoutComponent {
    constructor(airtable, layout, firstTime) {
        this.airtable = airtable;
        this.layout = layout;
        this.firstTime = firstTime;
        this.interactionLayers = [];
        this.filters = [];
        this.popupProperties = {};
        this.map = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.mapPopup = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.filterSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.marked = marked__WEBPACK_IMPORTED_MODULE_0__;
        this.title = '';
        this.about = '';
        this.panel = '';
        this.selectedFilter = null;
    }
    ngOnInit() {
        console.log('INIT', this.id);
        this.airtable.fetchWpdxTools().subscribe((mapping) => {
            const settings = mapping[this.id];
            this.title = settings.Title;
            this.about = settings.About;
        });
        if (this.firstTime.firstTime(this.id)) {
            this.panel = 'about';
        }
    }
    selectFilter(id) {
        if (this.selectedFilter === id) {
            return;
        }
        this.selectedFilter = id;
        let x = Promise.resolve(null);
        if (this.drawer.opened) {
            x = this.drawer.close();
        }
        x.then(() => {
            this.filterSelected.emit(id);
        }).then(() => {
            this.drawer.open();
        });
    }
}
AirtableLayoutComponent.ɵfac = function AirtableLayoutComponent_Factory(t) { return new (t || AirtableLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_airtable_service__WEBPACK_IMPORTED_MODULE_1__.AirtableService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_first_time_service__WEBPACK_IMPORTED_MODULE_3__.FirstTimeService)); };
AirtableLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AirtableLayoutComponent, selectors: [["app-airtable-layout"]], viewQuery: function AirtableLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, inputs: { id: "id", mapStyle: "mapStyle", interactionLayers: "interactionLayers", filters: "filters", popupProperties: "popupProperties" }, outputs: { map: "map", mapPopup: "mapPopup", filterSelected: "filterSelected" }, ngContentSelectors: _c2, decls: 25, vars: 10, consts: [[3, "info"], [1, "title"], ["ngProjectAs", ".menu", 5, ["", 8, "menu"]], ["ngProjectAs", ".content", 5, ["", 8, "content"]], ["mode", "side", "opened", ""], ["class", "nav-icon", 3, "click", 4, "ngFor", "ngForOf"], [3, "autosize"], ["mode", "over", 1, "drawer-content", 3, "closed"], ["drawer", ""], [3, "interactionLayers", "map", "mapPopup"], ["mode", "side", "position", "end", 3, "opened"], ["popup", ""], [1, "popup-container"], [1, "close", 3, "click"], [3, "open", "logosKey", "closed"], [3, "innerHtml"], [1, "nav-icon", 3, "click"], ["aria-hidden", "false", 3, "icon", "aria-label"]], template: function AirtableLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("info", function AirtableLayoutComponent_Template_app_layout_info_0_listener() { return ctx.panel = "about"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-drawer-container")(7, "mat-drawer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AirtableLayoutComponent_div_8_Template, 5, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-drawer-content")(10, "mat-drawer-container", 6)(11, "mat-drawer", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closed", function AirtableLayoutComponent_Template_mat_drawer_closed_11_listener() { return ctx.selectedFilter = null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](13, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-drawer-content")(15, "app-map-layer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("map", function AirtableLayoutComponent_Template_app_map_layer_map_15_listener($event) { return ctx.map.next($event); })("mapPopup", function AirtableLayoutComponent_Template_app_map_layer_mapPopup_15_listener($event) { return ctx.mapPopup.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](16, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-drawer", 10, 11)(19, "div", 12)(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AirtableLayoutComponent_Template_a_click_20_listener() { return ctx.mapPopup.next({}); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](22, 3, ["selector", ".map-popup"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "app-about-panel", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closed", function AirtableLayoutComponent_Template_app_about_panel_closed_23_listener() { return ctx.panel = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("autosize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](ctx.mapStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("interactionLayers", ctx.interactionLayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("opened", !!ctx.popupProperties.wpdx_id || !!ctx.popupProperties.NAME_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("open", ctx.panel === "about")("logosKey", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", ctx.marked(ctx.about), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    } }, directives: [_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_4__.AppLayoutComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawer, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatDrawerContent, _map_layer_map_layer_component__WEBPACK_IMPORTED_MODULE_5__.MapLayerComponent, _about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_6__.AboutPanelComponent], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nmat-drawer-container[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  cursor: pointer;\n  margin: 16px;\n}\nmat-drawer-container[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin: 4px;\n  width: 32px;\n  height: 32px;\n  display: block;\n}\nmat-drawer-container[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\nmat-drawer-container[_ngcontent-%COMP%]   app-map-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\nmat-drawer-container[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%] {\n  padding: 16px 8px;\n  max-width: 400px;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  flex: 1 1 auto;\n}\nmat-drawer-container[_ngcontent-%COMP%]   .popup-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwiYWlydGFibGUtbGF5b3V0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksMkNBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0E7RUFDSSwyQ0FBQTtBQ1BKO0FEV0k7RUFZQTtJQUNJLHdCQUFBO0VDcEJOO0FBQ0Y7QURZSTtFQVlBO0lBQ0ksd0JBQUE7RUNyQk47QUFDRjtBRHlCQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQVlBLCtCQUFBO0FDbkNKO0FEeUJJOztFQUVFLHNCQUFBO0FDdkJOO0FEMEJJOztFQUVJLHNCQUFBO0FDeEJSO0FENkJJO0VBQ0ksMkNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JSO0FEOEJJO0VBQ0ksa0hBQUE7QUM1QlI7QURxQ0E7RUFDSTtJQUNFLG9DQUFBO0VDbkNKO0VEcUNFO0lBQ0UsaURBQUE7RUNuQ0o7QUFDRjtBQXJEQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBdURKO0FBekRBO0VBS1EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQXVEUjtBQWhFQTtFQVlZLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBdURaO0FBdkVBO0VBcUJRLGFBQUE7QUFxRFI7QUExRUE7RUF5QlEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBb0RSO0FBakZBO0VBaUNRLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFtRFI7QUF6RkE7RUF5Q1ksb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFtRFoiLCJmaWxlIjoiYWlydGFibGUtbGF5b3V0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AcHJpbWFyeUJyYW5kOiAjM0VDMkZGO1xuXG5AekluZGV4SGVhZGVyOiAxO1xuQHpJbmRleEZpbHRlcnM6IDI7XG5AekluZGV4U2lkZVBhbmVsOiAzO1xuXG4uZm9udFNhbnMge1xuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ubmljZS1zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5tb2JpbGUoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5kZXNrdG9wKEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4ubW9iaWxlKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1kZXNrdG9wIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn0pO1xuXG4uZGVza3RvcCh7XG4gICAgOjpuZy1kZWVwIC5sYXlvdXQtbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn0pO1xuXG5cbi5sb2FkaW5nIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIzOSwgMjQxLCAyNDYpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkIG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgXG4gICAgJjphZnRlcixcbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgXG4gICAgJjphZnRlcixcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgfVxuICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXG4gICAgICAgICk7XG4gICAgfVxufSAgXG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LCAwLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoMjAwcHggKyAxMDB2dyksIDAsIDApO1xuICAgIH1cbn0iLCJAaW1wb3J0ICcuLi9jb21tb24ubGVzcyc7XG5cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubmF2LWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW46IDE2cHg7XG5cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRyYXdlci1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG5cbiAgICBhcHAtbWFwLWxheWVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLnBvcHVwLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcblxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59Il19 */"] });


/***/ }),

/***/ 38627:
/*!************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/app-layout/app-layout.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLayoutComponent": () => (/* binding */ AppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 65590);



const _c0 = [[["", 8, "title"]], [["", 8, "content"]], [["", 8, "menu"]]];
const _c1 = [".title", ".content", ".menu"];
class AppLayoutComponent {
    constructor() {
        this.info = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
AppLayoutComponent.ɵfac = function AppLayoutComponent_Factory(t) { return new (t || AppLayoutComponent)(); };
AppLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLayoutComponent, selectors: [["app-layout"]], outputs: { info: "info" }, ngContentSelectors: _c1, decls: 12, vars: 0, consts: [[1, "app"], [1, "header"], ["src", "assets/img/logo.png", 1, "logo"], [1, "info", 3, "click"], ["aria-hidden", "false", "aria-label", "info icon", "fontSet", "material-icons-outlined"], [1, "content"], [1, "menu"]], template: function AppLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppLayoutComponent_Template_div_click_5_listener() { return ctx.info.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-flow: column;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%] {\n  flex: 0 0 70px;\n  height: 70px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 8px 16px;\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n  color: #3EC2FF;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n@media only screen and (min-width: 601px) {\n  [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > .logo[_ngcontent-%COMP%] {\n    height: 80%;\n  }\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-inline-start: 32px;\n}\n@media only screen and (min-width: 601px) {\n  [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 24px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 16px;\n  }\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  margin-inline-end: 16px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  position: relative;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  position: absolute;\n  bottom: 32px;\n  left: 16px;\n  gap: 8px;\n  z-index: 1;\n  height: calc(100% - 180px);\n  justify-content: flex-start;\n  pointer-events: none;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .menu[_ngcontent-%COMP%]     > * {\n  pointer-events: all;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .menu[_ngcontent-%COMP%]     .separator {\n  display: block;\n  height: 0px;\n  margin-top: auto;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .menu[_ngcontent-%COMP%]     .mat-menu-trigger mat-icon, [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .menu[_ngcontent-%COMP%]     .table-trigger mat-icon {\n  transform: rotate(0deg);\n  transition: transform 0.2s ease-in-out;\n}\n[_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .menu[_ngcontent-%COMP%]     .mat-menu-trigger[aria-expanded=true] mat-icon, [_nghost-%COMP%]    > div.app[_ngcontent-%COMP%]    > .menu[_ngcontent-%COMP%]     .table-trigger[aria-expanded=true] mat-icon {\n  transform: rotate(360deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwiYXBwLWxheW91dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksMkNBQUE7QUNQSjtBRFdJO0VBWUE7SUFDSSx3QkFBQTtFQ3BCTjtBQUNGO0FEWUk7RUFZQTtJQUNJLHdCQUFBO0VDckJOO0FBQ0Y7QUR5QkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFZQSwrQkFBQTtBQ25DSjtBRHlCSTs7RUFFRSxzQkFBQTtBQ3ZCTjtBRDBCSTs7RUFFSSxzQkFBQTtBQ3hCUjtBRDZCSTtFQUNJLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCUjtBRDhCSTtFQUNJLGtIQUFBO0FDNUJSO0FEcUNBO0VBQ0k7SUFDRSxvQ0FBQTtFQ25DSjtFRHFDRTtJQUNFLGlEQUFBO0VDbkNKO0FBQ0Y7QUFuREE7RUFDRyxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFxREg7QUF4REE7RUFNSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXFESjtBQTlEQTtFQVdRLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VEWkosMkNBQUE7RUFDQSxrQkFBQTtFQ2FJLGNBQUE7RURUSiwyQ0FBQTtFQ1dJLFVBQUE7QUF1RFI7QUEzRUE7RUE2QlksaUJBQUE7QUFpRFo7QUQzREk7RUFBQTtJQ0tZLFlBQUE7RUEwRGQ7QUFDRjtBRHRFSTtFQUFBO0lDY1ksV0FBQTtFQTREZDtBQUNGO0FBeEZBO0VBZ0NZLFNBQUE7RUFDQSx5QkFBQTtBQTJEWjtBRHpFSTtFQUFBO0lDZ0JZLGVBQUE7SUFDQSxpQkFBQTtFQTZEZDtBQUNGO0FEckZJO0VBQUE7SUMwQlksZUFBQTtJQUNBLGlCQUFBO0VBK0RkO0FBQ0Y7QUF4R0E7RUE0Q1kseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUErRFo7QUE3R0E7RUFrRFEsY0FBQTtFQUNBLGtCQUFBO0FBOERSO0FBakhBO0VBc0RRLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FBOERSO0FBM0RZO0VBQ0ksbUJBQUE7QUE2RGhCO0FBaklBO0VBd0VnQixjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBNERoQjtBQXRJQTs7RUE4RW9CLHVCQUFBO0VBQ0Esc0NBQUE7QUE0RHBCO0FBMURnQjs7RUFFUSx5QkFBQTtBQTREeEIiLCJmaWxlIjoiYXBwLWxheW91dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQHByaW1hcnlCcmFuZDogIzNFQzJGRjtcblxuQHpJbmRleEhlYWRlcjogMTtcbkB6SW5kZXhGaWx0ZXJzOiAyO1xuQHpJbmRleFNpZGVQYW5lbDogMztcblxuLmZvbnRTYW5zIHtcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLm5pY2Utc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubW9iaWxlKEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4uZGVza3RvcChAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLm1vYmlsZSh7XG4gICAgOjpuZy1kZWVwIC5sYXlvdXQtZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcblxuLmRlc2t0b3Aoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcblxuXG4ubG9hZGluZyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMzksIDI0MSwgMjQ2KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZDogI2RkZCBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIFxuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gIFxuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cbiAgXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxuICAgICAgICApO1xuICAgIH1cbn0gIFxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDBweCwgMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDIwMHB4ICsgMTAwdncpLCAwLCAwKTtcbiAgICB9XG59IiwiQGltcG9ydCAnLi4vY29tbW9uLmxlc3MnO1xuXG5AaGVhZGVyU2l6ZTogNzBweDtcblxuOmhvc3Qge1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICB3aWR0aDogMTAwJTtcbiAgIFxuICAgPiBkaXYuYXBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICA+IC5oZWFkZXIge1xuICAgICAgICBmbGV4OiAwIDAgQGhlYWRlclNpemU7XG4gICAgICAgIGhlaWdodDogQGhlYWRlclNpemU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgLmZvbnRTYW5zO1xuICAgICAgICBjb2xvcjogQHByaW1hcnlCcmFuZDtcbiAgICAgICAgLm5pY2Utc2hhZG93O1xuICAgICAgICB6LWluZGV4OiBAekluZGV4SGVhZGVyO1xuICAgICAgICBcbiAgICAgICAgPiAubG9nbyB7XG4gICAgICAgICAgICAuZGVza3RvcCh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAubW9iaWxlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgPiBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAzMnB4O1xuICAgICAgICAgICAgLmRlc2t0b3Aoe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLm1vYmlsZSh7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxNnB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgID4gLmNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICA+IC5tZW51IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMzJweDtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTgwcHgpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYXQtbWVudS10cmlnZ2VyLCAudGFibGUtdHJpZ2dlciB7XG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICZbYXJpYS1leHBhbmRlZD10cnVlXSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICB9XG59Il19 */"] });


/***/ }),

/***/ 33418:
/*!************************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/attribute-filter/attribute-filter.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeFilterComponent": () => (/* binding */ AttributeFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.service */ 750);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);









function AttributeFilterComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r3, " ");
} }
function AttributeFilterComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r4, " ");
} }
function AttributeFilterComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r5, " ");
} }
class AttributeFilterComponent {
    constructor(state) {
        this.state = state;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.sourceOptions = [
            'Well',
            'Spring',
            'Rainwater Harvesting',
            'Piped Water',
            'Sand or Sub-surface Dam',
            'Delivered Water',
            'Surface Water',
            'Packaged Water',
        ];
        this.techOptions = [
            'Hand Pump',
            'Mechanized Pump',
            'Tapstand',
            'Rope and Bucket',
        ];
        this.managementOptions = [
            'Community Management',
            'Direct Government Operation',
            'Health Care Facility',
            'No Management',
            'Other Institutional Management',
            'Private Operator/Delegated Management',
            'Private Person',
            'Religious Institution',
            'School Management',
            'Unknown',
        ];
    }
    set source(value) {
        if (value) {
            this.state.setProp('source', value);
        }
        else {
            this.state.removeProp('source');
        }
        this.sendState();
    }
    get source() {
        return this.state.getProp('source') || null;
    }
    set tech(value) {
        if (value) {
            this.state.setProp('tech', value);
        }
        else {
            this.state.removeProp('tech');
        }
        this.sendState();
    }
    get tech() {
        return this.state.getProp('tech') || null;
    }
    set management(value) {
        if (value) {
            this.state.setProp('management', value);
        }
        else {
            this.state.removeProp('management');
        }
        this.sendState();
    }
    get management() {
        return this.state.getProp('management') || null;
    }
    sendState() {
        const state = {
            tech: this.tech,
            source: this.source,
            management: this.management,
        };
        this.changed.next(state);
    }
    nonempty(x) {
        return x !== undefined && x !== null && Object.keys(x).length > 0;
    }
    clearVisible() {
        return this.nonempty(this.tech) || this.nonempty(this.source) || this.nonempty(this.management);
    }
    clear() {
        this.source = null;
        this.tech = null;
        this.management = null;
    }
}
AttributeFilterComponent.ɵfac = function AttributeFilterComponent_Factory(t) { return new (t || AttributeFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_0__.StateService)); };
AttributeFilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AttributeFilterComponent, selectors: [["app-attribute-filter"]], decls: 22, vars: 8, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2702200797962830082$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ATTRIBUTE_FILTER_ATTRIBUTE_FILTER_COMPONENT_TS_1 = goog.getMsg("Region");
        i18n_0 = MSG_EXTERNAL_2702200797962830082$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ATTRIBUTE_FILTER_ATTRIBUTE_FILTER_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `Region`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4253099982741051944$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ATTRIBUTE_FILTER_ATTRIBUTE_FILTER_COMPONENT_TS_3 = goog.getMsg("Water Point Source");
        i18n_2 = MSG_EXTERNAL_4253099982741051944$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ATTRIBUTE_FILTER_ATTRIBUTE_FILTER_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `Water Point Source`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2412543873958810574$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ATTRIBUTE_FILTER_ATTRIBUTE_FILTER_COMPONENT_TS_5 = goog.getMsg("Water Point Tech");
        i18n_4 = MSG_EXTERNAL_2412543873958810574$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ATTRIBUTE_FILTER_ATTRIBUTE_FILTER_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `Water Point Tech`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7615147220727762615$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ATTRIBUTE_FILTER_ATTRIBUTE_FILTER_COMPONENT_TS_7 = goog.getMsg("Management");
        i18n_6 = MSG_EXTERNAL_7615147220727762615$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_ATTRIBUTE_FILTER_ATTRIBUTE_FILTER_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `Management`;
    } return [i18n_0, i18n_2, ["multiple", "", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], i18n_4, i18n_6, [1, "clear", 3, "click"], [3, "value"]]; }, template: function AttributeFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-actions")(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function AttributeFilterComponent_Template_mat_select_valueChange_6_listener($event) { return ctx.source = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AttributeFilterComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-actions")(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function AttributeFilterComponent_Template_mat_select_valueChange_11_listener($event) { return ctx.tech = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AttributeFilterComponent_mat_option_12_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card-actions")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](15, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function AttributeFilterComponent_Template_mat_select_valueChange_16_listener($event) { return ctx.management = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AttributeFilterComponent_mat_option_17_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AttributeFilterComponent_Template_div_click_18_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sourceOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.tech);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.techOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.management);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.managementOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.clearVisible());
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 300px;\n}\nmat-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.clear[_ngcontent-%COMP%] {\n  display: none;\n  flex-flow: row;\n  align-items: center;\n  justify-content: flex-end;\n  cursor: pointer;\n  margin: 8px 0;\n}\n.clear.visible[_ngcontent-%COMP%] {\n  display: flex;\n}\n.clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1maWx0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUtBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFMSjtBQUZJO0VBQ0ksYUFBQTtBQUlSO0FBUkE7RUFhUSxhQUFBO0FBRlIiLCJmaWxlIjoiYXR0cmlidXRlLWZpbHRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG5tYXQtbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jbGVhciB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICYudmlzaWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiA4cHggMDtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 10790:
/*!**********************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/bar/bar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarComponent": () => (/* binding */ BarComponent)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ 17659);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



const _c0 = ["bar"];
class BarComponent {
    constructor() {
        this.width = 0;
        this.height = 0;
        this.margin = { top: 20, right: 20, bottom: 70, left: 40 };
    }
    drawHistogram() {
        const width = this.width - this.margin.left - this.margin.right;
        const height = this.height - this.margin.top - this.margin.bottom;
        this.svgElement.nativeElement.innerHTML = '';
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__.select(this.svgElement.nativeElement)
            .append('svg')
            .attr('width', width + this.margin.left + this.margin.right)
            .attr('height', height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        let tickNumber = 4;
        let valueRange = this.max - this.min;
        let consolidatedRange = d3__WEBPACK_IMPORTED_MODULE_0__.min([valueRange, this.data.length]);
        if (consolidatedRange < 10) {
            tickNumber = consolidatedRange;
        }
        else {
            tickNumber = 10;
            if (valueRange % 10 !== 0) {
                const res = valueRange % 10;
                this.max = this.max + (10 - res);
            }
        }
        const formatCount = d3__WEBPACK_IMPORTED_MODULE_0__.format(',.0f');
        // create bins
        const binWidth = valueRange / tickNumber;
        const thresholds = d3__WEBPACK_IMPORTED_MODULE_0__.range(this.min, this.max + binWidth / 10, binWidth);
        const bins = d3__WEBPACK_IMPORTED_MODULE_0__.bin()
            .value(d => d[0])
            .domain([this.min, this.max])
            .thresholds(thresholds);
        const histogram = bins(this.data);
        histogram.forEach((d) => {
            d.count = d3__WEBPACK_IMPORTED_MODULE_0__.sum(d, g => g[1]);
        });
        // create x axis
        const x = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
            .domain([this.min, this.max])
            .range([0, width]);
        // ticks
        const xAxis = d3__WEBPACK_IMPORTED_MODULE_0__.axisBottom(x)
            .tickValues(thresholds)
            .tickFormat((d) => `${d}`);
        // draw x axis
        this.svg.append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis)
            .call(g => g.select('.domain').remove())
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-50)');
        // create y axis
        const y = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
            .range([height, 0])
            .domain([0, d3__WEBPACK_IMPORTED_MODULE_0__.max(histogram, (d) => d.count)]);
        // draw bars
        const bar = this.svg.selectAll('rect')
            .data(histogram)
            .enter().append('g')
            .attr('class', 'bar')
            .attr('transform', (d) => 'translate(' + x(d.x0) + ',' + y(d.count) + ')');
        bar.append('rect')
            .attr('x', 1)
            .attr('width', width / tickNumber - 2)
            .attr('height', (d) => height - y(d.count))
            .style('fill', this.color);
        // count
        bar.append('text')
            .attr('dy', '.75em')
            .style('font-size', '10px')
            .attr('y', -15)
            .attr('x', (x(histogram[0].x1) - x(histogram[0].x0)) / 2)
            .attr('text-anchor', 'middle')
            .text((d) => formatCount(d.count) !== (0 + '') ? formatCount(d.count) : '');
        // x axis title
        this.svg.append('text')
            .attr('transform', 'translate(' + (width / 2) + ' ,' +
            (height + this.margin.top + 25) + ')')
            .style('text-anchor', 'middle')
            .text(this.xAxisTitle);
        // y axis title
        this.svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 0 - this.margin.left)
            .attr('x', 0 - (height / 2))
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .text(this.yAxisTitle);
    }
    ngOnChanges(changes) {
        var _a;
        const el = (_a = this.svgElement) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!el) {
            return;
        }
        this.drawHistogram();
    }
    ngAfterViewInit() {
        var _a;
        const el = (_a = this.svgElement) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!el) {
            return;
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0).subscribe(() => {
            this.width = el.offsetWidth;
            this.height = el.offsetHeight;
            this.ngOnChanges(null);
        });
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(); };
BarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BarComponent, selectors: [["app-bar"]], viewQuery: function BarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.svgElement = _t.first);
    } }, inputs: { data: "data", xAxisTitle: "xAxisTitle", yAxisTitle: "yAxisTitle", min: "min", max: "max", color: "color" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "bar-chart"], ["bar", ""]], template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .bar-chart[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n}\n[_nghost-%COMP%]   .bar-chart[_ngcontent-%COMP%]     svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUZBO0VBR1EsWUFBQTtFQUNBLGFBQUE7QUFFUjtBQU5BO0VBT1ksV0FBQTtFQUNBLFlBQUE7QUFFWiIsImZpbGUiOiJiYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmJhci1jaGFydCB7XG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICBcbiAgICAgICAgOjpuZy1kZWVwIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 47630:
/*!**********************************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/base-waterpoint-popup/base-waterpoint-popup.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseWaterpointPopupComponent": () => (/* binding */ BaseWaterpointPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../photo-gallery/photo-gallery.component */ 920);




function BaseWaterpointPopupComponent_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "label", 4)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.popupProperties.wpdx_id, "");
} }
function BaseWaterpointPopupComponent_div_0_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "label", 5)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "water");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.popupProperties.water_source_clean || ctx_r3.popupProperties.water_source, "");
} }
function BaseWaterpointPopupComponent_div_0_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "label", 6)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.popupProperties.water_tech_clean || ctx_r4.popupProperties.water_tech, "");
} }
function BaseWaterpointPopupComponent_div_0_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "label", 7)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "wash");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.popupProperties.source, "");
} }
function BaseWaterpointPopupComponent_div_0_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "label", 8)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "corporate_fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.popupProperties.management_clean || ctx_r6.popupProperties.management);
} }
function BaseWaterpointPopupComponent_div_0_p_15_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BaseWaterpointPopupComponent_div_0_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "label", 9)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "construction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BaseWaterpointPopupComponent_div_0_p_15_span_7_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.popupProperties.install_year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.popupProperties.installer && ctx_r7.popupProperties.install_year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.popupProperties.installer);
} }
function BaseWaterpointPopupComponent_div_0_p_16_b_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "as Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BaseWaterpointPopupComponent_div_0_p_16_b_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "as Non-functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BaseWaterpointPopupComponent_div_0_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "label", 11)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "edit_calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Reported ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BaseWaterpointPopupComponent_div_0_p_16_b_7_Template, 2, 0, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BaseWaterpointPopupComponent_div_0_p_16_b_8_Template, 2, 0, "b", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " at");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.popupProperties.status_id === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.popupProperties.status_id === "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.popupProperties.report_date);
} }
function BaseWaterpointPopupComponent_div_0_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "label", 12)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "add_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Status Detail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.popupProperties.status_clean);
} }
function BaseWaterpointPopupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BaseWaterpointPopupComponent_div_0_p_1_Template, 5, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p")(3, "label")(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3)(8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BaseWaterpointPopupComponent_div_0_p_10_Template, 5, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BaseWaterpointPopupComponent_div_0_p_11_Template, 5, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BaseWaterpointPopupComponent_div_0_p_13_Template, 5, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BaseWaterpointPopupComponent_div_0_p_14_Template, 5, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BaseWaterpointPopupComponent_div_0_p_15_Template, 10, 3, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BaseWaterpointPopupComponent_div_0_p_16_Template, 13, 3, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BaseWaterpointPopupComponent_div_0_p_17_Template, 8, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.popupProperties.wpdx_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate5"](" ", ctx_r0.popupProperties.clean_country_name || ctx_r0.popupProperties.country_name, " > ", ctx_r0.popupProperties.clean_adm1 || ctx_r0.popupProperties.adm1, " > ", ctx_r0.popupProperties.clean_adm2 || ctx_r0.popupProperties.adm2, " > ", ctx_r0.popupProperties.clean_adm3 || ctx_r0.popupProperties.adm3, " > ", ctx_r0.popupProperties.clean_adm4 || ctx_r0.popupProperties.adm4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "https://www.google.com/maps/@" + (ctx_r0.popupProperties.lat || ctx_r0.popupProperties.lat_deg) + "," + (ctx_r0.popupProperties.lon || ctx_r0.popupProperties.lon_deg) + ",16z", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.popupProperties.water_source_clean || ctx_r0.popupProperties.water_source);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.popupProperties.water_tech_clean || ctx_r0.popupProperties.water_tech);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.popupProperties.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.popupProperties.management_clean || ctx_r0.popupProperties.management);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.popupProperties.installer || ctx_r0.popupProperties.install_year);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.popupProperties.report_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.popupProperties.status_clean && ctx_r0.popupProperties.status_clean !== "Functional" && ctx_r0.popupProperties.status_clean !== "Non-Functional");
} }
function BaseWaterpointPopupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-photo-gallery", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("history", ctx_r1.popupProperties.history);
} }
const _c18 = ["*"];
class BaseWaterpointPopupComponent {
    constructor() { }
}
BaseWaterpointPopupComponent.ɵfac = function BaseWaterpointPopupComponent_Factory(t) { return new (t || BaseWaterpointPopupComponent)(); };
BaseWaterpointPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaseWaterpointPopupComponent, selectors: [["app-base-waterpoint-popup"]], inputs: { popupProperties: "popupProperties" }, ngContentSelectors: _c18, decls: 2, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1315441909568325857$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___1 = goog.getMsg("WPDX Id");
        i18n_0 = MSG_EXTERNAL_1315441909568325857$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___1;
    }
    else {
        i18n_0 = $localize `WPDX Id`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5434862788205944149$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___3 = goog.getMsg("Water Source");
        i18n_2 = MSG_EXTERNAL_5434862788205944149$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___3;
    }
    else {
        i18n_2 = $localize `Water Source`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2412543873958810574$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___5 = goog.getMsg("Water Point Tech");
        i18n_4 = MSG_EXTERNAL_2412543873958810574$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___5;
    }
    else {
        i18n_4 = $localize `Water Point Tech`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1107354728956440783$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___7 = goog.getMsg("Data Source");
        i18n_6 = MSG_EXTERNAL_1107354728956440783$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___7;
    }
    else {
        i18n_6 = $localize `Data Source`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7615147220727762615$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___9 = goog.getMsg("Management");
        i18n_8 = MSG_EXTERNAL_7615147220727762615$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___9;
    }
    else {
        i18n_8 = $localize `Management`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7419787782755641631$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___11 = goog.getMsg("Installation");
        i18n_10 = MSG_EXTERNAL_7419787782755641631$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___11;
    }
    else {
        i18n_10 = $localize `Installation`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4438484321228104995$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS____13 = goog.getMsg("\u00A0by\u00A0");
        i18n_12 = MSG_EXTERNAL_4438484321228104995$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS____13;
    }
    else {
        i18n_12 = $localize ` by `;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3064071592775709044$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___15 = goog.getMsg("Report Date");
        i18n_14 = MSG_EXTERNAL_3064071592775709044$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___15;
    }
    else {
        i18n_14 = $localize `Report Date`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_951387401749376544$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___17 = goog.getMsg("Status Detail");
        i18n_16 = MSG_EXTERNAL_951387401749376544$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_BASE_WATERPOINT_POPUP_BASE_WATERPOINT_POPUP_COMPONENT_TS___17;
    }
    else {
        i18n_16 = $localize `Status Detail`;
    } return [["class", "popup-info", 4, "ngIf"], [4, "ngIf"], [1, "popup-info"], ["target", "_blank", 3, "href"], ["title", i18n_0], ["title", i18n_2], ["title", i18n_4], ["title", i18n_6], ["title", i18n_8], ["title", i18n_10], i18n_12, ["title", i18n_14], ["title", i18n_16], [3, "history"]]; }, template: function BaseWaterpointPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BaseWaterpointPopupComponent_div_0_Template, 18, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BaseWaterpointPopupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.popupProperties.wpdx_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.popupProperties.history);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_0__.PhotoGalleryComponent], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n.popup-styling[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n}\n.popup-styling[_ngcontent-%COMP%]     {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.popup-styling[_ngcontent-%COMP%]     p {\n  margin: 0 0 4px;\n  margin-top: 8px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.popup-styling[_ngcontent-%COMP%]     a, .popup-styling[_ngcontent-%COMP%]     a:visited, .popup-styling[_ngcontent-%COMP%]     a:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.popup-styling[_ngcontent-%COMP%]     mat-icon {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n.popup-styling[_ngcontent-%COMP%]     label {\n  font-weight: 500;\n  margin: 0;\n}\n.popup-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n}\n.popup-info[_ngcontent-%COMP%]     {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.popup-info[_ngcontent-%COMP%]     p {\n  margin: 0 0 4px;\n  margin-top: 8px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.popup-info[_ngcontent-%COMP%]     a, .popup-info[_ngcontent-%COMP%]     a:visited, .popup-info[_ngcontent-%COMP%]     a:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.popup-info[_ngcontent-%COMP%]     mat-icon {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n.popup-info[_ngcontent-%COMP%]     label {\n  font-weight: 500;\n  margin: 0;\n}\nimg[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  width: 100%;\n  flex: 0 0 auto;\n  align-self: center;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwiYmFzZS13YXRlcnBvaW50LXBvcHVwLmNvbXBvbmVudC5sZXNzIiwiLi4vcG9wdXAtY29udGVudHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksMkNBQUE7QUNQSjtBRFdJO0VBWUE7SUFDSSx3QkFBQTtFQ3BCTjtBQUNGO0FEWUk7RUFZQTtJQUNJLHdCQUFBO0VDckJOO0FBQ0Y7QUR5QkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFZQSwrQkFBQTtBQ25DSjtBRHlCSTs7RUFFRSxzQkFBQTtBQ3ZCTjtBRDBCSTs7RUFFSSxzQkFBQTtBQ3hCUjtBRDZCSTtFQUNJLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCUjtBRDhCSTtFQUNJLGtIQUFBO0FDNUJSO0FEcUNBO0VBQ0k7SUFDRSxvQ0FBQTtFQ25DSjtFRHFDRTtJQUNFLGlEQUFBO0VDbkNKO0FBQ0Y7QUN2REE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRHlESjtBQzlEQTtFRlFJLDJDQUFBO0VBQ0Esa0JBQUE7QUN5REo7QUNsRUE7RUFVWSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUQyRFo7QUN6RUE7OztFQWlCWSxxQkFBQTtFQUNBLGNBQUE7QUQ2RFo7QUMvRUE7RUFxQlksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FENkRaO0FDdkZBO0VBNkJZLGdCQUFBO0VBQ0EsU0FBQTtBRDZEWjtBQXhGQTtFQ0ZJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FENkZKO0FBL0ZBO0VES0ksMkNBQUE7RUFDQSxrQkFBQTtBQzZGSjtBQW5HQTtFQ09ZLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRCtGWjtBQTFHQTs7O0VDY1kscUJBQUE7RUFDQSxjQUFBO0FEaUdaO0FBaEhBO0VDa0JZLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRGlHWjtBQXhIQTtFQzBCWSxnQkFBQTtFQUNBLFNBQUE7QURpR1o7QUF4SEE7RUFHSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RURBQSwyQ0FBQTtBQ3lISiIsImZpbGUiOiJiYXNlLXdhdGVycG9pbnQtcG9wdXAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBwcmltYXJ5QnJhbmQ6ICMzRUMyRkY7XG5cbkB6SW5kZXhIZWFkZXI6IDE7XG5AekluZGV4RmlsdGVyczogMjtcbkB6SW5kZXhTaWRlUGFuZWw6IDM7XG5cbi5mb250U2FucyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5uaWNlLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vYmlsZShAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLmRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5tb2JpbGUoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cbi5kZXNrdG9wKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cblxuLmxvYWRpbmcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjM5LCAyNDEsIDI0Nikgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQ6ICNkZGQgbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHggMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcbiAgICAgICAgKTtcbiAgICB9XG59ICBcblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYygyMDBweCArIDEwMHZ3KSwgMCwgMCk7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uL2NvbW1vbi5sZXNzJztcbkBpbXBvcnQgJy4uL3BvcHVwLWNvbnRlbnRzLmxlc3MnO1xuXG4ucG9wdXAtaW5mbyB7XG4gICAgLnBvcHVwLXN0eWxpbmc7XG59XG5cbmltZyB7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgLm5pY2Utc2hhZG93O1xufSAgICAiLCIucG9wdXAtc3R5bGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIFxuICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5mb250U2FucztcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGEsIGE6dmlzaXRlZCwgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 93566:
/*!*****************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/common-components.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonComponentsModule": () => (/* binding */ CommonComponentsModule),
/* harmony export */   "StateService": () => (/* reexport safe */ _state_service__WEBPACK_IMPORTED_MODULE_19__.StateService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-layout/app-layout.component */ 38627);
/* harmony import */ var _map_layer_map_layer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-layer/map-layer.component */ 48396);
/* harmony import */ var _adm_selector_adm_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm-selector/adm-selector.component */ 83444);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-panel/side-panel.component */ 76177);
/* harmony import */ var _about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-panel/about-panel.component */ 78781);
/* harmony import */ var _logos_bar_logos_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logos-bar/logos-bar.component */ 16886);
/* harmony import */ var _airtable_layout_airtable_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./airtable-layout/airtable-layout.component */ 98904);
/* harmony import */ var _controls_legend_control_legend_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/legend-control/legend-control.component */ 62889);
/* harmony import */ var _controls_custom_selector_custom_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/custom-selector/custom-selector.component */ 98171);
/* harmony import */ var _controls_filters_control_filters_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/filters-control/filters-control.component */ 47260);
/* harmony import */ var _controls_controls_controls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/controls/controls.component */ 97078);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _attribute_filter_attribute_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attribute-filter/attribute-filter.component */ 33418);
/* harmony import */ var _base_waterpoint_popup_base_waterpoint_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./base-waterpoint-popup/base-waterpoint-popup.component */ 47630);
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./photo-gallery/photo-gallery.component */ 920);
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bar/bar.component */ 10790);
/* harmony import */ var _staleness_popup_bar_staleness_popup_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./staleness-popup-bar/staleness-popup-bar.component */ 46184);
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pie/pie.component */ 2476);
/* harmony import */ var _spark_line_spark_line_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./spark-line/spark-line.component */ 28369);
/* harmony import */ var _adm_search_bar_adm_search_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adm-search-bar/adm-search-bar.component */ 94936);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./state.service */ 750);


































class CommonComponentsModule {
}
CommonComponentsModule.ɵfac = function CommonComponentsModule_Factory(t) { return new (t || CommonComponentsModule)(); };
CommonComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: CommonComponentsModule });
CommonComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](CommonComponentsModule, { declarations: [_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_0__.AppLayoutComponent,
        _map_layer_map_layer_component__WEBPACK_IMPORTED_MODULE_1__.MapLayerComponent,
        _adm_selector_adm_selector_component__WEBPACK_IMPORTED_MODULE_2__.AdmSelectorComponent,
        _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_3__.SidePanelComponent,
        _about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_4__.AboutPanelComponent,
        _logos_bar_logos_bar_component__WEBPACK_IMPORTED_MODULE_5__.LogosBarComponent,
        _airtable_layout_airtable_layout_component__WEBPACK_IMPORTED_MODULE_6__.AirtableLayoutComponent,
        _controls_legend_control_legend_control_component__WEBPACK_IMPORTED_MODULE_7__.LegendControlComponent,
        _controls_custom_selector_custom_selector_component__WEBPACK_IMPORTED_MODULE_8__.CustomSelectorComponent,
        _controls_filters_control_filters_control_component__WEBPACK_IMPORTED_MODULE_9__.FiltersControlComponent,
        _controls_controls_controls_component__WEBPACK_IMPORTED_MODULE_10__.ControlsComponent,
        _attribute_filter_attribute_filter_component__WEBPACK_IMPORTED_MODULE_11__.AttributeFilterComponent,
        _base_waterpoint_popup_base_waterpoint_popup_component__WEBPACK_IMPORTED_MODULE_12__.BaseWaterpointPopupComponent,
        _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_13__.PhotoGalleryComponent,
        _bar_bar_component__WEBPACK_IMPORTED_MODULE_14__.BarComponent,
        _staleness_popup_bar_staleness_popup_bar_component__WEBPACK_IMPORTED_MODULE_15__.StalenessPopupBarComponent,
        _spark_line_spark_line_component__WEBPACK_IMPORTED_MODULE_17__.SparkLineComponent,
        _pie_pie_component__WEBPACK_IMPORTED_MODULE_16__.PieComponent,
        _adm_search_bar_adm_search_bar_component__WEBPACK_IMPORTED_MODULE_18__.AdmSearchBarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInputModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__.MatSidenavModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule], exports: [_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_0__.AppLayoutComponent,
        _map_layer_map_layer_component__WEBPACK_IMPORTED_MODULE_1__.MapLayerComponent,
        _adm_selector_adm_selector_component__WEBPACK_IMPORTED_MODULE_2__.AdmSelectorComponent,
        _attribute_filter_attribute_filter_component__WEBPACK_IMPORTED_MODULE_11__.AttributeFilterComponent,
        _side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_3__.SidePanelComponent,
        _about_panel_about_panel_component__WEBPACK_IMPORTED_MODULE_4__.AboutPanelComponent,
        _airtable_layout_airtable_layout_component__WEBPACK_IMPORTED_MODULE_6__.AirtableLayoutComponent,
        _controls_legend_control_legend_control_component__WEBPACK_IMPORTED_MODULE_7__.LegendControlComponent,
        _controls_custom_selector_custom_selector_component__WEBPACK_IMPORTED_MODULE_8__.CustomSelectorComponent,
        _controls_filters_control_filters_control_component__WEBPACK_IMPORTED_MODULE_9__.FiltersControlComponent,
        _controls_controls_controls_component__WEBPACK_IMPORTED_MODULE_10__.ControlsComponent,
        _base_waterpoint_popup_base_waterpoint_popup_component__WEBPACK_IMPORTED_MODULE_12__.BaseWaterpointPopupComponent,
        _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_13__.PhotoGalleryComponent,
        _bar_bar_component__WEBPACK_IMPORTED_MODULE_14__.BarComponent,
        _staleness_popup_bar_staleness_popup_bar_component__WEBPACK_IMPORTED_MODULE_15__.StalenessPopupBarComponent,
        _spark_line_spark_line_component__WEBPACK_IMPORTED_MODULE_17__.SparkLineComponent,
        _pie_pie_component__WEBPACK_IMPORTED_MODULE_16__.PieComponent,
        _adm_search_bar_adm_search_bar_component__WEBPACK_IMPORTED_MODULE_18__.AdmSearchBarComponent] }); })();


/***/ }),

/***/ 97078:
/*!*****************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/controls/controls/controls.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlsComponent": () => (/* binding */ ControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class ControlsComponent {
    constructor() { }
}
ControlsComponent.ɵfac = function ControlsComponent_Factory(t) { return new (t || ControlsComponent)(); };
ControlsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlsComponent, selectors: [["app-controls"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "controls"]], template: function ControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n.controls[_ngcontent-%COMP%] {\n  pointer-events: all;\n  justify-content: space-between;\n  align-items: center;\n}\n@media only screen and (min-width: 601px) {\n  .controls[_ngcontent-%COMP%] {\n    top: 16px;\n    left: 16px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .controls[_ngcontent-%COMP%] {\n    top: 0;\n    left: 0;\n    width: 100%;\n  }\n}\n.controls[_ngcontent-%COMP%]     .mat-expansion-panel-header-description {\n  flex: 0 0 auto;\n}\n@media only screen and (max-width: 600px) {\n  .controls[_ngcontent-%COMP%]     .mat-card-title {\n    font-size: 18px;\n  }\n}\n.controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  margin-right: 24px;\n  margin-bottom: 16px;\n  font-size: 16px;\n}\n.controls[_ngcontent-%COMP%]   .legend-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.controls[_ngcontent-%COMP%]   .legend-row[_ngcontent-%COMP%]   .status-circle[_ngcontent-%COMP%] {\n  margin-inline-end: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi5sZXNzIiwiY29udHJvbHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLDJDQUFBO0FDUEo7QURXSTtFQVlBO0lBQ0ksd0JBQUE7RUNwQk47QUFDRjtBRFlJO0VBWUE7SUFDSSx3QkFBQTtFQ3JCTjtBQUNGO0FEeUJBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBWUEsK0JBQUE7QUNuQ0o7QUR5Qkk7O0VBRUUsc0JBQUE7QUN2Qk47QUQwQkk7O0VBRUksc0JBQUE7QUN4QlI7QUQ2Qkk7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUMzQlI7QUQ4Qkk7RUFDSSxrSEFBQTtBQzVCUjtBRHFDQTtFQUNJO0lBQ0Usb0NBQUE7RUNuQ0o7RURxQ0U7SUFDRSxpREFBQTtFQ25DSjtBQUNGO0FBckRBO0VBQ0ksbUJBQUE7RUFZQSw4QkFBQTtFQUNBLG1CQUFBO0FBNENKO0FEckNJO0VBQUE7SUNoQkksU0FBQTtJQUNBLFVBQUE7RUF5RE47QUFDRjtBRGpESTtFQUFBO0lDTkksTUFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0VBMkROO0FBQ0Y7QUF2RUE7RUFpQlEsY0FBQTtBQXlEUjtBRDNESTtFQUFBO0lDUVksZUFBQTtFQXVEZDtBQUNGO0FBL0VBO0VETUksMkNBQUE7RUFDQSxrQkFBQTtFQ3NCSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBdURSO0FBdkZBO0VBbUNRLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUF1RFI7QUE1RkE7RUF1Q1ksc0JBQUE7QUF3RFoiLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBwcmltYXJ5QnJhbmQ6ICMzRUMyRkY7XG5cbkB6SW5kZXhIZWFkZXI6IDE7XG5AekluZGV4RmlsdGVyczogMjtcbkB6SW5kZXhTaWRlUGFuZWw6IDM7XG5cbi5mb250U2FucyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5uaWNlLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vYmlsZShAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLmRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5tb2JpbGUoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cbi5kZXNrdG9wKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cblxuLmxvYWRpbmcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjM5LCAyNDEsIDI0Nikgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQ6ICNkZGQgbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHggMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcbiAgICAgICAgKTtcbiAgICB9XG59ICBcblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYygyMDBweCArIDEwMHZ3KSwgMCwgMCk7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uLy4uL2NvbW1vbi5sZXNzJztcblxuLmNvbnRyb2xzIHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyB6LWluZGV4OiBAekluZGV4RmlsdGVycztcbiAgICAuZGVza3RvcCh7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgbGVmdDogMTZweDsgICAgXG4gICAgfSk7XG4gICAgLm1vYmlsZSh7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfSk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgfVxuXG4gICAgLm1vYmlsZSh7XG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAubWF0LWNhcmQtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICB9KTtcbiAgICBsYWJlbCB7XG4gICAgICAgIC5mb250U2FucztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5sZWdlbmQtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5zdGF0dXMtY2lyY2xlIHtcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 98171:
/*!*******************************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/controls/custom-selector/custom-selector.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomSelectorComponent": () => (/* binding */ CustomSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 88133);






function CustomSelectorComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", o_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r1.display);
} }
class CustomSelectorComponent {
    constructor() {
        this.options = [];
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get _value() {
        return this.value;
    }
    set _value(value) {
        this.value = value;
        this.valueChange.emit(value);
    }
}
CustomSelectorComponent.ɵfac = function CustomSelectorComponent_Factory(t) { return new (t || CustomSelectorComponent)(); };
CustomSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomSelectorComponent, selectors: [["app-custom-selector"]], inputs: { title: "title", value: "value", options: "options" }, outputs: { valueChange: "valueChange" }, decls: 6, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2999396308623228810$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_CONTROLS_CUSTOM_SELECTOR_CUSTOM_SELECTOR_COMPONENT_TS_1 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_0 = MSG_EXTERNAL_2999396308623228810$$PROJECTS_WPDX_SRC_APP_COMMON_COMPONENTS_CONTROLS_CUSTOM_SELECTOR_CUSTOM_SELECTOR_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } return [i18n_0, [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]]; }, template: function CustomSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-actions")(4, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CustomSelectorComponent_Template_mat_select_valueChange_4_listener($event) { return ctx._value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomSelectorComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx._value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardActions, _angular_material_select__WEBPACK_IMPORTED_MODULE_2__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tc2VsZWN0b3IuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 47260:
/*!*******************************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/controls/filters-control/filters-control.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersControlComponent": () => (/* binding */ FiltersControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 65590);



const _c0 = ["*"];
class FiltersControlComponent {
    constructor() { }
}
FiltersControlComponent.ɵfac = function FiltersControlComponent_Factory(t) { return new (t || FiltersControlComponent)(); };
FiltersControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltersControlComponent, selectors: [["app-filters-control"]], ngContentSelectors: _c0, decls: 11, vars: 0, consts: [["fontSet", "material-icons-outlined"]], template: function FiltersControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title")(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter & Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description")(6, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "filter_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelDescription, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXJzLWNvbnRyb2wuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 62889:
/*!*****************************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/controls/legend-control/legend-control.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegendControlComponent": () => (/* binding */ LegendControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ 12928);


const _c0 = ["*"];
class LegendControlComponent {
    constructor() {
        this.title = 'Legend';
        this.expanded = true;
    }
}
LegendControlComponent.ɵfac = function LegendControlComponent_Factory(t) { return new (t || LegendControlComponent)(); };
LegendControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LegendControlComponent, selectors: [["app-legend-control"]], inputs: { title: "title", expanded: "expanded" }, ngContentSelectors: _c0, decls: 7, vars: 2, consts: [[3, "expanded"]], template: function LegendControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0)(1, "mat-expansion-panel-header")(2, "mat-panel-title")(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionPanelTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWdlbmQtY29udHJvbC5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 16886:
/*!**********************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/logos-bar/logos-bar.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogosBarComponent": () => (/* binding */ LogosBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _airtable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../airtable.service */ 70110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function LogosBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const logo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", logo_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", logo_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", logo_r1.logo[0].thumbnails.large.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class LogosBarComponent {
    constructor(airtable) {
        this.airtable = airtable;
        this.logos = [];
    }
    ngOnInit() {
        if (this.logosKey) {
            this.airtable.fetchLogos(this.logosKey).subscribe((logos) => {
                this.logos = logos;
            });
        }
    }
}
LogosBarComponent.ɵfac = function LogosBarComponent_Factory(t) { return new (t || LogosBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_airtable_service__WEBPACK_IMPORTED_MODULE_0__.AirtableService)); };
LogosBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogosBarComponent, selectors: [["app-logos-bar"]], inputs: { logosKey: "logosKey" }, decls: 2, vars: 1, consts: [[1, "logos"], ["class", "logo", 4, "ngFor", "ngForOf"], [1, "logo"], ["target", "_blank", 3, "href", "title"], [3, "src"]], template: function LogosBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogosBarComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.logos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".logos[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 24px;\n}\n.logos[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 40px;\n  max-width: 150px;\n  margin-inline-end: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ29zLWJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBUEE7RUFVWSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFBWiIsImZpbGUiOiJsb2dvcy1iYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIFxuICAgIC5sb2dvIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 48396:
/*!**********************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/map-layer/map-layer.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapLayerComponent": () => (/* binding */ MapLayerComponent)
/* harmony export */ });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ 62333);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/turf */ 67324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.service */ 750);







const _c0 = ["map"];
const _c1 = ["*"];
class MapLayerComponent {
    constructor(el, state) {
        this.el = el;
        this.state = state;
        this.map = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.mapPopup = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.created = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
        this.ACCESS_TOKEN = 'pk.eyJ1Ijoid3BkeCIsImEiOiJja2ptdDljN3kwbHpsMnpxcHJvdDlmbTF1In0.vXVq027cJzHuy7Xa_tAkWQ';
        this.COUNTRY_CODES = [
            'sle',
            'lbr',
            'uga',
            'eth',
            'gha',
            'bfa',
            'afg',
            'bgd',
            'hti',
            'ind',
            'ken',
            'mwi',
            'mli',
            'nga',
            'ssd',
            'tza',
            'zwe',
        ];
        this.mapboxgl = mapbox_gl__WEBPACK_IMPORTED_MODULE_0__;
        this.popupProperties = {};
    }
    ngAfterViewInit() {
        this.created.next(this.mapEl.nativeElement);
    }
    ngOnChanges() {
        if (!this._map && this.style) {
            this.created.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe((mapEl) => {
                console.log('MAPBOX', this.style, this.interactionLayers, this.mapboxgl);
                this.mapboxgl.accessToken = this.ACCESS_TOKEN;
                this._map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.Map({
                    container: mapEl,
                    style: this.style,
                    center: [0, 0],
                    zoom: 2
                });
                this._map.on('style.load', () => {
                    for (const layer of this.interactionLayers) {
                        this._map.setLayoutProperty(layer, 'visibility', 'visible');
                        this._map.on('click', layer, (e) => {
                            this.popupProperties = e.features[0].properties;
                            if (e.features[0].geometry.type === 'Point') {
                                this.popupProperties.coordinates = e.features[0].geometry.coordinates.slice();
                            }
                            else if (e.features[0].geometry.type.indexOf('Polygon') > -1) {
                                const features = {
                                    type: 'FeatureCollection',
                                    features: e.features
                                };
                                const centerPoint = _turf_turf__WEBPACK_IMPORTED_MODULE_1__.center(features);
                                this.popupProperties.coordinates = centerPoint.geometry.coordinates.slice();
                            }
                            this.popupProperties.x = this.popupProperties.coordinates[0];
                            this.popupProperties.y = this.popupProperties.coordinates[1];
                            this.mapPopup.next(this.popupProperties);
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                        });
                        this._map.on('mouseenter', layer, () => {
                            this._map.getCanvas().style.cursor = 'pointer';
                        });
                        // Change it back to a pointer when it leaves.
                        this._map.on('mouseleave', layer, () => {
                            this._map.getCanvas().style.cursor = '';
                        });
                    }
                    const populationLayers = [];
                    for (const country of this.COUNTRY_CODES) {
                        this._map.addSource(`wpdx.pop_${country}`, {
                            type: 'raster', url: `mapbox://wpdx.pop_${country}`
                        });
                        const layerName = `population_${country}`;
                        this._map.addLayer({
                            id: layerName,
                            type: 'raster',
                            source: `wpdx.pop_${country}`,
                            minzoom: 7,
                            maxzoom: 22,
                            paint: {
                                'raster-opacity': 0.3,
                                'raster-saturation': 0.99
                            }
                        }, 'land-structure-polygon');
                        populationLayers.push(layerName);
                    }
                    this.state.populationLayers = populationLayers;
                    const scale = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.ScaleControl({
                        maxWidth: 250,
                        unit: 'metric'
                    });
                    this._map.addControl(scale, 'bottom-right');
                    this._map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.NavigationControl({ showCompass: false }), 'bottom-right');
                    this._map.dragRotate.disable();
                    this.map.next(this._map);
                });
            });
        }
    }
}
MapLayerComponent.ɵfac = function MapLayerComponent_Factory(t) { return new (t || MapLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService)); };
MapLayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MapLayerComponent, selectors: [["app-map-layer"]], viewQuery: function MapLayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mapEl = _t.first);
    } }, inputs: { style: "style", interactionLayers: "interactionLayers" }, outputs: { map: "map", mapPopup: "mapPopup" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "top-bar"], [1, "map"], ["map", ""]], template: function MapLayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 1, 2);
    } }, styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .map[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .top-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n[_nghost-%COMP%]     .mapboxgl-popup {\n  max-width: 600px;\n}\n[_nghost-%COMP%]     .mapboxgl-popup .mapboxgl-popup-content {\n  padding: 16px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwibWFwLWxheWVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksMkNBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0E7RUFDSSwyQ0FBQTtBQ1BKO0FEV0k7RUFZQTtJQUNJLHdCQUFBO0VDcEJOO0FBQ0Y7QURZSTtFQVlBO0lBQ0ksd0JBQUE7RUNyQk47QUFDRjtBRHlCQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQVlBLCtCQUFBO0FDbkNKO0FEeUJJOztFQUVFLHNCQUFBO0FDdkJOO0FEMEJJOztFQUVJLHNCQUFBO0FDeEJSO0FENkJJO0VBQ0ksMkNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDM0JSO0FEOEJJO0VBQ0ksa0hBQUE7QUM1QlI7QURxQ0E7RUFDSTtJQUNFLG9DQUFBO0VDbkNKO0VEcUNFO0lBQ0UsaURBQUE7RUNuQ0o7QUFDRjtBQXJEQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBdURKO0FBM0RBO0VBT1EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBdURSO0FBaEVBO0VBYVEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFzRFI7QUFwRFE7RUFDSSxtQkFBQTtBQXNEWjtBQTNFQTtFQTBCUSxnQkFBQTtBQW9EUjtBQTlFQTtFQTRCWSxpQkFBQTtBQXFEWiIsImZpbGUiOiJtYXAtbGF5ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBwcmltYXJ5QnJhbmQ6ICMzRUMyRkY7XG5cbkB6SW5kZXhIZWFkZXI6IDE7XG5AekluZGV4RmlsdGVyczogMjtcbkB6SW5kZXhTaWRlUGFuZWw6IDM7XG5cbi5mb250U2FucyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5uaWNlLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vYmlsZShAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLmRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5tb2JpbGUoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cbi5kZXNrdG9wKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cblxuLmxvYWRpbmcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjM5LCAyNDEsIDI0Nikgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQ6ICNkZGQgbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHggMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcbiAgICAgICAgKTtcbiAgICB9XG59ICBcblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYygyMDBweCArIDEwMHZ3KSwgMCwgMCk7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uL2NvbW1vbi5sZXNzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubWFwIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7ICAgIFxuICAgIH1cblxuICAgIC50b3AtYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIC5tYXBib3hnbC1wb3B1cCB7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIC5tYXBib3hnbC1wb3B1cC1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 920:
/*!******************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/photo-gallery/photo-gallery.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoGalleryComponent": () => (/* binding */ PhotoGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 65590);



function PhotoGalleryComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4)(2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function PhotoGalleryComponent_div_0_ng_container_1_Template_img_error_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const photo_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removePhoto(photo_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const photo_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-photo", i_r4 === ctx_r1.currentPhotoIndex)("left", i_r4 < ctx_r1.currentPhotoIndex)("right", i_r4 > ctx_r1.currentPhotoIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoGalleryComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoGalleryComponent_div_0_ng_container_2_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.moveLeft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoGalleryComponent_div_0_ng_container_2_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.moveRight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PhotoGalleryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoGalleryComponent_div_0_ng_container_1_Template, 3, 7, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhotoGalleryComponent_div_0_ng_container_2_Template, 5, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.photoList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.photoList.length > 1);
} }
class PhotoGalleryComponent {
    constructor() {
        this.currentPhotoIndex = 0;
        this.photoList = [];
        this.maxIndex = 0;
    }
    ngOnChanges() {
        if (this.history) {
            this.photoList = Object.keys(this.history)
                .sort((a, b) => a.localeCompare(b))
                .map((k) => this.history[k].photo_lnk)
                .filter((x) => !!x);
            this.maxIndex = this.photoList.length;
        }
    }
    moveRight() {
        if (this.currentPhotoIndex < this.maxIndex - 1) {
            this.currentPhotoIndex += 1;
        }
    }
    moveLeft() {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex -= 1;
        }
    }
    removePhoto(link) {
        this.photoList = this.photoList.filter((x) => x !== link);
        this.maxIndex = this.photoList.length;
    }
}
PhotoGalleryComponent.ɵfac = function PhotoGalleryComponent_Factory(t) { return new (t || PhotoGalleryComponent)(); };
PhotoGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoGalleryComponent, selectors: [["app-photo-gallery"]], inputs: { history: "history" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "photo-gallery", 4, "ngIf"], [1, "photo-gallery"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "photo"], [3, "src", "error"], [3, "click"], [1, "forward", 3, "click"]], template: function PhotoGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotoGalleryComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photoList.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n.popup-styling[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n}\n.popup-styling[_ngcontent-%COMP%]     {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.popup-styling[_ngcontent-%COMP%]     p {\n  margin: 0 0 4px;\n  margin-top: 8px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.popup-styling[_ngcontent-%COMP%]     a, .popup-styling[_ngcontent-%COMP%]     a:visited, .popup-styling[_ngcontent-%COMP%]     a:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.popup-styling[_ngcontent-%COMP%]     mat-icon {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n.popup-styling[_ngcontent-%COMP%]     label {\n  font-weight: 500;\n  margin: 0;\n}\nmat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 40px;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 4px;\n  left: 8px;\n  font-size: 24px;\n}\nmat-icon.forward[_ngcontent-%COMP%] {\n  left: auto;\n  right: 8px;\n}\n.photo-gallery[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 500px;\n  display: block;\n  overflow: hidden;\n}\n.photo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  transition: transform 0.25s;\n}\n.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  flex: 0 0 auto;\n  align-self: center;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n.photo.current-photo[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.photo.left[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.photo.right[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwicGhvdG8tZ2FsbGVyeS5jb21wb25lbnQubGVzcyIsIi4uL3BvcHVwLWNvbnRlbnRzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLDJDQUFBO0FDUEo7QURXSTtFQVlBO0lBQ0ksd0JBQUE7RUNwQk47QUFDRjtBRFlJO0VBWUE7SUFDSSx3QkFBQTtFQ3JCTjtBQUNGO0FEeUJBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBWUEsK0JBQUE7QUNuQ0o7QUR5Qkk7O0VBRUUsc0JBQUE7QUN2Qk47QUQwQkk7O0VBRUksc0JBQUE7QUN4QlI7QUQ2Qkk7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUMzQlI7QUQ4Qkk7RUFDSSxrSEFBQTtBQzVCUjtBRHFDQTtFQUNJO0lBQ0Usb0NBQUE7RUNuQ0o7RURxQ0U7SUFDRSxpREFBQTtFQ25DSjtBQUNGO0FDdkRBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUR5REo7QUM5REE7RUZRSSwyQ0FBQTtFQUNBLGtCQUFBO0FDeURKO0FDbEVBO0VBVVksZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEMkRaO0FDekVBOzs7RUFpQlkscUJBQUE7RUFDQSxjQUFBO0FENkRaO0FDL0VBO0VBcUJZLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRDZEWjtBQ3ZGQTtFQTZCWSxnQkFBQTtFQUNBLFNBQUE7QUQ2RFo7QUF4RkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFLQSxlQUFBO0FBc0ZKO0FBMUZJO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUE0RlI7QUF2RkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXlGSjtBQXRGQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQXdGSjtBQWhHQTtFQVdRLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFRDVCSiwyQ0FBQTtBQ3FISjtBQXJGSTtFQUNJLHdCQUFBO0FBdUZSO0FBcEZJO0VBQ0ksNEJBQUE7QUFzRlI7QUFwRkk7RUFDSSwyQkFBQTtBQXNGUiIsImZpbGUiOiJwaG90by1nYWxsZXJ5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AcHJpbWFyeUJyYW5kOiAjM0VDMkZGO1xuXG5AekluZGV4SGVhZGVyOiAxO1xuQHpJbmRleEZpbHRlcnM6IDI7XG5AekluZGV4U2lkZVBhbmVsOiAzO1xuXG4uZm9udFNhbnMge1xuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ubmljZS1zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5tb2JpbGUoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5kZXNrdG9wKEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4ubW9iaWxlKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1kZXNrdG9wIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn0pO1xuXG4uZGVza3RvcCh7XG4gICAgOjpuZy1kZWVwIC5sYXlvdXQtbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn0pO1xuXG5cbi5sb2FkaW5nIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDIzOSwgMjQxLCAyNDYpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkIG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgXG4gICAgJjphZnRlcixcbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgXG4gICAgJjphZnRlcixcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgfVxuICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXG4gICAgICAgICk7XG4gICAgfVxufSAgXG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LCAwLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoMjAwcHggKyAxMDB2dyksIDAsIDApO1xuICAgIH1cbn0iLCJAaW1wb3J0ICcuLi9jb21tb24ubGVzcyc7XG5AaW1wb3J0ICcuLi9wb3B1cC1jb250ZW50cy5sZXNzJztcblxubWF0LWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbGVmdDogOHB4O1xuICAgICYuZm9yd2FyZCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgfVxuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnBob3RvLWdhbGxlcnl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5waG90byB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG5cbiAgICBpbWcge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAubmljZS1zaGFkb3c7XG4gICAgfSBcblxuICAgICYuY3VycmVudC1waG90b3tcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cblxuICAgICYubGVmdCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxuICAgICYucmlnaHQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxufVxuIiwiLnBvcHVwLXN0eWxpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IFxuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBcbiAgICA6Om5nLWRlZXAge1xuICAgICAgICAuZm9udFNhbnM7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBhLCBhOnZpc2l0ZWQsIGE6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 2476:
/*!**********************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/pie/pie.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieComponent": () => (/* binding */ PieComponent)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ 17659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


const _c0 = ["pie"];
class PieComponent {
    constructor() {
        this.margin = 5;
        this.width = 0;
        this.height = 0;
        this.radius = 0;
    }
    createSvg() {
        this.svgElement.nativeElement.innerHTML = '';
        this.mySvg = d3__WEBPACK_IMPORTED_MODULE_0__.select(this.svgElement.nativeElement)
            .append('svg')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`)
            .attr('width', this.width)
            .attr('height', this.height);
        this.svg = this.mySvg
            .append('g')
            .attr('transform', 'translate(' + (this.radius + this.margin) + ',' + this.height / 2 + ')');
    }
    createColors(data = this.data) {
        this.colors = d3__WEBPACK_IMPORTED_MODULE_0__.scaleOrdinal()
            .domain(data.map(d => d.value.toString()))
            .range(d3__WEBPACK_IMPORTED_MODULE_0__.schemePastel1);
    }
    drawChart(data = this.data) {
        // Compute the position of each group on the pie
        const pie = d3__WEBPACK_IMPORTED_MODULE_0__.pie().value((d) => Number(d.value));
        const dataReady = pie(data);
        this.svg
            .selectAll('pieces')
            .data(dataReady)
            .enter()
            .append('path')
            .attr('d', d3__WEBPACK_IMPORTED_MODULE_0__.arc()
            .innerRadius(0)
            .outerRadius(this.radius))
            .attr('fill', (d, i) => (d.data.color ? d.data.color : this.colors(i)))
            .attr('stroke', '#121926')
            .style('stroke-width', '1px');
        const legendG = this.mySvg.selectAll('.legend') // note appending it to mySvg and not svg to make positioning easier
            .data(pie(data))
            .enter().append('g')
            .attr('transform', (d, i) => 'translate(' + (this.radius * 2 + this.margin * 2) + ',' + (i * 16) + ')')
            .attr('class', 'legend');
        legendG.append('rect') // make a matching color rect
            .attr('y', 10)
            .attr('width', 14)
            .attr('height', 14)
            .attr('fill', (d, i) => this.colors(i));
        legendG.append('text') // add the text
            .text((d) => d.value.toLocaleString('en-US') + '  ' + d.data.name)
            .style('font-size', '12px')
            .attr('y', 21)
            .attr('x', 20);
    }
    ngOnChanges() {
        var _a;
        const el = (_a = this.svgElement) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!el) {
            return;
        }
        this.width = el.offsetWidth;
        this.height = el.offsetHeight;
        this.radius = this.height * 0.4 - this.margin;
        this.createSvg();
        this.createColors();
        this.data = this.data.sort((a, b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0));
        this.drawChart();
    }
    ngAfterViewInit() {
        this.ngOnChanges();
    }
}
PieComponent.ɵfac = function PieComponent_Factory(t) { return new (t || PieComponent)(); };
PieComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PieComponent, selectors: [["app-pie"]], viewQuery: function PieComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.svgElement = _t.first);
    } }, inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "pie"], ["pie", ""]], template: function PieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: [".pie[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 200px;\n}\n.pie[_ngcontent-%COMP%]     svg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7QUFIQTtFQUtRLFdBQUE7RUFDQSxZQUFBO0FBQ1IiLCJmaWxlIjoicGllLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpZSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICA6Om5nLWRlZXAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 76177:
/*!************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/side-panel/side-panel.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidePanelComponent": () => (/* binding */ SidePanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class SidePanelComponent {
    constructor() {
        this.open = false;
        this.position = 'right';
    }
}
SidePanelComponent.ɵfac = function SidePanelComponent_Factory(t) { return new (t || SidePanelComponent)(); };
SidePanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidePanelComponent, selectors: [["app-side-panel"]], inputs: { open: "open", position: "position" }, ngContentSelectors: _c0, decls: 2, vars: 10, consts: [[1, "panel"]], template: function SidePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open)("top", ctx.position === "top")("bottom", ctx.position === "bottom")("left", ctx.position === "left")("right", ctx.position === "right");
    } }, styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n[_nghost-%COMP%]    > div.panel[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  transition-property: transform;\n  transition-duration: 250ms;\n}\n[_nghost-%COMP%]    > div.panel.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  max-height: 100%;\n  overflow-y: scroll;\n  transform: translateX(0) translateY(100%);\n}\n[_nghost-%COMP%]    > div.panel.left[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  height: 100%;\n  max-width: 100%;\n  overflow-x: scroll;\n  transform: translateX(-100%) translateY(0);\n}\n[_nghost-%COMP%]    > div.panel.right[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  height: 100%;\n  max-width: 100%;\n  overflow-x: scroll;\n  transform: translateX(100%) translateY(0);\n}\n[_nghost-%COMP%]    > div.panel.top[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-height: 100%;\n  overflow-y: scroll;\n  transform: translateX(0) translateY(-100%);\n}\n[_nghost-%COMP%]    > div.panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0) translateY(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi5sZXNzIiwic2lkZS1wYW5lbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksMkNBQUE7QUNQSjtBRFdJO0VBWUE7SUFDSSx3QkFBQTtFQ3BCTjtBQUNGO0FEWUk7RUFZQTtJQUNJLHdCQUFBO0VDckJOO0FBQ0Y7QUR5QkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFZQSwrQkFBQTtBQ25DSjtBRHlCSTs7RUFFRSxzQkFBQTtBQ3ZCTjtBRDBCSTs7RUFFSSxzQkFBQTtBQ3hCUjtBRDZCSTtFQUNJLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCUjtBRDhCSTtFQUNJLGtIQUFBO0FDNUJSO0FEcUNBO0VBQ0k7SUFDRSxvQ0FBQTtFQ25DSjtFRHFDRTtJQUNFLGlEQUFBO0VDbkNKO0FBQ0Y7QUFyREE7RUFFUSxrQkFBQTtFQUNBLFVBQUE7RUFFQSw4QkFBQTtFQUNBLDBCQUFBO0FBcURSO0FBbkRRO0VBQ0ksU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBcURaO0FBbkRRO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFxRFo7QUFuRFE7RUFDSSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQXFEWjtBQW5EUTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQXFEWjtBQW5EUTtFQUNJLHNDQUFBO0FBcURaIiwiZmlsZSI6InNpZGUtcGFuZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBwcmltYXJ5QnJhbmQ6ICMzRUMyRkY7XG5cbkB6SW5kZXhIZWFkZXI6IDE7XG5AekluZGV4RmlsdGVyczogMjtcbkB6SW5kZXhTaWRlUGFuZWw6IDM7XG5cbi5mb250U2FucyB7XG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5uaWNlLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vYmlsZShAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLmRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5tb2JpbGUoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LWRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cbi5kZXNrdG9wKHtcbiAgICA6Om5nLWRlZXAgLmxheW91dC1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufSk7XG5cblxuLmxvYWRpbmcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjM5LCAyNDEsIDI0Nikgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQ6ICNkZGQgbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICBcbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHggMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxuICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcbiAgICAgICAgKTtcbiAgICB9XG59ICBcblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwcHgsIDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYygyMDBweCArIDEwMHZ3KSwgMCwgMCk7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uL2NvbW1vbi5sZXNzJztcblxuOmhvc3Qge1xuICAgID4gZGl2LnBhbmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiBAekluZGV4U2lkZVBhbmVsO1xuXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG5cbiAgICAgICAgJi5ib3R0b20ge1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDEwMCUpO1xuICAgICAgICB9XG4gICAgICAgICYubGVmdCB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKXRyYW5zbGF0ZVkoMCkgO1xuICAgICAgICB9XG4gICAgICAgICYucmlnaHQge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSl0cmFuc2xhdGVZKDApIDtcbiAgICAgICAgfVxuICAgICAgICAmLnRvcCB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgICB9XG4gICAgICAgICYub3BlbiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKSA7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 28369:
/*!************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/spark-line/spark-line.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SparkLineComponent": () => (/* binding */ SparkLineComponent)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ 17659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


const _c0 = ["chart"];
class SparkLineComponent {
    constructor() {
        this.percent = true;
        this.margin = { top: 10, right: 10, bottom: 20, left: 40 };
        this.width = 360;
        this.height = 120;
        this.innerWidth = this.width - this.margin.left - this.margin.right;
        this.innerHeight = this.height - this.margin.top - this.margin.bottom;
        this.dataCount = 9;
    }
    createSvg() {
        this.svgElement.nativeElement.innerHTML = '';
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__.select('figure.chart')
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }
    drawLine() {
        const x = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().domain([0, this.dataCount]).range([0, this.innerWidth]);
        const fieldNames = this.fields.map(f => f.split(':')[0]);
        const maxes = fieldNames.map(f => d3__WEBPACK_IMPORTED_MODULE_0__.max(this.popupProperties[f]));
        let maxValue = d3__WEBPACK_IMPORTED_MODULE_0__.max(maxes);
        maxValue = this.percent ? d3__WEBPACK_IMPORTED_MODULE_0__.max([maxValue, 100]) : maxValue;
        const y = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().domain([0, maxValue]).range([this.innerHeight, 0]);
        const line = d3__WEBPACK_IMPORTED_MODULE_0__.line()
            .x((d, i) => x(i))
            .y((d) => y(d));
        this.svg.append('g')
            .attr('transform', 'translate(0,' + this.innerHeight + ')')
            .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisBottom(x).tickFormat((x) => x === 0 ? 'today' : `+${x}y`));
        const yAxis = d3__WEBPACK_IMPORTED_MODULE_0__.axisLeft(y);
        if (maxValue === 100) {
            yAxis.tickValues([0, 25, 50, 75, 100]);
        }
        this.svg.append('g').call(yAxis);
        for (const field of this.fields) {
            const parts = field.split(':');
            const fieldName = parts[0];
            const color = parts[1];
            if (this.popupProperties[fieldName]) {
                this.svg.append('path')
                    .datum(this.popupProperties[fieldName])
                    .attr('fill', 'none')
                    .attr('stroke', color)
                    .attr('stroke-width', 1)
                    .attr('d', line);
            }
        }
    }
    ngOnChanges() {
        var _a;
        if (!((_a = this.svgElement) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
            return;
        }
        this.createSvg();
        this.drawLine();
    }
    ngAfterViewInit() {
        this.ngOnChanges();
    }
}
SparkLineComponent.ɵfac = function SparkLineComponent_Factory(t) { return new (t || SparkLineComponent)(); };
SparkLineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SparkLineComponent, selectors: [["app-spark-line"]], viewQuery: function SparkLineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.svgElement = _t.first);
    } }, inputs: { popupProperties: "popupProperties", fields: "fields", percent: "percent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "chart"], ["chart", ""]], template: function SparkLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "figure", 0, 1);
    } }, styles: ["[_nghost-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXJrLWxpbmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxTQUFBO0FBQVIiLCJmaWxlIjoic3BhcmstbGluZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBmaWd1cmUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 46184:
/*!******************************************************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/staleness-popup-bar/staleness-popup-bar.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StalenessPopupBarComponent": () => (/* binding */ StalenessPopupBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bar/bar.component */ 10790);


class StalenessPopupBarComponent {
    constructor() {
        this.data = [];
    }
    ngOnChanges() {
        if (this.popupProperties) {
            this.data = [
                [3, this.popupProperties.age_under_5],
                [7, this.popupProperties.age_under_10],
                [13, this.popupProperties.age_under_15],
                [17, this.popupProperties.age_above_15],
            ];
        }
    }
}
StalenessPopupBarComponent.ɵfac = function StalenessPopupBarComponent_Factory(t) { return new (t || StalenessPopupBarComponent)(); };
StalenessPopupBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StalenessPopupBarComponent, selectors: [["app-staleness-popup-bar"]], inputs: { popupProperties: "popupProperties" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [["xAxisTitle", "Age in Years", "yAxisTitle", "# Water Points", "color", "#756bb1", 3, "data", "min", "max"]], template: function StalenessPopupBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Water Point Report Age Distribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-bar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("min", 0)("max", 20);
    } }, directives: [_bar_bar_component__WEBPACK_IMPORTED_MODULE_0__.BarComponent], styles: ["[_nghost-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWxlbmVzcy1wb3B1cC1iYXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InN0YWxlbmVzcy1wb3B1cC1iYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 750:
/*!******************************************************************!*\
  !*** ./projects/wpdx/src/app/common-components/state.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateService": () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ 62333);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);




class StateService {
    constructor(loc) {
        this.loc = loc;
        this.props = {};
        this.bounds = null;
        this.userBounds = false;
        this.populationLayers = [];
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, 'popstate').subscribe(() => {
            this.loadFromUrl();
        });
        this.loadFromUrl();
        // console.log('INIT', this.props, this.bounds);
    }
    loadFromUrl() {
        const params = new URLSearchParams(location.search);
        params.forEach((value, key) => {
            const parsed = JSON.parse(value);
            if (key !== 'bounds') {
                this.props[key] = parsed;
            }
            else {
                this.bounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.LngLatBounds(parsed);
            }
        });
        this.changed.next({ props: this.props, bounds: this.bounds, userBounds: this.userBounds });
    }
    setBounds(value, userBounds) {
        this.bounds = value;
        this.userBounds = userBounds;
        this.bump();
    }
    defaultValue(key, value) {
        if (!this.hasProp(key)) {
            this.setProp(key, value);
        }
    }
    hasProp(key) {
        return this.props.hasOwnProperty(key);
    }
    setProp(key, value) {
        this.props[key] = value;
        this.bump();
    }
    removeProp(key) {
        delete this.props[key];
        this.bump();
    }
    getProp(key) {
        return this.props[key];
    }
    bump() {
        var _a;
        const _state = Object.assign({}, this.props, { bounds: (_a = this.bounds) === null || _a === void 0 ? void 0 : _a.toArray() });
        const state = {};
        for (const key of Object.keys(_state)) {
            if (_state[key] !== undefined) {
                state[key] = JSON.stringify(_state[key]);
            }
        }
        const params = new URLSearchParams(state);
        // this.loc.replaceState(location.pathname, params.toString());
        history.pushState(null, null, location.pathname + '?' + params.toString());
        this.changed.next({ props: this.props, bounds: this.bounds, userBounds: this.userBounds });
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location)); };
StateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76358:
/*!*********************************************!*\
  !*** ./projects/wpdx/src/app/db.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbService": () => (/* binding */ DbService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);




class DbService {
    constructor(http) {
        this.http = http;
        this.cache = {};
        this.fetchAdmLevelsResult = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
        this.fetchAdmLevels().subscribe((result) => {
            this.fetchAdmLevelsResult.next(result);
            this.fetchAdmLevelsResult.complete();
        });
    }
    b64EncodeUnicode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16))));
    }
    query(raw_sql, cache, page, page_size) {
        // console.log('QUERYING', raw_sql);
        const sql = this.b64EncodeUnicode(raw_sql);
        let key = sql;
        const params = {};
        if (page) {
            key += `/${page}`;
            params.page = page;
        }
        if (page_size) {
            key += `/${page_size}`;
            params.page_size = page_size;
        }
        if (cache && this.cache[key]) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)([this.cache[key]]);
        }
        return this.http.get('https://upload.waterpointdata.org/api/db/query?query=' + encodeURIComponent(sql), { params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((result) => {
            if (cache) {
                this.cache[key] = result;
            }
        }));
    }
    download(sql, format, fileName, headers) {
        sql = encodeURIComponent(btoa(sql));
        return 'https://upload.waterpointdata.org/api/db/download?query=' + sql +
            '&format=' + format +
            '&filename=' + encodeURIComponent(fileName) +
            '&headers=' + encodeURIComponent(headers.join(';'));
    }
    fetchAdmLevels() {
        const query = `
      SELECT "NAME_0" as clean_country_name,
             "NAME_1" as clean_adm1, 
             "NAME_2" as clean_adm2,
             coalesce("NAME_3", '-') as clean_adm3, 
             coalesce("NAME_4", '-') as clean_adm4,
             bounds
      FROM adm_analysis
      WHERE adm_level = 'best'
      ORDER BY 1,2,3,4,5
    `;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([0, 1].map((i) => this.query(query, true, i, 10000))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((results) => {
            const ret = [];
            for (const result of results) {
                ret.push(...result.rows);
            }
            return ret;
        }));
    }
    fetchByAdmLevel(adm_level) {
        const query = `
      SELECT "NAME_0" as clean_country_name,
             "NAME_1" as clean_adm1, 
             "NAME_2" as clean_adm2,
             "NAME_3" as clean_adm3, 
             "NAME_4" as clean_adm4,
             bounds
      FROM adm_analysis
      WHERE adm_level = '${adm_level}'
      ORDER BY 1,2,3,4,5
    `;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([0, 1].map((i) => this.query(query, true, i, 10000))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((results) => {
            const ret = [];
            if (results[0].pages === 1) {
                ret.push(...results[0].rows);
            }
            else {
                for (const result of results) {
                    ret.push(...result.rows);
                }
            }
            return ret;
        }));
    }
}
DbService.ɵfac = function DbService_Factory(t) { return new (t || DbService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
DbService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: DbService, factory: DbService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90271:
/*!*****************************************************!*\
  !*** ./projects/wpdx/src/app/first-time.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstTimeService": () => (/* binding */ FirstTimeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FirstTimeService {
    constructor() { }
    firstTime(service) {
        const key = 'WPDX-FT-' + service;
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, 'TRUE');
            return true;
        }
        return false;
    }
}
FirstTimeService.ɵfac = function FirstTimeService_Factory(t) { return new (t || FirstTimeService)(); };
FirstTimeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirstTimeService, factory: FirstTimeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 27024:
/*!*************************************************!*\
  !*** ./projects/wpdx/src/app/layout.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

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
LayoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 79185:
/*!****************************************************************!*\
  !*** ./projects/wpdx/src/app/main-page/main-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MainPageComponent {
    constructor() { }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 9, vars: 0, consts: [["href", "/status-predictions/"], ["href", "/rehab-prio"], ["href", "/rehab-prio/preview"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p")(1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status Predictions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rehab Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p")(7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rehab Priority Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 48121:
/*!*******************************************************!*\
  !*** ./projects/wpdx/src/environments/environment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 97088:
/*!***********************************!*\
  !*** ./projects/wpdx/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 40167);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 48121);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(97088)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map