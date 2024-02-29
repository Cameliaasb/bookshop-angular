import { Component, OnDestroy, OnInit } from '@angular/core';
import { Author } from '../model/author';
import { AuthorService } from '../services/author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit, OnDestroy{
  authors? : Author[]
  authorSubscription? : Subscription
  constructor(private authorService : AuthorService) {}

  delete(author : Author) {
    if (confirm("Supprimer l'auteur?")) {
      this.authorService.deleteAuthor(author);
    }
  }

  ngOnInit(): void {
    this.authors = this.authorService.GetAuthors();

    // s'il y a une modification, listauthors y est subscribed et la récupère
    this.authorSubscription = this.authorService.authorsListUpdated
      .subscribe(authors => this.authors = authors);

  }

  // récupère quand la page est fermée,
  ngOnDestroy(): void {
    // Arrêterr l'écoute
    this.authorSubscription?.unsubscribe();
  }

}
