import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { useState } from "react";
import { ParkList } from "./parks/ParkList";
import { ParkCard } from "./parks/ParkCard";
import { UserCard } from "./users/UserCard";

export const ApplicationViews = () => {

    //THIS WILL SET THE STATE TO DETERMINE IF USER IS LOGGED IN OR NOT
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("coasterCredit_user") !== null)

    //THIS WILL SET THE SESSION STORAGE WHEN THE USER HAS OFFICIALLY LOGGED IN TO THE APP
    const setAuthUser = (user) => {
        sessionStorage.setItem("coasterCredit_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("coasterCredit_user") !== null)
    }


    return (
        <>
            <Route path="/">
                {isAuthenticated ? <UserCard /> : <Login />}
            </Route>
            <Route exact path="/parks">
                {isAuthenticated ? <ParkCard /> : <Login />}
            </Route>

            <Route exact path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>
        </>
    );
};
