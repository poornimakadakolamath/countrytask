import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Country } from '../models/country';

@Injectable()
export class CountryService {
    constructor(private http: Http) { }

    getCountries() : Observable<Country[]>{
        return this.http.get('https://restcountries.eu/rest/v2/all')
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body || {};
      }
    
      private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
      }
}