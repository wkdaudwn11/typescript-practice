let count = 0; // 숫자
count += 1;
// count = "문자열"; // 에

const message: string = "hello world"; // 문자
const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열

const messages: string[] = ["hello", "world"]; // 문자열 배열
// messages.push(1); // 숫자 넣으면 에러

let mightBeUndefined: string | undefined = undefined; // string 혹은 undefined
let nullableNumber: number | null = null; // number 혹은 null

let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나
color = "yellow";
// color = "green"; // 에러
