export class User {
  private _firstName: string;
  private _lastName: string;
  private _email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
  }

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  doesEmailMatch(email: string): boolean {
    return this._email === email;
  }
}
