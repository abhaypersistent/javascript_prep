// this can be determined by how a function is called runtime binding
// It can't be set by assignment during execution and it may be different
// each time the function is called
// 
const neObj = {
    prop : 42,
    func: function(){
        console.log(this);
        return this.prop;
    },
    func1 : () => {
        console.log(this)
        console.log(this.prop)
    }
}

// console.log(neObj.func());
// console.log(neObj.func1());

// value of this depends upon in which context it appears function, class or global

// Function context: this can be considered like hidden parameter

function getThis(){
    return this;
}

const obj1 = {name : "Obj1"};
const obj2 = {name : "Obj2"};

obj1.getThis = getThis;
obj2.getThis = getThis;

// console.log(obj1.getThis());
// console.log(obj2.getThis());

// how we can invoke the function that determine the value of the this in function
// value of this is not the object that has function as an own 
// property, but the object that is used to call the function

const obj4 = {
    name: "obj4",
    getThis(){
        return this;
    }
}

const obj5 = {name: "obj5"};

obj5.getThis = obj4.getThis;

console.log(obj5.getThis());

// callbacks : when a function is passed as a callback, the value of this
// depends on how the callback is called

function logThis() {
    "use strict";
    console.log(this);
  }
  
//   [1, 2, 3].forEach(logThis, {name:'abhay'}); // undefined, undefined, undefined
  

//   Arrow Functions
// In Arrow function this retain the value of the enclosing lexical context
// when evaluating an arrow function's body, the language does not create a new this binding.

const globalContext = this;

const foo = () => this;

// console.log(foo() === globalContext);

let newObj = {
    name: "abhay",
    getName : function(){
        return this.name;
    },
    getNameA : () => {
        return this.name;
    }
}

// console.log(newObj.getName());
// console.log(newObj.getNameA());

// constructors

function c(){
    this.a = 37;
}

let o = new c();
console.log(o.a);

function c2(){
    this.a = 37;
    return { a : 38};
}

o = new c2();

// console.log(o.a);

// example of this with call and apply

function add(c,d){
    return this.a + this.b + c + d;
}

const la = { a:1, b:23};

// console.log(add.call(la, 21,2));
// console.log(add.apply(la, [12,9]));

function bar(){
    console.log(Object.prototype.toString.call(this));
}

bar.call(7);
bar.call("foo");
bar.call(undefined)


// bind creates a new function with the same body and different scope but the 
// value of the this is permanently bound to the first argument of bind regardless of how the function 
// is being called

function f(){
    return this.a;
}

const newf = f.bind({a:"chant and be happy"});

console.log(newf());

