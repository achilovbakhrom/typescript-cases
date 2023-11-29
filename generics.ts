class Queue2<T> {
  data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

const queue2 = new Queue2<number>();

queue2.push(123);
queue2.push("Hello world");

console.log(queue2.pop()?.toPrecision(1));
console.log(queue2.pop()?.toPrecision(1));
