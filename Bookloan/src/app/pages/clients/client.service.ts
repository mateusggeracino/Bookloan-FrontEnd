import { Client } from './models/Client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {map, catchError }from 'rxjs/operators'
import { ServiceBase } from 'src/app/services/services.base';

@Injectable({
  providedIn: 'root'
})

export class ClientService extends ServiceBase {
  constructor(private http: HttpClient) { super() }

  AddClient(client: Client): Observable<Client>{
    return this.http
    .post(this.UrlServices + 'api/client', client, {responseType: 'text'})
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }
}

