/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Component, Renderer, ElementRef, NgZone} from "@angular/core";
import "./Users/Users";
import "./Users/User";
import "./Users/UserContainer/UserContainer";
import {LinkToCodeComponent} from "../share/link-to-code.component";

@Component({
    selector: 'my-app',
    styles:[`
        :host{
            display: block;
        }
    `],
    directives:[LinkToCodeComponent],
    template: `
    <h1>Dynamic Component <link-to-code></link-to-code></h1>
    <users></users>
`
})
export class App{
    constructor(private render:Renderer,
                private elmRef:ElementRef,
                private zone: NgZone
    ){}

    ngDoCheck(){
        if(!this.render) return;
        this.render.setElementStyle(
            this.elmRef.nativeElement,'border','2px solid red');
        this.zone.runOutsideAngular(()=>{
            setTimeout(()=>{
                this.render.setElementStyle(
                    this.elmRef.nativeElement,'border','0');
            },700);
        });
    }
}