import { Component } from '@angular/core';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent {
  books = [
    {id: 1, title: "Samarcande", author: "Amin Maalouf", date_publication: "01/01/2000", price: 16.2 },
    {id: 2, title: "Léon l'africain", author: "Amin Maalouf", date_publication: "01/10/2002", price: 18 },
    {id: 3, title: "Sorcières", author: "Mona Chollet", date_publication: "01/01/2010", price: 15 },
  ]
}
