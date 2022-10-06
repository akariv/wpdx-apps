"use strict";
(self["webpackChunkwpdx"] = self["webpackChunkwpdx"] || []).push([["projects_wpdx_src_app_rehab-prio_rehab-prio_module_ts"],{

/***/ 42276:
/*!***************************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/adm-popup/adm-popup.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmPopupComponent": () => (/* binding */ AdmPopupComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db.service */ 76358);
/* harmony import */ var _common_components_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-components/state.service */ 750);
/* harmony import */ var _rp_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rp-state.service */ 1304);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _common_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common-components/bar/bar.component */ 10790);
/* harmony import */ var _common_components_pie_pie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-components/pie/pie.component */ 2476);












function AdmPopupComponent_ng_container_4_ng_container_4_ng_container_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u00A0>\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdmPopupComponent_ng_container_4_ng_container_4_ng_container_4_ng_container_4_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r5.selectedSection = 4; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r4.selectedSection === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.popupProperties.NAME_4);
} }
function AdmPopupComponent_ng_container_4_ng_container_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u00A0>\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdmPopupComponent_ng_container_4_ng_container_4_ng_container_4_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r7.selectedSection = 3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdmPopupComponent_ng_container_4_ng_container_4_ng_container_4_ng_container_4_Template, 4, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r3.selectedSection === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.popupProperties.NAME_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.popupProperties.NAME_4);
} }
function AdmPopupComponent_ng_container_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u00A0>\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdmPopupComponent_ng_container_4_ng_container_4_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.selectedSection = 2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdmPopupComponent_ng_container_4_ng_container_4_ng_container_4_Template, 5, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.selectedSection === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.popupProperties.NAME_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.popupProperties.NAME_3);
} }
function AdmPopupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u00A0>\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdmPopupComponent_ng_container_4_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.selectedSection = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdmPopupComponent_ng_container_4_ng_container_4_Template, 5, 4, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.selectedSection === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.popupProperties.NAME_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.popupProperties.NAME_2);
} }
function AdmPopupComponent_ng_container_8_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, ", of which");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AdmPopupComponent_ng_container_8_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5)(2, "p")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "with Basic Access:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p")(10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "without Basic Access:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p")(17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Uncharted areas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 6, ctx_r14.admPopupSections[ctx_r14.selectedSection].served_pop, "1.0-0"), " ppl (", (ctx_r14.admPopupSections[ctx_r14.selectedSection].served_pop / ctx_r14.admPopupSections[ctx_r14.selectedSection].rural_pop * 100).toFixed(2) + "%", ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 9, ctx_r14.admPopupSections[ctx_r14.selectedSection].unserved_pop, "1.0-0"), " ppl (", (ctx_r14.admPopupSections[ctx_r14.selectedSection].unserved_pop / ctx_r14.admPopupSections[ctx_r14.selectedSection].rural_pop * 100).toFixed(2) + "%", ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](22, 12, ctx_r14.admPopupSections[ctx_r14.selectedSection].uncharted_pop, "1.0-0"), " ppl (", (ctx_r14.admPopupSections[ctx_r14.selectedSection].uncharted_pop / ctx_r14.admPopupSections[ctx_r14.selectedSection].rural_pop * 100).toFixed(2) + "%", ") ");
} }
function AdmPopupComponent_ng_container_8_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p")(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Risk Index:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p")(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "tips_and_updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Predicted # of Functional Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ul")(14, "li")(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Today:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li")(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "In 2 Years:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 3, 50 - ctx_r15.admPopupSections[ctx_r15.selectedSection].predicted_risk_index * 50, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 6, ctx_r15.admPopupSections[ctx_r15.selectedSection].predicted_functional_0y, "1.0-0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](23, 9, ctx_r15.admPopupSections[ctx_r15.selectedSection].predicted_functional_2y, "1.0-0"));
} }
function AdmPopupComponent_ng_container_8_mat_expansion_panel_28_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("opened", function AdmPopupComponent_ng_container_8_mat_expansion_panel_28_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r21.setViz(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Water Point Install Years");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx_r16.viz === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r16.install_year_data[ctx_r16.selectedSection])("min", ctx_r16.install_year_data[ctx_r16.selectedSection][0][0])("max", ctx_r16.install_year_data[ctx_r16.selectedSection][ctx_r16.install_year_data[ctx_r16.selectedSection].length - 1][0] + 1);
} }
function AdmPopupComponent_ng_container_8_mat_expansion_panel_29_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("opened", function AdmPopupComponent_ng_container_8_mat_expansion_panel_29_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r23.setViz(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Water Point Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-pie", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx_r17.viz === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r17.state_data[ctx_r17.selectedSection]);
} }
function AdmPopupComponent_ng_container_8_mat_expansion_panel_30_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("opened", function AdmPopupComponent_ng_container_8_mat_expansion_panel_30_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r25.setViz(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Water Source Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-pie", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx_r18.viz === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r18.source_data[ctx_r18.selectedSection]);
} }
function AdmPopupComponent_ng_container_8_mat_expansion_panel_31_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("opened", function AdmPopupComponent_ng_container_8_mat_expansion_panel_31_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r27.setViz(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Water Tech Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-pie", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx_r19.viz === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r19.tech_data[ctx_r19.selectedSection]);
} }
function AdmPopupComponent_ng_container_8_mat_expansion_panel_32_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("opened", function AdmPopupComponent_ng_container_8_mat_expansion_panel_32_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r29.setViz(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Water Point Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-pie", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", ctx_r20.viz === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r20.management_data[ctx_r20.selectedSection]);
} }
function AdmPopupComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p")(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "water_drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p")(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Total Population:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p")(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Rural Population:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AdmPopupComponent_ng_container_8_ng_container_24_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AdmPopupComponent_ng_container_8_ng_container_25_Template, 23, 15, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AdmPopupComponent_ng_container_8_ng_container_26_Template, 24, 12, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AdmPopupComponent_ng_container_8_mat_expansion_panel_28_Template, 5, 4, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AdmPopupComponent_ng_container_8_mat_expansion_panel_29_Template, 5, 2, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AdmPopupComponent_ng_container_8_mat_expansion_panel_30_Template, 5, 2, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AdmPopupComponent_ng_container_8_mat_expansion_panel_31_Template, 5, 2, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, AdmPopupComponent_ng_container_8_mat_expansion_panel_32_Template, 5, 2, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.admPopupSections[ctx_r1.selectedSection].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 13, ctx_r1.admPopupSections[ctx_r1.selectedSection].staleness_count, "1.0-0"), " water points (", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 16, ctx_r1.admPopupSections[ctx_r1.selectedSection].func_waterpoints, "1.0-0"), " functional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 19, ctx_r1.admPopupSections[ctx_r1.selectedSection].total_pop, "1.0-0"), " ppl ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](23, 22, ctx_r1.admPopupSections[ctx_r1.selectedSection].rural_pop, "1.0-0"), " ppl");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.admPopupSections[ctx_r1.selectedSection].rural_pop);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.admPopupSections[ctx_r1.selectedSection].rural_pop);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.rpState.mode === "risk-index");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.install_year_data[ctx_r1.selectedSection] && ctx_r1.install_year_data[ctx_r1.selectedSection].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.state_data[ctx_r1.selectedSection] && ctx_r1.state_data[ctx_r1.selectedSection].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.source_data[ctx_r1.selectedSection] && ctx_r1.source_data[ctx_r1.selectedSection].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.tech_data[ctx_r1.selectedSection] && ctx_r1.tech_data[ctx_r1.selectedSection].length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.management_data[ctx_r1.selectedSection] && ctx_r1.management_data[ctx_r1.selectedSection].length);
} }
class AdmPopupComponent {
    constructor(db, state, rpState, dialog) {
        this.db = db;
        this.state = state;
        this.rpState = rpState;
        this.dialog = dialog;
        this.install_year_data = [];
        this.state_data = [];
        this.source_data = [];
        this.tech_data = [];
        this.management_data = [];
        this.selectedSection = 0;
        this.viz = 0;
        this._lastPopupProperties = null;
    }
    tickFormat(num) {
        // return x === 20 ? `${x}+` : `${x}`
        return num;
    }
    fq(s) {
        return s.split(`'`).join(`''`);
    }
    getInstallYearQuery(value) {
        const baseQuery = `select
        install_year, count(1) as count
        from wpdx_enhanced
      `;
        const queries = [];
        if (value.NAME_0) {
            queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' group by 1 order by 1`);
        }
        if (value.NAME_1) {
            queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' 
          and clean_adm1='${this.fq(value.NAME_1)}' group by 1 order by 1`);
        }
        if (value.NAME_2) {
            queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' and 
                clean_adm2='${this.fq(value.NAME_2)}' group by 1 order by 1`);
        }
        if (value.NAME_3) {
            queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' and 
                clean_adm2='${this.fq(value.NAME_2)}' and clean_adm3='${this.fq(value.NAME_3)}' group by 1 order by 1`);
        }
        if (value.NAME_4) {
            queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' 
          and clean_adm2='${this.fq(value.NAME_2)}' and clean_adm3='${this.fq(value.NAME_3)}' 
          and clean_adm4='${this.fq(value.NAME_4)}' group by 1 order by 1`);
        }
        return queries;
    }
    addQuery(value, baseQuery, count, queries, attribute) {
        if (value) {
            baseQuery = `${baseQuery} and clean_adm${count}='${this.fq(value)}'`;
            queries.push(`${baseQuery} group by ${attribute}`);
        }
        return baseQuery;
    }
    getDataQuery(value, attribute) {
        const values = [value.NAME_1, value.NAME_2, value.NAME_3, value.NAME_4];
        let baseQuery = `select ${attribute} as name, count(1) from
    wpdx_enhanced`;
        const queries = [];
        if (value.NAME_0) {
            baseQuery = `${baseQuery} where clean_country_name='${this.fq(value.NAME_0)}'`;
            queries.push(`${baseQuery} group by ${attribute}`);
        }
        for (let i = 0; i < values.length; i++) {
            baseQuery = this.addQuery(values[i], baseQuery, i + 1, queries, attribute);
        }
        return queries;
    }
    getData(columnName) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(this.getDataQuery(this.popupProperties, columnName).map(q => this.db.query(q))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((results => {
            const dataArray = [];
            for (const result of results) {
                const x = [];
                for (const val of result.rows) {
                    if (val.count > 0) {
                        x.push({ name: val.name || 'Unknown', value: val.count });
                    }
                }
                dataArray.push(x);
            }
            return dataArray;
        })));
    }
    getInstallYearData() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(this.getInstallYearQuery(this.popupProperties).map(q => this.db.query(q))).subscribe(results => {
            this.install_year_data = [];
            for (const result of results) {
                const x = [];
                if (result.rows) {
                    for (const val of result.rows) {
                        x.push([+val.install_year, val.count]);
                    }
                }
                this.install_year_data.push(x);
            }
        });
    }
    getStateData() {
        this.state_data = [];
        for (const section of this.admPopupSections) {
            const x = [];
            if (section.func_waterpoints > 0) {
                x.push({ name: 'Functional', value: section.func_waterpoints });
            }
            if (section.non_func_waterpoints > 0) {
                x.push({ name: 'Non Functional', value: section.non_func_waterpoints });
            }
            this.state_data.push(x);
        }
    }
    ngOnChanges() {
        if (this._lastPopupProperties !== this.popupProperties) {
            this.selectedSection = this.popupProperties.NAME_4 ? 4 : (this.popupProperties.NAME_3 ? 3 : (this.popupProperties.NAME_2 ? 2 : (this.popupProperties.NAME_1 ? 1 : 0)));
            this.getInstallYearData();
            this.getStateData();
            this.getData('water_source_category').subscribe(data => { this.source_data = data; });
            this.getData('water_tech_category').subscribe(data => { this.tech_data = data; });
            ;
            this.getData('management_clean').subscribe(data => { this.management_data = data; });
            ;
            this._lastPopupProperties = this.popupProperties;
        }
        for (const section of this.admPopupSections) {
            if (!section.predictedFunctional) {
                section.predictedFunctional = [];
                section.predictedNonFunctional = [];
                const total = section.count;
                for (const i of [0, 2]) {
                    section.predictedFunctional.push(section[`predicted_functional_${i}y`]);
                    section.predictedNonFunctional.push(total - section[`predicted_functional_${i}y`]);
                }
            }
        }
    }
    setViz(viz) {
        this.viz = viz;
    }
}
AdmPopupComponent.ɵfac = function AdmPopupComponent_Factory(t) { return new (t || AdmPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_common_components_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_rp_state_service__WEBPACK_IMPORTED_MODULE_2__.RpStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
AdmPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdmPopupComponent, selectors: [["app-adm-popup"]], inputs: { popupProperties: "popupProperties", admPopupSections: "admPopupSections" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 6, consts: [[1, "adm-location"], [1, "adm-label", 3, "click"], [4, "ngIf"], ["target", "_blank", 3, "href"], [3, "expanded", "opened", 4, "ngIf"], [1, "indent"], [3, "expanded", "opened"], ["xAxisTitle", "Install Year", "yAxisTitle", "# Water Points", "color", "#ffd580", 3, "data", "min", "max"], [3, "data"]], template: function AdmPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "p", 0)(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdmPopupComponent_Template_span_click_2_listener() { return ctx.selectedSection = 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdmPopupComponent_ng_container_4_Template, 5, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 3)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdmPopupComponent_ng_container_8_Template, 33, 25, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.selectedSection === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.popupProperties.NAME_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.popupProperties.NAME_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "https://www.google.com/maps/@" + ctx.popupProperties.y + "," + ctx.popupProperties.x + ",16z", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedSection >= 0 && ctx.admPopupSections[ctx.selectedSection]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle, _common_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_3__.BarComponent, _common_components_pie_pie_component__WEBPACK_IMPORTED_MODULE_4__.PieComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n.popup-styling[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n}\n.popup-styling[_ngcontent-%COMP%]     {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.popup-styling[_ngcontent-%COMP%]     p {\n  margin: 0 0 4px;\n  margin-top: 8px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.popup-styling[_ngcontent-%COMP%]     a, .popup-styling[_ngcontent-%COMP%]     a:visited, .popup-styling[_ngcontent-%COMP%]     a:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.popup-styling[_ngcontent-%COMP%]     mat-icon {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n.popup-styling[_ngcontent-%COMP%]     label {\n  font-weight: 500;\n  margin: 0;\n}\nmat-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-top: 16px;\n}\np.adm-location[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  gap: 4px;\n}\np.adm-location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n}\np.adm-location[_ngcontent-%COMP%]   .adm-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 15px;\n  font-weight: light;\n  color: #000;\n  text-decoration: underline;\n  -webkit-text-decoration-style: dotted;\n          text-decoration-style: dotted;\n  cursor: pointer;\n}\np.adm-location[_ngcontent-%COMP%]   .adm-label.active[_ngcontent-%COMP%] {\n  -webkit-text-decoration-style: solid;\n          text-decoration-style: solid;\n  text-decoration-thickness: 2px;\n  font-weight: 700;\n}\n.with-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: light;\n  color: #000;\n  margin-bottom: 4px;\n}\n.with-title[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  margin: 0;\n}\n  .mat-select-value {\n  color: #333333;\n  font-weight: bolder;\n}\n  .mat-button-toggle {\n  background-color: rgba(224, 224, 224, 0.8);\n}\n  .mat-button-toggle.mat-button-toggle-checked {\n  background-color: rgba(255, 255, 255, 0.8);\n  font-weight: bolder;\n}\n  .mat-button-toggle .mat-button-toggle-label-content {\n  line-height: inherit;\n  color: #333;\n}\n  .mat-expansion-panel-body {\n  padding: 0 0 16px !important;\n}\n.indent[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\nh2[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  font-weight: 600;\n  border-top: #ccc solid 1px;\n  border-bottom: #ccc solid 1px;\n  margin: 12px 0;\n}\nmat-accordion[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi1jb21wb25lbnRzL2NvbW1vbi5sZXNzIiwiYWRtLXBvcHVwLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvcG9wdXAtY29udGVudHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFNBO0VBQ0ksMkNBQUE7QUNQSjtBRFdJO0VBWUE7SUFDSSx3QkFBQTtFQ3BCTjtBQUNGO0FEWUk7RUFZQTtJQUNJLHdCQUFBO0VDckJOO0FBQ0Y7QUR5QkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFZQSwrQkFBQTtBQ25DSjtBRHlCSTs7RUFFRSxzQkFBQTtBQ3ZCTjtBRDBCSTs7RUFFSSxzQkFBQTtBQ3hCUjtBRDZCSTtFQUNJLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQzNCUjtBRDhCSTtFQUNJLGtIQUFBO0FDNUJSO0FEcUNBO0VBQ0k7SUFDRSxvQ0FBQTtFQ25DSjtFRHFDRTtJQUNFLGlEQUFBO0VDbkNKO0FBQ0Y7QUN2REE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRHlESjtBQzlEQTtFRlFJLDJDQUFBO0VBQ0Esa0JBQUE7QUN5REo7QUNsRUE7RUFVWSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUQyRFo7QUN6RUE7OztFQWlCWSxxQkFBQTtFQUNBLGNBQUE7QUQ2RFo7QUMvRUE7RUFxQlksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FENkRaO0FDdkZBO0VBNkJZLGdCQUFBO0VBQ0EsU0FBQTtBRDZEWjtBQXZGQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUF5Rko7QUF0RkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUF3Rko7QUE1RkE7RUFNUSxXQUFBO0VBQ0EsWUFBQTtBQXlGUjtBQWhHQTtFQVdRLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLGVBQUE7QUF3RlI7QUF0RlE7RUFDSSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQXdGWjtBQW5GQTtFQUVRLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQW9GUjtBQXpGQTtFQVNRLFNBQUE7QUFtRlI7QUE5RUE7RUFFUSxjQUFBO0VBQ0EsbUJBQUE7QUErRVI7QUFsRkE7RUFNUSwwQ0FBQTtBQStFUjtBQTlFUTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7QUFnRlo7QUF6RkE7RUFZWSxvQkFBQTtFQUNBLFdBQUE7QUFnRlo7QUE3RkE7RUFpQlEsNEJBQUE7QUErRVI7QUEzRUE7RUFDSSxrQkFBQTtBQTZFSjtBQTNFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBNkVKO0FBM0VBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBNkVKIiwiZmlsZSI6ImFkbS1wb3B1cC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQHByaW1hcnlCcmFuZDogIzNFQzJGRjtcblxuQHpJbmRleEhlYWRlcjogMTtcbkB6SW5kZXhGaWx0ZXJzOiAyO1xuQHpJbmRleFNpZGVQYW5lbDogMztcblxuLmZvbnRTYW5zIHtcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLm5pY2Utc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubW9iaWxlKEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4uZGVza3RvcChAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLm1vYmlsZSh7XG4gICAgOjpuZy1kZWVwIC5sYXlvdXQtZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcblxuLmRlc2t0b3Aoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcblxuXG4ubG9hZGluZyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMzksIDI0MSwgMjQ2KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZDogI2RkZCBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIFxuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gIFxuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cbiAgXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxuICAgICAgICApO1xuICAgIH1cbn0gIFxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDBweCwgMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDIwMHB4ICsgMTAwdncpLCAwLCAwKTtcbiAgICB9XG59IiwiQGltcG9ydCAnLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvY29tbW9uLmxlc3MnO1xuQGltcG9ydCAnLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvcG9wdXAtY29udGVudHMubGVzcyc7XG5cblxubWF0LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbnAuYWRtLWxvY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBtYXQtaWNvbiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmFkbS1sYWJlbCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi53aXRoLXRpdGxlIHtcbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHQ7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgbWF0LXNlbGVjdCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cblxuOjpuZy1kZWVwIHtcbiAgICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIH1cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuOCk7XG4gICAgICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICB9XG4gICAgICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMCAwIDE2cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5pbmRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbmgyIHtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItdG9wOiAjY2NjIHNvbGlkIDFweDtcbiAgICBib3JkZXItYm90dG9tOiAjY2NjIHNvbGlkIDFweDtcbiAgICBtYXJnaW46IDEycHggMDtcbn1cbm1hdC1hY2NvcmRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cblxuXG4iLCIucG9wdXAtc3R5bGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIFxuICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5mb250U2FucztcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGEsIGE6dmlzaXRlZCwgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 60645:
/*!*******************************************************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/attribute-filter-dialog/attribute-filter-dialog.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeFilterDialogComponent": () => (/* binding */ AttributeFilterDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _rp_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rp-state.service */ 1304);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _common_components_attribute_filter_attribute_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-components/attribute-filter/attribute-filter.component */ 33418);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);





class AttributeFilterDialogComponent {
    constructor(rpState) {
        this.rpState = rpState;
    }
}
AttributeFilterDialogComponent.ɵfac = function AttributeFilterDialogComponent_Factory(t) { return new (t || AttributeFilterDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rp_state_service__WEBPACK_IMPORTED_MODULE_0__.RpStateService)); };
AttributeFilterDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AttributeFilterDialogComponent, selectors: [["app-attribute-filter-dialog"]], decls: 7, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [3, "changed"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function AttributeFilterDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Filter by Point Attributes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "app-attribute-filter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changed", function AttributeFilterDialogComponent_Template_app_attribute_filter_changed_3_listener($event) { return ctx.rpState.navigateToAttrib($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-actions", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _common_components_attribute_filter_attribute_filter_component__WEBPACK_IMPORTED_MODULE_1__.AttributeFilterComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRyaWJ1dGUtZmlsdGVyLWRpYWxvZy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 50821:
/*!*************************************************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/region-filter-dialog/region-filter-dialog.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegionFilterDialogComponent": () => (/* binding */ RegionFilterDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _rp_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rp-state.service */ 1304);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _common_components_adm_selector_adm_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-components/adm-selector/adm-selector.component */ 83444);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 87317);





class RegionFilterDialogComponent {
    constructor(rpState) {
        this.rpState = rpState;
    }
}
RegionFilterDialogComponent.ɵfac = function RegionFilterDialogComponent_Factory(t) { return new (t || RegionFilterDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rp_state_service__WEBPACK_IMPORTED_MODULE_0__.RpStateService)); };
RegionFilterDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegionFilterDialogComponent, selectors: [["app-region-filter-dialog"]], decls: 7, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["optionsUrl", "", 3, "state"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function RegionFilterDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Filter by Administrative Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "app-adm-selector", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("state", function RegionFilterDialogComponent_Template_app_adm_selector_state_3_listener($event) { return ctx.rpState.navigateToAdm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-actions", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _common_components_adm_selector_adm_selector_component__WEBPACK_IMPORTED_MODULE_1__.AdmSelectorComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpb24tZmlsdGVyLWRpYWxvZy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 26135:
/*!*********************************************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/rehab-prio-preview/rehab-prio-preview.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RehabPrioPreviewComponent": () => (/* binding */ RehabPrioPreviewComponent)
/* harmony export */ });
/* harmony import */ var _rehab_prio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rehab-prio.component */ 88874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db.service */ 76358);
/* harmony import */ var _common_components_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common-components/state.service */ 750);
/* harmony import */ var _rp_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rp-state.service */ 1304);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _common_components_airtable_layout_airtable_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-components/airtable-layout/airtable-layout.component */ 98904);
/* harmony import */ var _common_components_adm_search_bar_adm_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common-components/adm-search-bar/adm-search-bar.component */ 94936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _common_components_base_waterpoint_popup_base_waterpoint_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common-components/base-waterpoint-popup/base-waterpoint-popup.component */ 47630);
/* harmony import */ var _adm_popup_adm_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../adm-popup/adm-popup.component */ 42276);
/* harmony import */ var _common_components_staleness_popup_bar_staleness_popup_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common-components/staleness-popup-bar/staleness-popup-bar.component */ 46184);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);




















function RehabPrioPreviewComponent_div_4_ng_container_6_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r27.state.props.adm4, " ");
} }
function RehabPrioPreviewComponent_div_4_ng_container_6_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_div_4_ng_container_6_ng_container_2_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r26.state.props.adm3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r26.state.props.adm4);
} }
function RehabPrioPreviewComponent_div_4_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_div_4_ng_container_6_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r25.state.props.adm2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r25.state.props.adm3);
} }
function RehabPrioPreviewComponent_div_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_div_4_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r24.state.props.adm1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r24.state.props.adm2);
} }
function RehabPrioPreviewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_4_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); ctx_r28.state.props.country_name = ctx_r28.state.props.adm1 = ctx_r28.state.props.adm2 = ctx_r28.state.props.adm3 = ctx_r28.state.props.adm4 = null; return ctx_r28.state.bump(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Region Filter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RehabPrioPreviewComponent_div_4_ng_container_6_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.state.props.country_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.state.props.adm1);
} }
function RehabPrioPreviewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_5_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r30.state.setProp("source", null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Water Source Filter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.state.props.source, " ");
} }
function RehabPrioPreviewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_6_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r32.state.setProp("tech", null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Water Tech Filter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.state.props.tech, " ");
} }
function RehabPrioPreviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_7_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r34.state.setProp("management", null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Water Management Filter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.state.props.management, " ");
} }
function RehabPrioPreviewComponent_div_9_table_1_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RehabPrioPreviewComponent_div_9_table_1_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RehabPrioPreviewComponent_div_9_table_1_mat_icon_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RehabPrioPreviewComponent_div_9_table_1_mat_icon_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RehabPrioPreviewComponent_div_9_table_1_tbody_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_9_table_1_tbody_22_tr_1_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r48); const row_r45 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r47.gotoPoint(row_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r45 = ctx.$implicit;
    const rank_r46 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](rank_r46 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r45.status_id || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r45.water_source_clean || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](row_r45.water_tech_clean || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](11, 8, row_r45.local_population, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 11, row_r45.assigned_population, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](17, 14, row_r45.criticality * 100, "1.0-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](20, 17, row_r45.pressure * 100, "1.0-1"), "%");
} }
function RehabPrioPreviewComponent_div_9_table_1_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RehabPrioPreviewComponent_div_9_table_1_tbody_22_tr_1_Template, 21, 20, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r43.rpState.top10);
} }
function RehabPrioPreviewComponent_div_9_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table")(1, "thead")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Functional?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_9_table_1_Template_th_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r49.rpState.sort_by = ctx_r49.rpState.sort_options[0].value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Local Pop.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, RehabPrioPreviewComponent_div_9_table_1_mat_icon_12_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_9_table_1_Template_th_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r51.rpState.sort_by = ctx_r51.rpState.sort_options[1].value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Water Point Pop.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, RehabPrioPreviewComponent_div_9_table_1_mat_icon_15_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_9_table_1_Template_th_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r52.rpState.sort_by = ctx_r52.rpState.sort_options[2].value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Crucialness");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, RehabPrioPreviewComponent_div_9_table_1_mat_icon_18_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_9_table_1_Template_th_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r53.rpState.sort_by = ctx_r53.rpState.sort_options[3].value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Pressure");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, RehabPrioPreviewComponent_div_9_table_1_mat_icon_21_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, RehabPrioPreviewComponent_div_9_table_1_tbody_22_Template, 2, 1, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r36.rpState.sort_by === ctx_r36.rpState.sort_options[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r36.rpState.sort_by === ctx_r36.rpState.sort_options[1].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r36.rpState.sort_by === ctx_r36.rpState.sort_options[2].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r36.rpState.sort_by === ctx_r36.rpState.sort_options[3].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r36.rpState.top10 && ctx_r36.rpState.top10.length);
} }
function RehabPrioPreviewComponent_div_9_table_2_tbody_10_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_div_9_table_2_tbody_10_tr_1_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59); const row_r56 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r58.gotoPoint(row_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    const rank_r57 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](rank_r57 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](5, 4, row_r56.population, "1.0-0") || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](8, 7, row_r56.lat_deg, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](11, 10, row_r56.lon_deg, "1.3-3"));
} }
function RehabPrioPreviewComponent_div_9_table_2_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RehabPrioPreviewComponent_div_9_table_2_tbody_10_tr_1_Template, 12, 13, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r54.rpState.top10);
} }
function RehabPrioPreviewComponent_div_9_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table")(1, "thead")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Population");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Latitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Longitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, RehabPrioPreviewComponent_div_9_table_2_tbody_10_Template, 2, 1, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r37.rpState.top10 && ctx_r37.rpState.top10.length);
} }
function RehabPrioPreviewComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 40)(2, "div", 40)(3, "div", 40)(4, "div", 40)(5, "div", 40)(6, "div", 40)(7, "div", 40)(8, "div", 40)(9, "div", 40)(10, "div", 40)(11, "div", 40)(12, "div", 40)(13, "div", 40)(14, "div", 40)(15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RehabPrioPreviewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RehabPrioPreviewComponent_div_9_table_1_Template, 23, 5, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_div_9_table_2_Template, 11, 1, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, RehabPrioPreviewComponent_div_9_div_3_Template, 16, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.rpState.mode === "rehab-prio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.rpState.mode === "new_constructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r4.rpState.top10 || !ctx_r4.rpState.top10.length);
} }
function RehabPrioPreviewComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r60.showTable = !ctx_r60.showTable; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "table_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-expanded", ctx_r5.showTable ? "true" : "false");
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Population in 1km radius:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 1, ctx_r62.popupProperties.local_population, "1.0-0"), " ppl ");
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "open_in_full");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Usage Capacity for this Point:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 1, ctx_r63.popupProperties.usage_cap, "1.0-0"), " ppl ");
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Crucialness:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 1, ctx_r66.popupProperties.criticality * 100, "1.0-0"), "% ");
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "compress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Pressure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 1, ctx_r67.popupProperties.pressure * 100, "1.0-0"), "% ");
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Likely Current Users:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 1, ctx_r68.popupProperties.assigned_population, "1.0-0"), " ppl ");
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Users who would gain access:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 1, ctx_r69.popupProperties.assigned_population, "1.0-0"), " ppl ");
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_p_1_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_p_2_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_p_3_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_p_4_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r64.popupProperties.criticality > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r64.popupProperties.pressure > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r64.popupProperties.assigned_population > 0 && ctx_r64.popupProperties.status_id === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r64.popupProperties.assigned_population > 0 && ctx_r64.popupProperties.status_id !== "Yes");
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_4_strong_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_4_strong_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Non-Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p")(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "tips_and_updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "We predict this point is now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_4_strong_6_Template, 2, 0, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_4_strong_7_Template, 2, 0, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p")(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "tips_and_updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Prediction of point being Functional/Non-Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 43)(14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "In 2 years");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r65.popupProperties.predicted_status_0y === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r65.popupProperties.predicted_status_0y === "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r65.statusColor("predicted_status_0y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r65.statusColor("predicted_status_2y"));
} }
function RehabPrioPreviewComponent_app_base_waterpoint_popup_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-base-waterpoint-popup", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_p_1_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_p_2_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_3_Template, 5, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_ng_container_4_Template, 22, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("popupProperties", ctx_r8.popupProperties);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.popupProperties.local_population > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.popupProperties.usage_cap > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.rpState.mode === "rehab-prio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r8.rpState.mode === "risk-index");
} }
function RehabPrioPreviewComponent_ng_container_58_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Population in 1km radius:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 1, ctx_r72.popupProperties.population, "1.0-0"), " ppl ");
} }
function RehabPrioPreviewComponent_ng_container_58_ng_container_7_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r76.popupProperties.NAME_4, " ");
} }
function RehabPrioPreviewComponent_ng_container_58_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_ng_container_58_ng_container_7_ng_container_2_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r75.popupProperties.NAME_3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r75.popupProperties.NAME_4);
} }
function RehabPrioPreviewComponent_ng_container_58_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_ng_container_58_ng_container_7_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r74.popupProperties.NAME_2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r74.popupProperties.NAME_3);
} }
function RehabPrioPreviewComponent_ng_container_58_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_ng_container_58_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r73.popupProperties.NAME_1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r73.popupProperties.NAME_2);
} }
function RehabPrioPreviewComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RehabPrioPreviewComponent_ng_container_58_p_1_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p")(3, "label")(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, RehabPrioPreviewComponent_ng_container_58_ng_container_7_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "a", 46)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.popupProperties.population > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r9.popupProperties.NAME_0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.popupProperties.NAME_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", "https://www.google.com/maps/@" + ctx_r9.popupProperties.y + "," + ctx_r9.popupProperties.x + ",16z", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
} }
function RehabPrioPreviewComponent_ng_container_59_app_adm_popup_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-adm-popup", 48);
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("popupProperties", ctx_r77.popupProperties)("admPopupSections", ctx_r77.admPopupSections);
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r87.popupProperties.NAME_4, " ");
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r86.popupProperties.NAME_3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r86.popupProperties.NAME_4);
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r85.popupProperties.NAME_2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r85.popupProperties.NAME_3);
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" > ", ctx_r79.popupProperties.NAME_1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r79.popupProperties.NAME_2);
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r80.popupProperties.average_report_age_years.toFixed(1), " years ");
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (100 - 100 * (ctx_r82.popupProperties.uncharted_pop / ctx_r82.popupProperties.rural_pop)).toFixed(1), "% ");
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_app_staleness_popup_bar_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-staleness-popup-bar", 42);
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("popupProperties", ctx_r84.popupProperties);
} }
function RehabPrioPreviewComponent_ng_container_59_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p")(2, "label")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_6_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "a", 46)(8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p")(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Average Report Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_16_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_17_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p")(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Rural Pop. Data Coverage:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_24_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, RehabPrioPreviewComponent_ng_container_59_ng_container_2_ng_container_25_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, RehabPrioPreviewComponent_ng_container_59_ng_container_2_app_staleness_popup_bar_26_Template, 1, 1, "app-staleness-popup-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r78.popupProperties.NAME_0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.NAME_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", "https://www.google.com/maps/@" + ctx_r78.popupProperties.y + "," + ctx_r78.popupProperties.x + ",16z", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.average_report_age_years !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.average_report_age_years === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.rural_pop > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.rural_pop === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.average_age !== 0);
} }
function RehabPrioPreviewComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RehabPrioPreviewComponent_ng_container_59_app_adm_popup_1_Template, 1, 2, "app-adm-popup", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RehabPrioPreviewComponent_ng_container_59_ng_container_2_Template, 27, 8, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.rpState.mode === "adman" || ctx_r10.rpState.mode === "risk-index");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.rpState.mode === "staleness");
} }
function RehabPrioPreviewComponent_mat_option_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Predicted Risk Index");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function RehabPrioPreviewComponent_ng_container_77_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r88.rpState.all_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Functional Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r90.rpState.show_urban = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Urban Areas");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r89); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r91.rpState.show_population_density = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Pop. Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r89); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r92.rpState.show_landcover = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Roads & Buildings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r89); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r93.rpState.show_adm_borders = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Show Adm Borders");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r12.rpState.all_waterpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r12.rpState.show_urban);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r12.rpState.show_population_density);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r12.rpState.show_landcover);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r12.rpState.show_adm_borders);
} }
function RehabPrioPreviewComponent_ng_container_78_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "# Service Gaps");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-button-toggle-group", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_78_div_11_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r95.rpState.nc_limit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-button-toggle", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-button-toggle", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "100");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-button-toggle", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r94.rpState.nc_limit);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 50)("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 100)("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", 0)("disableRipple", true);
} }
function RehabPrioPreviewComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r97.rpState.any_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Show Water Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r98); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r99.rpState.all_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Functional Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r98); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r100.rpState.show_population_density = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Pop. Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r98); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r101.rpState.show_landcover = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Roads & Buildings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r98); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r102.rpState.show_adm_borders = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Show Adm Borders");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, RehabPrioPreviewComponent_ng_container_78_div_11_Template, 10, 7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r13.rpState.any_waterpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r13.rpState.all_waterpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r13.rpState.show_population_density);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r13.rpState.show_landcover);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r13.rpState.show_adm_borders);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r13.rpState.mode === "new_constructions");
} }
function RehabPrioPreviewComponent_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_79_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r103.rpState.show_adman_labels = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Show Region Titles");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r14.rpState.show_adman_labels);
} }
function RehabPrioPreviewComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_80_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r105.rpState.show_adm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Show ADM Regions");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r15.rpState.show_adm);
} }
function RehabPrioPreviewComponent_ng_container_81_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_81_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r107.rpState.any_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Show Water Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 21)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Show Administrative Level:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-button-toggle-group", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_81_Template_mat_button_toggle_group_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r108); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r109.rpState.adman_level = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-button-toggle", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-button-toggle", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-button-toggle", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-button-toggle", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "mat-button-toggle", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r16.rpState.any_waterpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r16.rpState.adman_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disableRipple", true);
} }
function RehabPrioPreviewComponent_ng_container_82_mat_slide_toggle_14_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RehabPrioPreviewComponent_ng_container_82_mat_slide_toggle_14_Template_mat_slide_toggle_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r111.rpState.show_adman_pies = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Coverage Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r110.rpState.show_adman_pies);
} }
function RehabPrioPreviewComponent_ng_container_82_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 21)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Parameter of Interest:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function RehabPrioPreviewComponent_ng_container_82_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r113.rpState.adman_view = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-option", 59)(6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Rural Pop with Basic Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-option", 61)(9, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Rural Pop without Basic Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-option", 63)(12, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Uncharted Rural Pop ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, RehabPrioPreviewComponent_ng_container_82_mat_slide_toggle_14_Template, 3, 1, "mat-slide-toggle", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r17.rpState.adman_view);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r17.rpState.adman_view !== "");
} }
function RehabPrioPreviewComponent_ng_container_89_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Coverage Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "% rural pop with basic access");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "% rural pop without basic access");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "% uncharted rural pop");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function RehabPrioPreviewComponent_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "40%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "60%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "80%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, RehabPrioPreviewComponent_ng_container_89_ng_container_22_Template, 14, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHtml", ctx_r18.rpState.adman_view_name, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r18.rpState.show_adman_pies);
} }
function RehabPrioPreviewComponent_ng_container_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Data Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[4]);
} }
function RehabPrioPreviewComponent_ng_container_91_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Risk Index for ADM Regions");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "High Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Stable");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Low Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[0]);
} }
function RehabPrioPreviewComponent_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Predicted Water Point Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Newly Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Maintenance Recommended");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Repair Recommended");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Newly Non-functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, RehabPrioPreviewComponent_ng_container_91_ng_container_23_Template, 24, 10, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#66a2ea");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#185caf");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#f8b225");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#8a0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#ff0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r20.rpState.show_adm);
} }
function RehabPrioPreviewComponent_ng_container_92_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Population Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function RehabPrioPreviewComponent_ng_container_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Map Symbols:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Non-Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Unknown Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Abandoned Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, RehabPrioPreviewComponent_ng_container_92_ng_container_19_Template, 11, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#185caf");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#8a0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "hsl(0, 0%, 77%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "hsl(0, 0%, 15%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r21.rpState.show_population_density);
} }
function RehabPrioPreviewComponent_ng_container_93_ng_container_3_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Population Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function RehabPrioPreviewComponent_ng_container_93_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 76)(4, "span")(5, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span")(10, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Population Assigned to this Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 76)(17, "span")(18, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Non-Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span")(23, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Users who would gain access");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "by this Point if rehabilitated");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 76)(32, "span")(33, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Top 15 priority (based on the parameters selected in the Data Table)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, RehabPrioPreviewComponent_ng_container_93_ng_container_3_ng_container_37_Template, 11, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r118.rpState.show_population_density);
} }
function RehabPrioPreviewComponent_ng_container_93_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Non-Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Top 15 priority (based on the parameters selected in the Data Table)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#185caf");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#8a0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", "#eefe8b");
} }
function RehabPrioPreviewComponent_ng_container_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Map Symbols:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, RehabPrioPreviewComponent_ng_container_93_ng_container_3_Template, 38, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, RehabPrioPreviewComponent_ng_container_93_ng_container_4_Template, 13, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r22.rpState.show_point_counts);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r22.rpState.show_point_counts);
} }
function RehabPrioPreviewComponent_ng_container_94_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Population Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} }
function RehabPrioPreviewComponent_ng_container_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Map Symbols:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 76)(6, "span")(7, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Service Gap Identification Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "span")(12, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "1 km Radius Covered by This Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span")(17, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Users who would gain access");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "by this Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, RehabPrioPreviewComponent_ng_container_94_ng_container_23_Template, 11, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r23.rpState.show_population_density);
} }
const _c0 = function () { return ["adm-analysis", "rehab-priority-text", "all-waterpoints", "all-waterpoints-risk", "nc-points", "nc-labels"]; };
class RehabPrioPreviewComponent extends _rehab_prio_component__WEBPACK_IMPORTED_MODULE_0__.RehabPrioComponent {
    constructor(db_, state_, rpState_, dialog) {
        super(db_, state_, rpState_, dialog);
        this.db_ = db_;
        this.state_ = state_;
        this.rpState_ = rpState_;
        this.dialog = dialog;
        this.preview = true;
    }
}
RehabPrioPreviewComponent.ɵfac = function RehabPrioPreviewComponent_Factory(t) { return new (t || RehabPrioPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_1__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_common_components_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_rp_state_service__WEBPACK_IMPORTED_MODULE_3__.RpStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
RehabPrioPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: RehabPrioPreviewComponent, selectors: [["app-rehab-prio-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 95, vars: 33, consts: [["mapStyle", "mapbox://styles/wpdx/ckjmvff0e1tng19o33klef59z", 3, "id", "interactionLayers", "filters", "popupProperties", "map", "mapPopup", "filterSelected"], ["ngProjectAs", ".menu", 5, ["", 8, "menu"]], [1, "search-bar"], [3, "state", "wpdx_id"], ["class", "filtering-for", 4, "ngIf"], [1, "separator"], ["class", "data-table", 4, "ngIf"], ["mat-fab", "", "color", "primary", "title", "Show Data Table", "class", "table-trigger", 3, "click", 4, "ngIf"], ["mat-fab", "", "color", "primary", "title", "Show Data Sources", 3, "click"], ["mat-fab", "", "color", "primary", "aria-label", "Settings Menu", "title", "Settings Menu", 3, "matMenuTriggerFor"], ["xPosition", "after"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["aria-hidden", "false", "aria-label", "download icon"], ["downloadMenu", "matMenu"], [1, "map-popup"], [3, "popupProperties", 4, "ngIf"], [4, "ngIf"], [1, "top-bar"], [1, "controls"], [1, "with-title"], [3, "value", "valueChange"], ["value", "basic"], ["value", "adman"], ["value", "rehab-prio"], ["value", "new_constructions"], ["value", "staleness"], ["value", "risk-index", 4, "ngIf"], [1, "legend"], [1, "legend-control", 3, "click"], [1, "legend-title"], [1, "filtering-for"], [1, "filtering-remove", 3, "click"], [1, "data-table"], ["class", "placeholders", 4, "ngIf"], [1, "clickable", 3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "placeholders"], [1, "row-placeholder"], ["mat-fab", "", "color", "primary", "title", "Show Data Table", 1, "table-trigger", 3, "click"], [3, "popupProperties"], [1, "predictions"], [1, "legend-item", "standalone"], [1, "legend-color"], ["target", "_blank", 3, "href"], [3, "popupProperties", "admPopupSections", 4, "ngIf"], [3, "popupProperties", "admPopupSections"], ["value", "risk-index"], [3, "ngModel", "ngModelChange"], ["class", "with-title", 4, "ngIf"], ["aria-label", "ADM Level", "appearance", "Legacy", 3, "ngModel", "ngModelChange"], [3, "value", "disableRipple"], ["value", "adm0", 3, "disableRipple"], ["value", "adm1", 3, "disableRipple"], ["value", "adm2", 3, "disableRipple"], ["value", "adm3", 3, "disableRipple"], ["value", "best", 3, "disableRipple"], ["value", "served"], [1, "hl-served"], ["value", "unserved"], [1, "hl-unserved"], ["value", "uncharted"], [1, "hl-uncharted"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["src", "assets/img/pie_chart_black_24dp.svg"], [3, "innerHtml"], [1, "legend-item"], [1, "legend-color", "hl-served", "slice"], [1, "legend-color", "hl-unserved", "slice"], [1, "legend-color", "hl-uncharted", "slice"], [1, "legend-color", "round"], [1, "legend-color", 2, "background-color", "#6495ED"], [1, "legend-color", 2, "background-color", "#D3D3D3"], ["src", "assets/img/functional.png"], [1, "legend-label"], [3, "inline"], ["src", "assets/img/non-functional.png"], ["src", "assets/img/selected.png"], ["src", "assets/img/unclustered.png"]], template: function RehabPrioPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-airtable-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("map", function RehabPrioPreviewComponent_Template_app_airtable_layout_map_0_listener($event) { return ctx.setMap($event); })("mapPopup", function RehabPrioPreviewComponent_Template_app_airtable_layout_mapPopup_0_listener($event) { return ctx.popupProperties = $event; })("filterSelected", function RehabPrioPreviewComponent_Template_app_airtable_layout_filterSelected_0_listener($event) { return ctx.nav = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2)(3, "app-adm-search-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("state", function RehabPrioPreviewComponent_Template_app_adm_search_bar_state_3_listener($event) { return ctx.rpState.navigateToAdm($event); })("wpdx_id", function RehabPrioPreviewComponent_Template_app_adm_search_bar_wpdx_id_3_listener($event) { return ctx.gotoPointFromId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, RehabPrioPreviewComponent_div_4_Template, 7, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, RehabPrioPreviewComponent_div_5_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, RehabPrioPreviewComponent_div_6_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, RehabPrioPreviewComponent_div_7_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, RehabPrioPreviewComponent_div_9_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, RehabPrioPreviewComponent_button_10_Template, 3, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_Template_button_click_11_listener() { return ctx.openSourcesDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "volunteer_activism");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 9)(15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "mat-menu", 10, 11)(19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_Template_button_click_19_listener() { return ctx.openAttributeFilterDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "filter_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Filter by Attributes");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_Template_button_click_24_listener() { return ctx.openRegionFilterDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "travel_explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Filter by Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_Template_button_click_29_listener() { return ctx.openSettingsDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "View Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "button", 13)(35, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "mat-menu", null, 15)(41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_Template_button_click_41_listener() { return ctx.downloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Rehab Priority Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_Template_button_click_46_listener() { return ctx.downloadADMData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Adm. Region & Data Quality Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_Template_button_click_51_listener() { return ctx.downloadNCData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Service Gap Identification Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](57, RehabPrioPreviewComponent_app_base_waterpoint_popup_57_Template, 5, 5, "app-base-waterpoint-popup", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, RehabPrioPreviewComponent_ng_container_58_Template, 11, 4, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, RehabPrioPreviewComponent_ng_container_59_Template, 3, 2, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 19)(61, "div", 20)(62, "div", 21)(63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Decision Support Tool:");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function RehabPrioPreviewComponent_Template_mat_select_valueChange_65_listener($event) { return ctx.rpState.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "View Water Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "Adm Region Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "Rehab Priority Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "Service Gap Identification Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "Data Quality Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](76, RehabPrioPreviewComponent_mat_option_76_Template, 2, 0, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](77, RehabPrioPreviewComponent_ng_container_77_Template, 11, 5, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, RehabPrioPreviewComponent_ng_container_78_Template, 12, 6, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, RehabPrioPreviewComponent_ng_container_79_Template, 3, 1, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](80, RehabPrioPreviewComponent_ng_container_80_Template, 3, 1, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](81, RehabPrioPreviewComponent_ng_container_81_Template, 17, 7, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, RehabPrioPreviewComponent_ng_container_82_Template, 15, 2, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 29)(84, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RehabPrioPreviewComponent_Template_span_click_84_listener() { return ctx.legendOpen = !ctx.legendOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "strong", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, "Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](89, RehabPrioPreviewComponent_ng_container_89_Template, 23, 12, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, RehabPrioPreviewComponent_ng_container_90_Template, 23, 10, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](91, RehabPrioPreviewComponent_ng_container_91_Template, 24, 11, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](92, RehabPrioPreviewComponent_ng_container_92_Template, 20, 9, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](93, RehabPrioPreviewComponent_ng_container_93_Template, 5, 2, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](94, RehabPrioPreviewComponent_ng_container_94_Template, 24, 4, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](18);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", "explorer")("interactionLayers", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](32, _c0))("filters", ctx.filterConfiguration)("popupProperties", ctx.popupProperties);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.state.props.country_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.state.props.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.state.props.tech);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.state.props.management);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showTable && (ctx.rpState.mode === "rehab-prio" || ctx.rpState.mode === "new_constructions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "rehab-prio" || ctx.rpState.mode === "new_constructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.popupProperties.wpdx_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.popupProperties.population);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.popupProperties.total_pop);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.rpState.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "rehab-prio" || ctx.rpState.mode === "new_constructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "adman" || ctx.rpState.mode === "staleness");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "risk-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "adman" || ctx.rpState.mode === "staleness" || ctx.rpState.mode === "risk-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "adman");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("open", ctx.legendOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.legendOpen ? "keyboard_arrow_up" : "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.adman_view_name.length && ctx.rpState.mode === "adman");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "staleness");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "risk-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "rehab-prio");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "new_constructions");
    } }, directives: [_common_components_airtable_layout_airtable_layout_component__WEBPACK_IMPORTED_MODULE_4__.AirtableLayoutComponent, _common_components_adm_search_bar_adm_search_bar_component__WEBPACK_IMPORTED_MODULE_5__.AdmSearchBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _common_components_base_waterpoint_popup_base_waterpoint_popup_component__WEBPACK_IMPORTED_MODULE_6__.BaseWaterpointPopupComponent, _adm_popup_adm_popup_component__WEBPACK_IMPORTED_MODULE_7__.AdmPopupComponent, _common_components_staleness_popup_bar_staleness_popup_bar_component__WEBPACK_IMPORTED_MODULE_8__.StalenessPopupBarComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__.MatButtonToggle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n.popup-styling[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n}\n.popup-styling[_ngcontent-%COMP%]     {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.popup-styling[_ngcontent-%COMP%]     p {\n  margin: 0 0 4px;\n  margin-top: 8px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.popup-styling[_ngcontent-%COMP%]     a, .popup-styling[_ngcontent-%COMP%]     a:visited, .popup-styling[_ngcontent-%COMP%]     a:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.popup-styling[_ngcontent-%COMP%]     mat-icon {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n.popup-styling[_ngcontent-%COMP%]     label {\n  font-weight: 500;\n  margin: 0;\n}\n.workspace[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  pointer-events: none;\n}\n.workspace[_ngcontent-%COMP%]   .toggles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  margin-bottom: 20px;\n}\n.workspace[_ngcontent-%COMP%]   .toggles[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.workspace[_ngcontent-%COMP%]   .toggles[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.workspace[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin-top: 20px;\n  text-decoration: none;\n  color: inherit;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  display: inline;\n  line-height: 0.8;\n  vertical-align: top;\n}\ntable[_ngcontent-%COMP%]   td.clickable[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background-color: #ddd;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1):hover {\n  background-color: #ccc;\n}\nmat-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-top: 16px;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  pointer-events: none;\n}\n.top-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  flex-flow: row;\n  align-items: flex-end;\n  gap: 16px;\n  pointer-events: none;\n  background: linear-gradient(180deg, #ffffff 0%, #ffffff50 2px, #3f51b550 4px, #3f51b550 100%);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  align-self: stretch;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: white;\n  pointer-events: all;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .with-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  background-color: #ffffff60;\n  border-radius: 4px;\n  padding: 0 4px;\n  padding-bottom: 4px;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .with-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: light;\n  color: #000;\n  margin-bottom: 4px;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .with-title[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%] {\n  margin: 0 8px;\n  flex: 0 1 auto;\n  width: 250px;\n  background-color: rgba(224, 224, 224, 0.8);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-select-value {\n  color: #333333;\n  font-weight: bolder;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-button-toggle {\n  background-color: rgba(224, 224, 224, 0.8);\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-button-toggle.mat-button-toggle-checked {\n  background-color: rgba(255, 255, 255, 0.8);\n  font-weight: bolder;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-button-toggle .mat-button-toggle-label-content {\n  line-height: inherit;\n  color: #333;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-slide-toggle-content {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  gap: 4px;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: stretch;\n  align-self: flex-end;\n  padding: 8px;\n  gap: 4px;\n  background-color: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  margin-top: 8px;\n  margin-right: 8px;\n  position: relative;\n  max-height: 34px;\n  overflow-y: hidden;\n  transition: max-height 0.2s ease-in-out;\n}\n.legend[_ngcontent-%COMP%]   .legend-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  transition: margin-top 0.2s ease-in-out;\n}\n.legend.open[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n.legend.open[_ngcontent-%COMP%]   .legend-title[_ngcontent-%COMP%] {\n  margin-top: -26px;\n}\n.legend[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.legend[_ngcontent-%COMP%]   .legend-control[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  cursor: pointer;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  gap: 12px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.legend-item.standalone[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.legend-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 60px;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  display: block;\n  width: 16px;\n  height: 12px;\n  border: 1px solid #333333;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-color.round[_ngcontent-%COMP%] {\n  height: 16px;\n  border-radius: 8px;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  max-width: 300px;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  gap: 8px;\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n  line-height: 16px;\n}\n.legend-item[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: stretch;\n  align-self: flex-start;\n  padding: 8px;\n  gap: 4px;\n  background-color: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  margin-top: 8px;\n  margin-left: 8px;\n  position: relative;\n}\n.predictions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  width: 100%;\n  justify-content: space-around;\n}\n.predictions[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  flex-flow: column;\n  gap: 4px;\n}\n.map-popup[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n}\n.map-popup[_ngcontent-%COMP%]     {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.map-popup[_ngcontent-%COMP%]     p {\n  margin: 0 0 4px;\n  margin-top: 8px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.map-popup[_ngcontent-%COMP%]     a, .map-popup[_ngcontent-%COMP%]     a:visited, .map-popup[_ngcontent-%COMP%]     a:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.map-popup[_ngcontent-%COMP%]     mat-icon {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n.map-popup[_ngcontent-%COMP%]     label {\n  font-weight: 500;\n  margin: 0;\n}\n.map-popup[_ngcontent-%COMP%]   .indent[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n.map-popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 32px 0 0 0;\n  font-weight: 600;\n}\n.map-popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%] {\n  padding: 0 48px;\n  margin-bottom: 32px;\n  width: 100%;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  width: 100%;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  text-align: left;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 30%;\n  text-align: right;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 20%;\n  text-align: right;\n  font-family: monospace;\n}\n.data-table[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  background-color: white;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 28px;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1) {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):after, .data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):before {\n  box-sizing: border-box;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):after, .data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):before {\n  box-sizing: border-box;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n.filtering-for[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  gap: 8px;\n  padding: 3px 8px;\n  background: #CDD3EDcc;\n  border-radius: 4px;\n  border: 1px solid black;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  font-weight: 600;\n}\n.filtering-for[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.filtering-for[_ngcontent-%COMP%]   .filtering-remove[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #888888;\n}\n.filtering-for[_ngcontent-%COMP%]   .filtering-remove[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi1jb21wb25lbnRzL2NvbW1vbi5sZXNzIiwicmVoYWItcHJpby5jb21wb25lbnQubGVzcyIsIi4uL2NvbW1vbi1jb21wb25lbnRzL3BvcHVwLWNvbnRlbnRzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLDJDQUFBO0FDUEo7QURXSTtFQVlBO0lBQ0ksd0JBQUE7RUNwQk47QUFDRjtBRFlJO0VBWUE7SUFDSSx3QkFBQTtFQ3JCTjtBQUNGO0FEeUJBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBWUEsK0JBQUE7QUNuQ0o7QUR5Qkk7O0VBRUUsc0JBQUE7QUN2Qk47QUQwQkk7O0VBRUksc0JBQUE7QUN4QlI7QUQ2Qkk7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUMzQlI7QUQ4Qkk7RUFDSSxrSEFBQTtBQzVCUjtBRHFDQTtFQUNJO0lBQ0Usb0NBQUE7RUNuQ0o7RURxQ0U7SUFDRSxpREFBQTtFQ25DSjtBQUNGO0FDdkRBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUR5REo7QUM5REE7RUZRSSwyQ0FBQTtFQUNBLGtCQUFBO0FDeURKO0FDbEVBO0VBVVksZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEMkRaO0FDekVBOzs7RUFpQlkscUJBQUE7RUFDQSxjQUFBO0FENkRaO0FDL0VBO0VBcUJZLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRDZEWjtBQ3ZGQTtFQTZCWSxnQkFBQTtFQUNBLFNBQUE7QUQ2RFo7QUF4RkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUEwRko7QUE5RkE7RUFPUSxhQUFBO0VBQ0EsaUJBQUE7RUFXQSxtQkFBQTtBQWdGUjtBQW5HQTtFQWFZLFlBQUE7QUF5Rlo7QUF0R0E7RUFpQlksa0JBQUE7QUF3Rlo7QUF6R0E7RUFzQlEsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBc0ZSO0FBbEZBO0VBQ0kseUJBQUE7QUFvRko7QUFyRkE7O0VBR1EsZ0JBQUE7QUFzRlI7QUF6RkE7O0VBS1ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBd0ZaO0FBdEZROztFQUNJLGVBQUE7QUF5Rlo7QUFwR0E7RUFlUSxlQUFBO0FBd0ZSO0FBdkZRO0VBQ0ksc0JBQUE7QUF5Rlo7QUF2RlE7RUFDSSxzQkFBQTtBQXlGWjtBQXhGWTtFQUNJLHNCQUFBO0FBMEZoQjtBQXBGQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFzRko7QUFuRkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBcUZKO0FBbkZJO0VBQ0ksbUJBQUE7QUFxRlI7QUE1RkE7RUFXUSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFFQSw2RkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUR6RUosMkNBQUE7RUMyRUksbUJBQUE7QUFtRlI7QUF4R0E7RUF3QlksWUFBQTtFQUNBLG1CQUFBO0FBbUZaO0FBNUdBO0VBNkJZLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWtGWjtBQXJIQTtFQXNDZ0IsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBa0ZoQjtBQTNIQTtFQTZDZ0IsU0FBQTtBQWlGaEI7QUE5SEE7RUFrRFksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBK0VaO0FBdElBO0VBNERnQixjQUFBO0VBQ0EsbUJBQUE7QUE2RWhCO0FBMUlBO0VBZ0VnQiwwQ0FBQTtBQTZFaEI7QUE1RWdCO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtBQThFcEI7QUFqSkE7RUFzRW9CLG9CQUFBO0VBQ0EsV0FBQTtBQThFcEI7QUFySkE7RUEyRWdCLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBNkVoQjtBQXZFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUVBLDJDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFRG5KQSwyQ0FBQTtFQ3FKQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBV0Esa0JBQUE7RUFDQSx1Q0FBQTtBQTZESjtBQXhGQTtFQWlCUSxhQUFBO0VBQ0EsdUNBQUE7QUEwRVI7QUF4RUk7RUFDSSxpQkFBQTtBQTBFUjtBQTNFSTtFQUdRLGlCQUFBO0FBMkVaO0FBbEdBO0VBNkJRLGtCQUFBO0FBd0VSO0FBckdBO0VBZ0NRLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBd0VSO0FBbkVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQXFFSjtBQW5FSTtFQUNJLGVBQUE7QUFxRVI7QUE3RUE7RUFZUSxjQUFBO0VBQ0EsWUFBQTtBQW9FUjtBQWpGQTtFQWlCUSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQW1FUjtBQWpFUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQW1FWjtBQTNGQTtFQTZCUSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWlFUjtBQWhHQTtFQWtDWSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFRDVOUiwyQ0FBQTtFQUNBLGtCQUFBO0VDNk5RLGlCQUFBO0FBa0VaO0FBekdBO0VBNENRLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUVBLDJDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFRHRPSiwyQ0FBQTtFQ3dPSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQStEUjtBQTNEQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUE2REo7QUFsRUE7RUFRUSxpQkFBQTtFQUNBLFFBQUE7QUE2RFI7QUExREE7RUN0UUksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURtVUo7QUFqRUE7RUQvUEksMkNBQUE7RUFDQSxrQkFBQTtBQ21VSjtBQXJFQTtFQzdQWSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURxVVo7QUE1RUE7OztFQ3RQWSxxQkFBQTtFQUNBLGNBQUE7QUR1VVo7QUFsRkE7RUNsUFksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEdVVaO0FBMUZBO0VDMU9ZLGdCQUFBO0VBQ0EsU0FBQTtBRHVVWjtBQTlGQTtFQUdRLGtCQUFBO0FBOEZSO0FBakdBO0VBTVEsa0JBQUE7RUFDQSxnQkFBQTtBQThGUjtBQTdGUTtFQUNJLGFBQUE7QUErRlo7QUF4R0E7RUFjUSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBNkZSO0FBN0dBO0VBa0JZLGdCQUFBO0VBQ0EsV0FBQTtBQThGWjtBQWpIQTtFQXFCZ0IsV0FBQTtBQStGaEI7QUFwSEE7RUF1Qm9CLGlCQUFBO0FBZ0dwQjtBQS9Gb0I7RUFDSSxnQkFBQTtBQWlHeEI7QUE3Rm9CO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBK0Z4QjtBQTdGb0I7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQStGeEI7QUF2RkE7RUFDSSxpQkFBQTtFRHZTQSwyQ0FBQTtFQ3lTQSxrQkFBQTtFQUNBLHVCQUFBO0FBeUZKO0FBN0ZBO0VBT1EsYUFBQTtFQUNBLGlCQUFBO0FBeUZSO0FBakdBO0VBYVksV0FBQTtFQUNBLFlBQUE7QUF1Rlo7QUEzRlk7RURuUlIsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBWUEsK0JBQUE7QUNxV0o7QUQvV0k7O0VBRUUsc0JBQUE7QUNpWE47QUQ5V0k7O0VBRUksc0JBQUE7QUNnWFI7QUQzV0k7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUM2V1I7QUQxV0k7RUFDSSxrSEFBQTtBQzRXUjtBQWpIQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RURqVUEsMkNBQUE7RUNvVUEsZ0JBQUE7QUFrSEo7QUE3SEE7RUFhUSxnQkFBQTtBQW1IUjtBQWhJQTtFQWlCUSxlQUFBO0VBQ0EsY0FBQTtBQWtIUjtBQWpIUTtFQUNJLGNBQUE7QUFtSFoiLCJmaWxlIjoicmVoYWItcHJpby5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQHByaW1hcnlCcmFuZDogIzNFQzJGRjtcblxuQHpJbmRleEhlYWRlcjogMTtcbkB6SW5kZXhGaWx0ZXJzOiAyO1xuQHpJbmRleFNpZGVQYW5lbDogMztcblxuLmZvbnRTYW5zIHtcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLm5pY2Utc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubW9iaWxlKEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4uZGVza3RvcChAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLm1vYmlsZSh7XG4gICAgOjpuZy1kZWVwIC5sYXlvdXQtZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcblxuLmRlc2t0b3Aoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcblxuXG4ubG9hZGluZyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMzksIDI0MSwgMjQ2KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZDogI2RkZCBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIFxuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gIFxuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cbiAgXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxuICAgICAgICApO1xuICAgIH1cbn0gIFxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDBweCwgMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDIwMHB4ICsgMTAwdncpLCAwLCAwKTtcbiAgICB9XG59IiwiQGltcG9ydCAnLi4vY29tbW9uLWNvbXBvbmVudHMvY29tbW9uLmxlc3MnO1xuQGltcG9ydCAnLi4vY29tbW9uLWNvbXBvbmVudHMvcG9wdXAtY29udGVudHMubGVzcyc7XG5cbi53b3Jrc3BhY2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAudG9nZ2xlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLm1hdC1zZWxlY3Qge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5kb3dubG9hZCB7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB0ZCwgdGgge1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuICAgICAgICAmLmNsaWNrYWJsZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgybisxKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubWF0LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50b3AtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYgMCUsICNmZmZmZmY1MCAycHgsICMzZjUxYjU1MCA0cHgsICMzZjUxYjU1MCAxMDAlKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICAgIC5uaWNlLXNoYWRvdztcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBcbiAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLndpdGgtdGl0bGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNjA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LXNlbGVjdCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgICAgZmxleDogMCAxIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuOCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjgpO1xuICAgICAgICAgICAgICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sZWdlbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGdhcDogNHB4O1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7ICAgICAgICBcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAubmljZS1zaGFkb3c7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIG1heC1oZWlnaHQ6IDM0cHg7XG4gICAgLmxlZ2VuZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi10b3AgMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgJi5vcGVuIHtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIC5sZWdlbmQtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTI2cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLWluLW91dDtcbiAgICBzdHJvbmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgfVxuICAgIC5sZWdlbmQtY29udHJvbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgIHJpZ2h0OiA2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbn1cblxuLmxlZ2VuZC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGdhcDogMTJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYuc3RhbmRhbG9uZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jazs7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICAubGVnZW5kLWNvbG9yIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG5cbiAgICAgICAgJi5yb3VuZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGVnZW5kLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuXG4gICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgICAgXG4gICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICAgIC5mb250U2FucztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTsgICAgICAgIFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgLm5pY2Utc2hhZG93O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG59XG5cbi5wcmVkaWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIC5sZWdlbmQtaXRlbSB7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBnYXA6IDRweDtcbiAgICB9XG59XG4ubWFwLXBvcHVwIHtcbiAgICAucG9wdXAtc3R5bGluZztcbiAgICAuaW5kZW50IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMzJweCAwIDAgMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByZWRpY3Rpb24tZXhwbGFuYXRpb25zIHtcbiAgICAgICAgcGFkZGluZzogMCA0OHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGJvZHkgdHIgdGQge1xuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRhdGEtdGFibGUge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIC5uaWNlLXNoYWRvdztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAucGxhY2Vob2xkZXJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIC5yb3ctcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4rMSkge1xuICAgICAgICAgICAgICAgIC5sb2FkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5maWx0ZXJpbmctZm9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogM3B4IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0REM0VEY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIC5uaWNlLXNoYWRvdztcblxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cblxuICAgIC5maWx0ZXJpbmctcmVtb3ZlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIucG9wdXAtc3R5bGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIFxuICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5mb250U2FucztcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGEsIGE6dmlzaXRlZCwgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 40983:
/*!***********************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/rehab-prio-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RehabPrioRoutingModule": () => (/* binding */ RehabPrioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rehab_prio_preview_rehab_prio_preview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rehab-prio-preview/rehab-prio-preview.component */ 26135);
/* harmony import */ var _rehab_prio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rehab-prio.component */ 88874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _rehab_prio_component__WEBPACK_IMPORTED_MODULE_1__.RehabPrioComponent },
    { path: 'preview', component: _rehab_prio_preview_rehab_prio_preview_component__WEBPACK_IMPORTED_MODULE_0__.RehabPrioPreviewComponent }
];
class RehabPrioRoutingModule {
}
RehabPrioRoutingModule.ɵfac = function RehabPrioRoutingModule_Factory(t) { return new (t || RehabPrioRoutingModule)(); };
RehabPrioRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RehabPrioRoutingModule });
RehabPrioRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RehabPrioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 88874:
/*!******************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/rehab-prio.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RehabPrioComponent": () => (/* binding */ RehabPrioComponent)
/* harmony export */ });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ 62333);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/turf */ 67324);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-dialog/settings-dialog.component */ 85944);
/* harmony import */ var _region_filter_dialog_region_filter_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region-filter-dialog/region-filter-dialog.component */ 50821);
/* harmony import */ var _attribute_filter_dialog_attribute_filter_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attribute-filter-dialog/attribute-filter-dialog.component */ 60645);
/* harmony import */ var _sources_dialog_sources_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sources-dialog/sources-dialog.component */ 78891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../db.service */ 76358);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-components/common-components.module */ 93566);
/* harmony import */ var _rp_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rp-state.service */ 1304);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _common_components_airtable_layout_airtable_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common-components/airtable-layout/airtable-layout.component */ 98904);
/* harmony import */ var _common_components_adm_search_bar_adm_search_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common-components/adm-search-bar/adm-search-bar.component */ 94936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _common_components_base_waterpoint_popup_base_waterpoint_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common-components/base-waterpoint-popup/base-waterpoint-popup.component */ 47630);
/* harmony import */ var _adm_popup_adm_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adm-popup/adm-popup.component */ 42276);
/* harmony import */ var _common_components_staleness_popup_bar_staleness_popup_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common-components/staleness-popup-bar/staleness-popup-bar.component */ 46184);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);



























function RehabPrioComponent_div_4_ng_container_6_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r27.state.props.adm4, " ");
} }
function RehabPrioComponent_div_4_ng_container_6_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_div_4_ng_container_6_ng_container_2_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r26.state.props.adm3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r26.state.props.adm4);
} }
function RehabPrioComponent_div_4_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_div_4_ng_container_6_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r25.state.props.adm2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r25.state.props.adm3);
} }
function RehabPrioComponent_div_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_div_4_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r24.state.props.adm1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r24.state.props.adm2);
} }
function RehabPrioComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_4_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); ctx_r28.state.props.country_name = ctx_r28.state.props.adm1 = ctx_r28.state.props.adm2 = ctx_r28.state.props.adm3 = ctx_r28.state.props.adm4 = null; return ctx_r28.state.bump(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Region Filter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RehabPrioComponent_div_4_ng_container_6_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r0.state.props.country_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.state.props.adm1);
} }
function RehabPrioComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_5_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r30.state.setProp("source", null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Water Source Filter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.state.props.source, " ");
} }
function RehabPrioComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_6_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r32.state.setProp("tech", null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Water Tech Filter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.state.props.tech, " ");
} }
function RehabPrioComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 32)(1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_7_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r34.state.setProp("management", null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Water Management Filter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r3.state.props.management, " ");
} }
function RehabPrioComponent_div_9_table_1_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RehabPrioComponent_div_9_table_1_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RehabPrioComponent_div_9_table_1_mat_icon_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RehabPrioComponent_div_9_table_1_mat_icon_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RehabPrioComponent_div_9_table_1_tbody_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_9_table_1_tbody_22_tr_1_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r48); const row_r45 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r47.gotoPoint(row_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r45 = ctx.$implicit;
    const rank_r46 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](rank_r46 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](row_r45.status_id || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](row_r45.water_source_clean || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](row_r45.water_tech_clean || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](11, 8, row_r45.local_population, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](14, 11, row_r45.assigned_population, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](17, 14, row_r45.criticality * 100, "1.0-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](20, 17, row_r45.pressure * 100, "1.0-1"), "%");
} }
function RehabPrioComponent_div_9_table_1_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RehabPrioComponent_div_9_table_1_tbody_22_tr_1_Template, 21, 20, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r43.rpState.top10);
} }
function RehabPrioComponent_div_9_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "table")(1, "thead")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Functional?");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Source");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_9_table_1_Template_th_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r49.rpState.sort_by = ctx_r49.rpState.sort_options[0].value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Local Pop.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, RehabPrioComponent_div_9_table_1_mat_icon_12_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_9_table_1_Template_th_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r51.rpState.sort_by = ctx_r51.rpState.sort_options[1].value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Water Point Pop.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, RehabPrioComponent_div_9_table_1_mat_icon_15_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_9_table_1_Template_th_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r52.rpState.sort_by = ctx_r52.rpState.sort_options[2].value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Crucialness");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, RehabPrioComponent_div_9_table_1_mat_icon_18_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_9_table_1_Template_th_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r53.rpState.sort_by = ctx_r53.rpState.sort_options[3].value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Pressure");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, RehabPrioComponent_div_9_table_1_mat_icon_21_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, RehabPrioComponent_div_9_table_1_tbody_22_Template, 2, 1, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r36.rpState.sort_by === ctx_r36.rpState.sort_options[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r36.rpState.sort_by === ctx_r36.rpState.sort_options[1].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r36.rpState.sort_by === ctx_r36.rpState.sort_options[2].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r36.rpState.sort_by === ctx_r36.rpState.sort_options[3].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r36.rpState.top10 && ctx_r36.rpState.top10.length);
} }
function RehabPrioComponent_div_9_table_2_tbody_10_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_div_9_table_2_tbody_10_tr_1_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r59); const row_r56 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4); return ctx_r58.gotoPoint(row_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    const rank_r57 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](rank_r57 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 4, row_r56.population, "1.0-0") || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](8, 7, row_r56.lat_deg, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](11, 10, row_r56.lon_deg, "1.3-3"));
} }
function RehabPrioComponent_div_9_table_2_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RehabPrioComponent_div_9_table_2_tbody_10_tr_1_Template, 12, 13, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r54.rpState.top10);
} }
function RehabPrioComponent_div_9_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "table")(1, "thead")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Population");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Latitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Longitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, RehabPrioComponent_div_9_table_2_tbody_10_Template, 2, 1, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r37.rpState.top10 && ctx_r37.rpState.top10.length);
} }
function RehabPrioComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "div", 40)(2, "div", 40)(3, "div", 40)(4, "div", 40)(5, "div", 40)(6, "div", 40)(7, "div", 40)(8, "div", 40)(9, "div", 40)(10, "div", 40)(11, "div", 40)(12, "div", 40)(13, "div", 40)(14, "div", 40)(15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RehabPrioComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RehabPrioComponent_div_9_table_1_Template, 23, 5, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_div_9_table_2_Template, 11, 1, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RehabPrioComponent_div_9_div_3_Template, 16, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.rpState.mode === "rehab-prio");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.rpState.mode === "new_constructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r4.rpState.top10 || !ctx_r4.rpState.top10.length);
} }
function RehabPrioComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r60.showTable = !ctx_r60.showTable; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "table_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("aria-expanded", ctx_r5.showTable ? "true" : "false");
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Population in 1km radius:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](6, 1, ctx_r62.popupProperties.local_population, "1.0-0"), " ppl ");
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "open_in_full");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Usage Capacity for this Point:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](6, 1, ctx_r63.popupProperties.usage_cap, "1.0-0"), " ppl ");
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Crucialness:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](6, 1, ctx_r66.popupProperties.criticality * 100, "1.0-0"), "% ");
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "compress");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Pressure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](6, 1, ctx_r67.popupProperties.pressure * 100, "1.0-0"), "% ");
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Likely Current Users:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](6, 1, ctx_r68.popupProperties.assigned_population, "1.0-0"), " ppl ");
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Users who would gain access:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](6, 1, ctx_r69.popupProperties.assigned_population, "1.0-0"), " ppl ");
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_p_1_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_p_2_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_p_3_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_p_4_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r64.popupProperties.criticality > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r64.popupProperties.pressure > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r64.popupProperties.assigned_population > 0 && ctx_r64.popupProperties.status_id === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r64.popupProperties.assigned_population > 0 && ctx_r64.popupProperties.status_id !== "Yes");
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_4_strong_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_4_strong_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Non-Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p")(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "tips_and_updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "We predict this point is now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_4_strong_6_Template, 2, 0, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_4_strong_7_Template, 2, 0, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "p")(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "tips_and_updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Prediction of point being Functional/Non-Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 43)(14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "In 2 years");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r65.popupProperties.predicted_status_0y === "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r65.popupProperties.predicted_status_0y === "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r65.statusColor("predicted_status_0y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r65.statusColor("predicted_status_2y"));
} }
function RehabPrioComponent_app_base_waterpoint_popup_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-base-waterpoint-popup", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RehabPrioComponent_app_base_waterpoint_popup_57_p_1_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_app_base_waterpoint_popup_57_p_2_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_3_Template, 5, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, RehabPrioComponent_app_base_waterpoint_popup_57_ng_container_4_Template, 22, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("popupProperties", ctx_r8.popupProperties);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.popupProperties.local_population > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.popupProperties.usage_cap > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.rpState.mode === "rehab-prio");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.rpState.mode === "risk-index");
} }
function RehabPrioComponent_ng_container_58_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Population in 1km radius:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](6, 1, ctx_r72.popupProperties.population, "1.0-0"), " ppl ");
} }
function RehabPrioComponent_ng_container_58_ng_container_7_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r76.popupProperties.NAME_4, " ");
} }
function RehabPrioComponent_ng_container_58_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_ng_container_58_ng_container_7_ng_container_2_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r75.popupProperties.NAME_3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r75.popupProperties.NAME_4);
} }
function RehabPrioComponent_ng_container_58_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_ng_container_58_ng_container_7_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r74.popupProperties.NAME_2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r74.popupProperties.NAME_3);
} }
function RehabPrioComponent_ng_container_58_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_ng_container_58_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r73.popupProperties.NAME_1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r73.popupProperties.NAME_2);
} }
function RehabPrioComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RehabPrioComponent_ng_container_58_p_1_Template, 7, 4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "p")(3, "label")(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, RehabPrioComponent_ng_container_58_ng_container_7_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "a", 46)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.popupProperties.population > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r9.popupProperties.NAME_0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r9.popupProperties.NAME_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("href", "https://www.google.com/maps/@" + ctx_r9.popupProperties.y + "," + ctx_r9.popupProperties.x + ",16z", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
} }
function RehabPrioComponent_ng_container_59_app_adm_popup_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-adm-popup", 48);
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("popupProperties", ctx_r77.popupProperties)("admPopupSections", ctx_r77.admPopupSections);
} }
function RehabPrioComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r87.popupProperties.NAME_4, " ");
} }
function RehabPrioComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r86.popupProperties.NAME_3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r86.popupProperties.NAME_4);
} }
function RehabPrioComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r85.popupProperties.NAME_2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r85.popupProperties.NAME_3);
} }
function RehabPrioComponent_ng_container_59_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_ng_container_59_ng_container_2_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" > ", ctx_r79.popupProperties.NAME_1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r79.popupProperties.NAME_2);
} }
function RehabPrioComponent_ng_container_59_ng_container_2_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r80.popupProperties.average_report_age_years.toFixed(1), " years ");
} }
function RehabPrioComponent_ng_container_59_ng_container_2_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " No Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function RehabPrioComponent_ng_container_59_ng_container_2_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (100 - 100 * (ctx_r82.popupProperties.uncharted_pop / ctx_r82.popupProperties.rural_pop)).toFixed(1), "% ");
} }
function RehabPrioComponent_ng_container_59_ng_container_2_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " No Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function RehabPrioComponent_ng_container_59_ng_container_2_app_staleness_popup_bar_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-staleness-popup-bar", 42);
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("popupProperties", ctx_r84.popupProperties);
} }
function RehabPrioComponent_ng_container_59_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p")(2, "label")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RehabPrioComponent_ng_container_59_ng_container_2_ng_container_6_Template, 3, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "a", 46)(8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "p")(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Average Report Age:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, RehabPrioComponent_ng_container_59_ng_container_2_ng_container_16_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, RehabPrioComponent_ng_container_59_ng_container_2_ng_container_17_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "p")(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Rural Pop. Data Coverage:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, RehabPrioComponent_ng_container_59_ng_container_2_ng_container_24_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, RehabPrioComponent_ng_container_59_ng_container_2_ng_container_25_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, RehabPrioComponent_ng_container_59_ng_container_2_app_staleness_popup_bar_26_Template, 1, 1, "app-staleness-popup-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r78.popupProperties.NAME_0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.NAME_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("href", "https://www.google.com/maps/@" + ctx_r78.popupProperties.y + "," + ctx_r78.popupProperties.x + ",16z", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.average_report_age_years !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.average_report_age_years === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.rural_pop > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.rural_pop === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r78.popupProperties.average_age !== 0);
} }
function RehabPrioComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, RehabPrioComponent_ng_container_59_app_adm_popup_1_Template, 1, 2, "app-adm-popup", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RehabPrioComponent_ng_container_59_ng_container_2_Template, 27, 8, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.rpState.mode === "adman" || ctx_r10.rpState.mode === "risk-index");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.rpState.mode === "staleness");
} }
function RehabPrioComponent_mat_option_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Predicted Risk Index");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RehabPrioComponent_ng_container_77_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r88.rpState.all_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Functional Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r90.rpState.show_urban = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Urban Areas");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r89); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r91.rpState.show_population_density = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Pop. Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r89); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r92.rpState.show_landcover = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Roads & Buildings");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_77_Template_mat_slide_toggle_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r89); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r93.rpState.show_adm_borders = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Show Adm Borders");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r12.rpState.all_waterpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r12.rpState.show_urban);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r12.rpState.show_population_density);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r12.rpState.show_landcover);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r12.rpState.show_adm_borders);
} }
function RehabPrioComponent_ng_container_78_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "# Service Gaps");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-button-toggle-group", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_78_div_11_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r95.rpState.nc_limit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "mat-button-toggle", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "mat-button-toggle", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "100");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "mat-button-toggle", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r94.rpState.nc_limit);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", 50)("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", 100)("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", 0)("disableRipple", true);
} }
function RehabPrioComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r97.rpState.any_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Show Water Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r98); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r99.rpState.all_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Functional Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r98); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r100.rpState.show_population_density = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Pop. Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r98); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r101.rpState.show_landcover = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Roads & Buildings");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_78_Template_mat_slide_toggle_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r98); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r102.rpState.show_adm_borders = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Show Adm Borders");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, RehabPrioComponent_ng_container_78_div_11_Template, 10, 7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r13.rpState.any_waterpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r13.rpState.all_waterpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r13.rpState.show_population_density);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r13.rpState.show_landcover);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r13.rpState.show_adm_borders);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.rpState.mode === "new_constructions");
} }
function RehabPrioComponent_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_79_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r103.rpState.show_adman_labels = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Show Region Titles");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r14.rpState.show_adman_labels);
} }
function RehabPrioComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_80_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r105.rpState.show_adm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Show ADM Regions");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r15.rpState.show_adm);
} }
function RehabPrioComponent_ng_container_81_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_81_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r107.rpState.any_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Show Water Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 21)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Show Administrative Level:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "mat-button-toggle-group", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_81_Template_mat_button_toggle_group_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r109.rpState.adman_level = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-button-toggle", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "mat-button-toggle", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "mat-button-toggle", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "mat-button-toggle", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "mat-button-toggle", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r16.rpState.any_waterpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r16.rpState.adman_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disableRipple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disableRipple", true);
} }
function RehabPrioComponent_ng_container_82_mat_slide_toggle_14_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-slide-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RehabPrioComponent_ng_container_82_mat_slide_toggle_14_Template_mat_slide_toggle_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r111.rpState.show_adman_pies = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Coverage Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r110.rpState.show_adman_pies);
} }
function RehabPrioComponent_ng_container_82_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 21)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Parameter of Interest:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("valueChange", function RehabPrioComponent_ng_container_82_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r113.rpState.adman_view = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "mat-option", 59)(6, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Rural Pop with Basic Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "mat-option", 61)(9, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Rural Pop without Basic Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "mat-option", 63)(12, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Uncharted Rural Pop ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, RehabPrioComponent_ng_container_82_mat_slide_toggle_14_Template, 3, 1, "mat-slide-toggle", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r17.rpState.adman_view);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r17.rpState.adman_view !== "");
} }
function RehabPrioComponent_ng_container_89_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Coverage Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "% rural pop with basic access");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "% rural pop without basic access");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "% uncharted rural pop");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function RehabPrioComponent_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "40%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "60%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "80%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, RehabPrioComponent_ng_container_89_ng_container_22_Template, 14, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHtml", ctx_r18.rpState.adman_view_name, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r18.colorRange[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r18.rpState.show_adman_pies);
} }
function RehabPrioComponent_ng_container_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Data Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r19.colorRange[4]);
} }
function RehabPrioComponent_ng_container_91_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Risk Index for ADM Regions");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "High Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Stable");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Low Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", ctx_r116.colorRange[0]);
} }
function RehabPrioComponent_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Predicted Water Point Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Newly Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Maintenance Recommended");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Repair Recommended");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Newly Non-functional");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, RehabPrioComponent_ng_container_91_ng_container_23_Template, 24, 10, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#66a2ea");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#185caf");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#f8b225");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#8a0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#ff0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r20.rpState.show_adm);
} }
function RehabPrioComponent_ng_container_92_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Population Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function RehabPrioComponent_ng_container_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Map Symbols:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Non-Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Unknown Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "Abandoned Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, RehabPrioComponent_ng_container_92_ng_container_19_Template, 11, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#185caf");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#8a0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "hsl(0, 0%, 77%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "hsl(0, 0%, 15%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r21.rpState.show_population_density);
} }
function RehabPrioComponent_ng_container_93_ng_container_3_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Population Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function RehabPrioComponent_ng_container_93_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 76)(4, "span")(5, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span")(10, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Population Assigned to this Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 76)(17, "span")(18, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Non-Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span")(23, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Users who would gain access");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "by this Point if rehabilitated");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 76)(32, "span")(33, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, "Top 15 priority (based on the parameters selected in the Data Table)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, RehabPrioComponent_ng_container_93_ng_container_3_ng_container_37_Template, 11, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r118.rpState.show_population_density);
} }
function RehabPrioComponent_ng_container_93_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Non-Functional Water Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Top 15 priority (based on the parameters selected in the Data Table)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#185caf");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#8a0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("background-color", "#eefe8b");
} }
function RehabPrioComponent_ng_container_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Map Symbols:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RehabPrioComponent_ng_container_93_ng_container_3_Template, 38, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, RehabPrioComponent_ng_container_93_ng_container_4_Template, 13, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r22.rpState.show_point_counts);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r22.rpState.show_point_counts);
} }
function RehabPrioComponent_ng_container_94_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Population Density");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} }
function RehabPrioComponent_ng_container_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Map Symbols:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 76)(6, "span")(7, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Service Gap Identification Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "span")(12, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "1 km Radius Covered by This Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "span")(17, "mat-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "Users who would gain access");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "by this Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, RehabPrioComponent_ng_container_94_ng_container_23_Template, 11, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("inline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r23.rpState.show_population_density);
} }
const _c0 = function () { return ["adm-analysis", "rehab-priority-text", "all-waterpoints", "all-waterpoints-risk", "nc-points", "nc-labels"]; };
class RehabPrioComponent {
    constructor(db, state, rpState, dialog) {
        this.db = db;
        this.state = state;
        this.rpState = rpState;
        this.dialog = dialog;
        this.mapFilters = {
            'all-waterpoints': []
        };
        this._popupProperties = {};
        this.circle_visible = false;
        this.filterConfiguration = [
        // {id: 'adm', title: 'Filter By Region', icon: 'travel_explore'},
        // {id: 'attributes', title: 'Filter By Attributes', icon: 'filter_alt'},
        // {id: 'data-table', title: 'Top Water Points', icon: 'format_list_numbered'},
        // {id: 'settings', title: 'View Settings', icon: 'settings'},
        // {id: 'legend', title: 'Legend', icon: 'menu_book'},
        ];
        this.nav = '';
        // Preview:
        this.preview = false;
        this.markers = {};
        this.markersOnScreen = {};
        this.admPopupSections = [];
        this.colorRange = [];
        this.borderColor = '';
        this.legendOpen = true;
        this.showTable = false;
        this.minPopNC = null;
    }
    ngOnInit() {
        this.state.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(2500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((s) => s.bounds), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(b => !!b), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)((bounds) => {
            const rehabPrio = this.db.query(this.queryUI(bounds));
            let newConstructions;
            if (this.rpState.nc_limit !== 0) {
                newConstructions = this.db.query(this.queryUINC(bounds, this.rpState.nc_limit));
            }
            else {
                newConstructions = this.db.query(this.queryUINC(bounds, 15));
            }
            this.rpState.top10 = [];
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.forkJoin)([rehabPrio, newConstructions]);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([resultsRehabPrio, resultsNC]) => [resultsRehabPrio.rows, resultsNC.rows])).subscribe(([resultsRehabPrio, resultsNC]) => {
            if (this.rpState.mode === 'rehab-prio') {
                this.rpState.top10 = resultsRehabPrio;
                if (this.rpState.map) {
                    if (resultsRehabPrio.length) {
                        this.rpState.map.setFilter('rehab-priority-highlights', [
                            'all',
                            [
                                'match',
                                ['get', 'wpdx_id'],
                                [...new Set(this.rpState.top10.map(r => r.wpdx_id))],
                                true,
                                false
                            ]
                        ]);
                    }
                    else {
                        this.rpState.map.setFilter('rehab-priority-highlights', [
                            'all',
                            [
                                'match',
                                ['get', 'wpdx_id'],
                                [''],
                                true,
                                false
                            ]
                        ]);
                    }
                }
            }
            else if (this.rpState.mode === 'new_constructions') {
                if (resultsNC) {
                    if (resultsNC.length > 0) {
                        this.rpState.top10 = resultsNC.slice(0, 15);
                        this.minPopNC = resultsNC.at(-1).population;
                        this.updateState(this.rpState.state.props, this.rpState.state.bounds, this.rpState.state.userBounds);
                    }
                }
            }
        });
    }
    downloadFields(query = false) {
        return [
            'report_date', 'wpdx_id', 'lat_deg', 'lon_deg', 'status_id', 'source', 'activity_id',
            'install_year', 'installer', 'rehab_year', 'rehabilitator', 'management_clean', 'facility_type',
            'pay', 'status', 'orig_lnk', 'photo_lnk', 'data_lnk',
            'converted', 'fecal_coliform_presence', 'fecal_coliform_value', 'subjective_quality', 'scheme_id', 'notes',
            'clean_country_id', 'clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3', 'clean_adm4',
            'status_id', 'assigned_population', 'local_population',
            query ?
                'case when rehab_priority is null then NULL else RANK() OVER (order by rehab_priority desc nulls last) end as rehab_priority'
                : 'rehab_priority',
            'water_source_clean', 'water_tech_clean', 'water_source_category', 'water_tech_category',
            'distance_to_primary', 'distance_to_secondary', 'distance_to_tertiary', 'distance_to_city', 'is_urban',
            query ?
                'criticality as "crucialness"'
                : 'crucialness',
            'pressure', 'usage_cap',
        ];
    }
    downloadUrl() {
        const bounds = this.state.bounds;
        return this.db.download(this.queryDL(bounds, this.downloadFields(true)), 'xlsx', 'rehab-priority-analysis', this.downloadFields());
    }
    downloadData() {
        this.sendGAEvent('download-rehab-prio');
        window.open(this.downloadUrl(), '_blank');
    }
    downloadADMFields(query = false) {
        const ret = [
            'CC', 'NAME_0', 'NAME_1', 'NAME_2', 'NAME_3', 'NAME_4',
            'total_pop', 'urban_pop', 'rural_pop', 'overcap_pop',
            'rural_pop_with_basic_access',
            'rural_pop_without_basic_access',
            'rural_pop_uncharted',
            'pct_rural_pop_with_basic_access',
            'pct_rural_pop_without_basic_access',
            'pct_rural_pop_uncharted',
            'non_func_waterpoints', 'func_waterpoints', 'unknown_func_waterpoints',
            'staleness', 'staleness_uncharted', 'average_report_age_years'
        ];
        return ret.map((f) => {
            if (f.indexOf(' as ') >= 0) {
                return f;
            }
            else {
                if (query) {
                    return `"${f}"`;
                }
                else {
                    return f;
                }
            }
        });
    }
    sendGAEvent(name) {
        if (window['gtag']) {
            const gtag = window['gtag'];
            gtag('event', name, {
                debug_mode: true
            });
        }
    }
    downloadADMUrl() {
        return this.db.download(this.queryDLADM(this.downloadADMFields(true)), 'xlsx', 'adm-regions', this.downloadADMFields());
    }
    downloadADMData() {
        this.sendGAEvent('download-adm-analysis');
        window.open(this.downloadADMUrl(), '_blank');
    }
    downloadNCUrl() {
        const fields = [
            'NAME_0', 'NAME_1', 'NAME_2', 'NAME_3', 'NAME_4', 'population', 'lat_deg', 'lon_deg'
        ];
        return this.db.download(this.queryNC(fields), 'xlsx', 'new_constructions', fields);
    }
    downloadNCData() {
        this.sendGAEvent('download-new-construction');
        window.open(this.downloadNCUrl(), '_blank');
    }
    queryUI(bounds) {
        const sql = `
      select wpdx_id, lat_deg, lon_deg, status_id, assigned_population, local_population, water_source_clean, water_tech_clean, 
            criticality, pressure
      from wpdx_enhanced
      where ${this.queryWhere(bounds)}
      order by ${this.rpState.sort_by} nulls last
      limit 15
    `;
        return sql;
    }
    queryUINC(bounds, limit) {
        const sql = `
    select "NAME_0", "NAME_1", "NAME_2", "NAME_3", "NAME_4", population, lat_deg, lon_deg
    from new_constructions
    where ${this.queryNCWhere(bounds)}
    order by population DESC nulls last
    limit ${limit}
    `;
        return sql;
    }
    queryDL(bounds, fields) {
        return `
      select ${fields.join(',')}
      from wpdx_enhanced
      where ${this.queryWhere(bounds)}
      order by ${this.rpState.sort_by} nulls last
    `;
    }
    queryDLADM(fields) {
        return `
      select ${fields.join(',')}
      from adm_analysis
      where ${this.queryADMWhere()}
      order by 1,2,3,4,5,6 nulls last
    `;
    }
    queryNC(fields) {
        return `
    select "${fields.join('","')}"
    from new_constructions
    where ${this.queryADMWhere()}
  `;
    }
    queryADMWhere() {
        const terms = [
            'true',
        ];
        if (this.state.props.country_name) {
            terms.push(`"NAME_0" = '${this.state.props.country_name}'`);
        }
        if (this.state.props.adm1) {
            terms.push(`"NAME_1" = '${this.state.props.adm1}'`);
        }
        if (this.state.props.adm2) {
            terms.push(`"NAME_2" = '${this.state.props.adm2}'`);
        }
        if (this.state.props.adm3) {
            terms.push(`"NAME_3" = '${this.state.props.adm3}'`);
        }
        if (this.state.props.adm4) {
            terms.push(`"NAME_4" = '${this.state.props.adm4}'`);
        }
        return terms.join(' and ');
    }
    queryNCWhere(bounds) {
        const terms = [
            'lat_deg >= ' + bounds.getSouth(),
            'lat_deg <= ' + bounds.getNorth(),
            'lon_deg >= ' + bounds.getWest(),
            'lon_deg <= ' + bounds.getEast(),
        ];
        if (this.state.props.country_name) {
            terms.push(`"NAME_0" = '${this.state.props.country_name}'`);
        }
        if (this.state.props.adm1) {
            terms.push(`"NAME_1" = '${this.state.props.adm1}'`);
        }
        if (this.state.props.adm2) {
            terms.push(`"NAME_2" = '${this.state.props.adm2}'`);
        }
        if (this.state.props.adm3) {
            terms.push(`"NAME_3" = '${this.state.props.adm3}'`);
        }
        if (this.state.props.adm4) {
            terms.push(`"NAME_4" = '${this.state.props.adm4}'`);
        }
        return terms.join(' and ');
    }
    queryWhere(bounds) {
        const terms = [
            // 'is_latest', 'wpdx_id is not null',
            'lat_deg >= ' + bounds.getSouth(),
            'lat_deg <= ' + bounds.getNorth(),
            'lon_deg >= ' + bounds.getWest(),
            'lon_deg <= ' + bounds.getEast(),
        ];
        if (!this.rpState.all_waterpoints) {
            terms.push('rehab_priority > 0');
        }
        if (!this.rpState.show_urban_waterpoints) {
            terms.push('not (is_urban is TRUE)');
        }
        if (this.rpState.source_filter) {
            terms.push(`source='${this.rpState.source_filter}'`);
        }
        if (this.state.props.country_name) {
            terms.push(`clean_country_name = '${this.state.props.country_name}'`);
        }
        if (this.state.props.adm1) {
            terms.push(`clean_adm1 = '${this.state.props.adm1}'`);
        }
        if (this.state.props.adm2) {
            terms.push(`clean_adm2 = '${this.state.props.adm2}'`);
        }
        if (this.state.props.adm3) {
            terms.push(`clean_adm3 = '${this.state.props.adm3}'`);
        }
        if (this.state.props.adm4) {
            terms.push(`clean_adm4 = '${this.state.props.adm4}'`);
        }
        if (this.state.props.source) {
            terms.push(`water_source_category in ('${this.state.props.source.join('\',\'')}')`);
        }
        if (this.state.props.tech) {
            terms.push(`water_tech_category in ('${this.state.props.tech.join('\',\'')}')`);
        }
        if (this.state.props.management) {
            terms.push(`management_clean in ('${this.state.props.management.join('\',\'')}')`);
        }
        return terms.join(' and ');
    }
    fq(s) {
        return s.split(`'`).join(`''`);
    }
    set popupProperties(value) {
        console.log('PPP', value);
        if (value.total_pop) {
            const baseQuery = `select
        total_pop, rural_pop, unserved_pop, uncharted_pop, served_pop,
        func_waterpoints, non_func_waterpoints, staleness_uncharted, staleness_count,
        predicted_functional_0y, predicted_functional_2y,
        predicted_risk_index, staleness_count as count
        from adm_analysis
        where 
      `;
            const queries = [];
            if (value.NAME_0) {
                queries.push(`${baseQuery}
          adm_level='adm0' and "NAME_0"='${this.fq(value.NAME_0)}'`);
            }
            if (value.NAME_1) {
                queries.push(`${baseQuery}
          adm_level='adm1' and "NAME_0"='${this.fq(value.NAME_0)}' and "NAME_1"='${this.fq(value.NAME_1)}'`);
            }
            if (value.NAME_2) {
                queries.push(`${baseQuery}
          adm_level='adm2' and 
          "NAME_0"='${this.fq(value.NAME_0)}' and 
          "NAME_1"='${this.fq(value.NAME_1)}' and 
          "NAME_2"='${this.fq(value.NAME_2)}'`);
            }
            if (value.NAME_3) {
                queries.push(`${baseQuery}
          adm_level='adm3' and 
          "NAME_0"='${this.fq(value.NAME_0)}' and "NAME_1"='${this.fq(value.NAME_1)}' and 
          "NAME_2"='${this.fq(value.NAME_2)}' and "NAME_3"='${this.fq(value.NAME_3)}'`);
            }
            if (value.NAME_4) {
                queries.push(`${baseQuery}
          adm_level='adm4' and 
          "NAME_0"='${this.fq(value.NAME_0)}' and "NAME_1"='${this.fq(value.NAME_1)}' and 
          "NAME_2"='${this.fq(value.NAME_2)}' and "NAME_3"='${this.fq(value.NAME_3)}' and
          "NAME_4"='${this.fq(value.NAME_4)}'`);
            }
            //console.log(queries);
            this.admPopupSections = [value];
            (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.forkJoin)(queries.map(q => this.db.query(q))).subscribe(results => {
                var _a, _b, _c, _d, _e;
                this.admPopupSections = [];
                if (queries.length > 4 && ((_a = results[4].rows) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    // value.level3 = results[2].rows[0];
                    this.admPopupSections.unshift(Object.assign({ title: 'ADM Level 4: ' + value.NAME_4 }, results[4].rows[0]));
                }
                if (queries.length > 3 && ((_b = results[3].rows) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    // value.level3 = results[2].rows[0];
                    this.admPopupSections.unshift(Object.assign({ title: 'ADM Level 3: ' + value.NAME_3 }, results[3].rows[0]));
                }
                if (queries.length > 2 && ((_c = results[2].rows) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                    // value.level2 = results[1].rows[0];
                    this.admPopupSections.unshift(Object.assign({ title: 'ADM Level 2: ' + value.NAME_2 }, results[2].rows[0]));
                }
                if (queries.length > 1 && ((_d = results[1].rows) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                    // value.level1 = results[0].rows[0];
                    this.admPopupSections.unshift(Object.assign({ title: 'ADM Level 1: ' + value.NAME_1 }, results[1].rows[0]));
                }
                if (queries.length > 0 && ((_e = results[0].rows) === null || _e === void 0 ? void 0 : _e.length) > 0) {
                    // value.level1 = results[0].rows[0];
                    this.admPopupSections.unshift(Object.assign({ title: 'ADM Level 0: ' + value.NAME_0 }, results[0].rows[0]));
                }
            });
            this._popupProperties = value;
            return;
        }
        if (value.population) {
            this._popupProperties = value;
            return;
        }
        const query = `select * from wpdx_enhanced where wpdx_id='${value.wpdx_id}'`; // and is_latest`;
        this._popupProperties = value;
        this.db.query(query).subscribe((results) => {
            if (results.rows && results.rows.length) {
                this._popupProperties = results.rows[0];
                const noPredictions = [];
                const yesPredictions = [];
                for (let i = 0; i < 10; i++) {
                    noPredictions.push(this.popupProperties['prediction_no_' + i + 'y']);
                    yesPredictions.push(this.popupProperties['prediction_yes_' + i + 'y']);
                }
                if (noPredictions.every(x => x !== null) && yesPredictions.every(x => x !== null)) {
                    this._popupProperties.yesPredictions = yesPredictions.map(x => x * 100);
                    this._popupProperties.noPredictions = noPredictions.map(x => x * 100);
                }
                else {
                    this._popupProperties.yesPredictions = null;
                    this._popupProperties.noPredictions = null;
                }
                const positivePE = [];
                const negativePE = [];
                for (const pe of (this._popupProperties.prediction_explanations || [])) {
                    const field = pe.f;
                    let value = this._popupProperties[field];
                    if (value === null) {
                        value = '<empty>';
                    }
                    else {
                        try {
                            if (Number.isFinite(parseInt(value, 10))) {
                                value = parseInt(value, 10);
                                value = value.toLocaleString();
                            }
                        }
                        catch (e) {
                            try {
                                if (Number.isFinite(parseFloat(value))) {
                                    value = parseFloat(value).toFixed(2);
                                }
                            }
                            catch (e1) {
                            }
                        }
                    }
                    if ((pe.s > 0) === (pe.l === this._popupProperties.predicted_status_0y)) {
                        positivePE.push({
                            field,
                            value,
                            weight: '+++'.slice(0, pe.q.length)
                        });
                    }
                    else {
                        negativePE.push({
                            field,
                            value,
                            weight: '---'.slice(0, pe.q.length)
                        });
                    }
                }
                this._popupProperties.positivePE = positivePE;
                this._popupProperties.negativePE = negativePE;
                this.addCircle(value);
            }
        });
    }
    get popupProperties() {
        return this._popupProperties;
    }
    update_heatmaps(props) {
        this.rpState.map.setLayoutProperty('rehab-priority-popuplation-served', 'visibility', 'none'
        // this.rpState.mode === 'rehab-prio' && props.show_heatmap_population ? 'visible' : 'none'
        );
        this.rpState.map.setLayoutProperty('rehab-priority-criticallity-heatmap', 'visibility', 'none'
        // this.rpState.mode === 'rehab-prio' && props.show_heatmap_criticality ? 'visible' : 'none'
        );
    }
    setMap(_map) {
        this.rpState.map = _map;
        this.rpState.map.on('moveend', (e) => {
            this.onMove(e);
        });
        for (const layer of [
            'rehab-priority-text', 'rehab-priority-popuplation-served', 'rehab-priority-criticallity-heatmap',
        ]) {
            const filt = this.rpState.map.getFilter(layer);
            if (filt[0] === 'all') {
                this.mapFilters[layer] = filt.slice(1);
            }
            else {
                this.mapFilters[layer] = [filt];
            }
        }
        this.state.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(500)).subscribe((s) => {
            this.updateState(s.props, s.bounds, s.userBounds);
        });
        if (this.state.bounds === null) {
            this.state.setBounds(this.rpState.map.getBounds(), true);
        }
        // console.log('SORUCES', (this.rpState.map.getLayer('adm-analysis-labels') as mapboxgl.SymbolLayer)['source-layer']);
        this.rpState.map.on('render', () => {
            const newMarkers = {};
            const features = this.rpState.show_adman_pies && this.rpState.mode === 'adman' ?
                this.rpState.map.queryRenderedFeatures(null, { layers: ['adm-analysis-labels'] })
                : [];
            for (const feature of features) {
                const coords = feature.geometry.coordinates;
                const props = feature.properties;
                const id = props.NAME_0 + props.NAME_1 + props.NAME_2 + props.NAME_3 + props.NAME_4;
                if (props.pct_urban > 0.75) {
                    continue;
                }
                let marker = this.markers[id];
                if (!marker) {
                    const el = this.createDonutChart(props);
                    el.addEventListener('click', (ev) => {
                        this.popupProperties = props;
                        this.popupProperties.coordinates = coords;
                        this.popupProperties.x = this.popupProperties.coordinates[0];
                        this.popupProperties.y = this.popupProperties.coordinates[1];
                        if (ev.stopPropagation) {
                            ev.stopPropagation();
                        }
                    });
                    marker = this.markers[id] = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.Marker({
                        element: el
                    }).setLngLat(coords).setOffset([0, -30])
                        .addTo(this.rpState.map);
                }
                newMarkers[id] = marker;
                if (!this.markersOnScreen[id]) {
                    marker.addTo(this.rpState.map);
                }
            }
            // for every marker we've added previously, remove those that are no longer visible
            for (const id in this.markersOnScreen) {
                if (!newMarkers[id]) {
                    this.markersOnScreen[id].remove();
                }
            }
            this.markersOnScreen = newMarkers;
        });
    }
    createDonutChart(props) {
        const offsets = [];
        const counts = ['pct_served', 'pct_unserved', 'pct_uncharted'].map((k) => props[k] || 0);
        const clusterColors = ['#185caf', '#8a0000', '#828282'];
        let total = 0;
        for (const count of counts) {
            offsets.push(total);
            total += count;
        }
        const fontSize = 16;
        const r = 20;
        const r0 = Math.round(r * 0.3);
        const w = r * 2;
        let html = `<div>
    <svg width="${w}" height="${w}" viewbox="0 0 ${w} ${w}" text-anchor="middle" 
         style="font: ${fontSize}px sans-serif; display: block; cursor:pointer">`;
        for (let i = 0; i < counts.length; i++) {
            if (counts[i]) {
                html += this.donutSegment(offsets[i] / total, (offsets[i] + counts[i]) / total, r, r0, clusterColors[i]);
            }
        }
        html += `<circle cx="${r}" cy="${r}" r="${r0}" fill="white" />`;
        html += `<circle cx="${r}" cy="${r}" r="${r}" fill="none" stroke="#ccc" stroke-width="1"/>`;
        html += `
      </svg>
      </div>`;
        const el = document.createElement('div');
        el.innerHTML = html;
        return el.firstChild;
    }
    donutSegment(start, end, r, r0, color) {
        if (end - start === 1) {
            end -= 0.00001;
        }
        const a0 = 2 * Math.PI * (start - 0.25);
        const a1 = 2 * Math.PI * (end - 0.25);
        const x0 = Math.cos(a0);
        const y0 = Math.sin(a0);
        const x1 = Math.cos(a1);
        const y1 = Math.sin(a1);
        const largeArc = end - start > 0.5 ? 1 : 0;
        // draw an SVG path
        return `<path d="M ${r + r0 * x0} ${r + r0 * y0} L ${r + r * x0} ${r + r * y0} A ${r} ${r} 0 ${largeArc} 1 ${r + r * x1} ${r + r * y1} L ${r + r0 * x1} ${r + r0 * y1} A ${r0} ${r0} 0 ${largeArc} 0 ${r + r0 * x0} ${r + r0 * y0}" fill="${color}" />`;
    }
    updateState(props, bounds, userBounds) {
        // Fit map to bounds in state
        if (bounds && !userBounds) {
            this.rpState.map.fitBounds(bounds, { padding: 30, maxZoom: 18 });
        }
        // Water point filter
        const filt = [];
        for (const _f of ['country_name', 'adm1', 'adm2', 'adm3', 'adm4']) {
            const f = 'clean_' + _f;
            if (props[_f]) {
                filt.push([
                    '==', ['get', f], ['literal', props[_f]]
                ]);
            }
        }
        if (!props.show_urban_waterpoints) {
            filt.push(['!', ['get', 'is_urban']]);
        }
        if (!props.all_waterpoints) {
            filt.push(['!=', ['get', 'status_id'], ['literal', 'Yes']]);
        }
        if (props.source) {
            filt.push(['any', ...props.source.map((value) => ['==', ['get', 'water_source_category'], ['literal', value]])]);
        }
        if (props.source_filter) {
            let source = props.source_filter;
            let op = '==';
            if (source[0] === '!') {
                source = source.slice(1);
                op = '!=';
            }
            filt.push([op, ['get', 'source'], ['literal', source]]);
        }
        if (props.tech) {
            filt.push(['any', ...props.tech.map((value) => ['==', ['get', 'water_tech_category'], ['literal', value]])]);
        }
        if (props.management) {
            filt.push(['any', ...props.management.map((value) => ['==', ['get', 'management_clean'], ['literal', value]])]);
        }
        // Rehab Priority
        if (this.rpState.mode === 'rehab-prio') {
            for (const layer of [
                'rehab-priority-text',
                'rehab-priority-popuplation-served',
                'rehab-priority-criticallity-heatmap',
            ]) {
                const baseFilt = this.mapFilters[layer];
                const fullFilt = ['all', ...baseFilt, ...filt];
                this.rpState.map.setFilter(layer, fullFilt);
            }
            if (props.show_point_counts) {
                this.rpState.map.setLayoutProperty('rehab-priority-text', 'visibility', 'visible');
            }
            else {
                this.rpState.map.setLayoutProperty('rehab-priority-text', 'visibility', 'none');
            }
            this.rpState.map.setLayoutProperty('rehab-priority-highlights', 'visibility', 'visible');
            this.update_heatmaps(props);
        }
        else {
            for (const layer of [
                'rehab-priority-text',
                'rehab-priority-popuplation-served',
                'rehab-priority-criticallity-heatmap',
                'rehab-priority-highlights',
            ]) {
                this.rpState.map.setLayoutProperty(layer, 'visibility', 'none');
            }
        }
        // Show water points
        if (props.any_waterpoints || this.rpState.mode === 'basic') {
            this.rpState.map.setLayoutProperty('all-waterpoints', 'visibility', 'visible');
            for (const layer of [
                'all-waterpoints'
            ]) {
                const baseFilt = this.mapFilters[layer];
                const fullFilt = ['all', ...baseFilt, ...filt];
                this.rpState.map.setFilter(layer, fullFilt);
            }
            this.rpState.map.setLayoutProperty('all-waterpoints', 'visibility', 'visible');
            this.rpState.map.setLayoutProperty('urban-areas', 'visibility', props.show_urban ? 'visible' : 'none');
        }
        else {
            for (const layer of [
                'all-waterpoints', 'urban-areas'
            ]) {
                this.rpState.map.setLayoutProperty(layer, 'visibility', 'none');
            }
        }
        // ADM Analysis / Staleness / Risk index
        const admanView = props.mode === 'adman' ?
            props.adman_view : (props.mode === 'staleness' ?
            'staleness' : (props.mode === 'risk-index' ?
            'risk-index' : ''));
        const admanLevel = props.adman_level || 'best';
        const admBorders = props.mode === 'adman' ? false : (props.mode === 'staleness' ? false : (this.rpState.show_adm_borders));
        let prop = [];
        let visibility = 'visible';
        this.colorRange = [];
        this.borderColor = null;
        if (admanView === 'served') {
            prop = ['+', ['get', 'pct_served'], ['get', 'pct_urban']];
            // this.colorRange = ['#edf8fb', '#b2e2e2', '#66c2a4', '#2ca25f', '#006d2c']; // Blue-Green
            this.colorRange = ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c']; // Blues
        }
        else if (admanView === 'unserved') {
            prop = ['get', 'pct_unserved'];
            this.colorRange = ['#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404'];
        }
        else if (admanView === 'uncharted') {
            prop = ['get', 'pct_uncharted'];
            // this.colorRange = ['#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f']; // Purples
            this.colorRange = ['#f7f7f7', '#cccccc', '#969696', '#636363', '#252525']; // Grays
        }
        else if (admanView === 'staleness') {
            prop = ['-', ['literal', 1], ['/', ['get', 'staleness_uncharted'], ['literal', 100]]];
            // prop = ['-', ['literal', 1], ['/', ['get', 'staleness'], ['literal', 100]]];
            this.colorRange = ['#54278f', '#756bb1', '#9e9ac8', '#cbc9e2', '#f2f0f7']; // Purples
            // this.colorRange = ['#ffffcc', '#c2e699', '#78c679', '#31a354', '#006837'];
        }
        else if (admanView === 'risk-index' && props.show_adm) {
            prop = ['-', ['literal', 0.5], ['/', ['get', 'predicted_risk_index'], ['literal', 2]]];
            this.colorRange = ['#3182bd', '#9ecae1', '#ffffff', '#fc9272', '#de2d26'];
            this.borderColor = '#ccc';
            // this.colorRange = ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15']; // Reds
        }
        else {
            prop = null;
            visibility = 'none';
        }
        this.borderColor = this.borderColor || this.colorRange[4];
        if (prop) {
            const interpolate = ['interpolate-hcl', ['linear'], prop,
                0, ['to-color', this.colorRange[0]],
                0.25, ['to-color', this.colorRange[1]],
                0.5, ['to-color', this.colorRange[2]],
                0.75, ['to-color', this.colorRange[3]],
                1, ['to-color', this.colorRange[4]]
            ];
            this.rpState.map.setPaintProperty('adm-analysis', 'fill-opacity', 0.7);
            this.rpState.map.setPaintProperty('adm-analysis', 'fill-color', interpolate);
            this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-color', ['to-color', this.borderColor]);
            this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-opacity', 1);
        }
        const admanFilt = [];
        for (const [_f, _ff] of [
            ['country_name', 'NAME_0'],
            ['adm1', 'NAME_1'],
            ['adm2', 'NAME_2'],
            ['adm3', 'NAME_3'],
            ['adm4', 'NAME_4'],
        ]) {
            if (props[_f]) {
                admanFilt.push([
                    '==', ['get', _ff], ['literal', props[_f]]
                ]);
            }
        }
        for (const layer of ['adm-analysis', 'adm-analysis-borders', 'adm-analysis-labels']) {
            this.rpState.map.setLayoutProperty(layer, 'visibility', visibility);
            this.rpState.map.setFilter(layer, ['all',
                ['==', ['get', 'adm_level'], ['literal', admanLevel]],
                ...admanFilt
            ]);
        }
        this.rpState.map.setPaintProperty('adm-analysis-labels', 'text-opacity', this.rpState.show_adman_labels ? 1 : 0);
        this.rpState.map.setPaintProperty('adm-analysis-labels', 'icon-opacity', this.rpState.show_adman_labels ? 1 : 0);
        // New constructions
        let minConstructionFilt = [];
        if (props.nc_limit !== 0) {
            minConstructionFilt = [[
                    '>=',
                    ['get', 'population'],
                    this.minPopNC
                ]];
        }
        if (props.mode === 'new_constructions') {
            const newConstFilt = {
                'nc-points': [[
                        '!=',
                        ['get', 'clustered'],
                        true
                    ]],
                'nc-labels': [],
                'nc-heatmap-clustered': [[
                        '==',
                        ['get', 'clustered'],
                        true
                    ]],
                'nc-heatmap': [[
                        '!=',
                        ['get', 'clustered'],
                        true
                    ]]
            };
            for (const layer of ['nc-points', 'nc-labels', 'nc-heatmap-clustered', 'nc-heatmap']) {
                this.rpState.map.setLayoutProperty(layer, 'visibility', 'visible');
                this.rpState.map.setFilter(layer, ['all',
                    ...admanFilt,
                    ...newConstFilt[layer],
                    ...minConstructionFilt
                ]);
            }
        }
        else {
            for (const layer of ['nc-points', 'nc-labels', 'nc-heatmap-clustered', 'nc-heatmap']) {
                this.rpState.map.setLayoutProperty(layer, 'visibility', 'none');
            }
        }
        // Landcover
        this.rpState.map.getStyle().layers.forEach((layer) => {
            if (layer.id.indexOf('road-') === 0 || layer.id.indexOf('building') === 0) {
                this.rpState.map.setLayoutProperty(layer.id, 'visibility', this.rpState.show_landcover ? 'visible' : 'none');
            }
        });
        if (admBorders) {
            this.rpState.map.setFilter('adm-analysis-borders', ['all',
                ...admanFilt]);
            this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-color', '#5D3FD3');
            this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-opacity', 0.2);
            this.rpState.map.setLayoutProperty('adm-analysis-borders', 'visibility', 'visible');
        }
        else if (!admanView) {
            this.rpState.map.setLayoutProperty('adm-analysis-borders', 'visibility', 'none');
        }
        // Risk index
        if (props.mode === 'risk-index') {
            this.rpState.map.setLayoutProperty('all-waterpoints-risk', 'visibility', 'visible');
        }
        else {
            this.rpState.map.setLayoutProperty('all-waterpoints-risk', 'visibility', 'none');
        }
    }
    gotoPointFromId(id) {
        if (id && id.length === 12) {
            const query = `select * from wpdx_enhanced where wpdx_id='${id}'`;
            this.db.query(query).subscribe((results) => {
                if (results.rows.length > 0) {
                    this.gotoPoint(results.rows[0]);
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.timer)(3000).subscribe(() => {
                        this.popupProperties = results.rows[0];
                    });
                }
            });
        }
    }
    gotoPoint(point) {
        this.addCircle(point);
        this.rpState.map.flyTo({
            center: [point.lon_deg, point.lat_deg],
            zoom: 14
        });
    }
    addCircle(point) {
        this.removeCircle();
        if (!point.lon_deg || !point.lat_deg) {
            return;
        }
        const _center = _turf_turf__WEBPACK_IMPORTED_MODULE_1__.point([point.lon_deg, point.lat_deg]);
        const _circle = _turf_turf__WEBPACK_IMPORTED_MODULE_1__.circle(_center, 1, { steps: 80, units: 'kilometers' });
        this.circle_visible = true;
        this.rpState.map.addSource('circleData', {
            type: 'geojson',
            data: _circle,
        });
        this.rpState.map.addLayer({
            id: 'circle-fill',
            type: 'fill',
            source: 'circleData',
            paint: {
                'fill-color': 'yellow',
                'fill-opacity': 0.2,
            },
        });
    }
    removeCircle() {
        if (this.circle_visible) {
            this.rpState.map.removeLayer('circle-fill');
            this.rpState.map.removeSource('circleData');
            this.circle_visible = false;
        }
    }
    onMove(ev) {
        const bounds = this.rpState.map.getBounds();
        if (ev.originalEvent) {
            this.state.setBounds(bounds, true);
        }
    }
    openSettingsDialog() {
        this.dialog.open(_settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SettingsDialogComponent);
    }
    openSourcesDialog() {
        this.dialog.open(_sources_dialog_sources_dialog_component__WEBPACK_IMPORTED_MODULE_5__.SourcesDialogComponent, { data: this.queryWhere(this.state.bounds) });
    }
    openRegionFilterDialog() {
        this.dialog.open(_region_filter_dialog_region_filter_dialog_component__WEBPACK_IMPORTED_MODULE_3__.RegionFilterDialogComponent);
    }
    openAttributeFilterDialog() {
        this.dialog.open(_attribute_filter_dialog_attribute_filter_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AttributeFilterDialogComponent);
    }
    statusColor(field) {
        return this.popupProperties[field] === 'Yes' ? 'blue' : 'red';
    }
}
RehabPrioComponent.ɵfac = function RehabPrioComponent_Factory(t) { return new (t || RehabPrioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_6__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_7__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_rp_state_service__WEBPACK_IMPORTED_MODULE_8__.RpStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog)); };
RehabPrioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: RehabPrioComponent, selectors: [["app-rehab-prio"]], decls: 95, vars: 33, consts: [["mapStyle", "mapbox://styles/wpdx/ckjmvff0e1tng19o33klef59z", 3, "id", "interactionLayers", "filters", "popupProperties", "map", "mapPopup", "filterSelected"], ["ngProjectAs", ".menu", 5, ["", 8, "menu"]], [1, "search-bar"], [3, "state", "wpdx_id"], ["class", "filtering-for", 4, "ngIf"], [1, "separator"], ["class", "data-table", 4, "ngIf"], ["mat-fab", "", "color", "primary", "title", "Show Data Table", "class", "table-trigger", 3, "click", 4, "ngIf"], ["mat-fab", "", "color", "primary", "title", "Show Data Sources", 3, "click"], ["mat-fab", "", "color", "primary", "aria-label", "Settings Menu", "title", "Settings Menu", 3, "matMenuTriggerFor"], ["xPosition", "after"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["aria-hidden", "false", "aria-label", "download icon"], ["downloadMenu", "matMenu"], [1, "map-popup"], [3, "popupProperties", 4, "ngIf"], [4, "ngIf"], [1, "top-bar"], [1, "controls"], [1, "with-title"], [3, "value", "valueChange"], ["value", "basic"], ["value", "adman"], ["value", "rehab-prio"], ["value", "new_constructions"], ["value", "staleness"], ["value", "risk-index", 4, "ngIf"], [1, "legend"], [1, "legend-control", 3, "click"], [1, "legend-title"], [1, "filtering-for"], [1, "filtering-remove", 3, "click"], [1, "data-table"], ["class", "placeholders", 4, "ngIf"], [1, "clickable", 3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "placeholders"], [1, "row-placeholder"], ["mat-fab", "", "color", "primary", "title", "Show Data Table", 1, "table-trigger", 3, "click"], [3, "popupProperties"], [1, "predictions"], [1, "legend-item", "standalone"], [1, "legend-color"], ["target", "_blank", 3, "href"], [3, "popupProperties", "admPopupSections", 4, "ngIf"], [3, "popupProperties", "admPopupSections"], ["value", "risk-index"], [3, "ngModel", "ngModelChange"], ["class", "with-title", 4, "ngIf"], ["aria-label", "ADM Level", "appearance", "Legacy", 3, "ngModel", "ngModelChange"], [3, "value", "disableRipple"], ["value", "adm0", 3, "disableRipple"], ["value", "adm1", 3, "disableRipple"], ["value", "adm2", 3, "disableRipple"], ["value", "adm3", 3, "disableRipple"], ["value", "best", 3, "disableRipple"], ["value", "served"], [1, "hl-served"], ["value", "unserved"], [1, "hl-unserved"], ["value", "uncharted"], [1, "hl-uncharted"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["src", "assets/img/pie_chart_black_24dp.svg"], [3, "innerHtml"], [1, "legend-item"], [1, "legend-color", "hl-served", "slice"], [1, "legend-color", "hl-unserved", "slice"], [1, "legend-color", "hl-uncharted", "slice"], [1, "legend-color", "round"], [1, "legend-color", 2, "background-color", "#6495ED"], [1, "legend-color", 2, "background-color", "#D3D3D3"], ["src", "assets/img/functional.png"], [1, "legend-label"], [3, "inline"], ["src", "assets/img/non-functional.png"], ["src", "assets/img/selected.png"], ["src", "assets/img/unclustered.png"]], template: function RehabPrioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-airtable-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("map", function RehabPrioComponent_Template_app_airtable_layout_map_0_listener($event) { return ctx.setMap($event); })("mapPopup", function RehabPrioComponent_Template_app_airtable_layout_mapPopup_0_listener($event) { return ctx.popupProperties = $event; })("filterSelected", function RehabPrioComponent_Template_app_airtable_layout_filterSelected_0_listener($event) { return ctx.nav = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2)(3, "app-adm-search-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("state", function RehabPrioComponent_Template_app_adm_search_bar_state_3_listener($event) { return ctx.rpState.navigateToAdm($event); })("wpdx_id", function RehabPrioComponent_Template_app_adm_search_bar_wpdx_id_3_listener($event) { return ctx.gotoPointFromId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, RehabPrioComponent_div_4_Template, 7, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, RehabPrioComponent_div_5_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RehabPrioComponent_div_6_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, RehabPrioComponent_div_7_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, RehabPrioComponent_div_9_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, RehabPrioComponent_button_10_Template, 3, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_Template_button_click_11_listener() { return ctx.openSourcesDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "volunteer_activism");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "button", 9)(15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "mat-menu", 10, 11)(19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_Template_button_click_19_listener() { return ctx.openAttributeFilterDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "filter_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Filter by Attributes");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_Template_button_click_24_listener() { return ctx.openRegionFilterDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "travel_explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Filter by Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_Template_button_click_29_listener() { return ctx.openSettingsDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "View Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "button", 13)(35, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "mat-menu", null, 15)(41, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_Template_button_click_41_listener() { return ctx.downloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, "Rehab Priority Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_Template_button_click_46_listener() { return ctx.downloadADMData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](48, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, "Adm. Region & Data Quality Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_Template_button_click_51_listener() { return ctx.downloadNCData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55, "Service Gap Identification Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, RehabPrioComponent_app_base_waterpoint_popup_57_Template, 5, 5, "app-base-waterpoint-popup", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, RehabPrioComponent_ng_container_58_Template, 11, 4, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, RehabPrioComponent_ng_container_59_Template, 3, 2, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "div", 19)(61, "div", 20)(62, "div", 21)(63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64, "Decision Support Tool:");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("valueChange", function RehabPrioComponent_Template_mat_select_valueChange_65_listener($event) { return ctx.rpState.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, "View Water Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](69, "Adm Region Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71, "Rehab Priority Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](73, "Service Gap Identification Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75, "Data Quality Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](76, RehabPrioComponent_mat_option_76_Template, 2, 0, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](77, RehabPrioComponent_ng_container_77_Template, 11, 5, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](78, RehabPrioComponent_ng_container_78_Template, 12, 6, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](79, RehabPrioComponent_ng_container_79_Template, 3, 1, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](80, RehabPrioComponent_ng_container_80_Template, 3, 1, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](81, RehabPrioComponent_ng_container_81_Template, 17, 7, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](82, RehabPrioComponent_ng_container_82_Template, 15, 2, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 29)(84, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RehabPrioComponent_Template_span_click_84_listener() { return ctx.legendOpen = !ctx.legendOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "strong", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](88, "Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](89, RehabPrioComponent_ng_container_89_Template, 23, 12, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](90, RehabPrioComponent_ng_container_90_Template, 23, 10, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](91, RehabPrioComponent_ng_container_91_Template, 24, 11, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](92, RehabPrioComponent_ng_container_92_Template, 20, 9, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](93, RehabPrioComponent_ng_container_93_Template, 5, 2, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](94, RehabPrioComponent_ng_container_94_Template, 24, 4, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](18);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", "explorer")("interactionLayers", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](32, _c0))("filters", ctx.filterConfiguration)("popupProperties", ctx.popupProperties);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.state.props.country_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.state.props.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.state.props.tech);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.state.props.management);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showTable && (ctx.rpState.mode === "rehab-prio" || ctx.rpState.mode === "new_constructions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "rehab-prio" || ctx.rpState.mode === "new_constructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.popupProperties.wpdx_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.popupProperties.population);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.popupProperties.total_pop);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx.rpState.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "rehab-prio" || ctx.rpState.mode === "new_constructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "adman" || ctx.rpState.mode === "staleness");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "risk-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "adman" || ctx.rpState.mode === "staleness" || ctx.rpState.mode === "risk-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "adman");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("open", ctx.legendOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.legendOpen ? "keyboard_arrow_up" : "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.adman_view_name.length && ctx.rpState.mode === "adman");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "staleness");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "risk-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "rehab-prio");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.rpState.mode === "new_constructions");
    } }, directives: [_common_components_airtable_layout_airtable_layout_component__WEBPACK_IMPORTED_MODULE_9__.AirtableLayoutComponent, _common_components_adm_search_bar_adm_search_bar_component__WEBPACK_IMPORTED_MODULE_10__.AdmSearchBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuItem, _common_components_base_waterpoint_popup_base_waterpoint_popup_component__WEBPACK_IMPORTED_MODULE_11__.BaseWaterpointPopupComponent, _adm_popup_adm_popup_component__WEBPACK_IMPORTED_MODULE_12__.AdmPopupComponent, _common_components_staleness_popup_bar_staleness_popup_bar_component__WEBPACK_IMPORTED_MODULE_13__.StalenessPopupBarComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgModel, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_30__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_30__.MatButtonToggle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.DecimalPipe], styles: [".fontSans[_ngcontent-%COMP%] {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.nice-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 600px) {\n    .layout-desktop {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 601px) {\n    .layout-mobile {\n    display: none !important;\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:after, .loading[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\n.loading[_ngcontent-%COMP%]:before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.loading[_ngcontent-%COMP%]:before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-200px, 0, 0);\n  }\n  100% {\n    transform: translate3d(calc(200px + 100vw), 0, 0);\n  }\n}\n.popup-styling[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n}\n.popup-styling[_ngcontent-%COMP%]     {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.popup-styling[_ngcontent-%COMP%]     p {\n  margin: 0 0 4px;\n  margin-top: 8px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.popup-styling[_ngcontent-%COMP%]     a, .popup-styling[_ngcontent-%COMP%]     a:visited, .popup-styling[_ngcontent-%COMP%]     a:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.popup-styling[_ngcontent-%COMP%]     mat-icon {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n.popup-styling[_ngcontent-%COMP%]     label {\n  font-weight: 500;\n  margin: 0;\n}\n.workspace[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  pointer-events: none;\n}\n.workspace[_ngcontent-%COMP%]   .toggles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  margin-bottom: 20px;\n}\n.workspace[_ngcontent-%COMP%]   .toggles[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.workspace[_ngcontent-%COMP%]   .toggles[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.workspace[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin-top: 20px;\n  text-decoration: none;\n  color: inherit;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  display: inline;\n  line-height: 0.8;\n  vertical-align: top;\n}\ntable[_ngcontent-%COMP%]   td.clickable[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background-color: #ddd;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1):hover {\n  background-color: #ccc;\n}\nmat-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-top: 16px;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  pointer-events: none;\n}\n.top-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  display: flex;\n  flex-flow: row;\n  align-items: flex-end;\n  gap: 16px;\n  pointer-events: none;\n  background: linear-gradient(180deg, #ffffff 0%, #ffffff50 2px, #3f51b550 4px, #3f51b550 100%);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  align-self: stretch;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: white;\n  pointer-events: all;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .with-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  background-color: #ffffff60;\n  border-radius: 4px;\n  padding: 0 4px;\n  padding-bottom: 4px;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .with-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: light;\n  color: #000;\n  margin-bottom: 4px;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .with-title[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%] {\n  margin: 0 8px;\n  flex: 0 1 auto;\n  width: 250px;\n  background-color: rgba(224, 224, 224, 0.8);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-select-value {\n  color: #333333;\n  font-weight: bolder;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-button-toggle {\n  background-color: rgba(224, 224, 224, 0.8);\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-button-toggle.mat-button-toggle-checked {\n  background-color: rgba(255, 255, 255, 0.8);\n  font-weight: bolder;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-button-toggle .mat-button-toggle-label-content {\n  line-height: inherit;\n  color: #333;\n}\n.top-bar[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]     .mat-slide-toggle-content {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  gap: 4px;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: stretch;\n  align-self: flex-end;\n  padding: 8px;\n  gap: 4px;\n  background-color: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  margin-top: 8px;\n  margin-right: 8px;\n  position: relative;\n  max-height: 34px;\n  overflow-y: hidden;\n  transition: max-height 0.2s ease-in-out;\n}\n.legend[_ngcontent-%COMP%]   .legend-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  transition: margin-top 0.2s ease-in-out;\n}\n.legend.open[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n.legend.open[_ngcontent-%COMP%]   .legend-title[_ngcontent-%COMP%] {\n  margin-top: -26px;\n}\n.legend[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.legend[_ngcontent-%COMP%]   .legend-control[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  cursor: pointer;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  gap: 12px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.legend-item.standalone[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.legend-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 60px;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%] {\n  display: block;\n  width: 16px;\n  height: 12px;\n  border: 1px solid #333333;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-color.round[_ngcontent-%COMP%] {\n  height: 16px;\n  border-radius: 8px;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  max-width: 300px;\n}\n.legend-item[_ngcontent-%COMP%]   .legend-label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  gap: 8px;\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n  line-height: 16px;\n}\n.legend-item[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: stretch;\n  align-self: flex-start;\n  padding: 8px;\n  gap: 4px;\n  background-color: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  margin-top: 8px;\n  margin-left: 8px;\n  position: relative;\n}\n.predictions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: flex-start;\n  width: 100%;\n  justify-content: space-around;\n}\n.predictions[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  flex-flow: column;\n  gap: 4px;\n}\n.map-popup[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n}\n.map-popup[_ngcontent-%COMP%]     {\n  font-family: 'Rubik', Helvetica, sans-serif;\n  font-style: normal;\n}\n.map-popup[_ngcontent-%COMP%]     p {\n  margin: 0 0 4px;\n  margin-top: 8px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.map-popup[_ngcontent-%COMP%]     a, .map-popup[_ngcontent-%COMP%]     a:visited, .map-popup[_ngcontent-%COMP%]     a:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.map-popup[_ngcontent-%COMP%]     mat-icon {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n  margin-top: -2px;\n}\n.map-popup[_ngcontent-%COMP%]     label {\n  font-weight: 500;\n  margin: 0;\n}\n.map-popup[_ngcontent-%COMP%]   .indent[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n.map-popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 32px 0 0 0;\n  font-weight: 600;\n}\n.map-popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%] {\n  padding: 0 48px;\n  margin-bottom: 32px;\n  width: 100%;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  width: 100%;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  text-align: left;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 30%;\n  text-align: right;\n}\n.map-popup[_ngcontent-%COMP%]   .prediction-explanations[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 20%;\n  text-align: right;\n  font-family: monospace;\n}\n.data-table[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  background-color: white;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 28px;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1) {\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  background: #ddd no-repeat;\n  display: inline-block;\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):after, .data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):before {\n  box-sizing: border-box;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):after, .data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):before {\n  box-sizing: border-box;\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):before {\n  animation: progress 2s ease-in-out infinite;\n  background-size: 200px 100%;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  content: '';\n}\n.data-table[_ngcontent-%COMP%]   .placeholders[_ngcontent-%COMP%]   .row-placeholder[_ngcontent-%COMP%]:nth-child(2n+1):before {\n  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));\n}\n.filtering-for[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  gap: 8px;\n  padding: 3px 8px;\n  background: #CDD3EDcc;\n  border-radius: 4px;\n  border: 1px solid black;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);\n  font-weight: 600;\n}\n.filtering-for[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.filtering-for[_ngcontent-%COMP%]   .filtering-remove[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #888888;\n}\n.filtering-for[_ngcontent-%COMP%]   .filtering-remove[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbW1vbi1jb21wb25lbnRzL2NvbW1vbi5sZXNzIiwicmVoYWItcHJpby5jb21wb25lbnQubGVzcyIsIi4uL2NvbW1vbi1jb21wb25lbnRzL3BvcHVwLWNvbnRlbnRzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0FDTko7QURTQTtFQUNJLDJDQUFBO0FDUEo7QURXSTtFQVlBO0lBQ0ksd0JBQUE7RUNwQk47QUFDRjtBRFlJO0VBWUE7SUFDSSx3QkFBQTtFQ3JCTjtBQUNGO0FEeUJBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBWUEsK0JBQUE7QUNuQ0o7QUR5Qkk7O0VBRUUsc0JBQUE7QUN2Qk47QUQwQkk7O0VBRUksc0JBQUE7QUN4QlI7QUQ2Qkk7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUMzQlI7QUQ4Qkk7RUFDSSxrSEFBQTtBQzVCUjtBRHFDQTtFQUNJO0lBQ0Usb0NBQUE7RUNuQ0o7RURxQ0U7SUFDRSxpREFBQTtFQ25DSjtBQUNGO0FDdkRBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUR5REo7QUM5REE7RUZRSSwyQ0FBQTtFQUNBLGtCQUFBO0FDeURKO0FDbEVBO0VBVVksZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEMkRaO0FDekVBOzs7RUFpQlkscUJBQUE7RUFDQSxjQUFBO0FENkRaO0FDL0VBO0VBcUJZLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRDZEWjtBQ3ZGQTtFQTZCWSxnQkFBQTtFQUNBLFNBQUE7QUQ2RFo7QUF4RkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUEwRko7QUE5RkE7RUFPUSxhQUFBO0VBQ0EsaUJBQUE7RUFXQSxtQkFBQTtBQWdGUjtBQW5HQTtFQWFZLFlBQUE7QUF5Rlo7QUF0R0E7RUFpQlksa0JBQUE7QUF3Rlo7QUF6R0E7RUFzQlEsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBc0ZSO0FBbEZBO0VBQ0kseUJBQUE7QUFvRko7QUFyRkE7O0VBR1EsZ0JBQUE7QUFzRlI7QUF6RkE7O0VBS1ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBd0ZaO0FBdEZROztFQUNJLGVBQUE7QUF5Rlo7QUFwR0E7RUFlUSxlQUFBO0FBd0ZSO0FBdkZRO0VBQ0ksc0JBQUE7QUF5Rlo7QUF2RlE7RUFDSSxzQkFBQTtBQXlGWjtBQXhGWTtFQUNJLHNCQUFBO0FBMEZoQjtBQXBGQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFzRko7QUFuRkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBcUZKO0FBbkZJO0VBQ0ksbUJBQUE7QUFxRlI7QUE1RkE7RUFXUSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFFQSw2RkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUR6RUosMkNBQUE7RUMyRUksbUJBQUE7QUFtRlI7QUF4R0E7RUF3QlksWUFBQTtFQUNBLG1CQUFBO0FBbUZaO0FBNUdBO0VBNkJZLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWtGWjtBQXJIQTtFQXNDZ0IsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBa0ZoQjtBQTNIQTtFQTZDZ0IsU0FBQTtBQWlGaEI7QUE5SEE7RUFrRFksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBK0VaO0FBdElBO0VBNERnQixjQUFBO0VBQ0EsbUJBQUE7QUE2RWhCO0FBMUlBO0VBZ0VnQiwwQ0FBQTtBQTZFaEI7QUE1RWdCO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtBQThFcEI7QUFqSkE7RUFzRW9CLG9CQUFBO0VBQ0EsV0FBQTtBQThFcEI7QUFySkE7RUEyRWdCLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBNkVoQjtBQXZFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUVBLDJDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFRG5KQSwyQ0FBQTtFQ3FKQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBV0Esa0JBQUE7RUFDQSx1Q0FBQTtBQTZESjtBQXhGQTtFQWlCUSxhQUFBO0VBQ0EsdUNBQUE7QUEwRVI7QUF4RUk7RUFDSSxpQkFBQTtBQTBFUjtBQTNFSTtFQUdRLGlCQUFBO0FBMkVaO0FBbEdBO0VBNkJRLGtCQUFBO0FBd0VSO0FBckdBO0VBZ0NRLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBd0VSO0FBbkVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQXFFSjtBQW5FSTtFQUNJLGVBQUE7QUFxRVI7QUE3RUE7RUFZUSxjQUFBO0VBQ0EsWUFBQTtBQW9FUjtBQWpGQTtFQWlCUSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQW1FUjtBQWpFUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQW1FWjtBQTNGQTtFQTZCUSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWlFUjtBQWhHQTtFQWtDWSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFRDVOUiwyQ0FBQTtFQUNBLGtCQUFBO0VDNk5RLGlCQUFBO0FBa0VaO0FBekdBO0VBNENRLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUVBLDJDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFRHRPSiwyQ0FBQTtFQ3dPSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQStEUjtBQTNEQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUE2REo7QUFsRUE7RUFRUSxpQkFBQTtFQUNBLFFBQUE7QUE2RFI7QUExREE7RUN0UUksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURtVUo7QUFqRUE7RUQvUEksMkNBQUE7RUFDQSxrQkFBQTtBQ21VSjtBQXJFQTtFQzdQWSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURxVVo7QUE1RUE7OztFQ3RQWSxxQkFBQTtFQUNBLGNBQUE7QUR1VVo7QUFsRkE7RUNsUFksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEdVVaO0FBMUZBO0VDMU9ZLGdCQUFBO0VBQ0EsU0FBQTtBRHVVWjtBQTlGQTtFQUdRLGtCQUFBO0FBOEZSO0FBakdBO0VBTVEsa0JBQUE7RUFDQSxnQkFBQTtBQThGUjtBQTdGUTtFQUNJLGFBQUE7QUErRlo7QUF4R0E7RUFjUSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBNkZSO0FBN0dBO0VBa0JZLGdCQUFBO0VBQ0EsV0FBQTtBQThGWjtBQWpIQTtFQXFCZ0IsV0FBQTtBQStGaEI7QUFwSEE7RUF1Qm9CLGlCQUFBO0FBZ0dwQjtBQS9Gb0I7RUFDSSxnQkFBQTtBQWlHeEI7QUE3Rm9CO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBK0Z4QjtBQTdGb0I7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQStGeEI7QUF2RkE7RUFDSSxpQkFBQTtFRHZTQSwyQ0FBQTtFQ3lTQSxrQkFBQTtFQUNBLHVCQUFBO0FBeUZKO0FBN0ZBO0VBT1EsYUFBQTtFQUNBLGlCQUFBO0FBeUZSO0FBakdBO0VBYVksV0FBQTtFQUNBLFlBQUE7QUF1Rlo7QUEzRlk7RURuUlIsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBWUEsK0JBQUE7QUNxV0o7QUQvV0k7O0VBRUUsc0JBQUE7QUNpWE47QUQ5V0k7O0VBRUksc0JBQUE7QUNnWFI7QUQzV0k7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUM2V1I7QUQxV0k7RUFDSSxrSEFBQTtBQzRXUjtBQWpIQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RURqVUEsMkNBQUE7RUNvVUEsZ0JBQUE7QUFrSEo7QUE3SEE7RUFhUSxnQkFBQTtBQW1IUjtBQWhJQTtFQWlCUSxlQUFBO0VBQ0EsY0FBQTtBQWtIUjtBQWpIUTtFQUNJLGNBQUE7QUFtSFoiLCJmaWxlIjoicmVoYWItcHJpby5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQHByaW1hcnlCcmFuZDogIzNFQzJGRjtcblxuQHpJbmRleEhlYWRlcjogMTtcbkB6SW5kZXhGaWx0ZXJzOiAyO1xuQHpJbmRleFNpZGVQYW5lbDogMztcblxuLmZvbnRTYW5zIHtcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLm5pY2Utc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubW9iaWxlKEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4uZGVza3RvcChAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLm1vYmlsZSh7XG4gICAgOjpuZy1kZWVwIC5sYXlvdXQtZGVza3RvcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcblxuLmRlc2t0b3Aoe1xuICAgIDo6bmctZGVlcCAubGF5b3V0LW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59KTtcblxuXG4ubG9hZGluZyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyMzksIDI0MSwgMjQ2KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZDogI2RkZCBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIFxuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gIFxuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDBweCAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cbiAgXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxuICAgICAgICApO1xuICAgIH1cbn0gIFxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDBweCwgMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDIwMHB4ICsgMTAwdncpLCAwLCAwKTtcbiAgICB9XG59IiwiQGltcG9ydCAnLi4vY29tbW9uLWNvbXBvbmVudHMvY29tbW9uLmxlc3MnO1xuQGltcG9ydCAnLi4vY29tbW9uLWNvbXBvbmVudHMvcG9wdXAtY29udGVudHMubGVzcyc7XG5cbi53b3Jrc3BhY2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAudG9nZ2xlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLm1hdC1zZWxlY3Qge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5kb3dubG9hZCB7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB0ZCwgdGgge1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuICAgICAgICAmLmNsaWNrYWJsZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgybisxKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubWF0LWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50b3AtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYgMCUsICNmZmZmZmY1MCAycHgsICMzZjUxYjU1MCA0cHgsICMzZjUxYjU1MCAxMDAlKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICAgIC5uaWNlLXNoYWRvdztcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBcbiAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLndpdGgtdGl0bGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNjA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LXNlbGVjdCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgICAgZmxleDogMCAxIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuOCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjgpO1xuICAgICAgICAgICAgICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sZWdlbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGdhcDogNHB4O1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7ICAgICAgICBcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAubmljZS1zaGFkb3c7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIG1heC1oZWlnaHQ6IDM0cHg7XG4gICAgLmxlZ2VuZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi10b3AgMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgJi5vcGVuIHtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIC5sZWdlbmQtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTI2cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLWluLW91dDtcbiAgICBzdHJvbmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgfVxuICAgIC5sZWdlbmQtY29udHJvbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgIHJpZ2h0OiA2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbn1cblxuLmxlZ2VuZC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGdhcDogMTJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICYuc3RhbmRhbG9uZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jazs7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICAubGVnZW5kLWNvbG9yIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG5cbiAgICAgICAgJi5yb3VuZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGVnZW5kLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDsgXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuXG4gICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgICAgXG4gICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICAgIC5mb250U2FucztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTsgICAgICAgIFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgLm5pY2Utc2hhZG93O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG59XG5cbi5wcmVkaWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgIC5sZWdlbmQtaXRlbSB7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBnYXA6IDRweDtcbiAgICB9XG59XG4ubWFwLXBvcHVwIHtcbiAgICAucG9wdXAtc3R5bGluZztcbiAgICAuaW5kZW50IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMzJweCAwIDAgMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByZWRpY3Rpb24tZXhwbGFuYXRpb25zIHtcbiAgICAgICAgcGFkZGluZzogMCA0OHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGJvZHkgdHIgdGQge1xuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRhdGEtdGFibGUge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIC5uaWNlLXNoYWRvdztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAucGxhY2Vob2xkZXJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIC5yb3ctcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4rMSkge1xuICAgICAgICAgICAgICAgIC5sb2FkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5maWx0ZXJpbmctZm9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogM3B4IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0REM0VEY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIC5uaWNlLXNoYWRvdztcblxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cblxuICAgIC5maWx0ZXJpbmctcmVtb3ZlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIucG9wdXAtc3R5bGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIFxuICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5mb250U2FucztcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGEsIGE6dmlzaXRlZCwgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 23678:
/*!***************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/rehab-prio.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RehabPrioModule": () => (/* binding */ RehabPrioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-components/common-components.module */ 93566);
/* harmony import */ var _rehab_prio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rehab-prio.component */ 88874);
/* harmony import */ var _rehab_prio_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rehab-prio-routing.module */ 40983);
/* harmony import */ var _rehab_prio_preview_rehab_prio_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rehab-prio-preview/rehab-prio-preview.component */ 26135);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-dialog/settings-dialog.component */ 85944);
/* harmony import */ var _region_filter_dialog_region_filter_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./region-filter-dialog/region-filter-dialog.component */ 50821);
/* harmony import */ var _attribute_filter_dialog_attribute_filter_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attribute-filter-dialog/attribute-filter-dialog.component */ 60645);
/* harmony import */ var _sources_dialog_sources_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sources-dialog/sources-dialog.component */ 78891);
/* harmony import */ var _adm_popup_adm_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adm-popup/adm-popup.component */ 42276);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);


























class RehabPrioModule {
}
RehabPrioModule.ɵfac = function RehabPrioModule_Factory(t) { return new (t || RehabPrioModule)(); };
RehabPrioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: RehabPrioModule });
RehabPrioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _rehab_prio_routing_module__WEBPACK_IMPORTED_MODULE_2__.RehabPrioRoutingModule,
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_0__.CommonComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggleModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RehabPrioModule, { declarations: [_rehab_prio_component__WEBPACK_IMPORTED_MODULE_1__.RehabPrioComponent,
        _rehab_prio_preview_rehab_prio_preview_component__WEBPACK_IMPORTED_MODULE_3__.RehabPrioPreviewComponent,
        _settings_dialog_settings_dialog_component__WEBPACK_IMPORTED_MODULE_4__.SettingsDialogComponent,
        _region_filter_dialog_region_filter_dialog_component__WEBPACK_IMPORTED_MODULE_5__.RegionFilterDialogComponent,
        _attribute_filter_dialog_attribute_filter_dialog_component__WEBPACK_IMPORTED_MODULE_6__.AttributeFilterDialogComponent,
        _sources_dialog_sources_dialog_component__WEBPACK_IMPORTED_MODULE_7__.SourcesDialogComponent,
        _adm_popup_adm_popup_component__WEBPACK_IMPORTED_MODULE_8__.AdmPopupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _rehab_prio_routing_module__WEBPACK_IMPORTED_MODULE_2__.RehabPrioRoutingModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_0__.CommonComponentsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggleModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule] }); })();


/***/ }),

/***/ 1304:
/*!**************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/rp-state.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RpStateService": () => (/* binding */ RpStateService)
/* harmony export */ });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ 62333);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _common_components_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-components/state.service */ 750);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);




class RpStateService {
    constructor(state, title) {
        this.state = state;
        this.title = title;
        this.map = null;
        this.top10 = [];
        this.sort_options = [
            { value: 'local_population desc', display: 'Sort by Local Pop.' },
            { value: 'assigned_population desc', display: 'Sort by Water Point Pop.' },
            { value: 'criticality desc', display: 'Sort by Crucialness' },
            { value: 'pressure desc', display: 'Sort by Pressure' },
        ];
        this.state.defaultValue('all_waterpoints', true);
        this.state.defaultValue('any_waterpoints', true);
        this.state.defaultValue('show_population_density', false);
        this.state.defaultValue('show_landcover', false);
        this.state.defaultValue('show_adm_borders', false);
        this.state.defaultValue('show_point_counts', false);
        this.state.defaultValue('adman_view', 'unserved');
        this.state.defaultValue('show_adman_pies', true);
        this.state.defaultValue('show_adman_labels', true);
        this.state.defaultValue('mode', 'basic');
        this.state.defaultValue('adman_level', 'best');
        this.state.defaultValue('nc_limit', 0);
        this.state.defaultValue('show_adm', true);
    }
    navigateToAdm(state) {
        for (const f of ['country_name', 'adm1', 'adm2', 'adm3', 'adm4']) {
            if (state[f]) {
                this.state.setProp(f, state[f]);
            }
            else {
                this.state.removeProp(f);
            }
        }
        if (state.bounds) {
            this.state.setBounds(new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__.LngLatBounds(state.bounds));
        }
    }
    navigateToAttrib(state) {
        for (const f of ['source', 'tech', 'management']) {
            if (state[f]) {
                this.state.setProp(f, state[f]);
            }
            else {
                this.state.removeProp(f);
            }
        }
    }
    set mode(value) {
        if (value === 'rehab-prio') {
            this.title.setTitle('WPdx Decision Support Tools - Rehab Priority Analysis');
        }
        else if (value === 'adman') {
            this.title.setTitle('WPdx Decision Support Tools - Administrative Region Analysis');
        }
        else if (value === 'staleness') {
            this.title.setTitle('WPdx Decision Support Tools - Data Staleness Analysis');
        }
        else if (value === 'risk-index') {
            this.title.setTitle('WPdx Decision Support Tools - Predicted Risk Index Analysis');
        }
        else if (value === 'new_constructions') {
            this.title.setTitle('WPdx Decision Support Tools - New Construction Analysis');
        }
        else {
            this.title.setTitle('WPdx Decision Support Tools');
        }
        this.state.setProp('mode', value);
    }
    get mode() {
        return this.state.getProp('mode');
    }
    set all_waterpoints(value) {
        this.top10 = [];
        this.state.setProp('all_waterpoints', value);
    }
    get all_waterpoints() {
        return this.state.getProp('all_waterpoints');
    }
    set any_waterpoints(value) {
        this.state.setProp('any_waterpoints', value);
    }
    get any_waterpoints() {
        return this.state.getProp('any_waterpoints');
    }
    get source_filter() {
        return this.state.getProp('source_filter');
    }
    set show_urban(value) {
        this.top10 = [];
        this.state.setProp('show_urban', value);
    }
    get show_urban() {
        return this.state.getProp('show_urban');
    }
    set show_urban_waterpoints(value) {
        this.state.setProp('show_urban_waterpoints', value);
    }
    get show_urban_waterpoints() {
        return this.state.getProp('show_urban_waterpoints');
    }
    set sort_by(value) {
        this.top10 = [];
        this.state.setProp('sort_by', value);
    }
    get sort_by() {
        return this.state.getProp('sort_by') || this.sort_options[0].value;
    }
    set show_point_counts(value) {
        this.state.setProp('show_point_counts', value);
    }
    get show_point_counts() {
        return this.state.getProp('show_point_counts');
    }
    set adman_view(value) {
        this.state.setProp('adman_view', value);
    }
    get adman_view() {
        return this.state.getProp('adman_view');
    }
    set adman_level(value) {
        this.state.setProp('adman_level', value);
    }
    get adman_level() {
        return this.state.getProp('adman_level');
    }
    set nc_limit(value) {
        this.state.setProp('nc_limit', value);
    }
    get nc_limit() {
        return this.state.getProp('nc_limit');
    }
    get adman_view_name() {
        const av = this.adman_view;
        if (av === 'served') {
            return '% of pop served or<br/>in urban areas';
        }
        if (av === 'unserved') {
            return '% of pop without access<br/>to func. water points';
        }
        if (av === 'uncharted') {
            return '% of pop with unknown access';
        }
        return '';
    }
    set show_adman_pies(value) {
        this.state.setProp('show_adman_pies', value);
    }
    get show_adman_pies() {
        return this.state.getProp('show_adman_pies');
    }
    set show_adman_labels(value) {
        this.state.setProp('show_adman_labels', value);
    }
    get show_adman_labels() {
        return this.state.getProp('show_adman_labels');
    }
    set show_population_density(value) {
        this.state.setProp('show_population_density', value);
        for (const layer of this.state.populationLayers) {
            this.map.setLayoutProperty(layer, 'visibility', value ? 'visible' : 'none');
        }
    }
    get show_population_density() {
        return this.state.getProp('show_population_density');
    }
    set show_heatmap_population(value) {
        this.state.setProp('show_heatmap_population', value);
        if (value) {
            this.state.setProp('show_heatmap_criticality', false);
            this.all_waterpoints = true;
        }
    }
    get show_heatmap_population() {
        return this.state.getProp('show_heatmap_population');
    }
    set show_heatmap_criticality(value) {
        this.state.setProp('show_heatmap_criticality', value);
        if (value) {
            this.state.setProp('show_heatmap_population', false);
        }
    }
    get show_heatmap_criticality() {
        return this.state.getProp('show_heatmap_criticality');
    }
    set show_landcover(value) {
        this.state.setProp('show_landcover', value);
    }
    get show_landcover() {
        return this.state.getProp('show_landcover');
    }
    set show_adm_borders(value) {
        this.state.setProp('show_adm_borders', value);
    }
    get show_adm_borders() {
        return this.state.getProp('show_adm_borders');
    }
    get show_adm() {
        return this.state.getProp('show_adm');
    }
    set show_adm(value) {
        this.state.setProp('show_adm', value);
    }
}
RpStateService.ɵfac = function RpStateService_Factory(t) { return new (t || RpStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_components_state_service__WEBPACK_IMPORTED_MODULE_1__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title)); };
RpStateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RpStateService, factory: RpStateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 85944:
/*!***************************************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/settings-dialog/settings-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsDialogComponent": () => (/* binding */ SettingsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _rp_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rp-state.service */ 1304);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);








function SettingsDialogComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-slide-toggle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsDialogComponent_ng_container_7_Template_mat_slide_toggle_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.rpState.all_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Show functional points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-slide-toggle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsDialogComponent_ng_container_7_Template_mat_slide_toggle_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.rpState.show_urban_waterpoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Show points in urban areas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.rpState.all_waterpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.rpState.show_urban_waterpoints);
} }
class SettingsDialogComponent {
    constructor(rpState) {
        this.rpState = rpState;
    }
}
SettingsDialogComponent.ɵfac = function SettingsDialogComponent_Factory(t) { return new (t || SettingsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rp_state_service__WEBPACK_IMPORTED_MODULE_0__.RpStateService)); };
SettingsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsDialogComponent, selectors: [["app-settings-dialog"]], decls: 19, vars: 6, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [3, "ngModel", "ngModelChange"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function SettingsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "View Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Point Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsDialogComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) { return ctx.rpState.any_waterpoints = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Show water points");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SettingsDialogComponent_ng_container_7_Template, 5, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Rehab Priority Layers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsDialogComponent_Template_mat_slide_toggle_ngModelChange_10_listener($event) { return ctx.rpState.show_point_counts = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Show Water Point Pop Figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsDialogComponent_Template_mat_slide_toggle_ngModelChange_12_listener($event) { return ctx.rpState.show_population_density = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Show Population Density");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsDialogComponent_Template_mat_slide_toggle_ngModelChange_14_listener($event) { return ctx.rpState.show_landcover = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Show Roads & Buildings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-dialog-actions", 4)(17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rpState.any_waterpoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rpState.any_waterpoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rpState.show_point_counts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rpState.show_population_density);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rpState.show_landcover);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: ["[_nghost-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLWRpYWxvZy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFKQTtFQVFRLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEUiIsImZpbGUiOiJzZXR0aW5ncy1kaWFsb2cuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47IFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIG1hdC1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfSAgICBcbn0iXX0= */"] });


/***/ }),

/***/ 78891:
/*!*************************************************************************************!*\
  !*** ./projects/wpdx/src/app/rehab-prio/sources-dialog/sources-dialog.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourcesDialogComponent": () => (/* binding */ SourcesDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db.service */ 76358);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);








function SourcesDialogComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00A0|\u00A0From: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00A0|\u00A0Geo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const source_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", source_r1.data_lnk, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](source_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](source_r1.created.slice(0, 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.join(source_r1.sources));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.join(source_r1.countries));
} }
class SourcesDialogComponent {
    constructor(db, queryWhere) {
        this.db = db;
        this.queryWhere = queryWhere;
        this._view = 'current';
    }
    ngOnInit() {
        this.query();
    }
    set view(view) {
        this._view = view;
        this.query();
    }
    get view() {
        return this._view;
    }
    query() {
        const where = this.view === 'current' ? this.queryWhere : 'true';
        const query = `
      select data_lnk, dataset_title as title,
             max(created_timestamp) as created,
             array_agg(distinct source) as sources,
             array_agg(distinct clean_country_name) as countries
      from wpdx_enhanced
      where ${where}
      group by 1, 2 order by 3 desc
    `;
        this.data = [];
        this.db.query(query).subscribe(res => {
            this.data = res.rows || [];
        });
    }
    join(arr) {
        return arr.join(', ');
    }
}
SourcesDialogComponent.ɵfac = function SourcesDialogComponent_Factory(t) { return new (t || SourcesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
SourcesDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SourcesDialogComponent, selectors: [["app-sources-dialog"]], decls: 13, vars: 3, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["aria-label", "Data Scope", 1, "controls", 3, "ngModel", "ngModelChange"], ["value", "current"], ["value", "all"], [4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["target", "_blank", 3, "href"], [1, "deets"]], template: function SourcesDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Data Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "mat-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SourcesDialogComponent_Template_mat_radio_group_ngModelChange_3_listener($event) { return ctx.view = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Current map view");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "All our data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SourcesDialogComponent_li_9_Template, 12, 5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-dialog-actions", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: ["mat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  overflow: hidden;\n}\nmat-dialog-content[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\nmat-dialog-content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\nmat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  flex: 1 1 auto;\n  overflow-y: scroll;\n  padding: 0;\n  padding-left: 20px;\n}\nmat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n  list-style: none;\n  flex-flow: column;\n  padding: 5px 10px;\n}\nmat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\nmat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .deets[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: lighter;\n}\nmat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .deets[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nmat-dialog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZXMtZGlhbG9nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUpBO0VBTVEsaUJBQUE7QUFDUjtBQVBBO0VBVVEsY0FBQTtBQUFSO0FBVkE7RUFjUSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQWxCQTtFQXdCWSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFIWjtBQXpCQTtFQStCZ0IsZ0JBQUE7QUFIaEI7QUE1QkE7RUFtQ2dCLGVBQUE7RUFDQSxvQkFBQTtBQUpoQjtBQWhDQTtFQXVDb0IsZ0JBQUE7QUFKcEI7QUFRWTtFQUNJLHNCQUFBO0FBTmhCIiwiZmlsZSI6InNvdXJjZXMtZGlhbG9nLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4OztcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuY29udHJvbHMge1xuICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIFxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLmRlZXRzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 33865:
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/table.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseCdkCell": () => (/* binding */ BaseCdkCell),
/* harmony export */   "BaseRowDef": () => (/* binding */ BaseRowDef),
/* harmony export */   "CDK_ROW_TEMPLATE": () => (/* binding */ CDK_ROW_TEMPLATE),
/* harmony export */   "CDK_TABLE": () => (/* binding */ CDK_TABLE),
/* harmony export */   "CDK_TABLE_TEMPLATE": () => (/* binding */ CDK_TABLE_TEMPLATE),
/* harmony export */   "CdkCell": () => (/* binding */ CdkCell),
/* harmony export */   "CdkCellDef": () => (/* binding */ CdkCellDef),
/* harmony export */   "CdkCellOutlet": () => (/* binding */ CdkCellOutlet),
/* harmony export */   "CdkColumnDef": () => (/* binding */ CdkColumnDef),
/* harmony export */   "CdkFooterCell": () => (/* binding */ CdkFooterCell),
/* harmony export */   "CdkFooterCellDef": () => (/* binding */ CdkFooterCellDef),
/* harmony export */   "CdkFooterRow": () => (/* binding */ CdkFooterRow),
/* harmony export */   "CdkFooterRowDef": () => (/* binding */ CdkFooterRowDef),
/* harmony export */   "CdkHeaderCell": () => (/* binding */ CdkHeaderCell),
/* harmony export */   "CdkHeaderCellDef": () => (/* binding */ CdkHeaderCellDef),
/* harmony export */   "CdkHeaderRow": () => (/* binding */ CdkHeaderRow),
/* harmony export */   "CdkHeaderRowDef": () => (/* binding */ CdkHeaderRowDef),
/* harmony export */   "CdkNoDataRow": () => (/* binding */ CdkNoDataRow),
/* harmony export */   "CdkRecycleRows": () => (/* binding */ CdkRecycleRows),
/* harmony export */   "CdkRow": () => (/* binding */ CdkRow),
/* harmony export */   "CdkRowDef": () => (/* binding */ CdkRowDef),
/* harmony export */   "CdkTable": () => (/* binding */ CdkTable),
/* harmony export */   "CdkTableModule": () => (/* binding */ CdkTableModule),
/* harmony export */   "CdkTextColumn": () => (/* binding */ CdkTextColumn),
/* harmony export */   "DataRowOutlet": () => (/* binding */ DataRowOutlet),
/* harmony export */   "DataSource": () => (/* reexport safe */ _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.DataSource),
/* harmony export */   "FooterRowOutlet": () => (/* binding */ FooterRowOutlet),
/* harmony export */   "HeaderRowOutlet": () => (/* binding */ HeaderRowOutlet),
/* harmony export */   "NoDataRowOutlet": () => (/* binding */ NoDataRowOutlet),
/* harmony export */   "STICKY_DIRECTIONS": () => (/* binding */ STICKY_DIRECTIONS),
/* harmony export */   "STICKY_POSITIONING_LISTENER": () => (/* binding */ STICKY_POSITIONING_LISTENER),
/* harmony export */   "StickyStyler": () => (/* binding */ StickyStyler),
/* harmony export */   "TEXT_COLUMN_OPTIONS": () => (/* binding */ TEXT_COLUMN_OPTIONS),
/* harmony export */   "_COALESCED_STYLE_SCHEDULER": () => (/* binding */ _COALESCED_STYLE_SCHEDULER),
/* harmony export */   "_CoalescedStyleScheduler": () => (/* binding */ _CoalescedStyleScheduler),
/* harmony export */   "_Schedule": () => (/* binding */ _Schedule),
/* harmony export */   "mixinHasStickyInput": () => (/* binding */ mixinHasStickyInput)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 40020);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 */

const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];

function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}

function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}

function mixinHasStickyInput(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._sticky = false;
      /** Whether the sticky input has changed since it was last checked. */

      this._hasStickyChanged = false;
    }
    /** Whether sticky positioning should be applied. */


    get sticky() {
      return this._sticky;
    }

    set sticky(v) {
      const prevValue = this._sticky;
      this._sticky = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
      this._hasStickyChanged = prevValue !== this._sticky;
    }
    /** Whether the sticky value has changed since this was last called. */


    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this._hasStickyChanged = false;
      return hasStickyChanged;
    }
    /** Resets the dirty check for cases where the sticky state has been used without checking. */


    resetStickyChanged() {
      this._hasStickyChanged = false;
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */


const CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */

const TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('text-column-options');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */

class CdkCellDef {
  constructor(
  /** @docs-private */
  template) {
    this.template = template;
  }

}

CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
  return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
};

CdkCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkCellDef,
  selectors: [["", "cdkCellDef", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkCellDef]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }];
  }, null);
})();
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */


class CdkHeaderCellDef {
  constructor(
  /** @docs-private */
  template) {
    this.template = template;
  }

}

CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
  return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
};

CdkHeaderCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkHeaderCellDef,
  selectors: [["", "cdkHeaderCellDef", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkHeaderCellDef]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }];
  }, null);
})();
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */


class CdkFooterCellDef {
  constructor(
  /** @docs-private */
  template) {
    this.template = template;
  }

}

CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
  return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
};

CdkFooterCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkFooterCellDef,
  selectors: [["", "cdkFooterCellDef", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFooterCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkFooterCellDef]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }];
  }, null);
})(); // Boilerplate for applying mixins to CdkColumnDef.

/** @docs-private */


class CdkColumnDefBase {}

const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */


class CdkColumnDef extends _CdkColumnDefBase {
  constructor(_table) {
    super();
    this._table = _table;
    this._stickyEnd = false;
  }
  /** Unique name for this column. */


  get name() {
    return this._name;
  }

  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Whether this column should be sticky positioned on the end of the row. Should make sure
   * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
   * has been changed.
   */


  get stickyEnd() {
    return this._stickyEnd;
  }

  set stickyEnd(v) {
    const prevValue = this._stickyEnd;
    this._stickyEnd = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
    this._hasStickyChanged = prevValue !== this._stickyEnd;
  }
  /**
   * Overridable method that sets the css classes that will be added to every cell in this
   * column.
   * In the future, columnCssClassName will change from type string[] to string and this
   * will set a single string value.
   * @docs-private
   */


  _updateColumnCssClassName() {
    this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */


  _setNameInput(value) {
    // If the directive is set without a name (updated programmatically), then this setter will
    // trigger with an empty string and should not overwrite the programmatically set value.
    if (value) {
      this._name = value;
      this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, '-');

      this._updateColumnCssClassName();
    }
  }

}

CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
  return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_TABLE, 8));
};

CdkColumnDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkColumnDef,
  selectors: [["", "cdkColumnDef", ""]],
  contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkCellDef, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
    }
  },
  inputs: {
    sticky: "sticky",
    name: ["cdkColumnDef", "name"],
    stickyEnd: "stickyEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: 'MAT_SORT_HEADER_COLUMN_DEF',
    useExisting: CdkColumnDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkColumnDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkColumnDef]',
      inputs: ['sticky'],
      providers: [{
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: CdkColumnDef
      }]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [CDK_TABLE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkColumnDef']
    }],
    stickyEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['stickyEnd']
    }],
    cell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [CdkFooterCellDef]
    }]
  });
})();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */


class BaseCdkCell {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }

}
/** Header cell template container that adds the right classes and role. */


class CdkHeaderCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
  }

}

CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
  return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};

CdkHeaderCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkHeaderCell,
  selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkHeaderCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'cdk-header-cell, th[cdk-header-cell]',
      host: {
        'class': 'cdk-header-cell',
        'role': 'columnheader'
      }
    }]
  }], function () {
    return [{
      type: CdkColumnDef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, null);
})();
/** Footer cell template container that adds the right classes and role. */


class CdkFooterCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    var _a;

    super(columnDef, elementRef);

    if (((_a = columnDef._table) === null || _a === void 0 ? void 0 : _a._elementRef.nativeElement.nodeType) === 1) {
      const tableRole = columnDef._table._elementRef.nativeElement.getAttribute('role');

      const role = tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
      elementRef.nativeElement.setAttribute('role', role);
    }
  }

}

CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
  return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};

CdkFooterCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkFooterCell,
  selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
  hostAttrs: [1, "cdk-footer-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFooterCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'cdk-footer-cell, td[cdk-footer-cell]',
      host: {
        'class': 'cdk-footer-cell'
      }
    }]
  }], function () {
    return [{
      type: CdkColumnDef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, null);
})();
/** Cell template container that adds the right classes and role. */


class CdkCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    var _a;

    super(columnDef, elementRef);

    if (((_a = columnDef._table) === null || _a === void 0 ? void 0 : _a._elementRef.nativeElement.nodeType) === 1) {
      const tableRole = columnDef._table._elementRef.nativeElement.getAttribute('role');

      const role = tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
      elementRef.nativeElement.setAttribute('role', role);
    }
  }

}

CdkCell.ɵfac = function CdkCell_Factory(t) {
  return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};

CdkCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkCell,
  selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
  hostAttrs: [1, "cdk-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'cdk-cell, td[cdk-cell]',
      host: {
        'class': 'cdk-cell'
      }
    }]
  }], function () {
    return [{
      type: CdkColumnDef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @docs-private
 */


class _Schedule {
  constructor() {
    this.tasks = [];
    this.endTasks = [];
  }

}
/** Injection token used to provide a coalesced style scheduler. */


const _COALESCED_STYLE_SCHEDULER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('_COALESCED_STYLE_SCHEDULER');
/**
 * Allows grouping up CSSDom mutations after the current execution context.
 * This can significantly improve performance when separate consecutive functions are
 * reading from the CSSDom and then mutating it.
 *
 * @docs-private
 */


class _CoalescedStyleScheduler {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
    this._currentSchedule = null;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  /**
   * Schedules the specified task to run at the end of the current VM turn.
   */


  schedule(task) {
    this._createScheduleIfNeeded();

    this._currentSchedule.tasks.push(task);
  }
  /**
   * Schedules the specified task to run after other scheduled tasks at the end of the current
   * VM turn.
   */


  scheduleEnd(task) {
    this._createScheduleIfNeeded();

    this._currentSchedule.endTasks.push(task);
  }
  /** Prevent any further tasks from running. */


  ngOnDestroy() {
    this._destroyed.next();

    this._destroyed.complete();
  }

  _createScheduleIfNeeded() {
    if (this._currentSchedule) {
      return;
    }

    this._currentSchedule = new _Schedule();

    this._getScheduleObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(() => {
      while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
        const schedule = this._currentSchedule; // Capture new tasks scheduled by the current set of tasks.

        this._currentSchedule = new _Schedule();

        for (const task of schedule.tasks) {
          task();
        }

        for (const task of schedule.endTasks) {
          task();
        }
      }

      this._currentSchedule = null;
    });
  }

  _getScheduleObservable() {
    // Use onStable when in the context of an ongoing change detection cycle so that we
    // do not accidentally trigger additional cycles.
    return this._ngZone.isStable ? (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(Promise.resolve(undefined)) : this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1));
  }

}

_CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) {
  return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};

_CoalescedStyleScheduler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _CoalescedStyleScheduler,
  factory: _CoalescedStyleScheduler.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_CoalescedStyleScheduler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */


const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */

class BaseRowDef {
  constructor(
  /** @docs-private */
  template, _differs) {
    this.template = template;
    this._differs = _differs;
  }

  ngOnChanges(changes) {
    // Create a new columns differ if one does not yet exist. Initialize it based on initial value
    // of the columns property or an empty array if none is provided.
    if (!this._columnsDiffer) {
      const columns = changes['columns'] && changes['columns'].currentValue || [];
      this._columnsDiffer = this._differs.find(columns).create();

      this._columnsDiffer.diff(columns);
    }
  }
  /**
   * Returns the difference between the current columns and the columns from the last diff, or null
   * if there is no difference.
   */


  getColumnsDiff() {
    return this._columnsDiffer.diff(this.columns);
  }
  /** Gets this row def's relevant cell template from the provided column def. */


  extractCellTemplate(column) {
    if (this instanceof CdkHeaderRowDef) {
      return column.headerCell.template;
    }

    if (this instanceof CdkFooterRowDef) {
      return column.footerCell.template;
    } else {
      return column.cell.template;
    }
  }

}

BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
  return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers));
};

BaseRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: BaseRowDef,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
    }];
  }, null);
})(); // Boilerplate for applying mixins to CdkHeaderRowDef.

/** @docs-private */


class CdkHeaderRowDefBase extends BaseRowDef {}

const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */


class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
  } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.


  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }

}

CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
  return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_TABLE, 8));
};

CdkHeaderRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkHeaderRowDef,
  selectors: [["", "cdkHeaderRowDef", ""]],
  inputs: {
    columns: ["cdkHeaderRowDef", "columns"],
    sticky: ["cdkHeaderRowDefSticky", "sticky"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkHeaderRowDef]',
      inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [CDK_TABLE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})(); // Boilerplate for applying mixins to CdkFooterRowDef.

/** @docs-private */


class CdkFooterRowDefBase extends BaseRowDef {}

const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */


class CdkFooterRowDef extends _CdkFooterRowDefBase {
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
  } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.


  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }

}

CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
  return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_TABLE, 8));
};

CdkFooterRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkFooterRowDef,
  selectors: [["", "cdkFooterRowDef", ""]],
  inputs: {
    columns: ["cdkFooterRowDef", "columns"],
    sticky: ["cdkFooterRowDefSticky", "sticky"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFooterRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkFooterRowDef]',
      inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [CDK_TABLE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */


class CdkRowDef extends BaseRowDef {
  // TODO(andrewseguin): Add an input for providing a switch function to determine
  //   if this template should be used.
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
  }

}

CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
  return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_TABLE, 8));
};

CdkRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkRowDef,
  selectors: [["", "cdkRowDef", ""]],
  inputs: {
    columns: ["cdkRowDefColumns", "columns"],
    when: ["cdkRowDefWhen", "when"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkRowDef]',
      inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [CDK_TABLE]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */


class CdkCellOutlet {
  constructor(_viewContainer) {
    this._viewContainer = _viewContainer;
    CdkCellOutlet.mostRecentCellOutlet = this;
  }

  ngOnDestroy() {
    // If this was the last outlet being rendered in the view, remove the reference
    // from the static property after it has been destroyed to avoid leaking memory.
    if (CdkCellOutlet.mostRecentCellOutlet === this) {
      CdkCellOutlet.mostRecentCellOutlet = null;
    }
  }

}
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */


CdkCellOutlet.mostRecentCellOutlet = null;

CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
  return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
};

CdkCellOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkCellOutlet,
  selectors: [["", "cdkCellOutlet", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkCellOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkCellOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }];
  }, null);
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */


class CdkHeaderRow {}

CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
  return new (t || CdkHeaderRow)();
};

CdkHeaderRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CdkHeaderRow,
  selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-header-row"],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [CdkCellOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkHeaderRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'cdk-header-row, tr[cdk-header-row]',
      template: CDK_ROW_TEMPLATE,
      host: {
        'class': 'cdk-header-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None
    }]
  }], null, null);
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */


class CdkFooterRow {}

CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
  return new (t || CdkFooterRow)();
};

CdkFooterRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CdkFooterRow,
  selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-footer-row"],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [CdkCellOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFooterRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'cdk-footer-row, tr[cdk-footer-row]',
      template: CDK_ROW_TEMPLATE,
      host: {
        'class': 'cdk-footer-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None
    }]
  }], null, null);
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */


class CdkRow {}

CdkRow.ɵfac = function CdkRow_Factory(t) {
  return new (t || CdkRow)();
};

CdkRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CdkRow,
  selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-row"],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [CdkCellOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'cdk-row, tr[cdk-row]',
      template: CDK_ROW_TEMPLATE,
      host: {
        'class': 'cdk-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None
    }]
  }], null, null);
})();
/** Row that can be used to display a message when no data is shown in the table. */


class CdkNoDataRow {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._contentClassName = 'cdk-no-data-row';
  }

}

CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
  return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
};

CdkNoDataRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkNoDataRow,
  selectors: [["ng-template", "cdkNoDataRow", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkNoDataRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ng-template[cdkNoDataRow]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */


const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */

class StickyStyler {
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true, _positionListener) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this.direction = direction;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this._positionListener = _positionListener;
    this._cachedCellWidths = [];
    this._borderCellCss = {
      'top': `${_stickCellCss}-border-elem-top`,
      'bottom': `${_stickCellCss}-border-elem-bottom`,
      'left': `${_stickCellCss}-border-elem-left`,
      'right': `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */


  clearStickyPositioning(rows, stickyDirections) {
    const elementsToClear = [];

    for (const row of rows) {
      // If the row isn't an element (e.g. if it's an `ng-container`),
      // it won't have inline styles or `children` so we skip it.
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }

      elementsToClear.push(row);

      for (let i = 0; i < row.children.length; i++) {
        elementsToClear.push(row.children[i]);
      }
    } // Coalesce with sticky row/column updates (and potentially other changes like column resize).


    this._coalescedStyleScheduler.schedule(() => {
      for (const element of elementsToClear) {
        this._removeStickyStyle(element, stickyDirections);
      }
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   */


  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true) {
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) || stickyEndStates.some(state => state))) {
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: []
        });

        this._positionListener.stickyEndColumnsUpdated({
          sizes: []
        });
      }

      return;
    }

    const firstRow = rows[0];
    const numCells = firstRow.children.length;

    const cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);

    const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);

    const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);

    const lastStickyStart = stickyStartStates.lastIndexOf(true);
    const firstStickyEnd = stickyEndStates.indexOf(true); // Coalesce with sticky row updates (and potentially other changes like column resize).

    this._coalescedStyleScheduler.schedule(() => {
      const isRtl = this.direction === 'rtl';
      const start = isRtl ? 'right' : 'left';
      const end = isRtl ? 'left' : 'right';

      for (const row of rows) {
        for (let i = 0; i < numCells; i++) {
          const cell = row.children[i];

          if (stickyStartStates[i]) {
            this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
          }

          if (stickyEndStates[i]) {
            this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
          }
        }
      }

      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
        });

        this._positionListener.stickyEndColumnsUpdated({
          sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
        });
      }
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */


  stickRows(rowsToStick, stickyStates, position) {
    // Since we can't measure the rows on the server, we can't stick the rows properly.
    if (!this._isBrowser) {
      return;
    } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
    // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
    // sticky states need to be reversed as well.


    const rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
    const states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates; // Measure row heights all at once before adding sticky styles to reduce layout thrashing.

    const stickyOffsets = [];
    const stickyCellHeights = [];
    const elementsToStick = [];

    for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
      if (!states[rowIndex]) {
        continue;
      }

      stickyOffsets[rowIndex] = stickyOffset;
      const row = rows[rowIndex];
      elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
      const height = row.getBoundingClientRect().height;
      stickyOffset += height;
      stickyCellHeights[rowIndex] = height;
    }

    const borderedRowIndex = states.lastIndexOf(true); // Coalesce with other sticky row updates (top/bottom), sticky columns updates
    // (and potentially other changes like column resize).

    this._coalescedStyleScheduler.schedule(() => {
      var _a, _b;

      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }

        const offset = stickyOffsets[rowIndex];
        const isBorderedRowIndex = rowIndex === borderedRowIndex;

        for (const element of elementsToStick[rowIndex]) {
          this._addStickyStyle(element, position, offset, isBorderedRowIndex);
        }
      }

      if (position === 'top') {
        (_a = this._positionListener) === null || _a === void 0 ? void 0 : _a.stickyHeaderRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      } else {
        (_b = this._positionListener) === null || _b === void 0 ? void 0 : _b.stickyFooterRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      }
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */


  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }

    const tfoot = tableElement.querySelector('tfoot'); // Coalesce with other sticky updates (and potentially other changes like column resize).

    this._coalescedStyleScheduler.schedule(() => {
      if (stickyStates.some(state => !state)) {
        this._removeStickyStyle(tfoot, ['bottom']);
      } else {
        this._addStickyStyle(tfoot, 'bottom', 0, false);
      }
    });
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */


  _removeStickyStyle(element, stickyDirections) {
    for (const dir of stickyDirections) {
      element.style[dir] = '';
      element.classList.remove(this._borderCellCss[dir]);
    } // If the element no longer has any more sticky directions, remove sticky positioning and
    // the sticky CSS class.
    // Short-circuit checking element.style[dir] for stickyDirections as they
    // were already removed above.


    const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);

    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      // When not hasDirection, _getCalculatedZIndex will always return ''.
      element.style.zIndex = '';

      if (this._needsPositionStickyOnElement) {
        element.style.position = '';
      }

      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */


  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);

    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }

    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);

    if (this._needsPositionStickyOnElement) {
      element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */


  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
    // loses the array generic type in the `for of`. But we *also* have to use `Array` because
    // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }

    return zIndex ? `${zIndex}` : '';
  }
  /** Gets the widths for each cell in the provided row. */


  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }

    const cellWidths = [];
    const firstRowCells = row.children;

    for (let i = 0; i < firstRowCells.length; i++) {
      let cell = firstRowCells[i];
      cellWidths.push(cell.getBoundingClientRect().width);
    }

    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */


  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;

    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }

    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */


  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;

    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }

    return positions;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */


function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */


function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */


function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */


function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for the` + `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */


function getTableMissingRowDefsError() {
  return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */


function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */


function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */


function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the StickyPositioningListener. */


const STICKY_POSITIONING_LISTENER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_SPL');
/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */

class CdkRecycleRows {}

CdkRecycleRows.ɵfac = function CdkRecycleRows_Factory(t) {
  return new (t || CdkRecycleRows)();
};

CdkRecycleRows.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: CdkRecycleRows,
  selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
    useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._RecycleViewRepeaterStrategy
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkRecycleRows, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'cdk-table[recycleRows], table[cdk-table][recycleRows]',
      providers: [{
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._RecycleViewRepeaterStrategy
      }]
    }]
  }], null, null);
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */


class DataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  }

}

DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
  return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};

DataRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: DataRowOutlet,
  selectors: [["", "rowOutlet", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataRowOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[rowOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, null);
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */


class HeaderRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  }

}

HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
  return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};

HeaderRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: HeaderRowOutlet,
  selectors: [["", "headerRowOutlet", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderRowOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[headerRowOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, null);
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */


class FooterRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  }

}

FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
  return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};

FooterRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: FooterRowOutlet,
  selectors: [["", "footerRowOutlet", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FooterRowOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[footerRowOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, null);
})();
/**
 * Provides a handle for the table to grab the view
 * container's ng-container to insert the no data row.
 * @docs-private
 */


class NoDataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  }

}

NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
  return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};

NoDataRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: NoDataRowOutlet,
  selectors: [["", "noDataRowOutlet", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NoDataRowOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[noDataRowOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, null);
})();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */


const CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */

class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_1__.EmbeddedViewRef {}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */


class CdkTable {
  constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler,
  /**
   * @deprecated `_stickyPositioningListener` parameter to become required.
   * @breaking-change 13.0.0
   */
  _stickyPositioningListener,
  /**
   * @deprecated `_ngZone` parameter to become required.
   * @breaking-change 14.0.0
   */
  _ngZone) {
    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._platform = _platform;
    this._viewRepeater = _viewRepeater;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._viewportRuler = _viewportRuler;
    this._stickyPositioningListener = _stickyPositioningListener;
    this._ngZone = _ngZone;
    /** Subject that emits when the component has been destroyed. */

    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /**
     * Map of all the user's defined columns (header, data, and footer cell template) identified by
     * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
     * any custom column definitions added to `_customColumnDefs`.
     */

    this._columnDefsByName = new Map();
    /**
     * Column definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * column definitions as *its* content child.
     */

    this._customColumnDefs = new Set();
    /**
     * Data row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in data rows as *its* content child.
     */

    this._customRowDefs = new Set();
    /**
     * Header row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in header rows as *its* content child.
     */

    this._customHeaderRowDefs = new Set();
    /**
     * Footer row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
     * built-in footer row as *its* content child.
     */

    this._customFooterRowDefs = new Set();
    /**
     * Whether the header row definition has been changed. Triggers an update to the header row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */

    this._headerRowDefChanged = true;
    /**
     * Whether the footer row definition has been changed. Triggers an update to the footer row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */

    this._footerRowDefChanged = true;
    /**
     * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
     * change.
     */

    this._stickyColumnStylesNeedReset = true;
    /**
     * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
     * `false`, cached values will be used instead. This is only applicable to tables with
     * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
     */

    this._forceRecalculateCellWidths = true;
    /**
     * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
     * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
     * the cached `RenderRow` objects when possible, the row identity is preserved when the data
     * and row template matches, which allows the `IterableDiffer` to check rows by reference
     * and understand which rows are added/moved/removed.
     *
     * Implemented as a map of maps where the first key is the `data: T` object and the second is the
     * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
     * contains an array of created pairs. The array is necessary to handle cases where the data
     * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
     * stored.
     */

    this._cachedRenderRowsMap = new Map();
    /**
     * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
     * table subclasses.
     */

    this.stickyCssClass = 'cdk-table-sticky';
    /**
     * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
     * the position is set in a selector associated with the value of stickyCssClass. May be
     * overridden by table subclasses
     */

    this.needsPositionStickyOnElement = true;
    /** Whether the no data row is currently showing anything. */

    this._isShowingNoDataRow = false;
    this._multiTemplateDataRows = false;
    this._fixedLayout = false;
    /**
     * Emits when the table completes rendering a set of data rows based on the latest data from the
     * data source, even if the set of rows is empty.
     */

    this.contentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // TODO(andrewseguin): Remove max value as the end index
    //   and instead calculate the view on init and scroll.

    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     *
     * @docs-private
     */

    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });

    if (!role) {
      this._elementRef.nativeElement.setAttribute('role', 'table');
    }

    this._document = _document;
    this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
  }
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
   * relative to the function to know if a row should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */


  get trackBy() {
    return this._trackByFn;
  }

  set trackBy(fn) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }

    this._trackByFn = fn;
  }
  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *   - Simple data array (each object represents one table row)
   *   - Stream that emits a data array each time the array changes
   *   - `DataSource` object that implements the connect/disconnect interface.
   *
   * If a data array is provided, the table must be notified when the array's objects are
   * added, removed, or moved. This can be done by calling the `renderRows()` function which will
   * render the diff since the last table render. If the data array reference is changed, the table
   * will automatically trigger an update to the rows.
   *
   * When providing an Observable stream, the table will trigger an update automatically when the
   * stream emits a new array of data.
   *
   * Finally, when providing a `DataSource` object, the table will use the Observable stream
   * provided by the connect function and trigger updates when that stream emits new data array
   * values. During the table's ngOnDestroy or when the data source is removed from the table, the
   * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
   * subscriptions registered during the connect process).
   */


  get dataSource() {
    return this._dataSource;
  }

  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  /**
   * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
   * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
   * dataobject will render the first row that evaluates its when predicate to true, in the order
   * defined in the table, or otherwise the default row which does not have a when predicate.
   */


  get multiTemplateDataRows() {
    return this._multiTemplateDataRows;
  }

  set multiTemplateDataRows(v) {
    this._multiTemplateDataRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
    // this setter will be invoked before the row outlet has been defined hence the null check.

    if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
      this._forceRenderDataRows();

      this.updateStickyColumnStyles();
    }
  }
  /**
   * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
   * and optimize rendering sticky styles for native tables. No-op for flex tables.
   */


  get fixedLayout() {
    return this._fixedLayout;
  }

  set fixedLayout(v) {
    this._fixedLayout = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v); // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.

    this._forceRecalculateCellWidths = true;
    this._stickyColumnStylesNeedReset = true;
  }

  ngOnInit() {
    this._setupStickyStyler();

    if (this._isNativeHtmlTable) {
      this._applyNativeTableSections();
    } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
    // the user has provided a custom trackBy, return the result of that function as evaluated
    // with the values of the `RenderRow`'s data and index.


    this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
      return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
    });

    this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(() => {
      this._forceRecalculateCellWidths = true;
    });
  }

  ngAfterContentChecked() {
    // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
    this._cacheRowDefs();

    this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTableMissingRowDefsError();
    } // Render updates if the list of columns have been changed for the header, row, or footer defs.


    const columnsChanged = this._renderUpdatedColumns();

    const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged; // Ensure sticky column styles are reset if set to `true` elsewhere.

    this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
    this._forceRecalculateCellWidths = rowDefsChanged; // If the header row definition has been changed, trigger a render to the header row.

    if (this._headerRowDefChanged) {
      this._forceRenderHeaderRows();

      this._headerRowDefChanged = false;
    } // If the footer row definition has been changed, trigger a render to the footer row.


    if (this._footerRowDefChanged) {
      this._forceRenderFooterRows();

      this._footerRowDefChanged = false;
    } // If there is a data source and row definitions, connect to the data source unless a
    // connection has already been made.


    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    } else if (this._stickyColumnStylesNeedReset) {
      // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
      // called when it row data arrives. Otherwise, we need to call it proactively.
      this.updateStickyColumnStyles();
    }

    this._checkStickyStates();
  }

  ngOnDestroy() {
    [this._rowOutlet.viewContainer, this._headerRowOutlet.viewContainer, this._footerRowOutlet.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach(def => {
      def.clear();
    });
    this._headerRowDefs = [];
    this._footerRowDefs = [];
    this._defaultRowDef = null;

    this._onDestroy.next();

    this._onDestroy.complete();

    if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }
  /**
   * Renders rows based on the table's latest set of data, which was either provided directly as an
   * input or retrieved through an Observable stream (directly or from a DataSource).
   * Checks for differences in the data since the last diff to perform only the necessary
   * changes (add/remove/move rows).
   *
   * If the table's data source is a DataSource or Observable, this will be invoked automatically
   * each time the provided Observable stream emits a new data array. Otherwise if your data is
   * an array, this function will need to be called to render any changes.
   */


  renderRows() {
    this._renderRows = this._getAllRenderRows();

    const changes = this._dataDiffer.diff(this._renderRows);

    if (!changes) {
      this._updateNoDataRow();

      this.contentChanged.next();
      return;
    }

    const viewContainer = this._rowOutlet.viewContainer;

    this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), record => record.item.data, change => {
      if (change.operation === 1
      /* INSERTED */
      && change.context) {
        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
      }
    }); // Update the meta context of a row's context data (index, count, first, last, ...)


    this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
    // e.g. if trackBy matched data on some property but the actual data reference changed.


    changes.forEachIdentityChange(record => {
      const rowView = viewContainer.get(record.currentIndex);
      rowView.context.$implicit = record.item.data;
    });

    this._updateNoDataRow(); // Allow the new row data to render before measuring it.
    // @breaking-change 14.0.0 Remove undefined check once _ngZone is required.


    if (this._ngZone && _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone.isInAngularZone()) {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(() => {
        this.updateStickyColumnStyles();
      });
    } else {
      this.updateStickyColumnStyles();
    }

    this.contentChanged.next();
  }
  /** Adds a column definition that was not included as part of the content children. */


  addColumnDef(columnDef) {
    this._customColumnDefs.add(columnDef);
  }
  /** Removes a column definition that was not included as part of the content children. */


  removeColumnDef(columnDef) {
    this._customColumnDefs.delete(columnDef);
  }
  /** Adds a row definition that was not included as part of the content children. */


  addRowDef(rowDef) {
    this._customRowDefs.add(rowDef);
  }
  /** Removes a row definition that was not included as part of the content children. */


  removeRowDef(rowDef) {
    this._customRowDefs.delete(rowDef);
  }
  /** Adds a header row definition that was not included as part of the content children. */


  addHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.add(headerRowDef);

    this._headerRowDefChanged = true;
  }
  /** Removes a header row definition that was not included as part of the content children. */


  removeHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.delete(headerRowDef);

    this._headerRowDefChanged = true;
  }
  /** Adds a footer row definition that was not included as part of the content children. */


  addFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.add(footerRowDef);

    this._footerRowDefChanged = true;
  }
  /** Removes a footer row definition that was not included as part of the content children. */


  removeFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.delete(footerRowDef);

    this._footerRowDefChanged = true;
  }
  /** Sets a no data row definition that was not included as a part of the content children. */


  setNoDataRow(noDataRow) {
    this._customNoDataRow = noDataRow;
  }
  /**
   * Updates the header sticky styles. First resets all applied styles with respect to the cells
   * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
   * automatically called when the header row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */


  updateStickyHeaderRowStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);

    const tableElement = this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
    // overzealous a11y checkers that fail because the `rowgroup` element does not contain
    // required child `row`.

    const thead = tableElement.querySelector('thead');

    if (thead) {
      thead.style.display = headerRows.length ? '' : 'none';
    }

    const stickyStates = this._headerRowDefs.map(def => def.sticky);

    this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

    this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


    this._headerRowDefs.forEach(def => def.resetStickyChanged());
  }
  /**
   * Updates the footer sticky styles. First resets all applied styles with respect to the cells
   * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
   * automatically called when the footer row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */


  updateStickyFooterRowStyles() {
    const footerRows = this._getRenderedRows(this._footerRowOutlet);

    const tableElement = this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
    // overzealous a11y checkers that fail because the `rowgroup` element does not contain
    // required child `row`.

    const tfoot = tableElement.querySelector('tfoot');

    if (tfoot) {
      tfoot.style.display = footerRows.length ? '' : 'none';
    }

    const stickyStates = this._footerRowDefs.map(def => def.sticky);

    this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

    this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


    this._footerRowDefs.forEach(def => def.resetStickyChanged());
  }
  /**
   * Updates the column sticky styles. First resets all applied styles with respect to the cells
   * sticking to the left and right. Then sticky styles are added for the left and right according
   * to the column definitions for each cell in each row. This is automatically called when
   * the data source provides a new set of data or when a column definition changes its sticky
   * input. May be called manually for cases where the cell content changes outside of these events.
   */


  updateStickyColumnStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);

    const dataRows = this._getRenderedRows(this._rowOutlet);

    const footerRows = this._getRenderedRows(this._footerRowOutlet); // For tables not using a fixed layout, the column widths may change when new rows are rendered.
    // In a table using a fixed layout, row content won't affect column width, so sticky styles
    // don't need to be cleared unless either the sticky column config changes or one of the row
    // defs change.


    if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
      // Clear the left and right positioning from all columns in the table across all rows since
      // sticky columns span across all table sections (header, data, footer)
      this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);

      this._stickyColumnStylesNeedReset = false;
    } // Update the sticky styles for each header row depending on the def's sticky state


    headerRows.forEach((headerRow, i) => {
      this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
    }); // Update the sticky styles for each data row depending on its def's sticky state

    this._rowDefs.forEach(rowDef => {
      // Collect all the rows rendered with this row definition.
      const rows = [];

      for (let i = 0; i < dataRows.length; i++) {
        if (this._renderRows[i].rowDef === rowDef) {
          rows.push(dataRows[i]);
        }
      }

      this._addStickyColumnStyles(rows, rowDef);
    }); // Update the sticky styles for each footer row depending on the def's sticky state


    footerRows.forEach((footerRow, i) => {
      this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
    }); // Reset the dirty state of the sticky input change since it has been used.

    Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
  }
  /**
   * Get the list of RenderRow objects to render according to the current list of data and defined
   * row definitions. If the previous list already contained a particular pair, it should be reused
   * so that the differ equates their references.
   */


  _getAllRenderRows() {
    const renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
    // new cache while unused ones can be picked up by garbage collection.

    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
    // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

    for (let i = 0; i < this._data.length; i++) {
      let data = this._data[i];

      const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, new WeakMap());
      }

      for (let j = 0; j < renderRowsForData.length; j++) {
        let renderRow = renderRowsForData[j];

        const cache = this._cachedRenderRowsMap.get(renderRow.data);

        if (cache.has(renderRow.rowDef)) {
          cache.get(renderRow.rowDef).push(renderRow);
        } else {
          cache.set(renderRow.rowDef, [renderRow]);
        }

        renderRows.push(renderRow);
      }
    }

    return renderRows;
  }
  /**
   * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
   * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
   * `(T, CdkRowDef)` pair.
   */


  _getRenderRowsForData(data, dataIndex, cache) {
    const rowDefs = this._getRowDefs(data, dataIndex);

    return rowDefs.map(rowDef => {
      const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];

      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift();
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return {
          data,
          rowDef,
          dataIndex
        };
      }
    });
  }
  /** Update the map containing the content's column definitions. */


  _cacheColumnDefs() {
    this._columnDefsByName.clear();

    const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
    columnDefs.forEach(columnDef => {
      if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableDuplicateColumnNameError(columnDef.name);
      }

      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }
  /** Update the list of all available row definitions that can be used. */


  _cacheRowDefs() {
    this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
    this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
    this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

    const defaultRowDefs = this._rowDefs.filter(def => !def.when);

    if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTableMultipleDefaultRowDefsError();
    }

    this._defaultRowDef = defaultRowDefs[0];
  }
  /**
   * Check if the header, data, or footer rows have changed what columns they want to display or
   * whether the sticky states have changed for the header or footer. If there is a diff, then
   * re-render that section.
   */


  _renderUpdatedColumns() {
    const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff(); // Force re-render data rows if the list of column definitions have changed.


    const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);

    if (dataColumnsChanged) {
      this._forceRenderDataRows();
    } // Force re-render header/footer rows if the list of column definitions have changed.


    const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);

    if (headerColumnsChanged) {
      this._forceRenderHeaderRows();
    }

    const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);

    if (footerColumnsChanged) {
      this._forceRenderFooterRows();
    }

    return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the row outlet. Otherwise start listening for new data.
   */


  _switchDataSource(dataSource) {
    this._data = [];

    if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
      this.dataSource.disconnect(this);
    } // Stop listening for data from the previous data source.


    if (this._renderChangeSubscription) {
      this._renderChangeSubscription.unsubscribe();

      this._renderChangeSubscription = null;
    }

    if (!dataSource) {
      if (this._dataDiffer) {
        this._dataDiffer.diff([]);
      }

      this._rowOutlet.viewContainer.clear();
    }

    this._dataSource = dataSource;
  }
  /** Set up a subscription for the data provided by the data source. */


  _observeRenderChanges() {
    // If no data source has been set, there is nothing to observe for changes.
    if (!this.dataSource) {
      return;
    }

    let dataStream;

    if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.isObservable)(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.dataSource);
    }

    if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTableUnknownDataSourceError();
    }

    this._renderChangeSubscription = dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(data => {
      this._data = data || [];
      this.renderRows();
    });
  }
  /**
   * Clears any existing content in the header row outlet and creates a new embedded view
   * in the outlet using the header row definition.
   */


  _forceRenderHeaderRows() {
    // Clear the header row outlet if any content exists.
    if (this._headerRowOutlet.viewContainer.length > 0) {
      this._headerRowOutlet.viewContainer.clear();
    }

    this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));

    this.updateStickyHeaderRowStyles();
  }
  /**
   * Clears any existing content in the footer row outlet and creates a new embedded view
   * in the outlet using the footer row definition.
   */


  _forceRenderFooterRows() {
    // Clear the footer row outlet if any content exists.
    if (this._footerRowOutlet.viewContainer.length > 0) {
      this._footerRowOutlet.viewContainer.clear();
    }

    this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));

    this.updateStickyFooterRowStyles();
  }
  /** Adds the sticky column styles for the rows according to the columns' stick states. */


  _addStickyColumnStyles(rows, rowDef) {
    const columnDefs = Array.from(rowDef.columns || []).map(columnName => {
      const columnDef = this._columnDefsByName.get(columnName);

      if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableUnknownColumnError(columnName);
      }

      return columnDef;
    });
    const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
    const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);

    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
  }
  /** Gets the list of rows that have been rendered in the row outlet. */


  _getRenderedRows(rowOutlet) {
    const renderedRows = [];

    for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
      const viewRef = rowOutlet.viewContainer.get(i);
      renderedRows.push(viewRef.rootNodes[0]);
    }

    return renderedRows;
  }
  /**
   * Get the matching row definitions that should be used for this row data. If there is only
   * one row definition, it is returned. Otherwise, find the row definitions that has a when
   * predicate that returns true with the data. If none return true, return the default row
   * definition.
   */


  _getRowDefs(data, dataIndex) {
    if (this._rowDefs.length == 1) {
      return [this._rowDefs[0]];
    }

    let rowDefs = [];

    if (this.multiTemplateDataRows) {
      rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
    } else {
      let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;

      if (rowDef) {
        rowDefs.push(rowDef);
      }
    }

    if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTableMissingMatchingRowDefError(data);
    }

    return rowDefs;
  }

  _getEmbeddedViewArgs(renderRow, index) {
    const rowDef = renderRow.rowDef;
    const context = {
      $implicit: renderRow.data
    };
    return {
      templateRef: rowDef.template,
      context,
      index
    };
  }
  /**
   * Creates a new row template in the outlet and fills it with the set of cell templates.
   * Optionally takes a context to provide to the row and cells, as well as an optional index
   * of where to place the new row template in the outlet.
   */


  _renderRow(outlet, rowDef, index, context = {}) {
    // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
    const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

    this._renderCellTemplateForItem(rowDef, context);

    return view;
  }

  _renderCellTemplateForItem(rowDef, context) {
    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (CdkCellOutlet.mostRecentCellOutlet) {
        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }

    this._changeDetectorRef.markForCheck();
  }
  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */


  _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;

    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;

      if (this.multiTemplateDataRows) {
        context.dataIndex = this._renderRows[renderIndex].dataIndex;
        context.renderIndex = renderIndex;
      } else {
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }
  /** Gets the column definitions for the provided row def. */


  _getCellTemplates(rowDef) {
    if (!rowDef || !rowDef.columns) {
      return [];
    }

    return Array.from(rowDef.columns, columnId => {
      const column = this._columnDefsByName.get(columnId);

      if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableUnknownColumnError(columnId);
      }

      return rowDef.extractCellTemplate(column);
    });
  }
  /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */


  _applyNativeTableSections() {
    const documentFragment = this._document.createDocumentFragment();

    const sections = [{
      tag: 'thead',
      outlets: [this._headerRowOutlet]
    }, {
      tag: 'tbody',
      outlets: [this._rowOutlet, this._noDataRowOutlet]
    }, {
      tag: 'tfoot',
      outlets: [this._footerRowOutlet]
    }];

    for (const section of sections) {
      const element = this._document.createElement(section.tag);

      element.setAttribute('role', 'rowgroup');

      for (const outlet of section.outlets) {
        element.appendChild(outlet.elementRef.nativeElement);
      }

      documentFragment.appendChild(element);
    } // Use a DocumentFragment so we don't hit the DOM on each iteration.


    this._elementRef.nativeElement.appendChild(documentFragment);
  }
  /**
   * Forces a re-render of the data rows. Should be called in cases where there has been an input
   * change that affects the evaluation of which rows should be rendered, e.g. toggling
   * `multiTemplateDataRows` or adding/removing row definitions.
   */


  _forceRenderDataRows() {
    this._dataDiffer.diff([]);

    this._rowOutlet.viewContainer.clear();

    this.renderRows();
  }
  /**
   * Checks if there has been a change in sticky states since last check and applies the correct
   * sticky styles. Since checking resets the "dirty" state, this should only be performed once
   * during a change detection and after the inputs are settled (after content check).
   */


  _checkStickyStates() {
    const stickyCheckReducer = (acc, d) => {
      return acc || d.hasStickyChanged();
    }; // Note that the check needs to occur for every definition since it notifies the definition
    // that it can reset its dirty state. Using another operator like `some` may short-circuit
    // remaining definitions and leave them in an unchecked state.


    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyHeaderRowStyles();
    }

    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyFooterRowStyles();
    }

    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
      this._stickyColumnStylesNeedReset = true;
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Creates the sticky styler that will be used for sticky rows and columns. Listens
   * for directionality changes and provides the latest direction to the styler. Re-applies column
   * stickiness when directionality changes.
   */


  _setupStickyStyler() {
    const direction = this._dir ? this._dir.value : 'ltr';
    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
    (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(value => {
      this._stickyStyler.direction = value;
      this.updateStickyColumnStyles();
    });
  }
  /** Filters definitions that belong to this table from a QueryList. */


  _getOwnDefs(items) {
    return items.filter(item => !item._table || item._table === this);
  }
  /** Creates or removes the no data row, depending on whether any data is being shown. */


  _updateNoDataRow() {
    const noDataRow = this._customNoDataRow || this._noDataRow;

    if (!noDataRow) {
      return;
    }

    const shouldShow = this._rowOutlet.viewContainer.length === 0;

    if (shouldShow === this._isShowingNoDataRow) {
      return;
    }

    const container = this._noDataRowOutlet.viewContainer;

    if (shouldShow) {
      const view = container.createEmbeddedView(noDataRow.templateRef);
      const rootNode = view.rootNodes[0]; // Only add the attributes if we have a single root node since it's hard
      // to figure out which one to add it to when there are multiple.

      if (view.rootNodes.length === 1 && (rootNode === null || rootNode === void 0 ? void 0 : rootNode.nodeType) === this._document.ELEMENT_NODE) {
        rootNode.setAttribute('role', 'row');
        rootNode.classList.add(noDataRow._contentClassName);
      }
    } else {
      container.clear();
    }

    this._isShowingNoDataRow = shouldShow;
  }

}

CdkTable.ɵfac = function CdkTable_Factory(t) {
  return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](STICKY_POSITIONING_LISTENER, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, 8));
};

CdkTable.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CdkTable,
  selectors: [["cdk-table"], ["table", "cdk-table", ""]],
  contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkRowDef, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
    }
  },
  viewQuery: function CdkTable_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataRowOutlet, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](HeaderRowOutlet, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](FooterRowOutlet, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](NoDataRowOutlet, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
    }
  },
  hostAttrs: [1, "cdk-table"],
  hostVars: 2,
  hostBindings: function CdkTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
    }
  },
  inputs: {
    trackBy: "trackBy",
    dataSource: "dataSource",
    multiTemplateDataRows: "multiTemplateDataRows",
    fixedLayout: "fixedLayout"
  },
  outputs: {
    contentChanged: "contentChanged"
  },
  exportAs: ["cdkTable"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: CDK_TABLE,
    useExisting: CdkTable
  }, {
    provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
    useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._DisposeViewRepeaterStrategy
  }, {
    provide: _COALESCED_STYLE_SCHEDULER,
    useClass: _CoalescedStyleScheduler
  }, // Prevent nested tables from seeing this table's StickyPositioningListener.
  {
    provide: STICKY_POSITIONING_LISTENER,
    useValue: null
  }])],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 0,
  consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function CdkTable_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](2, 0)(3, 1)(4, 2)(5, 3);
    }
  },
  directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
  styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'cdk-table, table[cdk-table]',
      exportAs: 'cdkTable',
      template: CDK_TABLE_TEMPLATE,
      host: {
        'class': 'cdk-table',
        '[class.cdk-table-fixed-layout]': 'fixedLayout'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
      providers: [{
        provide: CDK_TABLE,
        useExisting: CdkTable
      }, {
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._DisposeViewRepeaterStrategy
      }, {
        provide: _COALESCED_STYLE_SCHEDULER,
        useClass: _CoalescedStyleScheduler
      }, // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Attribute,
        args: ['role']
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY]
      }]
    }, {
      type: _CoalescedStyleScheduler,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_COALESCED_STYLE_SCHEDULER]
      }]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [STICKY_POSITIONING_LISTENER]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    multiTemplateDataRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    fixedLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    contentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    _rowOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [DataRowOutlet, {
        static: true
      }]
    }],
    _headerRowOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [HeaderRowOutlet, {
        static: true
      }]
    }],
    _footerRowOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [FooterRowOutlet, {
        static: true
      }]
    }],
    _noDataRowOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [NoDataRowOutlet, {
        static: true
      }]
    }],
    _contentColumnDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [CdkNoDataRow]
    }]
  });
})();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */


function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */


class CdkTextColumn {
  constructor( // `CdkTextColumn` is always requiring a table, but we just assert it manually
  // for better error reporting.
  // tslint:disable-next-line: lightweight-tokens
  _table, _options) {
    this._table = _table;
    this._options = _options;
    /** Alignment of the cell values. */

    this.justify = 'start';
    this._options = _options || {};
  }
  /** Column name that should be used to reference this column. */


  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name; // With Ivy, inputs can be initialized before static query results are
    // available. In that case, we defer the synchronization until "ngOnInit" fires.

    this._syncColumnDefName();
  }

  ngOnInit() {
    this._syncColumnDefName();

    if (this.headerText === undefined) {
      this.headerText = this._createDefaultHeaderText();
    }

    if (!this.dataAccessor) {
      this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
    }

    if (this._table) {
      // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
      // since the columnDef will not pick up its content by the time the table finishes checking
      // its content and initializing the rows.
      this.columnDef.cell = this.cell;
      this.columnDef.headerCell = this.headerCell;

      this._table.addColumnDef(this.columnDef);
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw getTableTextColumnMissingParentTableError();
    }
  }

  ngOnDestroy() {
    if (this._table) {
      this._table.removeColumnDef(this.columnDef);
    }
  }
  /**
   * Creates a default header text. Use the options' header text transformation function if one
   * has been provided. Otherwise simply capitalize the column name.
   */


  _createDefaultHeaderText() {
    const name = this.name;

    if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getTableTextColumnMissingNameError();
    }

    if (this._options && this._options.defaultHeaderTextTransform) {
      return this._options.defaultHeaderTextTransform(name);
    }

    return name[0].toUpperCase() + name.slice(1);
  }
  /** Synchronizes the column definition name with the text column name. */


  _syncColumnDefName() {
    if (this.columnDef) {
      this.columnDef.name = this.name;
    }
  }

}

CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
  return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
};

CdkTextColumn.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CdkTextColumn,
  selectors: [["cdk-text-column"]],
  viewQuery: function CdkTextColumn_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](CdkColumnDef, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](CdkCellDef, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](CdkHeaderCellDef, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
    }
  },
  inputs: {
    name: "name",
    headerText: "headerText",
    dataAccessor: "dataAccessor",
    justify: "justify"
  },
  decls: 3,
  vars: 0,
  consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
  template: function CdkTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
  },
  directives: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'cdk-text-column',
      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default
    }]
  }], function () {
    return [{
      type: CdkTable,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [TEXT_COLUMN_OPTIONS]
      }]
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    headerText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dataAccessor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    justify: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    columnDef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];

class CdkTableModule {}

CdkTableModule.ɵfac = function CdkTableModule_Factory(t) {
  return new (t || CdkTableModule)();
};

CdkTableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CdkTableModule
});
CdkTableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      declarations: EXPORTED_DECLARATIONS,
      imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 95758:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/dialog.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_DIALOG_DATA": () => (/* binding */ MAT_DIALOG_DATA),
/* harmony export */   "MAT_DIALOG_DEFAULT_OPTIONS": () => (/* binding */ MAT_DIALOG_DEFAULT_OPTIONS),
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY": () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY),
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER": () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY": () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   "MatDialog": () => (/* binding */ MatDialog),
/* harmony export */   "MatDialogActions": () => (/* binding */ MatDialogActions),
/* harmony export */   "MatDialogClose": () => (/* binding */ MatDialogClose),
/* harmony export */   "MatDialogConfig": () => (/* binding */ MatDialogConfig),
/* harmony export */   "MatDialogContainer": () => (/* binding */ MatDialogContainer),
/* harmony export */   "MatDialogContent": () => (/* binding */ MatDialogContent),
/* harmony export */   "MatDialogModule": () => (/* binding */ MatDialogModule),
/* harmony export */   "MatDialogRef": () => (/* binding */ MatDialogRef),
/* harmony export */   "MatDialogTitle": () => (/* binding */ MatDialogTitle),
/* harmony export */   "_MatDialogBase": () => (/* binding */ _MatDialogBase),
/* harmony export */   "_MatDialogContainerBase": () => (/* binding */ _MatDialogContainerBase),
/* harmony export */   "_closeDialogVia": () => (/* binding */ _closeDialogVia),
/* harmony export */   "matDialogAnimations": () => (/* binding */ matDialogAnimations),
/* harmony export */   "throwMatDialogContentAlreadyAttachedError": () => (/* binding */ throwMatDialogContentAlreadyAttachedError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 24476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ 75939);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);

















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */

function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

class MatDialogConfig {
  constructor() {
    /** The ARIA role of the dialog element. */
    this.role = 'dialog';
    /** Custom class for the overlay pane. */

    this.panelClass = '';
    /** Whether the dialog has a backdrop. */

    this.hasBackdrop = true;
    /** Custom class for the backdrop. */

    this.backdropClass = '';
    /** Whether the user can use escape or clicking on the backdrop to close the modal. */

    this.disableClose = false;
    /** Width of the dialog. */

    this.width = '';
    /** Height of the dialog. */

    this.height = '';
    /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */

    this.maxWidth = '80vw';
    /** Data being injected into the child component. */

    this.data = null;
    /** ID of the element that describes the dialog. */

    this.ariaDescribedBy = null;
    /** ID of the element that labels the dialog. */

    this.ariaLabelledBy = null;
    /** Aria label to assign to the dialog element. */

    this.ariaLabel = null;
    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */

    this.autoFocus = 'first-tabbable';
    /**
     * Whether the dialog should restore focus to the
     * previously-focused element, after it's closed.
     */

    this.restoreFocus = true;
    /** Whether to wait for the opening animation to finish before trapping focus. */

    this.delayFocusTrap = true;
    /**
     * Whether the dialog should close when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */

    this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by MatDialog.
 * @docs-private
 */


const matDialogAnimations = {
  /** Animation that is applied on the dialog container by default. */
  dialogContainer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
  // specifying the transform explicitly, causes IE both to blur the dialog content and
  // decimate the animation performance. Leaving it as `none` solves both issues.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void, exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'none'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'none',
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void, * => exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
    optional: true
  })]))])
};
/**
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * @docs-private
 */

function throwMatDialogContentAlreadyAttachedError() {
  throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Base class for the `MatDialogContainer`. The base class does not implement
 * animations as these are left to implementers of the dialog container.
 */


class _MatDialogContainerBase extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.BasePortalOutlet {
  constructor(_elementRef, _focusTrapFactory, _changeDetectorRef, _document,
  /** The dialog configuration. */
  _config, _interactivityChecker, _ngZone, _focusMonitor) {
    super();
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._changeDetectorRef = _changeDetectorRef;
    this._config = _config;
    this._interactivityChecker = _interactivityChecker;
    this._ngZone = _ngZone;
    this._focusMonitor = _focusMonitor;
    /** Emits when an animation state changes. */

    this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */

    this._elementFocusedBeforeDialogWasOpened = null;
    /**
     * Type of interaction that led to the dialog being closed. This is used to determine
     * whether the focus style will be applied when returning focus to its original location
     * after the dialog is closed.
     */

    this._closeInteractionType = null;
    /**
     * Attaches a DOM portal to the dialog container.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */

    this.attachDomPortal = portal => {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatDialogContentAlreadyAttachedError();
      }

      return this._portalOutlet.attachDomPortal(portal);
    };

    this._ariaLabelledBy = _config.ariaLabelledBy || null;
    this._document = _document;
  }
  /** Initializes the dialog container with the attached content. */


  _initializeWithAttachedContent() {
    this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement); // Save the previously focused element. This element will be re-focused
    // when the dialog closes.

    if (this._document) {
      this._elementFocusedBeforeDialogWasOpened = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__._getFocusedElementPierceShadowDom)();
    }
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */


  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwMatDialogContentAlreadyAttachedError();
    }

    return this._portalOutlet.attachComponentPortal(portal);
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */


  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwMatDialogContentAlreadyAttachedError();
    }

    return this._portalOutlet.attachTemplatePortal(portal);
  }
  /** Moves focus back into the dialog if it was moved out. */


  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */


  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1; // The tabindex attribute should be removed to avoid navigating to that element again

      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('blur', () => element.removeAttribute('tabindex'));
        element.addEventListener('mousedown', () => element.removeAttribute('tabindex'));
      });
    }

    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */


  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);

    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */


  _trapFocus() {
    const element = this._elementRef.nativeElement; // If were to attempt to focus immediately, then the content of the dialog would not yet be
    // ready in instances where change detection has to run first. To deal with this, we simply
    // wait for the microtask queue to be empty when setting focus when autoFocus isn't set to
    // dialog. If the element inside the dialog can't be focused, then the container is focused
    // so the user can't tab into other elements behind it.

    switch (this._config.autoFocus) {
      case false:
      case 'dialog':
        // Ensure that focus is on the dialog container. It's possible that a different
        // component tried to move focus while the open animation was running. See:
        // https://github.com/angular/components/issues/16215. Note that we only want to do this
        // if the focus isn't inside the dialog already, because it's possible that the consumer
        // turned off `autoFocus` in order to move focus themselves.
        if (!this._containsFocus()) {
          element.focus();
        }

        break;

      case true:
      case 'first-tabbable':
        this._focusTrap.focusInitialElementWhenReady().then(focusedSuccessfully => {
          // If we weren't able to find a focusable element in the dialog, then focus the dialog
          // container instead.
          if (!focusedSuccessfully) {
            this._focusDialogContainer();
          }
        });

        break;

      case 'first-heading':
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');

        break;

      default:
        this._focusByCssSelector(this._config.autoFocus);

        break;
    }
  }
  /** Restores focus to the element that was focused before the dialog opened. */


  _restoreFocus() {
    const previousElement = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

    if (this._config.restoreFocus && previousElement && typeof previousElement.focus === 'function') {
      const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__._getFocusedElementPierceShadowDom)();

      const element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
      // non-focusable element like the backdrop was clicked) before moving it. It's possible that
      // the consumer moved it themselves before the animation was done, in which case we shouldn't
      // do anything.

      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(previousElement, this._closeInteractionType);

          this._closeInteractionType = null;
        } else {
          previousElement.focus();
        }
      }
    }

    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */


  _focusDialogContainer() {
    // Note that there is no focus method when rendering on the server.
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }
  /** Returns whether focus is inside the dialog. */


  _containsFocus() {
    const element = this._elementRef.nativeElement;

    const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__._getFocusedElementPierceShadowDom)();

    return element === activeElement || element.contains(activeElement);
  }

}

_MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) {
  return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor));
};

_MatDialogContainerBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: _MatDialogContainerBase,
  viewQuery: function _MatDialogContainerBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogContainerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusTrapFactory
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
      }]
    }, {
      type: MatDialogConfig
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }];
  }, {
    _portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * @docs-private
 */


class MatDialogContainer extends _MatDialogContainerBase {
  constructor() {
    super(...arguments);
    /** State of the dialog animation. */

    this._state = 'enter';
  }
  /** Callback, invoked whenever an animation on the host completes. */


  _onAnimationDone({
    toState,
    totalTime
  }) {
    if (toState === 'enter') {
      if (this._config.delayFocusTrap) {
        this._trapFocus();
      }

      this._animationStateChanged.next({
        state: 'opened',
        totalTime
      });
    } else if (toState === 'exit') {
      this._restoreFocus();

      this._animationStateChanged.next({
        state: 'closed',
        totalTime
      });
    }
  }
  /** Callback, invoked when an animation on the host starts. */


  _onAnimationStart({
    toState,
    totalTime
  }) {
    if (toState === 'enter') {
      this._animationStateChanged.next({
        state: 'opening',
        totalTime
      });
    } else if (toState === 'exit' || toState === 'void') {
      this._animationStateChanged.next({
        state: 'closing',
        totalTime
      });
    }
  }
  /** Starts the dialog exit animation. */


  _startExitAnimation() {
    this._state = 'exit'; // Mark the container for check so it can react if the
    // view container is using OnPush change detection.

    this._changeDetectorRef.markForCheck();
  }

  _initializeWithAttachedContent() {
    super._initializeWithAttachedContent();

    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }

}

MatDialogContainer.ɵfac = /* @__PURE__ */function () {
  let ɵMatDialogContainer_BaseFactory;
  return function MatDialogContainer_Factory(t) {
    return (ɵMatDialogContainer_BaseFactory || (ɵMatDialogContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatDialogContainer)))(t || MatDialogContainer);
  };
}();

MatDialogContainer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MatDialogContainer,
  selectors: [["mat-dialog-container"]],
  hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
  hostVars: 6,
  hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
        return ctx._onAnimationStart($event);
      })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
        return ctx._onAnimationDone($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx._id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkPortalOutlet", ""]],
  template: function MatDialogContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
  },
  directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet],
  styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
  encapsulation: 2,
  data: {
    animation: [matDialogAnimations.dialogContainer]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mat-dialog-container',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.Default,
      animations: [matDialogAnimations.dialogContainer],
      host: {
        'class': 'mat-dialog-container',
        'tabindex': '-1',
        'aria-modal': 'true',
        '[id]': '_id',
        '[attr.role]': '_config.role',
        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
        '[attr.aria-label]': '_config.ariaLabel',
        '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
        '[@dialogContainer]': '_state',
        '(@dialogContainer.start)': '_onAnimationStart($event)',
        '(@dialogContainer.done)': '_onAnimationDone($event)'
      },
      template: "<ng-template cdkPortalOutlet></ng-template>\n",
      styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): resizing
// Counter for unique dialog ids.


let uniqueId = 0;
/**
 * Reference to a dialog opened via the MatDialog service.
 */

class MatDialogRef {
  constructor(_overlayRef, _containerInstance,
  /** Id of the dialog. */
  id = `mat-dialog-${uniqueId++}`) {
    this._overlayRef = _overlayRef;
    this._containerInstance = _containerInstance;
    this.id = id;
    /** Whether the user is allowed to close the dialog. */

    this.disableClose = this._containerInstance._config.disableClose;
    /** Subject for notifying the user that the dialog has finished opening. */

    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** Subject for notifying the user that the dialog has finished closing. */

    this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** Subject for notifying the user that the dialog has started closing. */

    this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** Current state of the dialog. */

    this._state = 0
    /* OPEN */
    ; // Pass the id along to the container.

    _containerInstance._id = id; // Emit when opening animation completes

    _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event.state === 'opened'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
      this._afterOpened.next();

      this._afterOpened.complete();
    }); // Dispose overlay when closing animation is complete


    _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event.state === 'closed'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);

      this._finishDialogClose();
    });

    _overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);

      this._beforeClosed.complete();

      this._afterClosed.next(this._result);

      this._afterClosed.complete();

      this.componentInstance = null;

      this._overlayRef.dispose();
    });

    _overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => {
      return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ESCAPE && !this.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.hasModifierKey)(event);
    })).subscribe(event => {
      event.preventDefault();

      _closeDialogVia(this, 'keyboard');
    });

    _overlayRef.backdropClick().subscribe(() => {
      if (this.disableClose) {
        this._containerInstance._recaptureFocus();
      } else {
        _closeDialogVia(this, 'mouse');
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */


  close(dialogResult) {
    this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

    this._containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event.state === 'closing'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(event => {
      this._beforeClosed.next(dialogResult);

      this._beforeClosed.complete();

      this._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
      // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
      // timeout which will clean everything up if the animation hasn't fired within the specified
      // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
      // vast majority of cases the timeout will have been cleared before it has the chance to fire.


      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });

    this._state = 1
    /* CLOSING */
    ;

    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */


  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */


  afterClosed() {
    return this._afterClosed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */


  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */


  backdropClick() {
    return this._overlayRef.backdropClick();
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */


  keydownEvents() {
    return this._overlayRef.keydownEvents();
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */


  updatePosition(position) {
    let strategy = this._getPositionStrategy();

    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }

    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }

    this._overlayRef.updatePosition();

    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */


  updateSize(width = '', height = '') {
    this._overlayRef.updateSize({
      width,
      height
    });

    this._overlayRef.updatePosition();

    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */


  addPanelClass(classes) {
    this._overlayRef.addPanelClass(classes);

    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */


  removePanelClass(classes) {
    this._overlayRef.removePanelClass(classes);

    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */


  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */


  _finishDialogClose() {
    this._state = 2
    /* CLOSED */
    ;

    this._overlayRef.dispose();
  }
  /** Fetches the position strategy object from the overlay ref. */


  _getPositionStrategy() {
    return this._overlayRef.getConfig().positionStrategy;
  }

}
/**
 * Closes the dialog with the specified interaction type. This is currently not part of
 * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
 * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
 */
// TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.


function _closeDialogVia(ref, interactionType, result) {
  // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
  // For those, we keep the behavior as is and do not deal with the interaction type.
  if (ref._containerInstance !== undefined) {
    ref._containerInstance._closeInteractionType = interactionType;
  }

  return ref.close(result);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to access the data that was passed in to a dialog. */


const MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MatDialogData');
/** Injection token that can be used to specify default dialog options. */

const MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-dialog-default-options');
/** Injection token that determines the scroll handling while the dialog is open. */

const MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-dialog-scroll-strategy');
/** @docs-private */

function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.block();
}
/** @docs-private */


function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.block();
}
/** @docs-private */


const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_DIALOG_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay],
  useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/**
 * Base class for dialog services. The base dialog service allows
 * for arbitrary dialog refs and dialog container components.
 */

class _MatDialogBase {
  constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken,
  /**
   * @deprecated No longer used. To be removed.
   * @breaking-change 14.0.0
   */
  _animationMode) {
    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._dialogRefConstructor = _dialogRefConstructor;
    this._dialogContainerType = _dialogContainerType;
    this._dialogDataToken = _dialogDataToken;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */

    this.afterAllClosed = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.defer)(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(undefined)));
    this._scrollStrategy = scrollStrategy;
  }
  /** Keeps track of the currently-open dialogs. */


  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */


  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }

  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }

  open(componentOrTemplateRef, config) {
    config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }

    const overlayRef = this._createOverlay(config);

    const dialogContainer = this._attachDialogContainer(overlayRef, config);

    const dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


    if (!this.openDialogs.length) {
      this._hideNonDialogContentFromAssistiveTechnology();
    }

    this.openDialogs.push(dialogRef);
    dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));
    this.afterOpened.next(dialogRef); // Notify the dialog container that the content has been attached.

    dialogContainer._initializeWithAttachedContent();

    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */


  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */


  getDialogById(id) {
    return this.openDialogs.find(dialog => dialog.id === id);
  }

  ngOnDestroy() {
    // Only close the dialogs at this level on destroy
    // since the parent service may still be active.
    this._closeDialogs(this._openDialogsAtThisLevel);

    this._afterAllClosedAtThisLevel.complete();

    this._afterOpenedAtThisLevel.complete();
  }
  /**
   * Creates the overlay into which the dialog will be loaded.
   * @param config The dialog configuration.
   * @returns A promise resolving to the OverlayRef for the created overlay.
   */


  _createOverlay(config) {
    const overlayConfig = this._getOverlayConfig(config);

    return this._overlay.create(overlayConfig);
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param dialogConfig The dialog configuration.
   * @returns The overlay configuration.
   */


  _getOverlayConfig(dialogConfig) {
    const state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayConfig({
      positionStrategy: this._overlay.position().global(),
      scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
      panelClass: dialogConfig.panelClass,
      hasBackdrop: dialogConfig.hasBackdrop,
      direction: dialogConfig.direction,
      minWidth: dialogConfig.minWidth,
      minHeight: dialogConfig.minHeight,
      maxWidth: dialogConfig.maxWidth,
      maxHeight: dialogConfig.maxHeight,
      disposeOnNavigation: dialogConfig.closeOnNavigation
    });

    if (dialogConfig.backdropClass) {
      state.backdropClass = dialogConfig.backdropClass;
    }

    return state;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */


  _attachDialogContainer(overlay, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatDialogConfig,
        useValue: config
      }]
    });
    const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.ComponentPortal(this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogContainer Reference to the wrapping dialog container.
   * @param overlayRef Reference to the overlay in which the dialog resides.
   * @param config The dialog configuration.
   * @returns A promise resolving to the MatDialogRef that should be returned to the user.
   */


  _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
    // Create a reference to the dialog we're creating in order to give the user a handle
    // to modify and close it.
    const dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);

    if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef) {
      dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.TemplatePortal(componentOrTemplateRef, null, {
        $implicit: config.data,
        dialogRef
      }));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer);

      const contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, config.componentFactoryResolver));
      dialogRef.componentInstance = contentRef.instance;
    }

    dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
    return dialogRef;
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog.
   * @param dialogContainer Dialog container element that wraps all of the contents.
   * @returns The custom injector that can be used inside the dialog.
   */


  _createInjector(config, dialogRef, dialogContainer) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The dialog container should be provided as the dialog container and the dialog's
    // content are created out of the same `ViewContainerRef` and as such, are siblings
    // for injector purposes. To allow the hierarchy that is expected, the dialog
    // container is explicitly provided in the injector.

    const providers = [{
      provide: this._dialogContainerType,
      useValue: dialogContainer
    }, {
      provide: this._dialogDataToken,
      useValue: config.data
    }, {
      provide: this._dialogRefConstructor,
      useValue: dialogRef
    }];

    if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectFlags.Optional))) {
      providers.push({
        provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality,
        useValue: {
          value: config.direction,
          change: (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)()
        }
      });
    }

    return _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({
      parent: userInjector || this._injector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   */


  _removeOpenDialog(dialogRef) {
    const index = this.openDialogs.indexOf(dialogRef);

    if (index > -1) {
      this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
      // to a the siblings and emit to the `afterAllClosed` stream.

      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute('aria-hidden', previousValue);
          } else {
            element.removeAttribute('aria-hidden');
          }
        });

        this._ariaHiddenElements.clear();

        this._getAfterAllClosed().next();
      }
    }
  }
  /**
   * Hides all of the content that isn't an overlay from assistive technology.
   */


  _hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;

      for (let i = siblings.length - 1; i > -1; i--) {
        let sibling = siblings[i];

        if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

          sibling.setAttribute('aria-hidden', 'true');
        }
      }
    }
  }
  /** Closes all of the dialogs in an array. */


  _closeDialogs(dialogs) {
    let i = dialogs.length;

    while (i--) {
      // The `_openDialogs` property isn't updated after close until the rxjs subscription
      // runs on the next microtask, in addition to modifying the array as we're going
      // through it. We loop through all of them and call close without assuming that
      // they'll be removed from the list instantaneously.
      dialogs[i].close();
    }
  }

}

_MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinvalidFactory"]();
};

_MatDialogBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: _MatDialogBase
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer
    }, {
      type: undefined
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Type
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Type
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken
    }, {
      type: undefined
    }];
  }, null);
})();
/**
 * Service to open Material Design modal dialogs.
 */


class MatDialog extends _MatDialogBase {
  constructor(overlay, injector,
  /**
   * @deprecated `_location` parameter to be removed.
   * @breaking-change 10.0.0
   */
  location, defaultOptions, scrollStrategy, parentDialog, overlayContainer,
  /**
   * @deprecated No longer used. To be removed.
   * @breaking-change 14.0.0
   */
  animationMode) {
    super(overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA, animationMode);
  }

}

MatDialog.ɵfac = function MatDialog_Factory(t) {
  return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.ANIMATION_MODULE_TYPE, 8));
};

MatDialog.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: MatDialog,
  factory: MatDialog.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: MatDialogConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [MAT_DIALOG_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [MAT_DIALOG_SCROLL_STRATEGY]
      }]
    }, {
      type: MatDialog,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.SkipSelf
      }]
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayContainer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();
/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default options provided.
 * @returns The new configuration object.
 */


function _applyConfigDefaults(config, defaultOptions) {
  return Object.assign(Object.assign({}, defaultOptions), config);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Counter used to generate unique IDs for dialog elements. */


let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */

class MatDialogClose {
  constructor(
  /**
   * Reference to the containing dialog.
   * @deprecated `dialogRef` property to become private.
   * @breaking-change 13.0.0
   */
  // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  dialogRef, _elementRef, _dialog) {
    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    /** Default to "button" to prevents accidental form submits. */

    this.type = 'button';
  }

  ngOnInit() {
    if (!this.dialogRef) {
      // When this directive is included in a dialog via TemplateRef (rather than being
      // in a Component), the DialogRef isn't available via injection because embedded
      // views cannot be given a custom injector. Instead, we look up the DialogRef by
      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
      // be resolved at constructor time.
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }

  ngOnChanges(changes) {
    const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }

  _onButtonClick(event) {
    // Determinate the focus origin using the click event, because using the FocusMonitor will
    // result in incorrect origins. Most of the time, close buttons will be auto focused in the
    // dialog, and therefore clicking the button won't result in a focus change. This means that
    // the FocusMonitor won't detect any origin change, and will always output `program`.
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
  }

}

MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
  return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
};

MatDialogClose.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatDialogClose,
  selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
  hostVars: 2,
  hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
        return ctx._onButtonClick($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    }
  },
  inputs: {
    ariaLabel: ["aria-label", "ariaLabel"],
    type: "type",
    dialogResult: ["mat-dialog-close", "dialogResult"],
    _matDialogClose: ["matDialogClose", "_matDialogClose"]
  },
  exportAs: ["matDialogClose"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mat-dialog-close], [matDialogClose]',
      exportAs: 'matDialogClose',
      host: {
        '(click)': '_onButtonClick($event)',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.type]': 'type'
      }
    }]
  }], function () {
    return [{
      type: MatDialogRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: MatDialog
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['aria-label']
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dialogResult: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['mat-dialog-close']
    }],
    _matDialogClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['matDialogClose']
    }]
  });
})();
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */


class MatDialogTitle {
  constructor( // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  _dialogRef, _elementRef, _dialog) {
    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    /** Unique id for the dialog title. If none is supplied, it will be auto-generated. */

    this.id = `mat-dialog-title-${dialogElementUid++}`;
  }

  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }

    if (this._dialogRef) {
      Promise.resolve().then(() => {
        const container = this._dialogRef._containerInstance;

        if (container && !container._ariaLabelledBy) {
          container._ariaLabelledBy = this.id;
        }
      });
    }
  }

}

MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
  return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
};

MatDialogTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatDialogTitle,
  selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
  hostAttrs: [1, "mat-dialog-title"],
  hostVars: 1,
  hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  exportAs: ["matDialogTitle"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mat-dialog-title], [matDialogTitle]',
      exportAs: 'matDialogTitle',
      host: {
        'class': 'mat-dialog-title',
        '[id]': 'id'
      }
    }]
  }], function () {
    return [{
      type: MatDialogRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: MatDialog
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
/**
 * Scrollable content container of a dialog.
 */


class MatDialogContent {}

MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
  return new (t || MatDialogContent)();
};

MatDialogContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatDialogContent,
  selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
  hostAttrs: [1, "mat-dialog-content"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        'class': 'mat-dialog-content'
      }
    }]
  }], null, null);
})();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */


class MatDialogActions {}

MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
  return new (t || MatDialogActions)();
};

MatDialogActions.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MatDialogActions,
  selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
  hostAttrs: [1, "mat-dialog-actions"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      host: {
        'class': 'mat-dialog-actions'
      }
    }]
  }], null, null);
})();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */


function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;

  while (parent && !parent.classList.contains('mat-dialog-container')) {
    parent = parent.parentElement;
  }

  return parent ? openDialogs.find(dialog => dialog.id === parent.id) : null;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatDialogModule {}

MatDialogModule.ɵfac = function MatDialogModule_Factory(t) {
  return new (t || MatDialogModule)();
};

MatDialogModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: MatDialogModule
});
MatDialogModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
  imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatCommonModule],
      exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatCommonModule],
      declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
      providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 68390:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/radio.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS),
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_RADIO_GROUP": () => (/* binding */ MAT_RADIO_GROUP),
/* harmony export */   "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "MatRadioButton": () => (/* binding */ MatRadioButton),
/* harmony export */   "MatRadioChange": () => (/* binding */ MatRadioChange),
/* harmony export */   "MatRadioGroup": () => (/* binding */ MatRadioGroup),
/* harmony export */   "MatRadioModule": () => (/* binding */ MatRadioModule),
/* harmony export */   "_MatRadioButtonBase": () => (/* binding */ _MatRadioButtonBase),
/* harmony export */   "_MatRadioGroupBase": () => (/* binding */ _MatRadioGroupBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);









const _c0 = ["input"];

const _c1 = function (a0) {
  return {
    enterDuration: a0
  };
};

const _c2 = ["*"];
const MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-radio-default-options', {
  providedIn: 'root',
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});

function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent'
  };
} // Increasing integer for generating unique ids for radio components.


let nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */

const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioGroup),
  multi: true
};
/** Change event object emitted by MatRadio and MatRadioGroup. */

class MatRadioChange {
  constructor(
  /** The MatRadioButton that emits the change event. */
  source,
  /** The value of the MatRadioButton. */
  value) {
    this.source = source;
    this.value = value;
  }

}
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */


const MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatRadioGroup');
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */

class _MatRadioGroupBase {
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    /** Selected value for the radio group. */

    this._value = null;
    /** The HTML name attribute applied to radio buttons in this group. */

    this._name = `mat-radio-group-${nextUniqueId++}`;
    /** The currently selected radio button. Should match value. */

    this._selected = null;
    /** Whether the `value` has been set to its initial value. */

    this._isInitialized = false;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */

    this._labelPosition = 'after';
    /** Whether the radio group is disabled. */

    this._disabled = false;
    /** Whether the radio group is required. */

    this._required = false;
    /** The method to be called in order to update ngModel */

    this._controlValueAccessorChangeFn = () => {};
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */


    this.onTouched = () => {};
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */


    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** Name of the radio button group. All radio buttons inside this group will use this name. */


  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;

    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */


  get labelPosition() {
    return this._labelPosition;
  }

  set labelPosition(v) {
    this._labelPosition = v === 'before' ? 'before' : 'after';

    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */


  get value() {
    return this._value;
  }

  set value(newValue) {
    if (this._value !== newValue) {
      // Set this before proceeding to ensure no circular loop occurs with selection.
      this._value = newValue;

      this._updateSelectedRadioFromValue();

      this._checkSelectedRadioButton();
    }
  }

  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */


  get selected() {
    return this._selected;
  }

  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;

    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

    this._markRadiosForCheck();
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */


  ngAfterContentInit() {
    // Mark this component as initialized in AfterContentInit because the initial value can
    // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
    // NgModel occurs *after* the OnInit of the MatRadioGroup.
    this._isInitialized = true;
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */


  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach(radio => {
        radio.name = this.name;

        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */


  _updateSelectedRadioFromValue() {
    // If the value already matches the selected radio, do nothing.
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;

    if (this._radios && !isAlreadySelected) {
      this._selected = null;

      this._radios.forEach(radio => {
        radio.checked = this.value === radio.value;

        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */


  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }

  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach(radio => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */


  writeValue(value) {
    this.value = value;

    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */


  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */


  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;

    this._changeDetector.markForCheck();
  }

}

_MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) {
  return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

_MatRadioGroupBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatRadioGroupBase,
  inputs: {
    color: "color",
    name: "name",
    labelPosition: "labelPosition",
    value: "value",
    selected: "selected",
    disabled: "disabled",
    required: "required"
  },
  outputs: {
    change: "change"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */


class MatRadioGroup extends _MatRadioGroupBase {}

MatRadioGroup.ɵfac = /* @__PURE__ */function () {
  let ɵMatRadioGroup_BaseFactory;
  return function MatRadioGroup_Factory(t) {
    return (ɵMatRadioGroup_BaseFactory || (ɵMatRadioGroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRadioGroup)))(t || MatRadioGroup);
  };
}();

MatRadioGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatRadioGroup,
  selectors: [["mat-radio-group"]],
  contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatRadioButton, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    }
  },
  hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"],
  exportAs: ["matRadioGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
    provide: MAT_RADIO_GROUP,
    useExisting: MatRadioGroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-radio-group',
      exportAs: 'matRadioGroup',
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        'role': 'radiogroup',
        'class': 'mat-radio-group'
      }
    }]
  }], null, {
    _radios: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioButton), {
        descendants: true
      }]
    }]
  });
})(); // Boilerplate for applying mixins to MatRadioButton.

/** @docs-private */


class MatRadioButtonBase {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

}

const _MatRadioButtonMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */


class _MatRadioButtonBase extends _MatRadioButtonMixinBase {
  constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
    super(elementRef);
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._providerOverride = _providerOverride;
    this._uniqueId = `mat-radio-${++nextUniqueId}`;
    /** The unique ID for the radio button. */

    this.id = this._uniqueId;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Whether this radio is checked. */

    this._checked = false;
    /** Value assigned to this radio. */

    this._value = null;
    /** Unregister function for _radioDispatcher */

    this._removeUniqueSelectionListener = () => {}; // Assertions. Ideally these should be stripped out by the compiler.
    // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.


    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === 'NoopAnimations';

    if (tabIndex) {
      this.tabIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(tabIndex, 0);
    }

    this._removeUniqueSelectionListener = _radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  /** Whether this radio button is checked. */


  get checked() {
    return this._checked;
  }

  set checked(value) {
    const newCheckedState = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

    if (this._checked !== newCheckedState) {
      this._checked = newCheckedState;

      if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
        // When unchecking the selected radio button, update the selected radio
        // property on the group.
        this.radioGroup.selected = null;
      }

      if (newCheckedState) {
        // Notify all radio buttons with the same name to un-check.
        this._radioDispatcher.notify(this.id, this.name);
      }

      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */


  get value() {
    return this._value;
  }

  set value(value) {
    if (this._value !== value) {
      this._value = value;

      if (this.radioGroup !== null) {
        if (!this.checked) {
          // Update checked when the value changed to match the radio group's value
          this.checked = this.radioGroup.value === value;
        }

        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */


  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
  }

  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */


  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }

  set disabled(value) {
    this._setDisabled((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value));
  }
  /** Whether the radio button is required. */


  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Theme color of the radio button. */


  get color() {
    // As per Material design specifications the selection control radio should use the accent color
    // palette by default. https://material.io/guidelines/components/selection-controls.html
    return this._color || this.radioGroup && this.radioGroup.color || this._providerOverride && this._providerOverride.color || 'accent';
  }

  set color(newValue) {
    this._color = newValue;
  }
  /** ID of the native input element inside `<mat-radio-button>` */


  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Focuses the radio button. */


  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */


  _markForCheck() {
    // When group value changes, the button will not be notified. Use `markForCheck` to explicit
    // update radio button's status
    this._changeDetector.markForCheck();
  }

  ngOnInit() {
    if (this.radioGroup) {
      // If the radio is inside a radio group, determine if it should be checked
      this.checked = this.radioGroup.value === this._value;

      if (this.checked) {
        this.radioGroup.selected = this;
      } // Copy name from parent radio group


      this.name = this.radioGroup.name;
    }
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);

    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */


  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }

  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }

  _onInputClick(event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `radio-button` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }
  /** Triggered when the radio button receives an interaction from the user. */


  _onInputInteraction(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();

    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;

      this._emitChangeEvent();

      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);

        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */


  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;

      this._changeDetector.markForCheck();
    }
  }

}

_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};

_MatRadioButtonBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatRadioButtonBase,
  viewQuery: function _MatRadioButtonBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    }
  },
  inputs: {
    id: "id",
    name: "name",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    checked: "checked",
    value: "value",
    labelPosition: "labelPosition",
    disabled: "disabled",
    required: "required",
    color: "color"
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _MatRadioGroupBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: undefined
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }]
  });
})();
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */


class MatRadioButton extends _MatRadioButtonBase {
  constructor(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex) {
    super(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex);
  }

}

MatRadioButton.ɵfac = function MatRadioButton_Factory(t) {
  return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
};

MatRadioButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatRadioButton,
  selectors: [["mat-radio-button"]],
  hostAttrs: [1, "mat-radio-button"],
  hostVars: 17,
  hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() {
        return ctx._inputElement.nativeElement.focus();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._noopAnimations)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matRadioButton"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 13,
  vars: 20,
  consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", 3, "id", "checked", "disabled", "tabIndex", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]],
  template: function MatRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_5_listener($event) {
        return ctx._onInputInteraction($event);
      })("click", function MatRadioButton_Template_input_click_5_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9)(10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx._noopAnimations ? 0 : 150));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-label-before", ctx.labelPosition == "before");
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
  styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{opacity:0;position:absolute;top:0;left:0;margin:0;width:100%;height:100%;cursor:inherit;z-index:-1}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-radio-button',
      inputs: ['disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matRadioButton',
      host: {
        'class': 'mat-radio-button',
        '[class.mat-radio-checked]': 'checked',
        '[class.mat-radio-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_noopAnimations',
        '[class.mat-primary]': 'color === "primary"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        // Needs to be removed since it causes some a11y issues (see #21266).
        '[attr.tabindex]': 'null',
        '[attr.id]': 'id',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.aria-describedby]': 'null',
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        '(focus)': '_inputElement.nativeElement.focus()'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <span class=\"mat-radio-container\">\n    <span class=\"mat-radio-outer-circle\"></span>\n    <span class=\"mat-radio-inner-circle\"></span>\n    <input #input class=\"mat-radio-input\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [tabIndex]=\"tabIndex\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputInteraction($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <span mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: _noopAnimations ? 0 : 150}\">\n\n      <span class=\"mat-ripple-element mat-radio-persistent-ripple\"></span>\n    </span>\n  </span>\n\n  <!-- The label content for radio control. -->\n  <span class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
      styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{opacity:0;position:absolute;top:0;left:0;margin:0;width:100%;height:100%;cursor:inherit;z-index:-1}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
    }]
  }], function () {
    return [{
      type: MatRadioGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_RADIO_GROUP]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_RADIO_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatRadioModule {}

MatRadioModule.ɵfac = function MatRadioModule_Factory(t) {
  return new (t || MatRadioModule)();
};

MatRadioModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatRadioModule
});
MatRadioModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      declarations: [MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 6623:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/slide-toggle.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS": () => (/* binding */ MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR": () => (/* binding */ MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR),
/* harmony export */   "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR": () => (/* binding */ MAT_SLIDE_TOGGLE_VALUE_ACCESSOR),
/* harmony export */   "MatSlideToggle": () => (/* binding */ MatSlideToggle),
/* harmony export */   "MatSlideToggleChange": () => (/* binding */ MatSlideToggleChange),
/* harmony export */   "MatSlideToggleModule": () => (/* binding */ MatSlideToggleModule),
/* harmony export */   "MatSlideToggleRequiredValidator": () => (/* binding */ MatSlideToggleRequiredValidator),
/* harmony export */   "_MatSlideToggleRequiredValidatorModule": () => (/* binding */ _MatSlideToggleRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ 35837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token to be used to override the default options for `mat-slide-toggle`. */

const _c0 = ["thumbContainer"];
const _c1 = ["toggleBar"];
const _c2 = ["input"];

const _c3 = function (a0) {
  return {
    enterDuration: a0
  };
};

const _c4 = ["*"];
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-slide-toggle-default-options', {
  providedIn: 'root',
  factory: () => ({
    disableToggleValue: false
  })
}); // Increasing integer for generating unique ids for slide-toggle components.

let nextUniqueId = 0;
/** @docs-private */

const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSlideToggle),
  multi: true
};
/** Change event object emitted by a MatSlideToggle. */

class MatSlideToggleChange {
  constructor(
  /** The source MatSlideToggle of the event. */
  source,
  /** The new `checked` value of the MatSlideToggle. */
  checked) {
    this.source = source;
    this.checked = checked;
  }

} // Boilerplate for applying mixins to MatSlideToggle.

/** @docs-private */


const _MatSlideToggleBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

}))));
/** Represents a slidable "switch" toggle that can be moved between on and off. */


class MatSlideToggle extends _MatSlideToggleBase {
  constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, animationMode) {
    super(elementRef);
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this.defaults = defaults;

    this._onChange = _ => {};

    this._onTouched = () => {};

    this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
    this._required = false;
    this._checked = false;
    /** Name value will be applied to the input element if present. */

    this.name = null;
    /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */

    this.id = this._uniqueId;
    /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */

    this.labelPosition = 'after';
    /** Used to set the aria-label attribute on the underlying input element. */

    this.ariaLabel = null;
    /** Used to set the aria-labelledby attribute on the underlying input element. */

    this.ariaLabelledby = null;
    /** An event will be dispatched each time the slide-toggle changes its value. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event will be dispatched each time the slide-toggle input is toggled.
     * This event is always emitted when the user toggles the slide toggle, but this does not mean
     * the slide toggle's value has changed.
     */

    this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.tabIndex = parseInt(tabIndex) || 0;
    this.color = this.defaultColor = defaults.color || 'accent';
    this._noopAnimations = animationMode === 'NoopAnimations';
  }
  /** Whether the slide-toggle is required. */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Whether the slide-toggle element is checked or not. */


  get checked() {
    return this._checked;
  }

  set checked(value) {
    this._checked = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

    this._changeDetectorRef.markForCheck();
  }
  /** Returns the unique id for the visual hidden input. */


  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }

  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        // When a focused element becomes disabled, the browser *immediately* fires a blur event.
        // Angular does not expect events to be raised during change detection, so any state
        // change (such as a form control's 'ng-touched') will cause a changed-after-checked
        // error. See https://github.com/angular/angular/issues/17793. To work around this,
        // we defer telling the form control it has been touched until the next tick.
        Promise.resolve().then(() => this._onTouched());
      }
    });
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Method being called whenever the underlying input emits a change event. */


  _onChangeEvent(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the component's `change` output.
    event.stopPropagation();
    this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
    // `disableToggleValue: true`, the slide toggle's value does not change, and the
    // checked state of the underlying input needs to be changed back.

    if (this.defaults.disableToggleValue) {
      this._inputElement.nativeElement.checked = this.checked;
      return;
    } // Sync the value from the underlying input element with the component instance.


    this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
    // there is no change event, when the checked state changes programmatically.

    this._emitChangeEvent();
  }
  /** Method being called whenever the slide-toggle has been clicked. */


  _onInputClick(event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `slide-toggle` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }
  /** Implemented as part of ControlValueAccessor. */


  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */


  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */


  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;

    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the slide-toggle. */


  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /** Toggles the checked state of the slide-toggle. */


  toggle() {
    this.checked = !this.checked;

    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */


  _emitChangeEvent() {
    this._onChange(this.checked);

    this.change.emit(new MatSlideToggleChange(this, this.checked));
  }
  /** Method being called whenever the label text changes. */


  _onLabelTextChange() {
    // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
    // slide-toggle component will be only marked for check, but no actual change detection runs
    // automatically. Instead of going back into the zone in order to trigger a change detection
    // which causes *all* components to be checked (if explicitly marked or not using OnPush),
    // we only trigger an explicit change detection for the slide-toggle view and its children.
    this._changeDetectorRef.detectChanges();
  }

}

MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) {
  return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE, 8));
};

MatSlideToggle.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSlideToggle,
  selectors: [["mat-slide-toggle"]],
  viewQuery: function MatSlideToggle_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    }
  },
  hostAttrs: [1, "mat-slide-toggle"],
  hostVars: 13,
  hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-labelledby", null)("name", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._noopAnimations);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex",
    name: "name",
    id: "id",
    labelPosition: "labelPosition",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    required: "required",
    checked: "checked"
  },
  outputs: {
    change: "change",
    toggleChange: "toggleChange"
  },
  exportAs: ["matSlideToggle"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c4,
  decls: 16,
  vars: 20,
  consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]],
  template: function MatSlideToggle_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1)(2, "span", 2, 3)(4, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) {
        return ctx._onChangeEvent($event);
      })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
        return ctx._onLabelTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx._noopAnimations ? 0 : 150));
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.CdkObserveContent],
  styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;display:block}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-slide-toggle',
      exportAs: 'matSlideToggle',
      host: {
        'class': 'mat-slide-toggle',
        '[id]': 'id',
        // Needs to be removed since it causes some a11y issues (see #21266).
        '[attr.tabindex]': 'null',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.name]': 'null',
        '[class.mat-checked]': 'checked',
        '[class.mat-disabled]': 'disabled',
        '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
        '[class._mat-animation-noopable]': '_noopAnimations'
      },
      providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
      inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <span #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <span class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <span class=\"mat-slide-toggle-thumb\"></span>\n      <span class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: _noopAnimations ? 0 : 150}\">\n\n        <span class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></span>\n      </span>\n    </span>\n\n  </span>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
      styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;display:block}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _thumbEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['thumbContainer']
    }],
    _thumbBarEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['toggleBar']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    toggleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSlideToggleRequiredValidator),
  multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */

class MatSlideToggleRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {}

MatSlideToggleRequiredValidator.ɵfac = /* @__PURE__ */function () {
  let ɵMatSlideToggleRequiredValidator_BaseFactory;
  return function MatSlideToggleRequiredValidator_Factory(t) {
    return (ɵMatSlideToggleRequiredValidator_BaseFactory || (ɵMatSlideToggleRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator)))(t || MatSlideToggleRequiredValidator);
  };
}();

MatSlideToggleRequiredValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatSlideToggleRequiredValidator,
  selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
      providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** This module is used by both original and MDC-based slide-toggle implementations. */


class _MatSlideToggleRequiredValidatorModule {}

_MatSlideToggleRequiredValidatorModule.ɵfac = function _MatSlideToggleRequiredValidatorModule_Factory(t) {
  return new (t || _MatSlideToggleRequiredValidatorModule)();
};

_MatSlideToggleRequiredValidatorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _MatSlideToggleRequiredValidatorModule
});
_MatSlideToggleRequiredValidatorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [MatSlideToggleRequiredValidator],
      declarations: [MatSlideToggleRequiredValidator]
    }]
  }], null, null);
})();

class MatSlideToggleModule {}

MatSlideToggleModule.ɵfac = function MatSlideToggleModule_Factory(t) {
  return new (t || MatSlideToggleModule)();
};

MatSlideToggleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSlideToggleModule
});
MatSlideToggleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule],
      exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      declarations: [MatSlideToggle]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 97217:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/table.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatCell": () => (/* binding */ MatCell),
/* harmony export */   "MatCellDef": () => (/* binding */ MatCellDef),
/* harmony export */   "MatColumnDef": () => (/* binding */ MatColumnDef),
/* harmony export */   "MatFooterCell": () => (/* binding */ MatFooterCell),
/* harmony export */   "MatFooterCellDef": () => (/* binding */ MatFooterCellDef),
/* harmony export */   "MatFooterRow": () => (/* binding */ MatFooterRow),
/* harmony export */   "MatFooterRowDef": () => (/* binding */ MatFooterRowDef),
/* harmony export */   "MatHeaderCell": () => (/* binding */ MatHeaderCell),
/* harmony export */   "MatHeaderCellDef": () => (/* binding */ MatHeaderCellDef),
/* harmony export */   "MatHeaderRow": () => (/* binding */ MatHeaderRow),
/* harmony export */   "MatHeaderRowDef": () => (/* binding */ MatHeaderRowDef),
/* harmony export */   "MatNoDataRow": () => (/* binding */ MatNoDataRow),
/* harmony export */   "MatRecycleRows": () => (/* binding */ MatRecycleRows),
/* harmony export */   "MatRow": () => (/* binding */ MatRow),
/* harmony export */   "MatRowDef": () => (/* binding */ MatRowDef),
/* harmony export */   "MatTable": () => (/* binding */ MatTable),
/* harmony export */   "MatTableDataSource": () => (/* binding */ MatTableDataSource),
/* harmony export */   "MatTableModule": () => (/* binding */ MatTableModule),
/* harmony export */   "MatTextColumn": () => (/* binding */ MatTextColumn),
/* harmony export */   "_MatTableDataSource": () => (/* binding */ _MatTableDataSource)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ 33865);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 86942);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */

const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];

function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}

function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}

class MatRecycleRows {}

MatRecycleRows.ɵfac = function MatRecycleRows_Factory(t) {
  return new (t || MatRecycleRows)();
};

MatRecycleRows.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatRecycleRows,
  selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
    useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRecycleRows, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-table[recycleRows], table[mat-table][recycleRows]',
      providers: [{
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
      }]
    }]
  }], null, null);
})();
/**
 * Wrapper for the CdkTable with Material design styles.
 */


class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable {
  constructor() {
    super(...arguments);
    /** Overrides the sticky CSS class set by the `CdkTable`. */

    this.stickyCssClass = 'mat-table-sticky';
    /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */

    this.needsPositionStickyOnElement = false;
  }

}

MatTable.ɵfac = /* @__PURE__ */function () {
  let ɵMatTable_BaseFactory;
  return function MatTable_Factory(t) {
    return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable)))(t || MatTable);
  };
}();

MatTable.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatTable,
  selectors: [["mat-table"], ["table", "mat-table", ""]],
  hostAttrs: [1, "mat-table"],
  hostVars: 2,
  hostBindings: function MatTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-table-fixed-layout", ctx.fixedLayout);
    }
  },
  exportAs: ["matTable"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
  //  is only included in the build if used.
  {
    provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
    useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
  }, {
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
    useExisting: MatTable
  }, {
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
    useExisting: MatTable
  }, {
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
    useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler
  }, // Prevent nested tables from seeing this table's StickyPositioningListener.
  {
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
    useValue: null
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 0,
  consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function MatTable_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0)(3, 1)(4, 2)(5, 3);
    }
  },
  directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.HeaderRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.DataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.NoDataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.FooterRowOutlet],
  styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-table, table[mat-table]',
      exportAs: 'matTable',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE_TEMPLATE,
      host: {
        'class': 'mat-table',
        '[class.mat-table-fixed-layout]': 'fixedLayout'
      },
      providers: [// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
      //  is only included in the build if used.
      {
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
        useExisting: MatTable
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
        useExisting: MatTable
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
        useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler
      }, // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
        useValue: null
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */


class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef {}

MatCellDef.ɵfac = /* @__PURE__ */function () {
  let ɵMatCellDef_BaseFactory;
  return function MatCellDef_Factory(t) {
    return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef)))(t || MatCellDef);
  };
}();

MatCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCellDef,
  selectors: [["", "matCellDef", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
    useExisting: MatCellDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
        useExisting: MatCellDef
      }]
    }]
  }], null, null);
})();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */


class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef {}

MatHeaderCellDef.ɵfac = /* @__PURE__ */function () {
  let ɵMatHeaderCellDef_BaseFactory;
  return function MatHeaderCellDef_Factory(t) {
    return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef)))(t || MatHeaderCellDef);
  };
}();

MatHeaderCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatHeaderCellDef,
  selectors: [["", "matHeaderCellDef", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
    useExisting: MatHeaderCellDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matHeaderCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }]
    }]
  }], null, null);
})();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */


class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef {}

MatFooterCellDef.ɵfac = /* @__PURE__ */function () {
  let ɵMatFooterCellDef_BaseFactory;
  return function MatFooterCellDef_Factory(t) {
    return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef)))(t || MatFooterCellDef);
  };
}();

MatFooterCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatFooterCellDef,
  selectors: [["", "matFooterCellDef", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
    useExisting: MatFooterCellDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCellDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matFooterCellDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }]
    }]
  }], null, null);
})();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */


class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }

  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */


  _updateColumnCssClassName() {
    super._updateColumnCssClassName();

    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }

}

MatColumnDef.ɵfac = /* @__PURE__ */function () {
  let ɵMatColumnDef_BaseFactory;
  return function MatColumnDef_Factory(t) {
    return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef)))(t || MatColumnDef);
  };
}();

MatColumnDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatColumnDef,
  selectors: [["", "matColumnDef", ""]],
  inputs: {
    sticky: "sticky",
    name: ["matColumnDef", "name"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
    useExisting: MatColumnDef
  }, {
    provide: 'MAT_SORT_HEADER_COLUMN_DEF',
    useExisting: MatColumnDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatColumnDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matColumnDef]',
      inputs: ['sticky'],
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
        useExisting: MatColumnDef
      }, {
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: MatColumnDef
      }]
    }]
  }], null, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matColumnDef']
    }]
  });
})();
/** Header cell template container that adds the right classes and role. */


class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCell {}

MatHeaderCell.ɵfac = /* @__PURE__ */function () {
  let ɵMatHeaderCell_BaseFactory;
  return function MatHeaderCell_Factory(t) {
    return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCell)))(t || MatHeaderCell);
  };
}();

MatHeaderCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatHeaderCell,
  selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-header-cell, th[mat-header-cell]',
      host: {
        'class': 'mat-header-cell',
        'role': 'columnheader'
      }
    }]
  }], null, null);
})();
/** Footer cell template container that adds the right classes and role. */


class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCell {}

MatFooterCell.ɵfac = /* @__PURE__ */function () {
  let ɵMatFooterCell_BaseFactory;
  return function MatFooterCell_Factory(t) {
    return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCell)))(t || MatFooterCell);
  };
}();

MatFooterCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatFooterCell,
  selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
  hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-footer-cell, td[mat-footer-cell]',
      host: {
        'class': 'mat-footer-cell',
        'role': 'gridcell'
      }
    }]
  }], null, null);
})();
/** Cell template container that adds the right classes and role. */


class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCell {}

MatCell.ɵfac = /* @__PURE__ */function () {
  let ɵMatCell_BaseFactory;
  return function MatCell_Factory(t) {
    return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCell)))(t || MatCell);
  };
}();

MatCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCell,
  selectors: [["mat-cell"], ["td", "mat-cell", ""]],
  hostAttrs: ["role", "gridcell", 1, "mat-cell"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCell, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-cell, td[mat-cell]',
      host: {
        'class': 'mat-cell',
        'role': 'gridcell'
      }
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */


class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef {}

MatHeaderRowDef.ɵfac = /* @__PURE__ */function () {
  let ɵMatHeaderRowDef_BaseFactory;
  return function MatHeaderRowDef_Factory(t) {
    return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef)))(t || MatHeaderRowDef);
  };
}();

MatHeaderRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatHeaderRowDef,
  selectors: [["", "matHeaderRowDef", ""]],
  inputs: {
    columns: ["matHeaderRowDef", "columns"],
    sticky: ["matHeaderRowDefSticky", "sticky"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
    useExisting: MatHeaderRowDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matHeaderRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
    }]
  }], null, null);
})();
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */


class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef {}

MatFooterRowDef.ɵfac = /* @__PURE__ */function () {
  let ɵMatFooterRowDef_BaseFactory;
  return function MatFooterRowDef_Factory(t) {
    return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef)))(t || MatFooterRowDef);
  };
}();

MatFooterRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatFooterRowDef,
  selectors: [["", "matFooterRowDef", ""]],
  inputs: {
    columns: ["matFooterRowDef", "columns"],
    sticky: ["matFooterRowDefSticky", "sticky"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
    useExisting: MatFooterRowDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matFooterRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
    }]
  }], null, null);
})();
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */


class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef {}

MatRowDef.ɵfac = /* @__PURE__ */function () {
  let ɵMatRowDef_BaseFactory;
  return function MatRowDef_Factory(t) {
    return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef)))(t || MatRowDef);
  };
}();

MatRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatRowDef,
  selectors: [["", "matRowDef", ""]],
  inputs: {
    columns: ["matRowDefColumns", "columns"],
    when: ["matRowDefWhen", "when"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
    useExisting: MatRowDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRowDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matRowDef]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
    }]
  }], null, null);
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */


class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow {}

MatHeaderRow.ɵfac = /* @__PURE__ */function () {
  let ɵMatHeaderRow_BaseFactory;
  return function MatHeaderRow_Factory(t) {
    return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow)))(t || MatHeaderRow);
  };
}();

MatHeaderRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatHeaderRow,
  selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-header-row"],
  exportAs: ["matHeaderRow"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
    useExisting: MatHeaderRow
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-header-row, tr[mat-header-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
      host: {
        'class': 'mat-header-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matHeaderRow',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
        useExisting: MatHeaderRow
      }]
    }]
  }], null, null);
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */


class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow {}

MatFooterRow.ɵfac = /* @__PURE__ */function () {
  let ɵMatFooterRow_BaseFactory;
  return function MatFooterRow_Factory(t) {
    return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow)))(t || MatFooterRow);
  };
}();

MatFooterRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatFooterRow,
  selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-footer-row"],
  exportAs: ["matFooterRow"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
    useExisting: MatFooterRow
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-footer-row, tr[mat-footer-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
      host: {
        'class': 'mat-footer-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matFooterRow',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
        useExisting: MatFooterRow
      }]
    }]
  }], null, null);
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */


class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow {}

MatRow.ɵfac = /* @__PURE__ */function () {
  let ɵMatRow_BaseFactory;
  return function MatRow_Factory(t) {
    return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow)))(t || MatRow);
  };
}();

MatRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatRow,
  selectors: [["mat-row"], ["tr", "mat-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-row"],
  exportAs: ["matRow"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
    useExisting: MatRow
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatRow_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-row, tr[mat-row]',
      template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
      host: {
        'class': 'mat-row',
        'role': 'row'
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matRow',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
        useExisting: MatRow
      }]
    }]
  }], null, null);
})();
/** Row that can be used to display a message when no data is shown in the table. */


class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow {
  constructor() {
    super(...arguments);
    this._contentClassName = 'mat-no-data-row';
  }

}

MatNoDataRow.ɵfac = /* @__PURE__ */function () {
  let ɵMatNoDataRow_BaseFactory;
  return function MatNoDataRow_Factory(t) {
    return (ɵMatNoDataRow_BaseFactory || (ɵMatNoDataRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow)))(t || MatNoDataRow);
  };
}();

MatNoDataRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatNoDataRow,
  selectors: [["ng-template", "matNoDataRow", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
    useExisting: MatNoDataRow
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNoDataRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matNoDataRow]',
      providers: [{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
        useExisting: MatNoDataRow
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */


class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTextColumn {}

MatTextColumn.ɵfac = /* @__PURE__ */function () {
  let ɵMatTextColumn_BaseFactory;
  return function MatTextColumn_Factory(t) {
    return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn)))(t || MatTextColumn);
  };
}();

MatTextColumn.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatTextColumn,
  selectors: [["mat-text-column"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 0,
  consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
  template: function MatTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
  },
  directives: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTextColumn, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-text-column',
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const EXPORTED_DECLARATIONS = [// Table
MatTable, MatRecycleRows, // Template defs
MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
MatHeaderCell, MatCell, MatFooterCell, // Row directives
MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];

class MatTableModule {}

MatTableModule.ɵfac = function MatTableModule_Factory(t) {
  return new (t || MatTableModule)();
};

MatTableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatTableModule
});
MatTableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, EXPORTED_DECLARATIONS],
      declarations: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */


const MAX_SAFE_INTEGER = 9007199254740991;
/** Shared base class with MDC-based implementation. */

class _MatTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.DataSource {
  constructor(initialData = []) {
    super();
    /** Stream emitting render data to the table (depends on ordered data changes). */

    this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    /** Stream that emits when a new filter string is set on the data source. */

    this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
    /** Used to react to internal changes of the paginator that are made by the data source itself. */

    this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * Subscription to the changes that should trigger an update to the table's rendered rows, such
     * as filtering, sorting, pagination, or base data changes.
     */

    this._renderChangesSubscription = null;
    /**
     * Data accessor function that is used for accessing data properties for sorting through
     * the default sortData function.
     * This default function assumes that the sort header IDs (which defaults to the column name)
     * matches the data's properties (e.g. column Xyz represents data['Xyz']).
     * May be set to a custom function for different behavior.
     * @param data Data object that is being accessed.
     * @param sortHeaderId The name of the column that represents the data.
     */

    this.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];

      if ((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__._isNumberValue)(value)) {
        const numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
        // leave them as strings. For more info: https://goo.gl/y5vbSg

        return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
      }

      return value;
    };
    /**
     * Gets a sorted copy of the data array based on the state of the MatSort. Called
     * after changes are made to the filtered data or when sort changes are emitted from MatSort.
     * By default, the function retrieves the active sort and its direction and compares data
     * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
     * of data ordering.
     * @param data The array of data that should be sorted.
     * @param sort The connected MatSort that holds the current sort state.
     */


    this.sortData = (data, sort) => {
      const active = sort.active;
      const direction = sort.direction;

      if (!active || direction == '') {
        return data;
      }

      return data.sort((a, b) => {
        let valueA = this.sortingDataAccessor(a, active);
        let valueB = this.sortingDataAccessor(b, active); // If there are data in the column that can be converted to a number,
        // it must be ensured that the rest of the data
        // is of the same type so as not to order incorrectly.

        const valueAType = typeof valueA;
        const valueBType = typeof valueB;

        if (valueAType !== valueBType) {
          if (valueAType === 'number') {
            valueA += '';
          }

          if (valueBType === 'number') {
            valueB += '';
          }
        } // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
        // one value exists while the other doesn't. In this case, existing value should come last.
        // This avoids inconsistent results when comparing values to undefined/null.
        // If neither value exists, return 0 (equal).


        let comparatorResult = 0;

        if (valueA != null && valueB != null) {
          // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          }
        } else if (valueA != null) {
          comparatorResult = 1;
        } else if (valueB != null) {
          comparatorResult = -1;
        }

        return comparatorResult * (direction == 'asc' ? 1 : -1);
      });
    };
    /**
     * Checks if a data object matches the data source's filter string. By default, each data object
     * is converted to a string of its properties and returns true if the filter has
     * at least one occurrence in that string. By default, the filter string has its whitespace
     * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
     * filter matching.
     * @param data Data object used to check against the filter.
     * @param filter Filter string that has been set on the data source.
     * @returns Whether the filter matches against the data
     */


    this.filterPredicate = (data, filter) => {
      // Transform the data into a lowercase string of all property values.
      const dataStr = Object.keys(data).reduce((currentTerm, key) => {
        // Use an obscure Unicode character to delimit the words in the concatenated string.
        // This avoids matches where the values of two columns combined will match the user's query
        // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
        // that has a very low chance of being typed in by somebody in a text field. This one in
        // particular is "White up-pointing triangle with dot" from
        // https://en.wikipedia.org/wiki/List_of_Unicode_characters
        return currentTerm + data[key] + '◬';
      }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };

    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(initialData);

    this._updateChangeSubscription();
  }
  /** Array of data that should be rendered by the table, where each object represents one row. */


  get data() {
    return this._data.value;
  }

  set data(data) {
    data = Array.isArray(data) ? data : [];

    this._data.next(data); // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.


    if (!this._renderChangesSubscription) {
      this._filterData(data);
    }
  }
  /**
   * Filter term that should be used to filter out objects from the data array. To override how
   * data objects match to this filter string, provide a custom function for filterPredicate.
   */


  get filter() {
    return this._filter.value;
  }

  set filter(filter) {
    this._filter.next(filter); // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.


    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }
  /**
   * Instance of the MatSort directive used by the table to control its sorting. Sort changes
   * emitted by the MatSort will trigger an update to the table's rendered data.
   */


  get sort() {
    return this._sort;
  }

  set sort(sort) {
    this._sort = sort;

    this._updateChangeSubscription();
  }
  /**
   * Instance of the MatPaginator component used by the table to control what page of the data is
   * displayed. Page changes emitted by the MatPaginator will trigger an update to the
   * table's rendered data.
   *
   * Note that the data source uses the paginator's properties to calculate which page of data
   * should be displayed. If the paginator receives its properties as template inputs,
   * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
   * initialized before assigning it to this data source.
   */


  get paginator() {
    return this._paginator;
  }

  set paginator(paginator) {
    this._paginator = paginator;

    this._updateChangeSubscription();
  }
  /**
   * Subscribe to changes that should trigger an update to the table's rendered rows. When the
   * changes occur, process the current state of the filter, sort, and pagination along with
   * the provided base data and send it to the table for rendering.
   */


  _updateChangeSubscription() {
    var _a; // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
    // The events should emit whenever the component emits a change or initializes, or if no
    // component is provided, a stream with just a null event should be provided.
    // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
    // pipeline can progress to the next step. Note that the value from these streams are not used,
    // they purely act as a signal to progress in the pipeline.


    const sortChange = this._sort ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._sort.sortChange, this._sort.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    const pageChange = this._paginator ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    const dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

    const filteredData = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([dataStream, this._filter]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) => this._filterData(data))); // Watch for filtered data or sort changes to provide an ordered set of data.

    const orderedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([filteredData, sortChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) => this._orderData(data))); // Watch for ordered data or page changes to provide a paged set of data.

    const paginatedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([orderedData, pageChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) => this._pageData(data))); // Watched for paged data changes and send the result to the table to render.

    (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
  }
  /**
   * Returns a filtered data array where each filter object contains the filter string within
   * the result of the filterTermAccessor function. If no filter is set, returns the data array
   * as provided.
   */


  _filterData(data) {
    // If there is a filter string, filter out data that does not contain it.
    // Each data object is converted to a string using the function defined by filterTermAccessor.
    // May be overridden for customization.
    this.filteredData = this.filter == null || this.filter === '' ? data : data.filter(obj => this.filterPredicate(obj, this.filter));

    if (this.paginator) {
      this._updatePaginator(this.filteredData.length);
    }

    return this.filteredData;
  }
  /**
   * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
   * data array as provided. Uses the default data accessor for data lookup, unless a
   * sortDataAccessor function is defined.
   */


  _orderData(data) {
    // If there is no active sort or direction, return the data without trying to sort.
    if (!this.sort) {
      return data;
    }

    return this.sortData(data.slice(), this.sort);
  }
  /**
   * Returns a paged slice of the provided data array according to the provided MatPaginator's page
   * index and length. If there is no paginator provided, returns the data array as provided.
   */


  _pageData(data) {
    if (!this.paginator) {
      return data;
    }

    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.slice(startIndex, startIndex + this.paginator.pageSize);
  }
  /**
   * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
   * index does not exceed the paginator's last page. Values are changed in a resolved promise to
   * guard against making property changes within a round of change detection.
   */


  _updatePaginator(filteredDataLength) {
    Promise.resolve().then(() => {
      const paginator = this.paginator;

      if (!paginator) {
        return;
      }

      paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

      if (paginator.pageIndex > 0) {
        const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
        const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

        if (newPageIndex !== paginator.pageIndex) {
          paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
          // we need our own stream so we know to should re-render the data.

          this._internalPageChanges.next();
        }
      }
    });
  }
  /**
   * Used by the MatTable. Called when it connects to the data source.
   * @docs-private
   */


  connect() {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }

    return this._renderData;
  }
  /**
   * Used by the MatTable. Called when it disconnects from the data source.
   * @docs-private
   */


  disconnect() {
    var _a;

    (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    this._renderChangesSubscription = null;
  }

}
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */


class MatTableDataSource extends _MatTableDataSource {}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=projects_wpdx_src_app_rehab-prio_rehab-prio_module_ts.js.map