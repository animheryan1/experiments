// let name = prompt("name", "Ani");
"use strict";
let a = 5;
let b = 10;
let result = a + b < 4 ? 'Below' : "Over";
console.log(Number(null));

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

let id = Symbol("someId");
let user = {
  "name": "bla",
  "age": "a",
  [id]: 88
};
// for( let key in user) alert(key);
console.log(user[id]);

let clone = Object.assign({}, user);
console.log(clone[id]);//copied

//Global symbols
let idGlobal = Symbol.for("id");//create
let again = Symbol.for("id");//read

console.log(Symbol.keyFor(idGlobal) + " global keyfor");
console.log(Symbol.keyFor(id) + "local keyfor undef");

user = {
  name: "john",
  sayHi() {
    console.log("function inside object" + this.name);
  },
  bye() {
    console.log("sa")
  }
};
user.sayHi(); //works
(user.name === "john" ? user.sayHi() : user.bye());//does not

//arrow function reference to the outer this

let user2 = {
  "name": "AA",
  sayHi() {
    let arrow = () => console.log(this.name + "arrow");
    arrow();
  }
};
user2.sayHi();

//Test this
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user3 = makeUser();
// console.log(user3.ref.name);

let calculator = {
  read: () => {
    this.a = +prompt("a", 0);
    this.b = +prompt("b", 0);
  },
  sum: () => this.a + this.b,
  mul: () => this.a * this.b
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// console.log(calculator.a);//undefined

//Test this

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // shows the current step
    alert(this.step);
  }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// ladder.up().up().down().showStep(); // 1


//Type conversion
let user4 = {
  "name": "Anii",
  "money": "550",
  [Symbol.toPrimitive](hint) {
    alert(`hint ${hint}`);
    return hint === "string" ? this.name : this.money;
  }
};
// alert(user4);//hint string
// alert(+user4);//hint number
// alert(user4 + 500);
// alert(user3.valueOf());

//Constructors

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user5 = new User("Jack");
console.log(user5.name);

//Task Constructors
let obj = {}

function A() {
  return obj;
}

function B() {
  return obj;
}

let a1 = new A;
let b1 = new B;

// alert( a1 == b1 ); // true
function Calculator() {
  this.read = function () {
    this.a = +prompt("a", 0);
    this.b = +prompt("b", 0);
  };
  this.sum = () => {
    return this.a + this.b;
  };
}

let calculator2 = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


//Test Constructors
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt("value", 0);
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values
console.log(NaN === NaN); //false :))
console.log(Object.is(NaN, NaN) === true); //true :))


//Arrays

// for (let fruit of fruits) {
//   alert( fruit );
// }

let arr = ["I", "F", "t"];

arr.splice(1, 1);

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(0, 3, "wow", "ss");//returns the removed part


arr2.slice(1, 3);
let arr2Copy = arr2.slice();//copy arr

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

const arr3 = [NaN];
alert(arr3.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
alert(arr3.includes(NaN));// true (correct)
//includes better

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);


//Reduce

// let value = arr.reduce(function(accumulator, item, index, array) {
//   ...
// }, [initial]);

let arr4 = [1, 2, 5, 9, 10];
let result = arr4.reduce((sum, current) => sum + current, 0)

//sort by obj age

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let arr5 = [pete, john, mary];

sortByAge(arr5);

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age) / users.length;
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
  return users.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  }, {});
}

groupById(users);


//ITERABLES


let range = {
  from: 1,
  to: 5
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return {done: false, value: this.current++};
      }else{
        return {done: true};
      }
    }
  };
};

for (let num of range){
  console.log(num);
}


//MAP
//keys can be any type
let john2 = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john2, 123);

alert( visitsCountMap.get(john2) ); // 123

//SET
//collection of unique values


//Array destructuring

// we have an array with the name and surname
let arr6 = ["Ilya", "Kantor"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr6;

// alert(firstName); // Ilya
// alert(surname);  // Kantor

let [a8, b8, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);//works with any iterables


let user9 = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user9)) {
  alert(`${key}:${value}`); // name:John, then age:30
}


//REST

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(name1); // Julius
// alert(name2); // Caesar

// Note that type of `rest` is Array.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2
//should go last in destructing


//Object destructuring
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
//creating variables from object
// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200

//REST in obj
//the rest becomes an object
let optionsOBJ = {
  title1: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title1, ...rest2} = optionsOBJ;

// now title="Menu", rest={height: 200, width: 100}
// alert(rest2.height);  // 200
// alert(rest2.width);   // 100


//destructing in function input
// function({
//            incomingProperty: varName = defaultValue
//            ...
//          })


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries){
  let maxSalary = 0;
  let maxName;
  for (let [name, salary] of Object.entries(salaries)){
    if(salary > maxSalary){
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}
topSalary(salaries);
