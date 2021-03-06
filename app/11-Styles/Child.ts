/**
 * Created by Eyal on 6/17/2016.
 */
import {Component, Input, SkipSelf, ViewEncapsulation} from "@angular/core";
import {Service} from "./Service";

@Component({
    selector: 'child',
    encapsulation : ViewEncapsulation.Emulated,
    styles: [`
        /*:host{
            display: block;
            padding: 8px;
            border: 1px solid red;
        }*/
        .box{            
            background-color: red;
        }
    `],
    template: `
    <div class="box size">
      Child: <b>{{name}}</b>
    </div>
`
})
export class Child {
    @Input()name:string;
}