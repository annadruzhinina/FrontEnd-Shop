import "./signout.css"
import { Navigate , useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useLoginContext.js";

function SignOut() {
  //Deconstruct useAuthContext to pull dispatch
  const { dispatch } = useAuthContext()
  const { user } = useAuthContext()
  //Handle Submit
  const navigate = useNavigate()
  //Return component HTML
  return (
    <div className="logoutContainer">
      <div className="logOutBox">
        <h1 className="SignOut">Would you like to sign out {user}?</h1>
        <div>
          <button id="logOut" type="button" onClick={(e)=>{
            navigate("/")
            dispatch({ type: "LOGOUT", payload: null });
            }}>Log Out</button> 
        </div>
      </div>
    </div>
  )
}

export default SignOut