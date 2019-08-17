import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksUrl = 'https://bookloan.azurewebsites.net/api/book';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any[]>(`${this.booksUrl}`);
  }
}
