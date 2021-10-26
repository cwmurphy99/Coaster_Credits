import { useState, useEffect } from "react";
import { ParkCard } from "./ParkCard";
import './Park.css';

export const ParkList = ({ getCredits }) => {

    const [parks, setParks] = useState();

    const getParks = () => {
        fetch("http://localhost:8088/parks")
            .then((response) => response.json())
            .then((apiListReturn) => {
                setParks(apiListReturn);
            });
    };

    useEffect(() => {
        getParks();
    }, []);

    //GENERATE TWO RANDOM NUMBERS SO WE HAVE A RANDOM SET OF RIDES SHOW
    // const getRandomInt = (max) => {
    //     return Math.floor(Math.random() * max)
    // }
    // let firstRide = getRandomInt(3188);
    // let lastRide = firstRide + 5;

    return (
        <>
            <section className="park-section">
                <h2>Welcome to the Park Section</h2>
                <div className="park-selection">
                {parks?.map(singlePark => <ParkCard key={singlePark.id} park={singlePark} getCredits={getCredits} />).slice(141, 145)}
                </div>
            </section>
        </>
    );
};