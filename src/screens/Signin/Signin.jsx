import React, { useState } from "react";
import "./signin.css";

export default function Signin() {
  const [user, setUser] = useState ({
    username: "",
    password: "",
    valid: true,
    message: ""
  });
  const handleSubmit = (e) => {

    e.preventDefault();

    if(user.password===user.passwordConfirm) {
      setUser({message:"Nice to see you again"})

    } else {
      setUser({message:"Wrong password please try again"})

    }

  }
  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUser ({
        username: e.target.value,
      });
    } else if (e.target.id === "password") {
        setUser ({
          password: e.target.value,
        });
      } else if (e.target.id === "Confirm") {
        setUser({
          passwordConfirm: e.target.value,
        });
      }
      }
    }
  



  return (
   <div className="form">
    <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <input onChange={handleChange} id="username" value={user.username} type="text" placeholder="username" />
      <input onChange={handleChange}  id="password"value={user.password} type="password" placeholder="password" />
      <input onChange={handleChange} id="Confirm"value={user.passwordConfirm}type="password" placeholder="passwordConfirm" />
      <button type="submit">Submit</button>
      </form>
      {user.message}
   </div>
  )

