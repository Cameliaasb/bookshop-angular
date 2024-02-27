export class Book {
  constructor(
    private _id: number,
    private _title: string,
    private _author: string,
    private _publication_date: string,
    private _price: number
  ) {}

  // Getters
  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get author(): string {
    return this._author;
  }

  get price(): number {
    return this._price;
  }

  get publication_date(): string {
    return this._publication_date;
  }

  // Setters
  set id(id: number) {
    this._id = id;
  }

  set title(title: string) {
    this._title = title;
  }

  set author(author: string){
    this._author = author;
  }

  set price(price: number) {
    this._price = price;
  }

  set publication_date(publication_date: string) {
    this._publication_date = publication_date;
  }
}
