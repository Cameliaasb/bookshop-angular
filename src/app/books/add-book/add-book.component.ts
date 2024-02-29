import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Book } from '../model/book';
import { Author } from 'src/app/authors/model/author';
import { AuthorService } from 'src/app/authors/services/author.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  implements OnInit {
  authors : Author[] = [];
  constructor(
    private bookService : BookService,
    private router : Router,
    private authorService : AuthorService
    ){}

  addBook(f : NgForm){
    const id = this.bookService.getLastId() + 1;
    const book = new Book(id, f.value.coverURL, f.value.title, +f.value.authorId, +f.value.price );
    this.bookService.addBook(book);
    this.router.navigate(['/books']);

  }

  ngOnInit(): void {
    this.authors = this.authorService.GetAuthors();
  }
}
