import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import APIManager from '../modules/APIManager';
import './User.css';

const apiManager = new APIManager();
const apiForCredits = new APIManager();

export const UserCard = ({ }) => {
    const currentUser = parseInt(sessionStorage.getItem("coasterCredit_user"));
    const history = useHistory();
    const [user, setUsers] = useState({});
    const [credit, setCredits] = useState({});

    useEffect(() => {
        apiManager.getById("users", currentUser).then((userFromAPI) => {
            setUsers(userFromAPI);
        })
}, []);


    return (
        <section className="user">

            <div className="user-content">

                <h3 className="user-nickName">Welcome back, {user.nickName}!! </h3>

                {/* <h4 className="user-creditCount"> <strong> Credit Count: </strong> {credit} </h4> */}

                {/* <button className="delete-button" type="button" onClick={() => handleDeleteProfile(user.id)}> <strong> Delete Profile </strong> </button>


                <Link to={`/users/${user.id}`}><button> <strong> Details </strong> </button> </Link>

                <button className="edit-button" type="button"
                onClick={() => history.push(`/users/${user.id}/edit`)}> Edit </button> */}

            </div>
        </section>
    );
};