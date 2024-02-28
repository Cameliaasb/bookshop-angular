import { Injectable } from '@angular/core';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  private authors = [
    new Author(1, "Amin", "Maalouf"),
    new Author(2, "Mona", "Chollet")
  ]
  GetAuthors() {
    return [...this.authors];
  }
}
