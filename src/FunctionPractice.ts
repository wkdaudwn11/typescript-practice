const sum = (x: number, y: number): number => {
  return x + y;
};

const sumArray = (numbers: number[]): number => {
  return numbers.reduce((acc, current) => acc + current, 0);
};

const returnNothing = (): void => {
  console.log("아무것도 반환하지 않는 함수");
};

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

sum(1, 2);
const total = sumArray([1, 2, 3, 4, 5]);
returnNothing();
const merged = merge({ foo: 1 }, { bar: 2 });
const merged2 = merge2({ foo: 1 }, { bar: 2 });
const wrapped = wrap(10);
