import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent {
  books = [
    new Book(1, "Samarcande", "Amin Maalouf",  "01/01/2000",  16.2 ),
    new Book(2, "Léon l'africain", "Amin Maalouf",  "01/10/2002",  18 ),
    new Book(3, "Sorcières",  "Mona Chollet",  "01/01/2010",  15 ),
  ];

}
