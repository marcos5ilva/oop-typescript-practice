import { Message } from './classes/message';
import { User } from './classes/user';

const message = new Message('Greeting', 'Hello World', false);
const user = new User('Marcos', 'Silva', 'marcos@silva.com');

console.log(message.previewMessage());
console.log(message.isSent);
console.log(message.message);
message.message = 'Hello World again';
console.log(message.message);
console.log(message);

console.log(user.fullName);
console.log(user.doesEmailMatch('marcos@silva2.com'));
