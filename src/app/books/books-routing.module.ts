import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path: "", component : ListbooksComponent},
  {path: "books/add", component: AddBookComponent},
  {path: "books/edit", component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
