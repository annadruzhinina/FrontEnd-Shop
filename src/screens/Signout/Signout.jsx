import "./signin.css"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useLoginContext.js";

function SignOut() {
  //Deconstruct useAuthContext to pull dispatch
  const { dispatch } = useAuthContext()
  
  //Deconstruct useState
  const [username, setUserName] = useState("")
  //Handle Submit
  const handleSubmit = (e) => {
    //Prevent Page from Reloading
    e.preventDefault()
    //Console Log When Submitted
    console.log("Submitted")
    //Update User with Values
    dispatch({ type: "LOGIN", payload: username });
  }
  //Return component HTML
  return (
    <div className="logoutContainer">
      <div className="logOutForm" onSubmit={handleSubmit}>
        <h1 className="SignOut">Sign Out</h1>
        <button id="logOut" value="">Log Out</button>
      </div>
    </div>
  )
}

export default SignOut