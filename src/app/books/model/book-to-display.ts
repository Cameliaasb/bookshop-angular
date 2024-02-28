export class BookToDisplay {

    constructor(
      private _id: number,
      private _cover: string,
      private _title: string,
      private _author: string,
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

    get author(): string {
      return this._author;
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

    set author(author: string){
      this._author = author;
    }

    set price(price: number) {
      this._price = price;
    }


}
