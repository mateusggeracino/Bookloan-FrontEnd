import { Client } from './models/Client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

import { ServiceBase } from 'src/app/services/services.base';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ClientService extends ServiceBase {
  constructor(private http: HttpClient) { super() }


  AddClient(client: Client): Observable<Client>{
    let response = this.http
      .post(this.UrlServices + 'api/client', client, {responseType: 'text'})
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
      
    return response;
  }
}
