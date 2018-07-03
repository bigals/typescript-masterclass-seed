const person = {
    name: 'Todd',
    age: 27
};

type Person = typeof person;
type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys];

//K is a subtype of T (i.e. looking at function call, name property must exist on person)
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const personName = getProperty(person, 'name');

const anotherPerson: Person = {
    name: 'John',
    age: 30
}

// JavaScript
// typeof person // 'object'