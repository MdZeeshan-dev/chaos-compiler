// ============================================================
// JAVASCRIPT - IMPORTANT PRACTICE FILE
// Full Stack + React + Node.js + Interviews
// ============================================================


// ============================================================
// 1. VARIABLES
// ============================================================

var oldVariable = "var";
let username = "Zeeshan";
const age = 21;

console.log(oldVariable);
console.log(username);
console.log(age);


// ============================================================
// 2. DATA TYPES
// ============================================================

const string = "Hello";
const number = 100;
const boolean = true;
const empty = null;
let notDefined;
const bigNumber = 12345678901234567890n;
const id = Symbol("id");

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof empty);
console.log(typeof notDefined);
console.log(typeof bigNumber);
console.log(typeof id);

const user = {
  name: "Zeeshan",
  age: 21
};

const numbers = [1, 2, 3];

console.log(typeof user);
console.log(typeof numbers);


// ============================================================
// 3. TYPE CONVERSION
// ============================================================

const value = "100";

console.log(Number(value));
console.log(String(100));
console.log(Boolean(1));

console.log(parseInt("100px"));
console.log(parseFloat("10.5px"));


// ============================================================
// 4. OPERATORS
// ============================================================

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(a === b);
console.log(a !== b);

console.log(true && true);
console.log(true || false);
console.log(!true);


// ============================================================
// 5. == VS ===
// ============================================================

console.log(5 == "5");
console.log(5 === "5");


// ============================================================
// 6. CONDITIONALS
// ============================================================

const marks = 75;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else {
  console.log("C");
}


// Ternary

const result = marks >= 40 ? "Pass" : "Fail";

console.log(result);


// ============================================================
// 7. SWITCH
// ============================================================

const day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid");
}


// ============================================================
// 8. LOOPS
// ============================================================

// for

for (let i = 0; i < 5; i++) {
  console.log(i);
}


// while

let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}


// do while

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 3);


// for of

const nums = [10, 20, 30];

for (const num of nums) {
  console.log(num);
}


// for in

const person = {
  name: "Zeeshan",
  age: 21
};

for (const key in person) {
  console.log(key, person[key]);
}


// break

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}


// continue

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}


// ============================================================
// 9. FUNCTIONS
// ============================================================

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));


// Function Expression

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 4));


// Arrow Function

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 3));


// Short Arrow Function

const square = n => n * n;

console.log(square(5));


// Default Parameter

function greet(name = "Guest") {
  return `Hello ${name}`;
}

console.log(greet());


// ============================================================
// 10. REST PARAMETERS
// ============================================================

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));


// ============================================================
// 11. ARRAYS
// ============================================================

const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

console.log(fruits[0]);

console.log(fruits.length);

fruits.push("Orange");

fruits.pop();

fruits.unshift("Grapes");

fruits.shift();

console.log(fruits);

console.log(fruits.includes("Mango"));

console.log(fruits.indexOf("Mango"));


// ============================================================
// 12. ARRAY METHODS
// ============================================================

const numbers2 = [1, 2, 3, 4, 5];


// forEach

numbers2.forEach(num => {
  console.log(num);
});


// map

const doubled = numbers2.map(num => num * 2);

console.log(doubled);


// filter

const evenNumbers = numbers2.filter(
  num => num % 2 === 0
);

console.log(evenNumbers);


// reduce

const total = numbers2.reduce(
  (sum, num) => sum + num,
  0
);

console.log(total);


// find

const found = numbers2.find(
  num => num > 3
);

console.log(found);


// findIndex

const foundIndex = numbers2.findIndex(
  num => num > 3
);

console.log(foundIndex);


// some

console.log(
  numbers2.some(num => num > 4)
);


// every

console.log(
  numbers2.every(num => num > 0)
);


// includes

console.log(
  numbers2.includes(3)
);


// sort

const values = [10, 2, 30, 4];

values.sort((a, b) => a - b);

console.log(values);


// reverse

values.reverse();

console.log(values);


// slice

const sliced = numbers2.slice(1, 4);

console.log(sliced);


// splice

const spliceArray = [1, 2, 3, 4, 5];

spliceArray.splice(1, 2);

console.log(spliceArray);


// ============================================================
// 13. OBJECTS
// ============================================================

const student = {
  name: "Zeeshan",
  age: 21,
  skills: ["JavaScript", "React"],

  introduce() {
    console.log(`I am ${this.name}`);
  }
};

console.log(student.name);

console.log(student["age"]);

student.city = "Delhi";

student.age = 22;

delete student.city;

student.introduce();


// ============================================================
// 14. OBJECT METHODS
// ============================================================

console.log(Object.keys(student));

console.log(Object.values(student));

console.log(Object.entries(student));


// ============================================================
// 15. DESTRUCTURING
// ============================================================

const userData = {
  name: "Zeeshan",
  age: 21,
  city: "Delhi"
};

const {
  name,
  age: userAge,
  city
} = userData;

console.log(name);
console.log(userAge);
console.log(city);


// Array destructuring

const arr = [10, 20, 30];

const [first, second, third] = arr;

console.log(first);
console.log(second);
console.log(third);


// ============================================================
// 16. SPREAD OPERATOR
// ============================================================

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const combined = [
  ...arr1,
  ...arr2
];

console.log(combined);


// Object spread

const basicUser = {
  name: "Zeeshan",
  age: 21
};

const completeUser = {
  ...basicUser,
  role: "Developer"
};

console.log(completeUser);


// ============================================================
// 17. OPTIONAL CHAINING
// ============================================================

const data = {
  user: {
    profile: {
      name: "Zeeshan"
    }
  }
};

console.log(data.user?.profile?.name);

console.log(data.user?.address?.city);


// ============================================================
// 18. NULLISH COALESCING
// ============================================================

const userName = null;

const displayName = userName ?? "Guest";

console.log(displayName);


// ============================================================
// 19. SHORT CIRCUIT
// ============================================================

const isLoggedIn = true;

isLoggedIn && console.log("Dashboard");

const name2 = null;

console.log(name2 || "Guest");


// ============================================================
// 20. SCOPE
// ============================================================

const globalValue = "Global";

function testScope() {
  const localValue = "Local";

  console.log(globalValue);
  console.log(localValue);
}

testScope();


// ============================================================
// 21. HOISTING
// ============================================================

console.log(hoisted);

var hoisted = 100;


// let and const are in Temporal Dead Zone

// console.log(value2);
// let value2 = 100;


// ============================================================
// 22. CLOSURE
// ============================================================

function createCounter() {
  let count = 0;

  return function () {
    count++;

    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());


// ============================================================
// 23. CALLBACK
// ============================================================

function calculate(a, b, callback) {
  const result = a + b;

  callback(result);
}

calculate(10, 20, result => {
  console.log(result);
});


// ============================================================
// 24. HIGHER ORDER FUNCTION
// ============================================================

function operation(a, b, callback) {
  return callback(a, b);
}

const answer = operation(
  10,
  20,
  (a, b) => a + b
);

console.log(answer);


// ============================================================
// 25. THIS
// ============================================================

const person2 = {
  name: "Zeeshan",

  sayName() {
    console.log(this.name);
  }
};

person2.sayName();


// ============================================================
// 26. CALL
// ============================================================

const person3 = {
  name: "Zeeshan"
};

function introduce(city) {
  console.log(this.name, city);
}

introduce.call(
  person3,
  "Delhi"
);


// ============================================================
// 27. APPLY
// ============================================================

introduce.apply(
  person3,
  ["Delhi"]
);


// ============================================================
// 28. BIND
// ============================================================

const boundFunction =
  introduce.bind(person3);

boundFunction("Delhi");


// ============================================================
// 29. SHALLOW COPY
// ============================================================

const original = {
  name: "Zeeshan",

  address: {
    city: "Delhi"
  }
};

const shallowCopy = {
  ...original
};

shallowCopy.name = "Ali";

console.log(original.name);


// Nested object is shared

shallowCopy.address.city =
  "Mumbai";

console.log(
  original.address.city
);


// ============================================================
// 30. DEEP COPY
// ============================================================

const deepCopy =
  structuredClone(original);

deepCopy.address.city =
  "Patna";

console.log(
  original.address.city
);


// ============================================================
// 31. MAP
// ============================================================

const userMap = new Map();

userMap.set("name", "Zeeshan");
userMap.set("age", 21);

console.log(userMap.get("name"));

console.log(userMap.has("age"));

console.log(userMap.size);


// ============================================================
// 32. SET
// ============================================================

const uniqueNumbers =
  new Set([1, 2, 2, 3, 3, 4]);

console.log(uniqueNumbers);

uniqueNumbers.add(5);

uniqueNumbers.delete(1);

console.log(
  uniqueNumbers.has(3)
);


// Remove duplicates

const duplicateArray = [
  1, 2, 2, 3, 3, 4
];

const uniqueArray = [
  ...new Set(duplicateArray)
];

console.log(uniqueArray);


// ============================================================
// 33. CLASS / OOP
// ============================================================

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `I am ${this.name}`
    );
  }
}

const userObject =
  new User("Zeeshan", 21);

userObject.introduce();


// ============================================================
// 34. INHERITANCE
// ============================================================

class Developer extends User {
  constructor(name, age, language) {
    super(name, age);

    this.language = language;
  }

  code() {
    console.log(
      `${this.name} codes in ${this.language}`
    );
  }
}

const developer =
  new Developer(
    "Zeeshan",
    21,
    "JavaScript"
  );

developer.introduce();

developer.code();


// ============================================================
// 35. GETTER / SETTER
// ============================================================

class Account {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (value < 0) {
      throw new Error(
        "Balance cannot be negative"
      );
    }

    this._balance = value;
  }
}

const account =
  new Account(1000);

console.log(account.balance);

account.balance = 2000;

console.log(account.balance);


// ============================================================
// 36. PROTOTYPE
// ============================================================

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello =
  function () {
    console.log(
      `Hello ${this.name}`
    );
  };

const p1 =
  new Person("Zeeshan");

p1.sayHello();


// ============================================================
// 37. ERROR HANDLING
// ============================================================

try {
  throw new Error(
    "Something went wrong"
  );
} catch (error) {
  console.log(
    error.message
  );
} finally {
  console.log(
    "Always runs"
  );
}


// ============================================================
// 38. PROMISE
// ============================================================

const promise = new Promise(
  (resolve, reject) => {

    const success = true;

    if (success) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  }
);

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finished");
  });


// ============================================================
// 39. PROMISE CHAINING
// ============================================================

Promise.resolve(10)

  .then(value => {
    return value * 2;
  })

  .then(value => {
    return value + 5;
  })

  .then(value => {
    console.log(value);
  })

  .catch(error => {
    console.log(error);
  });


// ============================================================
// 40. PROMISE.ALL
// ============================================================

const promise1 =
  Promise.resolve("User");

const promise2 =
  Promise.resolve("Posts");

const promise3 =
  Promise.resolve("Comments");

Promise.all([
  promise1,
  promise2,
  promise3
])
.then(results => {
  console.log(results);
});


// ============================================================
// 41. PROMISE.ALLSETTLED
// ============================================================

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed")
])
.then(results => {
  console.log(results);
});


// ============================================================
// 42. PROMISE.RACE
// ============================================================

Promise.race([

  new Promise(resolve => {
    setTimeout(
      () => resolve("First"),
      1000
    );
  }),

  new Promise(resolve => {
    setTimeout(
      () => resolve("Second"),
      500
    );
  })

])
.then(result => {
  console.log(result);
});


// ============================================================
// 43. PROMISE.ANY
// ============================================================

Promise.any([

  Promise.reject("Error"),

  Promise.resolve("Success"),

  Promise.resolve("Success 2")

])
.then(result => {
  console.log(result);
});


// ============================================================
// 44. ASYNC / AWAIT
// ============================================================

function getData() {
  return new Promise(resolve => {

    setTimeout(() => {
      resolve("Data received");
    }, 1000);

  });
}

async function fetchData() {

  try {

    const data =
      await getData();

    console.log(data);

  } catch (error) {

    console.log(error);

  }
}

fetchData();


// ============================================================
// 45. SETTIMEOUT
// ============================================================

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");


// ============================================================
// 46. EVENT LOOP
// ============================================================

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// A
// D
// C
// B


// ============================================================
// 47. FETCH API
// ============================================================

async function getUsers() {

  try {

    const response =
      await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

    if (!response.ok) {
      throw new Error(
        "Request failed"
      );
    }

    const users =
      await response.json();

    console.log(users);

  } catch (error) {

    console.error(error);

  }
}

// getUsers();


// ============================================================
// 48. POST REQUEST
// ============================================================

async function createUser() {

  try {

    const response =
      await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            name: "Zeeshan",
            email: "test@gmail.com"
          })
        }
      );

    const data =
      await response.json();

    console.log(data);

  } catch (error) {

    console.error(error);

  }
}


// ============================================================
// 49. JSON
// ============================================================

const jsonObject = {
  name: "Zeeshan",
  age: 21
};

const jsonString =
  JSON.stringify(jsonObject);

console.log(jsonString);

const parsedData =
  JSON.parse(jsonString);

console.log(parsedData);


// ============================================================
// 50. LOCAL STORAGE
// ============================================================

// Browser only

localStorage.setItem(
  "name",
  "Zeeshan"
);

const savedName =
  localStorage.getItem("name");

console.log(savedName);

// localStorage.removeItem("name");
// localStorage.clear();


// Store object

const savedUserData = {
  name: "Zeeshan",
  age: 21
};

localStorage.setItem(
  "user",
  JSON.stringify(savedUserData)
);

const userFromStorage =
  JSON.parse(
    localStorage.getItem("user")
  );

console.log(userFromStorage);


// ============================================================
// 51. SESSION STORAGE
// ============================================================

// Browser only

sessionStorage.setItem(
  "name",
  "Zeeshan"
);

console.log(
  sessionStorage.getItem("name")
);


// ============================================================
// 52. DOM
// ============================================================

// Browser only

const heading =
  document.querySelector("h1");

if (heading) {

  heading.textContent =
    "Hello JavaScript";

  heading.style.color =
    "red";
}


// ============================================================
// 53. CREATE ELEMENT
// ============================================================

const button =
  document.createElement("button");

button.textContent =
  "Click Me";

document.body.appendChild(button);


// ============================================================
// 54. EVENTS
// ============================================================

button.addEventListener(
  "click",
  () => {

    console.log(
      "Button clicked"
    );

  }
);


// ============================================================
// 55. EVENT BUBBLING
// ============================================================

const parent =
  document.querySelector(
    "#parent"
  );

const child =
  document.querySelector(
    "#child"
  );

child?.addEventListener(
  "click",
  () => {
    console.log(
      "Child clicked"
    );
  }
);

parent?.addEventListener(
  "click",
  () => {
    console.log(
      "Parent clicked"
    );
  }
);


// ============================================================
// 56. EVENT DELEGATION
// ============================================================

const list =
  document.querySelector(
    "#list"
  );

list?.addEventListener(
  "click",
  event => {

    if (
      event.target.matches("li")
    ) {

      console.log(
        event.target.textContent
      );

    }

  }
);


// ============================================================
// 57. DEBOUNCE
// ============================================================

function debounce(
  callback,
  delay
) {

  let timer;

  return function (...args) {

    clearTimeout(timer);

    timer = setTimeout(() => {

      callback(...args);

    }, delay);

  };
}

const search =
  debounce(
    value => {
      console.log(
        "Searching:",
        value
      );
    },
    500
  );


// ============================================================
// 58. THROTTLE
// ============================================================

function throttle(
  callback,
  delay
) {

  let waiting = false;

  return function (...args) {

    if (waiting) return;

    callback(...args);

    waiting = true;

    setTimeout(() => {

      waiting = false;

    }, delay);

  };
}


// ============================================================
// 59. IIFE
// ============================================================

(function () {

  console.log(
    "IIFE executed"
  );

})();


// ============================================================
// 60. GENERATOR
// ============================================================

function* generateNumbers() {

  yield 1;
  yield 2;
  yield 3;

}

const generator =
  generateNumbers();

console.log(
  generator.next()
);

console.log(
  generator.next()
);

console.log(
  generator.next()
);

console.log(
  generator.next()
);


// ============================================================
// 61. ITERATOR
// ============================================================

const iterable =
  [10, 20, 30];

const iterator =
  iterable[
    Symbol.iterator
  ]();

console.log(
  iterator.next()
);

console.log(
  iterator.next()
);

console.log(
  iterator.next()
);

console.log(
  iterator.next()
);


// ============================================================
// 62. MODULES
// ============================================================

// math.js
//
// export const add = (a, b) => a + b;
//
// app.js
//
// import { add } from "./math.js";
//
// console.log(add(10, 20));


// ============================================================
// 63. CRUD
// ============================================================

let products = [];


// CREATE

function addProduct(product) {

  products.push(product);

}


// READ

function getProducts() {

  return products;

}


// UPDATE

function updateProduct(
  id,
  newData
) {

  products =
    products.map(
      product => {

        if (
          product.id === id
        ) {

          return {
            ...product,
            ...newData
          };

        }

        return product;

      }
    );

}


// DELETE

function deleteProduct(id) {

  products =
    products.filter(
      product =>
        product.id !== id
    );

}


addProduct({
  id: 1,
  name: "Laptop",
  price: 50000
});

addProduct({
  id: 2,
  name: "Phone",
  price: 30000
});

updateProduct(
  1,
  {
    price: 55000
  }
);

console.log(
  getProducts()
);

deleteProduct(2);

console.log(
  getProducts()
);


// ============================================================
// 64. SEARCH / FILTER
// ============================================================

const productList = [

  {
    name: "Laptop",
    price: 50000
  },

  {
    name: "Phone",
    price: 30000
  },

  {
    name: "Mouse",
    price: 1000
  }

];

const searchResult =
  productList.filter(
    product =>
      product.name
        .toLowerCase()
        .includes("phone")
  );

console.log(searchResult);


// ============================================================
// 65. PAGINATION
// ============================================================

function paginate(
  data,
  page,
  limit
) {

  const start =
    (page - 1) * limit;

  return data.slice(
    start,
    start + limit
  );
}

const dataList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

console.log(
  paginate(
    dataList,
    2,
    3
  )
);


// ============================================================
// 66. PRACTICAL DATA PROCESSING
// ============================================================

const orders = [

  {
    id: 1,
    user: "Zeeshan",
    amount: 5000,
    status: "completed"
  },

  {
    id: 2,
    user: "Ali",
    amount: 3000,
    status: "pending"
  },

  {
    id: 3,
    user: "Rahul",
    amount: 7000,
    status: "completed"
  }

];


const completedOrders =
  orders.filter(
    order =>
      order.status ===
      "completed"
  );


const revenue =
  completedOrders.reduce(
    (total, order) =>
      total + order.amount,
    0
  );


const users =
  orders.map(
    order => order.user
  );


console.log(
  completedOrders
);

console.log(
  revenue
);

console.log(
  users
);


// ============================================================
// END
// ============================================================