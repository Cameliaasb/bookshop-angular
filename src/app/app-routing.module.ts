import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // une route, "un path" = un composant + une URL
  // Dès qu'un path est appelé, le module / composants est chargé
  // après avoir config les routes la première fois => aller dans app.component.html et y rajouter
  // <router-outlet> </router-outlet>


  // Appeler des modules
  {path:"books", loadChildren: () =>  import('./books/books.module').then(m=> m.BooksModule)},
  {path:"authors", loadChildren: () =>  import('./authors/authors.module').then(m=> m.AuthorsModule)},

  // Appeler des composants
  {path: "about", component: AboutComponent},

  // Route par défaut. pathMatch full pour éviter que ça matche avec une partie
  {path: "", redirectTo: "books", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
