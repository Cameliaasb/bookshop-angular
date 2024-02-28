import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})


export class BookService {

  private books = [
    new Book(1, "https://static.fnac-static.com/multimedia/Images/FR/NR/84/17/03/202628/1540-1/tsp20231012072027/Samarcande.jpg",
        "Samarcande", "Amin Maalouf",  "01/01/2000",  16.2 ),
    new Book(2, "https://www.livredepoche.com/sites/default/files/styles/manual_crop_269_435/public/images/livres/couv/9782253041931-001-T.jpeg?itok=3Qx9jqeh",
        "Léon l'africain", "Amin Maalouf",  "01/10/2002",  18 ),
    new Book(3, "https://m.media-amazon.com/images/I/71DeedEBh9L._AC_UF1000,1000_QL80_.jpg",
        "Sorcières",  "Mona Chollet",  "01/01/2010",  15 ),
  ];

  constructor() { }

  getBooks(){
    // return this.books;  =>  donne un accès direct à mon tableau books, donc ça sert à rien le private
    // Il faut rendre une copie du tableau books :
    return [...this.books];
  }
}
