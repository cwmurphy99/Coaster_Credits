import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    //const history = useHistory();
    //THIS WILL SET THE STATE TO DETERMINE IF USER IS LOGGED IN OR NOT
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("coasterCredit_user") !== null)

//IN THIS RETURN WE VALIDATE THE USER HAS LOGGED IN.  IF YES, LINKS WILL BE PROVIDED.  IF NO, 
//USER WILL NOT SEE THE LINKS FOR THEME PARKS, COASTERS, OR MY PROFILE
    return (
 
        <nav>
            
            {isAuthenticated ?
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link-parks" to="/parks">
                        Theme Parks
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link-coasters" to="/coasters">
                        Coasters
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link-profile" to="/profiles">
                        My Profile
                    </Link>
                </li>
            </ul>

        :

            <ul className="nav-list">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
            </ul>
}
        </nav>
    )
}