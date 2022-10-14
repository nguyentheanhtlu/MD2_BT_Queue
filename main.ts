import {Stack} from "./Stack";
import {Queue} from "./Queue";
let stack = new Stack()
let queue = new Queue()
stack.push('a');
stack.push('b');
stack.push('c');


queue.enqueue('c');
queue.enqueue('b');
queue.enqueue('a');
// Nhap vao 1 chuoi
// day ptu vao stack va queue
// duyet stack va queue
// neu ma khac => ko dx break
// duyet het => doi xung
let isSimilar = true;
while(stack.size() != 0){
    if (stack.pop() !== queue.dequeue()) {
        console.log('unsymmetrical');
        isSimilar = false;
        break;
    }
}
if(isSimilar)
    console.log('symmetry')
