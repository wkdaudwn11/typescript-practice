const sum = (x: number, y: number): number => {
  return x + y;
};

const sumArray = (numbers: number[]): number => {
  return numbers.reduce((acc, current) => acc + current, 0);
};

const returnNothing = (): void => {
  console.log("아무것도 반환하지 않는 함수");
};

sum(1, 2);
const total = sumArray([1, 2, 3, 4, 5]);
returnNothing();
