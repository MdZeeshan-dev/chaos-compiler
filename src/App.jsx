// import UserCard from "./components/UserCard";
// import ProfilePic from "./components/ProfilePic";

// import React, { useEffect } from "react";

// import { use } from "react";

// const app = () => {

//   const name = "zeeshuuu";
//   const age = 444;
//   const city = "muzaffarpur";

//   return (
//     <div>
//       <h1>name: {name}</h1>
//       <h1>age: {age}</h1>
//       <h2>city: {city}</h2>

//       <h4>age after 5 years: {age+5}</h4>
//       <ProfilePic city = "muzaffarpur" time = {99} />
//        <ProfilePic city = "farpur" time = {900} />
//         <ProfilePic city = "zaffar" time = {9} />
//       <UserCard  name= "zeeshan" age = {24}  />
//       <UserCard  name= "rahul" age = {2}  />
//       <UserCard  name= "suzuki" age = {4} />
//     </div>
//   );
// }

// export default app;

// const app = () => {

//   const handleClick = () => {
//     console.log("button was clicked");
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>click me</button>
//     </div>
//   )
// }

// export default app;

// const app = () => {
//   const handleChange = (e) => {
//     console.log(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//     </div>
//   );
// };

// export default app;

// const app = () => {
//   const login = () => {
//     console.log("logged in");
//   }

//   const logout = () => {
//     console.log("logged out");
//   }

//   return (
//     <div>
//       <button onClick={login}>click for login</button>
//       <button onClick={logout}>click for logout</button>
//     </div>
//   )
// }

// export default app;

// import { useState } from "react";

// const app = () => {
//   const [count, setcount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count +1)}>increase</button>
//     </div>
//   )
// }

// export default app;

// import { useState } from "react";

// const app = () => {
//   const [count, setcount] = useState(0);

//   function increase() {
//     setcount(count + 1);
//   }

//   function decrease() {
//     setcount(count - 1);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={increase}>increase by 1</button>
//       <button onClick={decrease}>decrease by 1</button>
//     </div>
//   );
// };

// export default app;

// const App = () => {
//   const [name, setname] = useState("");

//     function handleChange(e) {
//       setname(e.target.value);
//     };

//     return (

//       <div>
//         <input type="text" onChange={handleChange} />

//         <h1> hello {name}</h1>
//       </div>
//     );
// };

// export default App;

// const App = () => {
//   const [isLoggedin, setisLoggedin] = useState(false);

//   return (
//     <div>
//       <h1>{isLoggedin ? "welcome:" : "please login first"}</h1>

//       <button onClick={() => setisLoggedin(!isLoggedin)}>Toggle</button>
//     </div>
//   );

// };

// export default App;

// const App = () => {
//     const [name, setname] = useState("");

//     const handleSubmit = () => {
//       console.log(name);

//     }

//     return (

//       <div>
//          <input type="text" onChange={(e) => setname(e.target.value)} />

//          <button onClick={handleSubmit}> submit </button>

//          <h1>{name}</h1>
//       </div>
//     )
// }

// export default App;

// const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <h1>Name: {name}</h1>
//       <h1>Email: {email}</h1>
//     </div>
//   );
// };

// export default App;`

// import { useState } from "react";

// const App = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setName(inputValue);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={(e) => setInputValue(e.target.value)}
//         />

//         <button type="submit">
//           Submit
//         </button>
//       </form>

//       <h1>{name}</h1>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [InputValue, setInputValue] = useState("");
//   const [name, setname] = useState("");
// }

// import { useState } from "react";

// const App = () => {
//   const [inputValue, setinputValue] = useState("");
//   const [name, setname] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setname(inputValue);
//   }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//           <input type="text" onChange={(e) => setinputValue(e.target.value)} />
//           <button type="submit">submit</button>
//         </form>

//         <h1>hello{name}</h1>
//     </div>
//   )

// }

// export default App;

// import { useState } from "react";

// const App = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setName(inputValue);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={(e) => setInputValue(e.target.value)}
//         />

//         <button type="submit">
//           Submit
//         </button>
//       </form>

//       <h1>Hello {name}</h1>
//     </div>
//   );
// };

// export default App;

// import { useEffect } from "react";

// const App = () => {

//   useEffect(() => {
//     console.log("Page Loaded");

//   }, []);

//   return (
//     <h1>hello</h1>
//   );
// };

// export default App;

// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//   const [count, setcount] = useState(0);
//   useEffect(() => {
//     console.log("count changed");
//   }, [count]
//   );

//   return (
//     <div>

//         <h1>{count}</h1>
//         <button onClick={() => setcount(count+1)}>increase</button>
//     </div>
//   )
// };

// export default App;

// import { useEffect } from "react";

// const App = () => {

//     useEffect(() => {
//        fetch("https://jsonplaceholder.typicode.com/users")
//        .then((response) => response.json())
//        .then((data) => {
//         console.log(data);
//        });
//     }, []);

//     return (

//       <h1>fetch API</h1>
//     )

// };

// export default App;

// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//   const [users, setusers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {});
//   }, []);

//   return (
//     <div>
//       {users.map((user) => (
//         <h2 key={user.id}>{user.name}</h2>
//       ))}
//     </div>
//   );
// };

// export default App;

// import { useEffect, useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, []);

//   return (
//     <div>
//       {users.map((user) => (
//         <h2 key={user.id}>
//           {user.name}
//         </h2>
//       ))}
//     </div>
//   );
// };

// export default App;

// import { useState, useEffect } from "react";

// const App = () => {
//   const [users, setusers] = useState([]);
//   const [loading, setloading] = useState(true);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setusers(data);
//         setloading(false);
//       });
//   }, []);

//   if (loading) {

//     return <h1>Loading...</h1>;

//   }

//   return (
//     <div>
//       {users.map((user) => (
//         <h2 key={user.id}>{user.name}</h2>
//       ))}
//     </div>

//   );






// };

// export default App;
