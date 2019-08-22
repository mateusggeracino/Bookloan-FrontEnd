import { Book } from './models/Book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { ServiceBase } from 'src/app/services/services.base';

@Injectable({
  providedIn: 'root'
})

export class BookService extends ServiceBase {
  constructor(private http: HttpClient) { super() }

  BookPost(book: Book): Observable<Book> {

    let response = this.http
      .post(this.UrlServices + 'api/Book', book, super.GetAuthHeaderJson())
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
      
    return response;
  }

  GetAll() {
    return this.http
      .get<Book[]>(this.UrlServices + 'api/Book')
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      )
  }
}

