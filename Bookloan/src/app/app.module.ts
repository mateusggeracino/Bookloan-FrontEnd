import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './pages/index/index.component';
import { ClientComponent } from './pages/clients/client/client.component';
import { BookComponent } from './pages/books/book/book.component';
import { BookAddComponent } from './pages/books/book-add/book-add.component';

import { BookService } from './pages/books/book.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    IndexComponent,
    ClientComponent,
    BookComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    BookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
