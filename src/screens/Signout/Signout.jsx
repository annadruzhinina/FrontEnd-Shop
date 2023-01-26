import "./signout.css"
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useLoginContext.js";

function SignOut() {
  //Deconstruct useAuthContext to pull dispatch
  const { dispatch } = useAuthContext()
  const { user } = useAuthContext()
  //Handle Submit
  const handleSubmit = (e) => {
    //Prevent Page from Reloading
    e.preventDefault()
    //Console Log When Submitted
    console.log("Submitted")
    //Update User with Values
    dispatch({ type: "LOGOUT", payload: null });
    return <Navigate to="/" replace={true} />
  }
  //Return component HTML
  return (
    <div className="logoutContainer">
      <div className="logOutBox" onSubmit={handleSubmit}>
        <h1 className="SignOut">`Would you like to sign out, ${user}?`</h1>
        <button id="logOut" value="">Sign Out</button>
      </div>
    </div>
  )
}

export default SignOut