import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    //const history = useHistory();

    return (
    
        <nav>
            

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
        </nav>
    )
}