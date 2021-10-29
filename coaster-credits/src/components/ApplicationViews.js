import React, {useEffect} from "react";
import { Route } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { useState } from "react";
import { UserCard } from "./users/UserCard";
import { ParkList } from "./parks/ParkList";
import { ParkDetail } from "./parks/ParkDetail";
import { RideList } from "./rides/RideList";
import { YoutubeEmbed } from './modules/YoutubeEmbed';


export const ApplicationViews = () => {
    const [credits, setCredits] = useState([]);

    const getCredits = () => {

        const currentUser = parseInt(sessionStorage.getItem("coasterCredit_user"));

        if (currentUser) {
            fetch(`http://localhost:8088/credits?userId=${currentUser}`)
                .then(response => response.json())
                .then((data) => {
                    setCredits(data);
                })
        }
    }

    useEffect (() => {
        getCredits();
    }, []);

    //THIS WILL SET THE STATE TO DETERMINE IF USER IS LOGGED IN OR NOT
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("coasterCredit_user") !== null)

    //THIS WILL SET THE SESSION STORAGE WHEN THE USER HAS OFFICIALLY LOGGED IN TO THE APP
    const setAuthUser = (user) => {
        sessionStorage.setItem("coasterCredit_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("coasterCredit_user") !== null)

    }

    
    return (
        <>
            <Route path="/">  {isAuthenticated ? <UserCard credits={credits} /> : <Login />}  </Route>
            <Route exact path="/"> {isAuthenticated ? <YoutubeEmbed embedId={"lBgNx8nts70"}  /> : <Login /> } </Route>

            <Route exact path="/parks">  {isAuthenticated ? <ParkList getCredits={getCredits} /> : <Login />}  </Route>

            <Route exact path="/parks/:parkId(\d+)">  {isAuthenticated ? <ParkDetail getCredits={getCredits} /> : <Login />} </Route>

            <Route exact path="/coasters">  {isAuthenticated ? <RideList getCredits={getCredits} /> : <Login />}  </Route>



            <Route exact path="/login">  <Login setAuthUser={setAuthUser} />  </Route>

            <Route exact path="/register">  <Register setAuthUser={setAuthUser} />  </Route>
        </>
    );
};
