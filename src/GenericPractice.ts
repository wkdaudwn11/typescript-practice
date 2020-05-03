/** 함수에서 Generic 사용하기 */
// any 타입 (모두 허용)
const merge = (a: any, b: any): any => {
  return {
    ...a,
    ...b,
  };
};

// merge 같은 경우엔 타입 유추가 모두 꺠진 것이므로 안좋은 방식임.
// 저런 경우에 Generics를 사용하면 됨.
const merge2 = <A, B>(a: A, b: B): A & B => {
  return {
    ...a,
    ...b,
  };
};

// Generic은 이렇게도 사용됨
const wrap = <T>(param: T) => {
  return {
    param,
  };
};

const merged = merge({ foo: 1 }, { bar: 2 });
const merged2 = merge2({ foo: 1 }, { bar: 2 });
const wrapped = wrap(10);

/** Interface에서 Generic 사용하기 */
interface Items<T> {
  list: T[];
}

// 여기서 집어넣은 type으로 정해지는 것임. stinr을 넣었기 때문에 string만 넣어야 함.
const items: Items<string> = {
  list: ["a", "b", "c"],
};

// 아래처럼 하면 number로 했기 때문에 string을 넣으면 에러가 뜸
// const items2: Items<number> = {
//   list: ["a", "b", "c"],
// };

/** type 에서 Generic 사용하기 */
type Items2<T> = {
  list: T[];
};

const items3: Items2<string> = {
  list: ["a", "b", "c"],
};

/** class에서 Generic 사용하기 */
class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
