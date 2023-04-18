import React, { useReducer } from "react";
import authReducer from "../reducers/auth";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, {
        loading: false,
        error: null,
        user: null,
        isAuth: localStorage.getItem('auth'),
        type: localStorage.getItem('type'),
    })


    return <AuthContext.Provider value={{ state, dispatch }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;