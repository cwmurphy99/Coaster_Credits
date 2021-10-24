import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import APIManager from "../../modules/APIManager"

const apiParkEditor = new APIManager();

export const ParkEditForm = () => {
    const [thisPark, setPark] = useState({
        name: "",
        city: "",
        state: "",
        country: "",
    })
}