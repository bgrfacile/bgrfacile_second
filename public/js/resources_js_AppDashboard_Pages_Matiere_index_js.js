"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_AppDashboard_Pages_Matiere_index_js"],{

/***/ "./resources/js/AppDashboard/Pages/Matiere/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/AppDashboard/Pages/Matiere/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var IndexMatiere = function IndexMatiere(_ref) {
  var matieres = _ref.matieres;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
      children: "Liste des matieres"
    }), matieres.map(function (matiere, key) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          children: matiere.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            children: "Modifier"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            children: "Supprimer"
          })]
        })]
      }, key);
    })]
  });
}; // Index.layout = (page) => (
//     <DashboardLayout>
//         {page}
//     </DashboardLayout>
// );


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexMatiere);

/***/ })

}]);