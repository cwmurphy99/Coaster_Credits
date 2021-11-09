import React, { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import APIManager from "../modules/APIManager";
import { Button } from "reactstrap";
import { useHistory } from "react-router";
import themeParkLogo from '../../images/coasterCreditsLogoRectangle.png';
import './User.css';

const apiManager = new APIManager();

export const UserProfile = () => {
    const currentUser = parseInt(sessionStorage.getItem("coasterCredit_user"));
    const [user, setUsers] = useState({});
    const history = useHistory();

    useEffect(() => {
        apiManager.getById("users", currentUser).then((userFromAPI) => {
            setUsers(userFromAPI);
        })
    }, []);

    const handleBack = () => {
        history.push("/");
    };

    return (
        <>

            <section className="userProfile-logoSection">

                <div className="userProfile-logoDiv">
                    <img src={themeParkLogo} />
                </div>

            </section>

            <section className="userProfile-container">

                <div className="userProfile-content">
                    <div className="userProfile-nickNameDiv">
                        <h2 className="userProfile-nickName"> Welcome to {user.nickName}'s Profile!! </h2>
                    </div>


                    <div className="userProfile-infoDiv">


                        <div className="userProfile-name">
                            <h3 className="userProfile-nameHeading"> Name </h3>
                            <h3 className="userProfile-nameEntry"> {user.fullName} </h3>
                        </div>

                        <div className="userProfile-email">
                            <h3 className="userProfile-emailHeading"> Email </h3>
                            <h3 className="userProfile-emailEntry"> {user.email} </h3>
                        </div>

                        <div className="userProfile-birthday">
                            <h3 className="userProfile-birthdayHeading"> Birthday </h3>
                            {user.birthday ? <h3 className="userProfile-birthdayEntry">{user.birthday} </h3> : <h3 className="userProfile-birthdayEntry"> No Entry Found </h3>}
                        </div>

                        <div className="userProfile-homePark">
                            <h3 className="userProfile-homeParkHeading"> Home Park </h3>
                            {user.homePark ? <h3 className="userProfile-homeParkEntry">{user.homePark} </h3> : <h3 className="userProfile-homeParkEntry"> No Home Park </h3>}
                        </div>

                        <div className="userProfile-favoritePark">
                            <h3 className="userProfile-favoriteParkHeading"> Favorite Park </h3>
                            {user.favoritePark ? <h3 className="userProfile-favoriteParkEntry">{user.favoritePark} </h3> : <h3 className="userProfile-favoriteParkEntry"> No Favorite Park </h3>}
                        </div>

                    </div>

                    <div className="userProfile-buttonsDiv">
                        <div className="userProfile-editButtonDiv">
                            <Button className="edit-button" type="button" onClick={() => history.push(`/users/${user.id}/edit`)}> Edit </Button>
                        </div>

                        <div className="userProfile-backButtonDiv">
                            <Button type="button" className="goBackButton" onClick={() => handleBack()}> Go Back </Button>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};