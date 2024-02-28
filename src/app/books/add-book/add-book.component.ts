import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(
    private bookService : BookService,
    private router : Router){}

  addBook(f : NgForm){
    const id = this.bookService.getLastId() + 1;
    const book = new Book(id, f.value.coverURL, f.value.title, f.value.author, f.value.price );
    this.bookService.addBook(book);
    this.router.navigate(['/books']);

  }
}
