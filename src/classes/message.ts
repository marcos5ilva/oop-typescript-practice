export class Message {
  title: string;
  message: string;
  isSent: boolean;

  constructor(title: string, message: string, isSent: boolean) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }

  print(): void {
    console.log(this.message);
  }

  previewMessage(): string {
    return this.message.slice(0, this.message.length / 2).concat('...');
  }
}
