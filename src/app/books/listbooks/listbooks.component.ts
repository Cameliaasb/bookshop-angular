import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})

// Ma classe doit implémenter une interface "OnInit" si on veut lui passer des données au chargement
// il faut implémenter la méthode : ngOnInit()
export class ListbooksComponent implements OnInit {

  books? : Book[];  // initialise books
  selectedBook? : Book;
  constructor(private bookService : BookService){}
  displayedBooks? : Book[];
  filteredBooks(keyword : string){
    this.displayedBooks = this.books!.filter(b => b.title.toLowerCase().includes(keyword.toLowerCase()));
  }

  displayBook(book: Book) {
    this.selectedBook = book;
  };

  hideCard(message : string) {
    this.selectedBook = undefined;
    console.log(message);
  };


  // Implemente l'interface OnInit
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}
