export class Author {
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public get id(): Number {
    return this._id;
  }
  public set id(value: Number) {
    this._id = value;
  }

  constructor(
    private _id: Number,
    private _firstName: string,
    private _lastName: string
  ){}

}
