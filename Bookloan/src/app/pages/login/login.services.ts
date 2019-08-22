import { ServiceBase } from 'src/app/services/services.base';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {map, catchError }from 'rxjs/operators'
import { Login } from './models/Login';

export class LoginService extends ServiceBase {
    constructor(private http: HttpClient) { super() }
  
    Login(login: Login): Observable<Login>{
      return this.http
      .post(this.UrlServices + 'api/auth', login, {responseType: 'text'})
        .pipe(
          map(this.extractData),
          catchError(this.serviceError)
        );
    }
  }
  
  