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
  



  return <div>Sign In</div>;

