/**
 * 파일이 다르더라도 변수명 겹치면 에러가 뜨는 거 같음.
 * InterfacePractice2.ts에 Person이 이미 있어서 에러 뜸.
 */
type Person2 = {
  name: string;
  age?: number;
};

/**
 * & 는 Intersection 으로서 두개 이상의 타입을 합침. Interface의 extends와 비슷함.
 * 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
 */
type Developer2 = Person & {
  skills: string[];
};

const person2: Person2 = {
  name: "장명주3",
};

const expert2: Developer2 = {
  name: "장명주4",
  skills: ["javascript", "react"],
};

type People2 = Person[]; // Person[]을 이제 앞으로 People 이라는 타입으로 사용 가능.

const people2: People2 = [person2, expert2];

type Color = "red" | "orange" | "yellow";
const color2: Color = "red";
const colors: Color[] = ["red", "orange"];
