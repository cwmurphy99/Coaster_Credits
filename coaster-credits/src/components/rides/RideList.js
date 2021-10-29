import { useState, useEffect } from "react";
import { RideCard } from './RideCard';
import themeParkLogo from '../../images/coasterCreditsLogoRectangle.png';
import './Ride.css';


export const RideList = ({ getCredits }) => {

    const [rides, setRides] = useState();

    const getRides = () => {
        return fetch("http://localhost:8088/rides")
            .then((response) => response.json())
            .then((apiListReturn) => {
                setRides(apiListReturn);
            });
    };

    useEffect(() => {
        getRides();
    }, []);

    //GENERATE TWO RANDOM NUMBERS SO WE HAVE A RANDOM SET OF RIDES SHOW
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }
    let firstRide = getRandomInt(3188);
    let lastRide = firstRide + 5;
    //console.log(firstRide, lastRide);

    return (
        <>
            <section className="rideList-logoSection">
                <div className="rideList-logoDiv">
                    <img src={themeParkLogo} />
                </div>
            </section>

            <section className="rideList-section">
                {rides?.map(singleRide => <RideCard key={singleRide.id} ride={singleRide} getCredits={getCredits} />).slice(firstRide, lastRide)}
            </section>
        </>
    );
};