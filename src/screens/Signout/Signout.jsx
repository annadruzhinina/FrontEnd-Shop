// Import react-router-dom
import { Navigate , useNavigate } from "react-router-dom";
// Import Hook
import { useAuthContext } from "../../Hooks/useLoginContext.js";
// Import CSS
import "./signout.css"

// Sign-out component
function SignOut() {
  // Deconstruct useAuthContext to pull dispatch
  const { dispatch } = useAuthContext()
  const { user } = useAuthContext()
  // Handle Submit
  const navigate = useNavigate()
  // Return component HTML
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
// Export sign-out component
export default SignOut