import React, {useState} from 'react';
import AuthContext from "./authContext";

const Authorization = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onLoginHandler = setIsAuthenticated(true);
    const onLogoutHandler = setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{
            isAuthenticated: isAuthenticated,
            login: onLoginHandler,
            logout: onLogoutHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default Authorization