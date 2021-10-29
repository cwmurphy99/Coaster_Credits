import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import './Park.css';

export const ParkCard = ({ park, getCredits }) => {
  const history = useHistory();

  const handleGetDetails = () => {
    history.push("/parks/" + park.id + "/");
  }

  return (
    <>
      <section className="park">
        <div className="park-content">
          <div className="park-card">

{/* SETTING UP INDIVIDUAL DIV AND TURNARY PROPERTIES ALLOWS US THE ABILITY TO SET THE LABLE AND VALUE APART IN ORDER TO STYLE THEM INDIVIDUALLY.  CURRENTLY HAVE THE LABELS SET TO DISPLAY IN RED AND THE VALUE IN BLACK VIA CSS IN PARK.CSS FILE */}

{/* THIS IS FOR THE PARK NAME */}
            <div className="park-nameDiv">
              <h3 className="park-parkName"> Park Name: </h3>
              {park.name ? <h3 className="park-name"> {park.name} </h3> : <h3 className="park-unknownName"> Unknown </h3>}
            </div>
{/* THIS IS FOR THE PARK CITY */}
            <div className="park-cityDiv">
            <h3 className="park-parkCity"> City: </h3>
              {park.city ? <h3 className="park-city"> {park.city} </h3> : <h3 className="park-unknownCity"> Unknown </h3>}
            </div>
{/* THIS IS FOR THE PARK STATE */}
            <div className="park-stateDiv">
            <h3 className="park-parkState"> State: </h3>
              {park.state ? <h3 className="park-state"> {park.state} </h3> : <h3 className="park-unknownState"> Unknown </h3>}
            </div>
{/* THIS IS FOR THE PARK COUNTRY */}
            <div className="park-countryDiv">
            <h3 className="park-parkCountry"> Country: </h3>
              {park.country ? <h3 className="park-country"> {park.country} </h3> : <h3 className="park-unknownCountry"> Unknown </h3>}
            </div>
{/* THIS IS FOR THE PARK SELECTION BUTTON */}
            <div className="park-detailBtnDiv">
              <Button onClick={handleGetDetails} > Select This Park </Button>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}