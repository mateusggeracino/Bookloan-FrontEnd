import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ClientComponent } from './pages/client/client.component';
import { BookComponent } from './pages/book/book.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'client', component: ClientComponent },
  { path: 'book', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
