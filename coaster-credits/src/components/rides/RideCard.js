import React from "react";
import './Ride.css';

export const RideCard = ({ ride }) => {


    return (
        <>
            <section className="ride">
                <div className="ride-content">

                    {ride.name ? <h3 className="ride-name">Name: {ride?.name.toUpperCase()} </h3> : <h3 className="ride-name">Name: Unknown </h3>}

                    {ride.make ? <p className="ride-make">Manufactured By: {ride?.make} </p> : <p className="ride-make">Manufactured By: Unknown </p> }

                    {ride.model ? <p className="ride-model">Model: {ride?.model} </p> : <p className="ride-model">Model: Unknown </p> }

                    { ride.type ? <p className="ride-type">Type: {ride?.type} </p> : <p className="ride-type">Type: Unknown </p> }
                </div>
            </section>
        </>
    )
}