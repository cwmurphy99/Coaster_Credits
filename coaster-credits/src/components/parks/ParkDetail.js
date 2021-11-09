import React, { useState, useEffect } from "react";
import APIManager from "../modules/APIManager";
import { useHistory, useParams } from "react-router-dom";
import { RideCard } from "../rides/RideCard";
import { RideList } from "../rides/RideList";
import { RideCredit } from "../rides/RideCredit";
import { Button } from "reactstrap";
import { UserCard } from '../users/UserCard';
import themeParkLogo from '../../images/coasterCreditsLogoRectangle.png';
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

            <section className="park-logoSection">
                <div className="park-logoDiv">
                    <img src={themeParkLogo} />
                </div>
            </section>


            <section className="parkDetail-detailSection">
                <div className="parkDetail-detail">
                    <div className="parkDetail-detailCard">
                        <div className="parkDetail-nameDiv">
                            <h3 className="parkDetail-name" style={{ color: "#9D0307" }}> Name: </h3>
                            <h3 className="parkDetail-nameDetail" > {park.name.toUpperCase()} </h3>
                        </div>

                        <div className="parkDetail-cityDiv">
                            <h3 className="parkDetail-city" style={{ color: "#9D0307" }}> City: </h3>
                            <h3 className="parkDetail-cityDetail"> {park.city} </h3>
                        </div>

                        <div className="parkDetail-stateDiv">
                            <h3 className="parkDetail-state" style={{ color: "#9D0307" }}> State: </h3>
                            <h3 className="parkDetail-stateDetail"> {park.state} </h3>
                        </div>

                        <div className="parkDetail-countryDiv">
                            <h3 className="parkDetail-country" style={{ color: "#9D0307" }}> Country: </h3>
                            <h3 className="parkDetail-countryDetail"> {park.country} </h3>
                        </div>

                        <div className="parkDetail-backButtonDiv">
                            <Button onClick={handleBack} > Go Back </Button>
                        </div>

                    </div>
                </div>
            </section>

            <RideCredit parkId={parkId} getCredits={getCredits} />

        </>
    )

}