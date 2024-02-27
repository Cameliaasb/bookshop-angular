import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  // une route, "un path" = un composant + une URL
  // Dès qu'un path est appelé, le composant est chargé
  {path: "books", component : ListbooksComponent},
  {path: "add", component: AddBookComponent},
  {path: "edit", component: EditBookComponent},
  {path: "about", component: AboutComponent},
  {path: "", redirectTo: "books", pathMatch: "full"}

  // après avoir config les routes => aller dans app.component.html et y rajouter
  // <router-outlet> </router-outlet>
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
