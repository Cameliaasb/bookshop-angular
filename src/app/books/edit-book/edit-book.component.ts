import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { NgForm } from '@angular/forms';
import { Author } from 'src/app/authors/model/author';
import { AuthorService } from 'src/app/authors/services/author.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  book? : Book;
  authors? : Author[];

  constructor(
    private route : ActivatedRoute,
    private bookService : BookService,
    private authorService : AuthorService,
    private router : Router,
  ){}

  ngOnInit(): void {
    const bookId = this.route.params.subscribe({
      next: params => this.book = this.bookService.getBookById(+params["bookId"])
    })
    this.authors = this.authorService.GetAuthors();

  }

  editBook(f : NgForm) {
    this.bookService.editBook(this.book!);
    this.router.navigate(["/books"])
  }
}
