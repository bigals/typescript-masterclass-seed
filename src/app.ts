interface Person {
    name: string;
    age?: number;
}

//Equivalent to built in Required<>
type MyRequired<T> = {
    [P in keyof T]-?: T[P] //removes the optional modifer on every key
    //could do -readonly to remove readonly properties
};

function printAge(person: MyRequired<Person>) {
    return `${person.name} is ${person.age}`;
}

const person: Person = {
    name: 'Todd',
    age: 27
}

const age = printAge(person);