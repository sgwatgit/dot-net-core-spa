import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ValuesService {

    constructor(private http: Http) { }

    public getValues(): Observable<string> {
        return this.http.get('https://localhost:44332/api/values')
            .map((res: Response) => res.json())
            .catch((error: Response | any) => Observable.throw(error));
    }
}