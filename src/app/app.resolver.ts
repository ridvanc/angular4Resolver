import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AppResolver implements Resolve<any>{
    constructor(private http: Http) {
        
    }
    resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot) {
        
        console.log('Logging collected route paramater', route.params['name']);
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

}
