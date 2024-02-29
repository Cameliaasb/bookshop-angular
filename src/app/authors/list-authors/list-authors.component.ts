import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit{
  authors? : Author[]
  constructor(private authorService : AuthorService) {}

  delete(author : Author) {
    if (confirm("Supprimer l'auteur?")) {
      this.authorService.deleteAuthor(author);
    }
  }

  ngOnInit(): void {
    this.authors = this.authorService.GetAuthors();
  }
}
