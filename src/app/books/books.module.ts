import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { AboutComponent } from '../about/about.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';


@NgModule({
  declarations: [
    ListbooksComponent,
    BookdetailsComponent,
    SearchBooksComponent,
    AboutComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
