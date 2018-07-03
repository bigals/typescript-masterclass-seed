//Object Literal
const myObj = {
    myMethod() {
        console.log('Object:::', this);
    }
}

myObj.myMethod();

//Function
function myFunction(...text: string[]) {
    console.log('Function:::', this, text);
}

const bindFunction = myFunction.bind(myObj);
bindFunction('ABC', 'DEF');
bindFunction('123', '456');
bindFunction('ABC', 'DEF');

//changes the this context to myObj then calls
myFunction.call(myObj, 'ABC', 'DEF');

//changes the this context to myObj then calls
myFunction.apply(myObj, ['ABC', 'DEF']);