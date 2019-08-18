import { BookService } from './../book.service';
import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { GenericValidator } from './../../../utils/generic.form.validator';
import { Book } from '../models/Book';
import { Observable, fromEvent, merge } from 'rxjs';
import { CustomFormsModule } from 'ng2-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})

export class BookAddComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  subscribeForm: FormGroup;
  book: Book;
  validationMessages: { [key: string]: { [key: string]: string } };
  genericValidator: GenericValidator;
  displayMessage: { [key: string]: string } = {};
  errors: string[];

  constructor(private fb: FormBuilder,
    private bookService: BookService,
    private router: Router) {

    this.validationMessages = {
      title: {
        required: "O Título é obrigatório",
        minlength: "O Título precisa ter no mínimo 2 caracteres",
        maxlength: "O Título precisa ter no máximo 80 caracteres",
      },
      author: {
        required: "O campo Autor é um campo obrigatório",
        minlength: "O campo Autor deve ter no mínimo 2 caracteres",
        maxlength: "O campo Autor deve ter no mínimo 100 caracteres"
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {

    this.subscribeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    });
  }

  ngAfterViewInit() {
    let controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.subscribeForm);
    })
  }

  addBook() {
    if (this.subscribeForm.valid && this.subscribeForm.dirty) {
      let book = Object.assign({}, this.book, this.subscribeForm.value);

      this.bookService.BookPost(book).subscribe(
        result => { this.onSaveComplete(result) },
        fail => { this.onError(fail) });
    }
  }

  onSaveComplete(response: any) {
    this.subscribeForm.reset();
    this.errors = [];

    // para adicionar o token no localstore do navegador.
    // localStorage.setItem('bookLoan.token', response.result.access_token);
    // localStorage.setItem('bookLoan.user', JSON.stringify(response.result.user));

    this.router.navigate(['book'])
  }

  onError(fail: any) {
    this.errors = fail.error;
  }
}
