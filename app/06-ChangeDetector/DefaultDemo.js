"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var BaseDemo_1 = require("./BaseDemo");
var ngEx_1 = require("ngEx");
var do_check_cmp_1 = require("./do-check.cmp");
var timer_cmp_1 = require("./timer.cmp");
var DefaultDemo = (function (_super) {
    __extends(DefaultDemo, _super);
    function DefaultDemo(cd, elmRef, render, zone) {
        _super.call(this, cd, elmRef, render, zone, 'DefaultDemo');
    }
    DefaultDemo = __decorate([
        ngEx_1.Global(),
        core_1.Component({
            selector: 'default-demo',
            directives: [do_check_cmp_1.DoCheckComp, timer_cmp_1.TimerComp],
            styles: ["\n        :host{display: block; text-align: left;margin: 8px;} \n        .border{border: 1px solid black;padding: 8px;}\n    "],
            //providers:[DebugElement],
            //changeDetection: ChangeDetectionStrategy.Detached,
            template: "    \n    <div class=\"border\">\n        \n        \n        <h3>CheckAlways Demo (default)</h3>\n        Test: <input type=\"text\" [(ngModel)]=\"test\"> {{getTest()}} <br>\n        Name: {{getName()}} <br>\n        User Name : {{user.name}} <br>\n        <button (click)=\"changeName()\">Change</button>        \n        <br><br>\n        <div style=\"display: flex\">\n            <do-check [name]=\"'Default Demo'\" [updateName]=\"name\"></do-check>\n            <do-check [isDetach]=\"true\" [name]=\"'Default Demo'\" [updateName]=\"name\"></do-check>\n        </div>\n        <br>\n        <button (click)=\"detach()\">Detach</button>\n        <button (click)=\"reattach()\">Reattach</button>\n        <button (click)=\"detectChanges()\">detectChanges</button>\n        <button (click)=\"markForCheck()\">markForCheck</button>\n        <span>State: {{getCdState()}}</span>        \n    </div>\n" }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ElementRef, core_1.Renderer, core_1.NgZone])
    ], DefaultDemo);
    return DefaultDemo;
}(BaseDemo_1.BaseDemo));
exports.DefaultDemo = DefaultDemo;
//# sourceMappingURL=DefaultDemo.js.map