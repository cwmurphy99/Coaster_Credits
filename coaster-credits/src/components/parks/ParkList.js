import { useState, useEffect } from "react";
import { ParkCard } from "./ParkCard";
import themeParkLogo from '../../images/coasterCreditsLogoRectangle.png';
import './Park.css';

export const ParkList = ({ getCredits }) => {
    const [parks, setParks] = useState();

    let count = 0;

    const getParks = () => {
        fetch("http://localhost:8088/parks")
            .then((response) => response.json())
            .then((apiListReturn) => {
                count++;
                setParks(apiListReturn);
            });
    };

    useEffect(() => {
        getParks();
    }, []);

    //GENERATE TWO RANDOM NUMBERS SO WE HAVE A RANDOM SET OF RIDES SHOW
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }
    let firstPark = getRandomInt(1279);
    let lastPark = firstPark + 6;

    return (
        <>
            <section className="park-searchSection">
                <div className="park-searchDiv">
                    <input type="text" placeholder="Enter Park Name" />
                </div>
            </section>

            <section className="park-logoSection">
                <div className="park-logoDiv">
                    <img src={themeParkLogo} />
                </div>
            </section>

            <section className="park-section">
                <div className="park-selection">
                    {parks?.map(singlePark => <ParkCard key={singlePark.id} park={singlePark} getCredits={getCredits} />).slice(firstPark, lastPark)}
                </div>
            </section>
        </>
    );
};