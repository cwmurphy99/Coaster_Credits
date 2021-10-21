import APIManager from "../modules/APIManager";
import { ParkList } from "./ParkList";
import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export const ParkCard = () => {
  const [parks, setParks] = useState();
  const apiListReturn = new APIManager();

 const getParks = () => {
   fetch("http://localhost:8088/parks")
   .then((response) => response.json())
   .then((apiListReturn) => {
     setParks(apiListReturn);
   });
 };

  useEffect(() => {
    getParks();
  });

  return (
    <>
      
    


    </>
  )
}