import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { ListAuthorsComponent } from './list-authors/list-authors.component';


@NgModule({
  declarations: [
    ListAuthorsComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
