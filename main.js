"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
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
var isSimilar = true;
while (stack.size() != 0) {
    if (stack.pop() !== queue.dequeue()) {
        console.log('unsymmetrical');
        isSimilar = false;
        break;
    }
}
if (isSimilar)
    console.log('symmetry');
