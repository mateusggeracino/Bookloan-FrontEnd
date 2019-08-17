import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Array<any>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.bookService.get().subscribe(data => this.books = data)
  }
}
