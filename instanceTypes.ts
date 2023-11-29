let regexp: RegExp = new RegExp("ab+c");
let array: Array<number> = [1, 2, 3];
let set: Set<number> = new Set([1, 2, 3]);

class Queue<T> {
  private data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();

// Arrays and tuples
let array2: number[] = [1, 2, 3];

let tuple: [number, number] = [0, 0];

tuple = [1, 1];
tuple = [2, 6];
tuple = [5]; // Error must be 2 items
tuple = [5, 4, 3]; // Error must be 2 items
tuple = ["elite", 1337]; // Error must be a number
