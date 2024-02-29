import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { BookService } from '../services/book.service';
import { IBookToDisplay } from '../model/ibook-to-display';
import { BookToDisplay } from '../model/book-to-display';
import { AuthorService } from 'src/app/authors/services/author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})

// Ma classe doit implémenter une interface "OnInit" si on veut lui passer des données au chargement
// il faut implémenter la méthode : ngOnInit()
export class ListbooksComponent implements OnInit, OnDestroy {

  books : Book[] = [];  // initialise books
  selectedBook? : IBookToDisplay;
  booksToDisplay : IBookToDisplay[] = [];
  filteredBooks? : IBookToDisplay[];
  bookSubscription? : Subscription;


  constructor(
    private bookService : BookService,
    private authorService : AuthorService
    ){}


  filterBooks(keyword : string){
    this.filteredBooks = this.booksToDisplay!.filter(b => b.title.toLowerCase().includes(keyword.toLowerCase()));
  }

  displayBook(book: IBookToDisplay) {
    this.selectedBook = book;
  };

  hideCard(message : string) {
    this.selectedBook = undefined;
    console.log(message);
  };

  deleteBook(bookId : number) {
    if (confirm("Supprimer le livre ?")) {
      this.bookService.deleteBook(bookId);
    }
  }

  transformBooks() : IBookToDisplay[] {
    return this.books.map(b=>{
      return {
        id : b.id,
        cover : b.cover,
        title : b.title,
        author : this.authorService.getAuthorFullName(+b.authorId),
        price : b.price
      } as IBookToDisplay
  })}

  // Implemente l'interface OnInit
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.booksToDisplay = this.transformBooks();


    this.bookSubscription = this.bookService.booksListUpdated
      .subscribe(b => {
        this.books = b,
        this.booksToDisplay = this.transformBooks()
      })
  }
  ngOnDestroy(): void {
    this.bookSubscription?.unsubscribe();
  }
}
