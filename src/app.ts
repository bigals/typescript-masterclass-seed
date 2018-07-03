interface Person {
    name: string;
    age: number;
}

//Equivalent to builtin Partial
type MyPartial<T> = {
    [P in keyof T]?: T[P]
};

function updatePerson(person: Person, prop: MyPartial<Person>) {
    return { ...person, ...prop };
}

const person: Person = {
    name: 'Todd',
    age: 27
}

updatePerson(person, { name: 'ABC' });