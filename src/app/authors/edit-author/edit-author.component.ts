import { Component, Input, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  // Documentation : https://angular.io/guide/router
  constructor(
    private authorService : AuthorService,
    private route : ActivatedRoute,          // pour accéder aux params
    private router : Router,                 // pour les redirections
    ) {}
  author? : Author;

  ngOnInit() {
    // snapshot marche mais params est mieux car le paramètre peut changer sans que tout le composant soit rechargé
    // const authorId = this.route.snapshot.paramMap.get('authorId');

    // params renvoie le type Observable
    const authorId = this.route.params.subscribe({
      next: params  => this.author = this.authorService.getAuthor(+params["authorId"]) // params renvoie string!
    })
  }

  editAuthor(f : NgForm){
    // La MAJ est automatique avec le two way data binding
    this.authorService.editAuthor(this.author!);
    // A RAJOUTER :redirect si y a une erreur
    this.router.navigate([["/authors"]]);
  }
}
