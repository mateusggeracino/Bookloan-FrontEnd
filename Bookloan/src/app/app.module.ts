import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './pages/index/index.component';
import { ClientComponent } from './pages/clients/client/client.component';
import { BookComponent } from './pages/books/book/book.component';
import { BookAddComponent } from './pages/books/book-add/book-add.component';

import { BookService } from './pages/books/book.service';
import { ClientAddComponent } from './pages/clients/client-add/client-add.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './pages/login/login.services';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    IndexComponent,
    ClientComponent,
    BookComponent,
    BookAddComponent,
    ClientAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    BookService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
