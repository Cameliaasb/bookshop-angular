import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { SearchBooksComponent } from './search-books/search-books.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbooksComponent,
    BookdetailsComponent,
    SearchBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
