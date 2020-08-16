import { Message } from './classes/message';

const message = new Message('Greeting', 'Hello World', false);

message.print();
console.log(message.previewMessage());
