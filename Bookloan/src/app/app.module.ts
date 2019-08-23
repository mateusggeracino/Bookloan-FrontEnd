import { MainLoginComponent } from './shared/main-login/main-login.component';
import { ClientService } from './pages/clients/client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './shared/main-navbar/main-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    ClientComponent,
    BookComponent,
    BookAddComponent,
    ClientAddComponent,
    LoginComponent,
    MainLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [
    BookService,
    LoginService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
