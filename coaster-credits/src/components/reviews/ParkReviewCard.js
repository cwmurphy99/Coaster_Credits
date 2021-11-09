import React from "react";
import { usestate, useHistory, useEffect } from 'react-router-dom';

export const ParkReviewCard = () => {


    // {
    //     "id": "",
    //     "title": "",
    //     "review": "",
    //     "dateOfVisit": "",
    //     "parkId": "",
    //     "rideId": "",
    //     "userId": "",
    //     "timestamp": ""
    // }

   return (
        <>

            <section className="parkReview-cardSection">
                <div className="parkReview-cardDiv">
                    <div className="parkReview-card">

                        <div className="parkReview-titleDiv">
                            <h3 className="parkReview-title"> Title: </h3>
                            <h2 className="parkReview-titleDetail"> {parkReview.title} </h2>
                        </div>

                        <div className="parkReview-reviewDiv">
                            <h3 className="parkReview-review"> Review Details: </h3>
                            <h2 className="parkReview-reviewDetail"> {parkReview.reviewDetails} </h2>
                        </div>

                        <div className="parkReview-dateDiv">
                            <h3 className="parkReview-date"> Date of Visit: </h3>
                            <h2 className="parkReview-dateDetail"> {parkReview.date} </h2>
                        </div>

                        <div className="parkReview-deleteButtonDiv">
                            <Button className="parkReview-deleteButton" onClick={alert("delete button pressed")} > Delete Review </Button>
                        </div>

                        <div className="parkReview-editButtonDiv">
                            <Button className="parkReview-editButton" onClick={alert("edit button pressed")} > Edit Review </Button>
                        </div>

                        <div className="parkReview-backButtonDiv">
                            <Button onClick={handleBack} > Go Back </Button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}