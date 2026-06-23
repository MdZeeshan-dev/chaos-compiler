// import React from 'react'

// const login = () => {
//   return <h1>login page</h1>
// }

// export default login

import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  function handlelogin() {
    navigate("/");
  }
  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handlelogin}>login</button>
    </div>
  );

  
};

export default Login;
