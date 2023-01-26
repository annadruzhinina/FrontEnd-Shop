//Import react
import { createContext, useReducer } from "react";
//Export context
export const AuthContext = createContext();
//Set switch state function for Login and Logout - will set user "payload" upon login
export const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { user: action.payload };
      case "LOGOUT":
        return (
          { user: null }
          );
      default:
        return state;
    }
  };
  //Set functions to create the provider for the parent to wrap all underling components
  export const AuthContextProvider = ({ children }) => {
    //Sets and initializes the default state of the authReducer function to null
    const [state, dispatch] = useReducer(authReducer, {
      user: null,
    });
  
    console.log("AuthCon state", state);
    //Returning provider, wrapping around parent div and allows it to use state and dispatch methods
    return (
      <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
      </AuthContext.Provider>
    );
  };


