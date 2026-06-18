// const username = "zeeshan";
// let age = 21;
// let isstudent = true;

// console.log(username);
// console.log(age);
// console.log(isstudent);

// function greet(name) {

//     console.log("hello "  +   name);
// }

// greet("zeeshan");
// greet("arman")

// function add(a, b) {
//    return a+b;
// }

//  let result = add(1,2);

// const heading = document.getElementById("heading");
// const nameInput = document.getElementById("nameInput");
// const changeBtn = document.getElementById("changeBtn");
// const para = document.getElementById("para");

// changeBtn.addEventListener("click", function() {
//     para.textContent =  "you clicked the button";
//     console.log(nameInput.value);
// })





// const taskInput = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");

// let tasks = [];

// addBtn.addEventListener("click", function () {
//   const taskText = taskInput.value;

//   const task = {
//     text: taskText,
//   };

//   tasks.push(task);

//   const li = document.createElement("li");
//   li.textContent = task.text;

//   taskList.appendChild(li);

//   taskInput.value = "okkk";
// });

// const hover = document.getElementById;

// const fruits = ["Mango", "Apple", "Banana"];

// fruits.map((fruit, num) => {
//   console.log( fruit, num);
// });

// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("data aya");
//     }, 3000);
// });

// promise.then((data) => {
//         console.log(data);
// });

async function getUsers() {
  console.log("start");

  const response = await fetch(URL);
  console.log("response aya");
}
