import React, { useState, useEffect } from "react";
import APIManager from "../modules/APIManager";
import { useHistory, useParams } from "react-router-dom";
import { RideCard } from "../rides/RideCard";
import { RideList } from "../rides/RideList";
import { RideCredit } from "../rides/RideCredit";

const apiParkReturn = new APIManager();
const currentUser = parseInt(sessionStorage.getItem("coasterCredit_user"));

export const ParkDetail = ({getCredits}) => {
    const [park, setPark] = useState({
        id: "",
        user: "",
        name: "",
        city: "",
        state: "",
        country: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const { parkId } = useParams();
    const history = useHistory();

    const handleDeletePark = (id) => {
        alert("delete park button clicked");
        //     apiParkReturn.delete("parks", id);
        //     history.push("/parks");
    };

    const handleBack = () => {
        history.push("/parks");
        setPark();
    };

    useEffect(() => {
        apiParkReturn.getById("parks", parkId).then((park) => {
            setPark({
                id: park.id,
                user: currentUser,
                name: park.name,
                city: park.city,
                state: park.state,
                country: park.country,
            });
            setIsLoading(false);
        });
        setIsLoading(false);
    }, [parkId]);

    return (
        <>
            <section className="park-detailSection">
                <div className="park-detail">

                    <h3 className="park-Name"> <strong> Name: {park.name} </strong> </h3>
                    <div className="park-parkDetails"> <strong> City: </strong> {park.city} </div>
                    <div className="park-parkDetails"> <strong> State: </strong> {park.state} </div>
                    <div className="park-parkDetails"> <strong> Country: </strong> {park.country} </div>

                    {currentUser === 1 ?

                        <div>

                            <button className="park-deleteButton" type="button" disabled={isLoading} onClick={handleDeletePark} > Delete This Park </button>
                            <button className="park-editButton" type="button" disabled={isLoading} onClick={() => history.push(`/parks/${parkId}/edit`)} > Edit This Park </button>
                            <button type="button" className="park-backButton" onClick={handleBack} > Go Back </button>
                            
                        </div>

                        :
                        
                        <button type="button" className="park-backButton" onClick={handleBack} > Go Back </button>

                    }

                </div>
            </section>

        <RideCredit parkId={parkId} getCredits={getCredits} />

        </>
    )

}