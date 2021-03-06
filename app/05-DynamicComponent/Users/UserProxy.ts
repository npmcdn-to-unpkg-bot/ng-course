/**
 * Created by Eyal Vardi on 5/03/2016.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Global,ngServices} from "ngEx";

// Private Static fields:
var http:Http;



@Global()
@Injectable()
export class UserProxy{

    private http:Http;    

    load(num=3){
        if(!http){
            http = ngServices.get(Http);
        }
       
        // Promise
        return http
            .get(`http://api.randomuser.me/?results=${num}`)
            .toPromise()
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
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
    }
}