interface Person {
    name: string;
    age: number;
    address: {}
}

//Works the same as builtin Pick type
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
};

//the two properties in the union have to exist in Person, and we are typing to a Person type, but only respecting the name and age props
const person: MyPick<Person, 'name' | 'age'> = {
    name: 'Todd',
    age: 27
};
