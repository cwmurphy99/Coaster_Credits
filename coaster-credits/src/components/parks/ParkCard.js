import APIManager from "../modules/APIManager";
import { ParkList } from "./ParkList";
import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export const ParkCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1hNOSYnVbwVQZr-4y6GMaWZcWv_RANK5aWp51UY294_0",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h1>data from google sheets</h1>
       
       <ul>
       {data.map((item, i) => (
        <Fragment key={i}>
          <li>Coaster -- {item.Coaster}</li>
          <li>Park - {item.Park}</li>
          <li>City - {item.City}</li>
          <br />
        </Fragment>
      ))}
       </ul>

    </>
  );
}




// export const ParkCard = () => {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         Tabletop.init({
//             key: "1hNOSYnVbwVQZr-4y6GMaWZcWv_RANK5aWp51UY294_0",
//             simpleSheet: true,
//         }).then(function (data) {
//             setData(data);
//         });
//     }, []);
//     const parkList = Array.from(data);
//     console.log(parkList)

//     return (
//         <>
//             <h3> Check out this info: </h3>
//             <div>
//             <ul>
//                 {parkList.map((el) => (
//                     <li key={el.coaster}>
//                         {el.coaster} 
//                     </li>
//                 ))}
//             </ul>
//             </div>
//         </>
//     );
// }
// export const ParkCard = () => {
//     let parkName = "";
//     const apiManager = new APIManager();

//     const getAPark = () => {
//         return fetch(`https://coasters-api.herokuapp.com/park/Cedar Point`)
//             .then(response => {

//                 return response.json()
//             }).then(data => console.log(data))
//     }
//     return (
//         <>
//             <h3> Check out this ride: {parkName}</h3>
//             <button onClick={getAPark}>Log This Park</button>

//         </>
//     )
// }