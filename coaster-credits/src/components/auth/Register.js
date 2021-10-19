import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export const Register = () => {
    const [registerUser, setRegisterUser] = useState({
        firstName: "",
        lastName: "",
        nickName: "",
        email: "",
        isAdmin: ""
    });
    const [conflictDialog, setConflictDialog] = useState(false);

    const history = useHistory();

    const handleInputChange = (event) => {
        const newUser = { ...registerUser };
        newUser[event.target.id] = event.target.value;
        setRegisterUser(newUser);
    };

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
            .then((res) => res.json())
            .then((user) => !!user.length);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        existingUserCheck().then((userExists) => {
            if (!userExists) {
                // If your json-server URL is different, please change it below!
                fetch("http://localhost:8088/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: registerUser.email,
                        name: `${registerUser.firstName} ${registerUser.lastName}`,
                        nickname: `${registerUser.nickName}`,
                        isAdmin: false,
                    }),
                })
                    .then((res) => res.json())
                    .then((createdUser) => {
                        if (createdUser.hasOwnProperty("id")) {
                            // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                            sessionStorage.setItem("coasterCredit_user", createdUser.id);
                            history.push("/");
                        }
                    });
            } else {
                setConflictDialog(true);
            }
        });
    };

    return (
        
        <main className="container--register" style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>
                    Account with that email address already exists
                </div>
                <button
                    className="button--close"
                    onClick={(e) => setConflictDialog(false)}
                >
                    Close
                </button>
            </dialog>

            <form className="form--register--section"onSubmit={handleRegister}>
                <div className="form--register">
                    <h1>
                        Register for Coaster Credits
                    </h1>
                    <fieldset className="fieldset-register">
                        <label htmlFor="firstName"> First Name </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control"
                            placeholder="First name"
                            required
                            autoFocus
                            value={registerUser.firstName}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                    <fieldset className="fieldset-register">
                        <label htmlFor="lastName"> Last Name </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="form-control"
                            placeholder="Last name"
                            required
                            value={registerUser.lastName}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                    <fieldset className="fieldset-register">
                        <label htmlFor="nickName"> Nickname </label>
                        <input
                            type="text"
                            name="nickName"
                            id="nickName"
                            className="form-control"
                            placeholder="Nickname"
                            required
                            value={registerUser.nickName}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                    <fieldset className="fieldset-register">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                            value={registerUser.email}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                
                <fieldset className="fieldset-register--button">
                    <button type="submit"> Complete Registration </button>
                </fieldset>
                </div>
            </form>
        </main>
    );
};
