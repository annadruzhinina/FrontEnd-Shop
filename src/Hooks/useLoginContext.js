//Imports from Context
import { AuthContext } from "../Context/LoginContexts.js";
//Imports from react
import { useContext } from "react";

//Export useAuthContext function
export const useAuthContext = () => {
    //Call context
    const context = useContext(AuthContext);
    //Error handling if context not available
    if (!context) {
        throw Error("Context must be inside a Provider");
    }
    //Return result
    return context;
};