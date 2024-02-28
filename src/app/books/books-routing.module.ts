import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path: "", component : ListbooksComponent},
  // Ecrire "add" et "books/add" c'est pareil. "/add" : Erreur
  {path: "add", component: AddBookComponent},
  {path: "edit", component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
