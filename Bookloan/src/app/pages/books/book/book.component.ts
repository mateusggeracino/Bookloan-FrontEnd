import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Array<Book>;
  actualPage = 1;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.GetAllBooks();
  }

  GetAllBooks(){
    let teste = this.bookService.GetAll().subscribe(result => this.books = result);
    return teste;
  }
}
