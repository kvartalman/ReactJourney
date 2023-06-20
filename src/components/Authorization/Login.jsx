import React, {useContext} from "react";
import AuthContext from "./authContext";


const Login = () => {
    const authContext = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        authContext.login();
    }

    return (
        ''
    )
}