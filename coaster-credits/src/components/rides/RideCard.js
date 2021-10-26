import React, { useState } from "react";
import { CheckBox } from "../credits/creditCard";
import './Ride.css';

export const RideCard = ({ ride, getCredits }) => {

    const [checked, setChecked] = useState(false);
    const userInfo = parseInt(sessionStorage.getItem("coasterCredit_user"));

    const [registerCredit, setRegisterCredit] = useState({
        userId: "",
        rideId: "",
        id: "",
    });

    
    return (
        <>
            <section className="ride-section">
                <div className="ride-selection">
                    <div className="ride-card">

                        {ride.name ? <h3 className="ride-name">Name: {ride?.name.toUpperCase()} </h3> : <h3 className="ride-name">Name: Unknown </h3>}

                        {ride.make ? <p className="ride-make">Manufactured By: {ride?.make} </p> : <p className="ride-make">Manufactured By: Unknown </p>}

                        {ride.model ? <p className="ride-model">Model: {ride?.model} </p> : <p className="ride-model">Model: Unknown </p>}

                        {ride.type ? <p className="ride-type">Type: {ride?.type} </p> : <p className="ride-type">Type: Unknown </p>}

                        <CheckBox ride={ride} getCredits={getCredits}/>

                    </div>
                </div>
            </section>
        </>
    )
}