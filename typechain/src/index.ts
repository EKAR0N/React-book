interface Human {
  name: string,
  age: number,
  gender: string
};

const test = {
  name: 'choi',
  age: 18,
  gender: 'male',
};

const sayHi = (person: Human): string => `Hello ${person.name}, you are ${person.age}, you are ${person.gender}`;

const genericTest = <T extends number> (w: T, h: T, a: T, t: T): number => {
  console.log(w, h, a, t);
  const result = w + h + a + t;
  return result;
}

console.log(genericTest<number>(1, 2, 3, 4));

console.log(sayHi(test));

export {};
