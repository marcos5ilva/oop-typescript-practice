export class Message {
  private _title: string;
  private _message: string;
  private _isSent: boolean;

  constructor(title: string, message: string, isSent: boolean) {
    this._title = title;
    this._message = message;
    this._isSent = false;
  }
  get isSent(): boolean {
    return this._isSent;
  }
  get message(): string {
    return this._message;
  }

  get title(): string {
    return this._title;
  }

  set message(value: string) {
    this._message = value;
  }

  previewMessage(): string {
    return this.message.slice(0, this.message.length / 2).concat('...');
  }
}
