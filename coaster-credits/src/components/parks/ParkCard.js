import React from "react";
import { useHistory } from "react-router-dom";
import './Park.css';

export const ParkCard = ({ park }) => {
  const history = useHistory();

  const handleGetDetails = () => {
    history.push("/parks/" + park.id + "/");
  }

  return (
    <>
      <section className="park">
        <div className="park-content">

          {park.name ? <h3 className="park-name"> Park Name: {park?.name} </h3> : <h3 className="park-name"> Park Name: Unknown </h3>}

          {park.city ? <p className="park-city"> City: {park?.city} </p> : <p className="park-city"> City: Unknown </p>}

          {park.state ? <p className="park-state">State: {park?.state} </p> : <p className="park-state"> State: Unknown </p>}

          {park.country ? <p className="park-county"> Country: {park?.country} </p> : <p className="park-county"> Country: Unknown </p>}

          <button className="park-detailsButton" type="button" onClick={handleGetDetails} > Select This Park </button>

          {/* <button className="park-deleteButton" type="button" onClick={handleDeletePark(park.id)} > Delete This Park </button> */}

        </div>
      </section>
    </>
  )
}