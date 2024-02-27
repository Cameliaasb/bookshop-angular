import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent {
  @Input() book? : Book
  @Output() hideBookDetails = new EventEmitter<string>();

  clickEvent() {
    this.hideBookDetails.emit("Hello from the event emitter!");
  }
}
