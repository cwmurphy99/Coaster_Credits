import { getDefaultNormalizer } from "@testing-library/dom";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const CheckBox = ({ ride, getCredits }) => {
    const [checked, setChecked] = useState(false);
    const [findCredit, addCredit] = useState([]);

    const loggedInUser = parseInt(sessionStorage.getItem("coasterCredit_user"));
    let creditToDelete = "";
    let newCredit = {};
    const dateAdded = new Date();

    const handleChange = () => {
        //handleChange is envoked when the users clicks a checkbox
        //whatever the value was, we set it to the opposite
        setChecked(!checked);

        //run a fetch to the credits table with logged in user and ride id
        fetch(`http://localhost:8088/credits?userId=${loggedInUser}&rideId=${ride.id}`)
            .then(response => response.json())
            .then((data) => {
                addCredit(data);
                //if we find an entry in the database, we delete the credit.
                if (data.length > 0) {
                    creditToDelete = data[0].id;
                    console.log("credit to delete: ", data)
                    deleteCredit();
                }
                //if we do not find an entry, we add the credit to the database.
                else {
                    newCredit = {
                        rideId: ride.id,
                        userId: loggedInUser,
                        date: dateAdded,
                    }
                    createCredit();
                }
            })

    };

    const deleteCredit = () => {
        console.log("findCredits: ", getCredits);
        fetch(`http://localhost:8088/credits/${creditToDelete}`, {
            method: "DELETE",
        }).then((result) => result.json())
            .then(() => getCredits());
    }

    const createCredit = () => {
        fetch(`http://localhost:8088/credits`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCredit),
        }).then((response) => response.json())
            .then(getCredits);
    }

    useEffect(() => {
        fetch(`http://localhost:8088/credits?userId=${loggedInUser}&rideId=${ride.id}`)
            .then(response => response.json())
            .then((data) => {
                addCredit(data);
                if (data.length > 0) {
                    setChecked(true);
                } else {
                    setChecked(false);
                }
            })
    }, [])

    return (
        <div className="credit-checkBox">
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleChange()}
                />
                Give Me Credit!
            </label>
        </div>
    );
};
