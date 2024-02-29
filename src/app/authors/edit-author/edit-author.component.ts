import { Component, Input, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  // Documentation : https://angular.io/guide/router
  constructor(
    private authorService : AuthorService,
    private route : ActivatedRoute) {}
  author? : Author;

  ngOnInit() {
    const authorId = this.route.snapshot.paramMap.get('authorId');
    this.author = this.authorService.getAuthor(parseInt(authorId!));
  }
}
