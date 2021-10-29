import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import APIManager from '../modules/APIManager';
import './User.css';

const apiManager = new APIManager();
const apiForCredits = new APIManager();

export const UserCard = ({ credits }) => {
    const currentUser = parseInt(sessionStorage.getItem("coasterCredit_user"));
    const history = useHistory();
    const [user, setUsers] = useState({});


    useEffect(() => {
        apiManager.getById("users", currentUser).then((userFromAPI) => {
            setUsers(userFromAPI);
        })
    }, []);

    return (
        <>
            <section className="user">

                <div className="user-content">

            {user.nickName ? <h3 className="user-nickName"> Welcome back, {user.nickName}!! </h3> : <h3 className="user-nickName">Welcome back, {user.name}!! </h3>}

                <div className="user-countDiv">
                <h4 className="user-creditCount"> Credit Count: </h4>
                <h3 className="user-creditTotal"> {credits.length} </h3>
                </div>

            {/* <button className="delete-button" type="button" onClick={() => handleDeleteProfile(user.id)}> <strong> Delete Profile </strong> </button>


                <Link to={`/users/${user.id}`}><button> <strong> Details </strong> </button> </Link>

                <button className="edit-button" type="button"
                onClick={() => history.push(`/users/${user.id}/edit`)}> Edit </button> */}

                </div>
            </section>
        </>
    );
};