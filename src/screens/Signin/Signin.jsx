import React, { useState } from "react";
import "./signin.css";

export default function Signin() {
  const [user, setUser] = useState ({
    username: "",
    password: "",
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
      
      })
    }
  }



  return <div>Sign In</div>;
}
