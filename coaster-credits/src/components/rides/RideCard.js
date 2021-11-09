import React, { useState } from "react";
import { CheckBox } from "../credits/CreditCard";
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

                        <div className="ride-nameDiv">
                            <h3 className="ride-name">Name: </h3>
                            {ride.name ? <h3 className="ride-rideName"> <a href={ride.link} target="_blank"> {ride.name.toUpperCase()} </a> </h3> : <h3 className="ride-rideName"> Unknown </h3>}
                        </div>

                        <div className="ride-makeDiv">
                            <h3 className="ride-make">Manufactured By: </h3>
                            {ride.make ? <h3 className="ride-rideMake"> {ride.make} </h3> : <h3 className="ride-rideMake"> Unknown </h3>}
                        </div>

                        <div className="ride-modelDiv">
                            <h3 className="ride-model">Model: </h3>
                            {ride.model ? <h3 className="ride-rideModel"> {ride.model} </h3> : <h3 className="ride-rideMoedel"> Unknown </h3>}
                        </div>

                        <div className="ride-typeDiv">
                            <h3 className="ride-type">Type: </h3>
                            {ride.type ? <h3 className="ride-rideType"> {ride.type} </h3> : <h3 className="ride-rideType"> Unknown </h3>}
                        </div>

                        <div className="ride-locationDiv">
                            <h3 className="ride-location">Location: </h3>
                            {ride.parkName ? <h3 className="ride-rideLocation">  {ride.parkName} </h3> : <h3 className="ride-rideLocation"> Unknown </h3>}
                        </div>


                        <div className="ride-checkBoxDiv">
                         {ride.ended ? <h3 className="OutOfOps"> Out of Operation </h3> : <CheckBox ride={ride} getCredits={getCredits} />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}