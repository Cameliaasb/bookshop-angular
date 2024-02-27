import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent {
  @Output() filterBooks = new EventEmitter<string>();

  searchBook(keyword: string) {
    this.filterBooks.emit(keyword)
  }
}
