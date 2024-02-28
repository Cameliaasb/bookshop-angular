export class Book {

  // N'écrire que le constructor. Click droit sur un attribut > refactor > generate getters and setters
  constructor(
    private _id: number,
    private _cover: string,
    private _title: string,
    private _author_id: number,
    private _price: number
    ) {}

  // Getters générés
  get id(): number {
    return this._id;
  }

  public get cover(): string {
    return this._cover;
  }

  get title(): string {
    return this._title;
  }

  get authorId(): number {
    return this._author_id;
  }

  get price(): number {
    return this._price;
  }


  // Setters générés
  set id(id: number) {
    this._id = id;
  }
  public set cover(value: string) {
    this._cover = value;
  }

  set title(title: string) {
    this._title = title;
  }

  set author(authorId: number){
    this._author_id = authorId;
  }

  set price(price: number) {
    this._price = price;
  }

}
