import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ClientComponent } from './pages/clients/client/client.component';
import { BookComponent } from './pages/books/book/book.component';
import { BookAddComponent } from './pages/books/book-add/book-add.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'client', component: ClientComponent },
  { path: 'book', component: BookComponent },
  { path: 'book-add', component: BookAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
