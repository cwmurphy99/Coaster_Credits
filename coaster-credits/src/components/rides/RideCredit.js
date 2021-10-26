import { useState, useEffect } from "react";
import { RideCard } from './RideCard';
import './Ride.css';


export const RideCredit = ({parkId, getCredits}) => {

    const [credits, setCredits] = useState([]);

    const getAllCredits = () => {
        return fetch(`http://localhost:8088/rides?parkId=${parkId}`)
            .then((response) => response.json())
            .then((apiListReturn) => {

                setCredits(apiListReturn);
                
            });
    };

    useEffect(() => {
        getAllCredits();
    }, []);

    return (
        <>
            <section className="credit-section">
                <h2>Pick and Choose</h2>
                {credits?.map(singleCredit => <RideCard key={singleCredit.id} ride={singleCredit} getCredits={getCredits} />)}
            </section>
        </>
    );
};