import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../auth/Login";
import './NavBar.css';

export const NavBar = () => {
    //const history = useHistory();
    //THIS WILL SET THE STATE TO DETERMINE IF USER IS LOGGED IN OR NOT
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("coasterCredit_user") !== null)
    
    const handleLogOut = () => {
        sessionStorage.removeItem("coasterCredit_user");
    }
    //IN THIS RETURN WE VALIDATE THE USER HAS LOGGED IN.  IF YES, LINKS WILL BE PROVIDED.  IF NO, 
    //USER WILL NOT SEE THE LINKS FOR THEME PARKS, COASTERS, OR MY PROFILE
    return (

        <nav>

            {isAuthenticated ?
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link-home" to="/">
                            Home
                        </Link>
                    </li>
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
                    <li className="nav-item">
                        <Link className="nav-link-logout" to="/" onClick={handleLogOut}>
                            Log Out
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