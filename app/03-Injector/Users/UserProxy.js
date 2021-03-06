"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Eyal Vardi on 5/03/2016.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ngEx_1 = require("ngEx");
require('rxjs/add/operator/toPromise');
// Private Static fields:
var http;
var UserProxy = (function () {
    function UserProxy() {
    }
    //private http:Http;
    UserProxy.prototype.ngExOnInit = function () {
        if (!http) {
            http = ngEx_1.ngServices.get(http_1.Http);
        }
    };
    UserProxy.prototype.load = function (num) {
        if (num === void 0) { num = 3; }
        // Promise
        return http
            .get("http://api.randomuser.me/?results=" + num)
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .then(function (data) {
            return data.results;
        });
        // Obsr...
        /*
         return this.http
         .get(`http://api.randomuser.me/?results=${num}`)
         .map((res)=>{
         return res.json();
         })
         .map((data)=>{
         return data.results;
         });
         */
    };
    UserProxy = __decorate([
        ngEx_1.Global(),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserProxy);
    return UserProxy;
}());
exports.UserProxy = UserProxy;
exports.sUserProxy = new UserProxy();
//# sourceMappingURL=UserProxy.js.map