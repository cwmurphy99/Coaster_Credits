import { useState, useEffect } from "react";
import { RideCard } from './RideCard';
import './Ride.css';


export const RideList = () => {

    const [rides, setRides] = useState();

    const getRides = () => {
        fetch("http://localhost:8088/rides")
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
            <section className="ride-section">
                <h2>Welcome to the Ride Section</h2>
                {rides?.map(singleRide => <RideCard key={singleRide.id} ride={singleRide} />).slice(firstRide, lastRide)}
            </section>
        </>
    );
};