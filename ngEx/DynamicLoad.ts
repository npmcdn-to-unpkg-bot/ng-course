/**
 * Created by Eyal on 4/12/2016.
 */
import {Component} from "@angular/core";
import {stringify} from "querystring";

export function compileToComponent(template , inputs=[] , directives=[] , selector = 'fake') {
    @Component({
        selector    ,
        inputs      ,
        template    ,
        directives
    })
    class ContainerComponent {
        data:any;
        ngOnInit(){
            console.log(JSON.stringify(this.data));
        }
    };
    return ContainerComponent;
}