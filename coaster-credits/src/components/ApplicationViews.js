import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { Route } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { useState } from "react";
import { UserCard } from "./users/UserCard";
import { ParkList } from "./parks/ParkList";
import { ParkDetail } from "./parks/ParkDetail";
import { RideList } from "./rides/RideList";
import { UserProfile } from "./users/UserProfile";
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

    useEffect(() => {
        getCredits();
    }, []);

    //THIS WILL SET THE STATE TO DETERMINE IF USER IS LOGGED IN OR NOT
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("coasterCredit_user") !== null)

    //THIS WILL SET THE SESSION STORAGE WHEN THE USER HAS OFFICIALLY LOGGED IN TO THE APP
    const setAuthUser = (user) => {
        sessionStorage.setItem("coasterCredit_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("coasterCredit_user") !== null)
    }
    //GRAB A RANDOM NUMBER AND SELECT A YOUTUBE VIDEO EMBED ID
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }
    const getEmbedId = () => {
        let embedVideo = ["9BYVm9oCVkc", "i1KG6NxBVQc", "5MkuSUXdoZo", "lBgNx8nts70", "ORYxTwDbWz8", "biscwXQ6GPY", "mWASI1qpHvk", "MfJjX7HcPbg", "WziRm9Ez-uY", "fv020y-0x_g", "Nh8PoG7UzS4", "g-v7MDKL-gI", "6EjSl_FKDBY", "5WrRDN6gGvM", "KTji1hOICEI", "qYjl11p3afM", "llvaWdI3hLM", "NRvWERvwyIM", "RTXTbzctl0c", "Bzq01XaGNtw"];
        let chooseVideo = getRandomInt(20);
        return embedVideo[chooseVideo]
    }

    return (
        <>
            

            <Route path="/">  {isAuthenticated ? <UserCard credits={credits} /> : <Login />}  </Route>

            <div className="container">
                <div className="getRandomButton">
                    <Button onClick={() => getCredits()} > Get Random </Button>
                </div>
            </div>


            <Route exact path="/"> {isAuthenticated ? <YoutubeEmbed embedId={getEmbedId()} /> : <Login />} </Route>

            <Route exact path="/parks">  {isAuthenticated ? <ParkList getCredits={getCredits} /> : <Login />}  </Route>

            <Route exact path="/parks/:parkId(\d+)">  {isAuthenticated ? <ParkDetail getCredits={getCredits} /> : <Login />} </Route>

            <Route exact path="/coasters">  {isAuthenticated ? <RideList getCredits={getCredits} /> : <Login />}  </Route>

            <Route exact path="/profiles"> {isAuthenticated ? <UserProfile /> : <Login />} 
            </Route>

            {/* <Route exact path="/users/:userId(\d+)/edit">  {isAuthenticated ? <ProfileEditForm  /> : <Login />} </Route> */}

            <Route exact path="/login">  <Login setAuthUser={setAuthUser} />  </Route>

            <Route exact path="/register">  <Register setAuthUser={setAuthUser} />  </Route>
        </>
    );
};
