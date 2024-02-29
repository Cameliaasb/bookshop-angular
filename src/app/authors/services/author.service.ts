import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { Subject } from 'rxjs';

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

  addAuthor(author : Author){
    this.authors = [...this.authors, author];
  }
  getLastId(){
    return this.authors[this.authors.length - 1].id
  }

  authorsListUpdated = new Subject<Author[]>();

  getAuthorFullName(id: number){
    const author = this.getAuthor(id);
    const authorFullName = ` ${author?.firstName} ${author?.lastName}`;
    return authorFullName;
  }

  getAuthor(id: number) {
    const author = this.authors.find(a => a.id === id);
    return author;
  }

  editAuthor(author : Author) {
    // C'est le service qui met à jour la vraie, pas que les books affichés
    this.authors = this.authors.map(
      a=>a.id===author.id?author:a
    );
  }

  deleteAuthor(author: Author){
    this.authors = this.authors?.filter(a => a !== author);
    // pour récupérer la liste sans re initialiser le composant (changer d'onglet et revenir)
    this.authorsListUpdated.next([...this.authors]);
  }
}
