import { Component, Input } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent {
  @Input() book? : Book
}
