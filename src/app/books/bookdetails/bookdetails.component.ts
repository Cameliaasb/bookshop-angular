import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';
import { IBookToDisplay } from '../model/ibook-to-display';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})

export class BookdetailsComponent {
  @Input() book? : IBookToDisplay;
  @Output() hideBookDetails = new EventEmitter<string>();

  clickEvent() {
    this.hideBookDetails.emit("Hello from the event emitter!");
  }
}
