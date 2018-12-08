(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular-devkit/build-angular/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"max-width: 960px; margin: 100px auto;\">\n  <img src=\"assets/logo.svg\" style=\"margin: 0 auto 50px auto; width: 200px; display: block;\">\n  <h1 style=\"color: white; text-align: center; font-weight: 300; font-size: 50px;\">DepoSet</h1>\n  <app-trade-form></app-trade-form>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _trade_trade_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade/trade.module */ "./src/app/trade/trade.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_9__);










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _trade_trade_module__WEBPACK_IMPORTED_MODULE_6__["TradeModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_9__["PanelModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/trade/trade-form/ProxyABI.json":
/*!************************************************!*\
  !*** ./src/app/trade/trade-form/ProxyABI.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = [{"constant":false,"inputs":[{"name":"set","type":"address"},{"name":"amountArg","type":"uint256"},{"name":"kyber","type":"address"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"set","type":"address"},{"name":"kyber","type":"address"}],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"ETHER_ADDRESS","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"}];

/***/ }),

/***/ "./src/app/trade/trade-form/TokenABI.json":
/*!************************************************!*\
  !*** ./src/app/trade/trade-form/TokenABI.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = [{"constant":true,"inputs":[],"name":"naturalUnit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getComponents","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUnits","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenAddress","type":"address"}],"name":"tokenIsComponent","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_issuer","type":"address"},{"name":"_quantity","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_quantity","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/trade/trade-form/trade-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/trade/trade-form/trade-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-field {\n  width: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZGUvdHJhZGUtZm9ybS90cmFkZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC90cmFkZS90cmFkZS1mb3JtL3RyYWRlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzLWZpZWxkIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/trade/trade-form/trade-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/trade/trade-form/trade-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-card header=\"Your Wallet\">\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-md-6\" style=\"font-size: 32px;\">\n      <p-dropdown [options]=\"accounts\" [(ngModel)]=\"model.account\" autoWidth></p-dropdown>\n    </div>\n    <div class=\"ui-g-12 ui-md-6\" style=\"text-align: right; font-size: 32px;\">\n      <fa-icon [icon]=\"['fab', 'ethereum']\"></fa-icon>&nbsp;<span>{{model.balance | number: '1.4-4'}}</span>\n    </div>\n  </div>\n  <hr>\n  <h2 style=\"margin-bottom: 5px;\">Tokens</h2>\n  <div class=\"ui-g\" *ngFor=\"let token of tokens\">\n    <div class=\"ui-g-12 ui-md-6\" style=\"font-size: 32px;\">\n      <input type=\"text\" pInputText [value]=\"token.address\" disabled style=\"width: 400px;\"/>\n    </div>\n    <div class=\"ui-g-12 ui-md-6\" style=\"text-align: right; font-size: 32px;\">\n      {{token.name}} <img [src]=\"token.icon\"> &nbsp;<span>{{token.balance | number: '1.4-4'}}</span>&nbsp;\n      <p-button label=\"+\" (onClick)=\"showBuyDialog(token)\" styleClass=\"ui-button-info\"></p-button>\n      <p-button label=\"-\" (onClick)=\"showSellDialog(token)\" [disabled]=\"token.allowance == 0\" styleClass=\"ui-button-danger\"></p-button>\n      <p-button label=\"V\" (onClick)=\"approveToken(token)\" [disabled]=\"token.allowance > 0\" styleClass=\"ui-button-sucess\"></p-button>\n    </div>\n  </div>\n</p-card>\n\n<p-dialog [header]=\"displayBuyDialogTitle\" [(visible)]=\"displayBuyDialog\">\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-md-6\" style=\"font-size: 32px;\">\n      <div class=\"ui-inputgroup\">\n        <span class=\"ui-inputgroup-addon\" style=\"font-size: 24px;\"><fa-icon [icon]=\"['fab', 'ethereum']\"></fa-icon></span>\n        <input type=\"text\" pInputText pKeyFilter=\"num\" style=\"font-size: 24px;\" [(ngModel)]=\"buy_amount\" placeholder=\"Amount in Ether\"/>\n      </div>\n\n    </div>\n    <div class=\"ui-g-12 ui-md-6\" style=\"text-align: right; font-size: 32px;\">\n      <p-button label=\"BUY\" (onClick)=\"buy()\" styleClass=\"ui-button-info\"></p-button>\n    </div>\n  </div>\n</p-dialog>\n\n\n<p-dialog [header]=\"displaySellDialogTitle\" [(visible)]=\"displaySellDialog\">\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-md-6\" style=\"font-size: 32px;\">\n      <div class=\"ui-inputgroup\">\n        <span class=\"ui-inputgroup-addon\" style=\"font-size: 24px;\">\n          <img [src]=\"selected_token.icon\">\n        </span>\n        <input type=\"text\" pInputText pKeyFilter=\"num\" style=\"font-size: 24px;\" [(ngModel)]=\"sell_amount\" placeholder=\"Amount in {{selected_token.name}}\"/>\n      </div>\n\n    </div>\n    <div class=\"ui-g-12 ui-md-6\" style=\"text-align: right; font-size: 32px;\">\n      <p-button label=\"Sell\" (onClick)=\"sell()\" styleClass=\"ui-button-danger\"></p-button>\n    </div>\n  </div>\n</p-dialog>\n\n\n\n"

/***/ }),

/***/ "./src/app/trade/trade-form/trade-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/trade/trade-form/trade-form.component.ts ***!
  \**********************************************************/
/*! exports provided: TradeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeFormComponent", function() { return TradeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["fab"]);
var tokenbArtifacts = __webpack_require__(/*! ./TokenABI.json */ "./src/app/trade/trade-form/TokenABI.json");
var proxyArtifacts = __webpack_require__(/*! ./ProxyABI.json */ "./src/app/trade/trade-form/ProxyABI.json");
var TradeFormComponent = /** @class */ (function () {
    function TradeFormComponent(web3Service) {
        this.web3Service = web3Service;
        this.proxySmartContractAddress = '0xd079ACF6491bBF8bBbbee6a5D73EAa0DCEdeC0c2';
        this.kyberNetworkContractAddress = '0x818e6fecd516ecc3849daf6845e3ec868087b755';
        this.displayBuyDialog = false;
        this.displaySellDialog = false;
        this.buy_amount = '0.01';
        this.sell_amount = '0.0';
        this.accounts = [];
        this.tokens = [
            {
                address: '0xfa10e13fe555760a5297dc14eb6562a1a53e4e37',
                icon: 'https://s3.amazonaws.com/set-core/img/set-icons/ethx_icon.svg',
                name: 'EthereumX',
                balance: Number(0),
                allowance: 0
            },
            {
                address: '0x02ec0c9e6d3c08b8fb12fec51ccba048afbc36a6',
                icon: 'https://s3.amazonaws.com/set-core/img/set-icons/stableset.svg',
                name: 'StableSet',
                balance: Number(0),
                allowance: 0
            },
            {
                address: '0xf860f90e1f55e3528682e18850612cbb45bbf1bc',
                icon: 'https://s3.amazonaws.com/set-core/img/set-icons/dex_icon.svg',
                name: 'DEXSet',
                balance: Number(0),
                allowance: 0
            },
        ];
        this.run = false;
        this.model = {
            amount: 5,
            receiver: '',
            balance: 0,
            EthereumXBalance: 0,
            DEXSetBalance: 0,
            StableSetBalance: 0,
            account: ''
        };
        this.displayBuyDialogTitle = '';
        this.displaySellDialogTitle = '';
        this.status = '';
        console.log('Constructor: ' + web3Service);
    }
    TradeFormComponent.prototype.ngOnInit = function () {
        console.log('OnInit: ' + this.web3Service);
        console.log(this);
        this.watchAccount();
        this.watchTokenBalances();
        this.watchWalletBalances();
        this.getAllowance();
        this.selected_token = this.tokens[0];
    };
    TradeFormComponent.prototype.showBuyDialog = function (token) {
        this.selected_token = token;
        this.displayBuyDialogTitle = 'Buy ' + token.name + ' Token';
        this.displayBuyDialog = true;
    };
    TradeFormComponent.prototype.showSellDialog = function (token) {
        this.selected_token = token;
        this.displaySellDialogTitle = 'Sell ' + token.name + ' Token';
        this.displaySellDialog = true;
    };
    TradeFormComponent.prototype.closeDialog = function () {
        this.displayBuyDialog = false;
        this.displaySellDialog = false;
    };
    TradeFormComponent.prototype.watchAccount = function () {
        var _this = this;
        this.web3Service.accountsObservable.subscribe(function (accounts) {
            console.log('Accounts: ', accounts);
            for (var i = 0; i < accounts.length; i++) {
                _this.accounts.push({
                    label: accounts[i],
                    value: accounts[i],
                });
            }
            console.log('Accounts', _this.accounts);
            _this.model.account = accounts[0];
        });
    };
    TradeFormComponent.prototype.getAllowance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var delay, i, contract, _a, e_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!this.web3Service.web3 || !this.model.account || !this.tokens)) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.getAllowance()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        i = 0;
                        _b.label = 4;
                    case 4:
                        if (!(i < this.tokens.length)) return [3 /*break*/, 9];
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        contract = new this.web3Service.web3.eth.Contract(tokenbArtifacts, this.tokens[i].address);
                        _a = this.tokens[i];
                        return [4 /*yield*/, contract.methods
                                .allowance(this.model.account, this.proxySmartContractAddress)
                                .call()];
                    case 6:
                        _a.allowance = _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 8];
                    case 8:
                        i++;
                        return [3 /*break*/, 4];
                    case 9:
                        setTimeout(function () { return _this.getAllowance(); }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    TradeFormComponent.prototype.watchTokenBalances = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = 0;
                        _b.label = 1;
                    case 1:
                        if (!(i < this.tokens.length)) return [3 /*break*/, 4];
                        _a = this.tokens[i];
                        return [4 /*yield*/, this.getTokenBalance(this.tokens[i].address)];
                    case 2:
                        _a.balance = _b.sent();
                        _b.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        setTimeout(function () { return _this.watchTokenBalances(); }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    TradeFormComponent.prototype.watchWalletBalances = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var delay, balance;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.web3Service.web3 || !this.model.account)) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.watchWalletBalances()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.web3Service.web3.eth.getBalance(this.model.account)];
                    case 4:
                        balance = _a.sent();
                        this.model.balance = Number(this.web3Service.web3.utils.fromWei(balance || '0', 'ether'));
                        // console.log('Wallet Balance', this.model.balance);
                        setTimeout(function () { return _this.watchWalletBalances(); }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    TradeFormComponent.prototype.setStatus = function (status) {
        console.log('Status', status);
    };
    TradeFormComponent.prototype.approveToken = function (token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var delay, contract, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.web3Service.web3 || !this.model.account)) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.approveToken(token)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contract = new this.web3Service.web3.eth.Contract(tokenbArtifacts, token.address);
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, contract.methods
                                .approve(this.proxySmartContractAddress, this.web3Service.web3.utils.toHex(this.web3Service.web3.utils.toBN(2).pow(this.web3Service.web3.utils.toBN(255))))
                                .send({
                                from: this.model.account
                            })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TradeFormComponent.prototype.getTokenBalance = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var delay, balance, contract, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3Service.web3) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getTokenBalance(address)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contract = new this.web3Service.web3.eth.Contract(tokenbArtifacts, address);
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, contract.methods
                                .balanceOf(this.model.account)
                                .call()];
                    case 5:
                        balance = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_3 = _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/, Number(this.web3Service.web3.utils.fromWei(balance || '0', 'ether'))];
                }
            });
        });
    };
    TradeFormComponent.prototype.buy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var proxyContract, result, e_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeDialog();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        proxyContract = new this.web3Service.web3.eth.Contract(proxyArtifacts, this.proxySmartContractAddress);
                        return [4 /*yield*/, proxyContract.methods
                                .buy(this.selected_token.address, this.kyberNetworkContractAddress)
                                .send({
                                value: this.web3Service.web3.utils.toWei(this.buy_amount),
                                from: this.model.account
                            })];
                    case 2:
                        result = _a.sent();
                        console.log('Buy result', result);
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.log(e_4);
                        alert('Error: ' + e_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TradeFormComponent.prototype.sell = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var proxyContract, result, e_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.closeDialog();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        proxyContract = new this.web3Service.web3.eth.Contract(proxyArtifacts, this.proxySmartContractAddress);
                        return [4 /*yield*/, proxyContract.methods
                                .sell(this.selected_token.address, this.web3Service.web3.utils.toWei(this.sell_amount), this.kyberNetworkContractAddress)
                                .send({
                                from: this.model.account
                            })];
                    case 2:
                        result = _a.sent();
                        console.log('Buy result', result);
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        console.log(e_5);
                        alert('Error: ' + e_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TradeFormComponent.prototype.setAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        this.model.amount = e.target.value;
    };
    TradeFormComponent.prototype.setReceiver = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.model.receiver = e.target.value;
    };
    TradeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trade-form',
            template: __webpack_require__(/*! ./trade-form.component.html */ "./src/app/trade/trade-form/trade-form.component.html"),
            styles: [__webpack_require__(/*! ./trade-form.component.css */ "./src/app/trade/trade-form/trade-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]])
    ], TradeFormComponent);
    return TradeFormComponent;
}());



/***/ }),

/***/ "./src/app/trade/trade.module.ts":
/*!***************************************!*\
  !*** ./src/app/trade/trade.module.ts ***!
  \***************************************/
/*! exports provided: TradeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeModule", function() { return TradeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _trade_form_trade_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trade-form/trade-form.component */ "./src/app/trade/trade-form/trade-form.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");











var TradeModule = /** @class */ (function () {
    function TradeModule() {
    }
    TradeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_4__["UtilModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["KeyFilterModule"]
            ],
            declarations: [_trade_form_trade_form_component__WEBPACK_IMPORTED_MODULE_3__["TradeFormComponent"]],
            exports: [_trade_form_trade_form_component__WEBPACK_IMPORTED_MODULE_3__["TradeFormComponent"]]
        })
    ], TradeModule);
    return TradeModule;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "./src/app/util/web3.service.ts");




var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]
            ],
            declarations: []
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        var _this = this;
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        setInterval(function () { return _this.refreshAccounts(); }, 100);
    };
    Web3Service.prototype.refreshAccounts = function () {
        var _this = this;
        this.web3.eth.getAccounts(function (err, accs) {
            // console.log('Refreshing accounts');
            if (err != null) {
                console.warn('There was an error fetching your accounts.');
                return;
            }
            // Get the initial account balance so it can be displayed.
            if (accs.length === 0) {
                console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            if (!_this.accounts || _this.accounts.length !== accs.length || _this.accounts[0] !== accs[0]) {
                console.log('Observed new accounts');
                _this.accountsObservable.next(accs);
                _this.accounts = accs;
            }
            _this.ready = true;
        });
    };
    Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/deacix/Projects/Hackathon/DepoSet/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map