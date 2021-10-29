import React, { useState, useEffect } from "react";
import APIManager from "../modules/APIManager";
import { useHistory, useParams } from "react-router-dom";
import { RideCard } from "../rides/RideCard";
import { RideList } from "../rides/RideList";
import { RideCredit } from "../rides/RideCredit";
import { Button } from "reactstrap";
import './ParkDetail.css';
import '../rides/Ride.css';
import './Park.css';

const apiParkReturn = new APIManager();
const currentUser = parseInt(sessionStorage.getItem("coasterCredit_user"));

export const ParkDetail = ({ getCredits }) => {
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
                    <div className="park-detailCard">

                        <div className="park-nameDiv">
                            <h3 className="park-name"> Name: </h3>
                            <h3 className="park-nameDetail"> {park.name.toUpperCase()} </h3>
                        </div>

                        <div className="park-cityDiv">
                            <h3 className="park-city"> City: </h3>
                            <h3 className="park-cityDetail"> {park.city} </h3>
                        </div>

                        <div className="park-stateDiv">
                            <h3 className="park-state"> State: </h3>
                            <h3 className="park-stateDetail"> {park.state} </h3>
                        </div>

                        <div className="park-countryDiv">
                            <h3 className="park-country"> Country: </h3>
                            <h3 className="park-countryDetail"> {park.country} </h3>
                        </div>

                        <div className="park-backButtonDiv">
                            <Button onClick={handleBack} > Go Back </Button>
                        </div>

                    </div>
                </div>
            </section>

            <RideCredit parkId={parkId} getCredits={getCredits} />

        </>
    )

}