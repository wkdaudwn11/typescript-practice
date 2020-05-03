interface Person {
  name: string;
  age?: number; // ?가 들어가면 필수값이 아님. 없어도 됨.
}

// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }

// Person을 상속 받음으로써 name, age, skills의 항목이 들어가게 됨.
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "장명주",
  age: 20,
};

const expert: Developer = {
  name: "장명주2",
  skills: ["javascript", "react"],
};

const people: Person[] = [person, expert];
console.log(people);
