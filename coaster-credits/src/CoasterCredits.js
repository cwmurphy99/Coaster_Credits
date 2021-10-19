import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { ApplicationViews } from "./components/ApplicationViews";
import { NavBar } from "./components/nav/NavBar";


export const CoasterCredits = () => (
    <>
        <Route
            render={() => {
                if (sessionStorage.getItem("coasterCredit_user")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <NavBar />
            <Login />
        </Route>
        <Route path="/register">
            <NavBar />
            <Register />
        </Route>
    </>
);