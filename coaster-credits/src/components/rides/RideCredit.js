import { useState, useEffect } from "react";
import { RideCard } from './RideCard';
import './Ride.css';


export const RideCredit = ({parkId}) => {

    const [credits, setCredits] = useState();

    const getCredits = () => {
        return fetch(`http://localhost:8088/rides?parkId=${parkId}`)
            .then((response) => response.json())
            .then((apiListReturn) => {

                console.log(apiListReturn)
                setCredits(apiListReturn);
                
            });
    };

    useEffect(() => {
        getCredits();
    }, []);

    return (
        <>
            <section className="credit-section">
                <h2>Pick and Choose</h2>
                {credits?.map(singleCredit => <RideCard key={singleCredit.id} ride={singleCredit} />)}
            </section>
        </>
    );
};