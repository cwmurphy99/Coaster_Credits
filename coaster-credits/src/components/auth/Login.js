import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Label } from 'reactstrap';
import loginCCLogo from '../../images/coasterCreditsLogoRectangle.png';
import "./Login.css";


export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" });
    const [existDialog, setExistDialog] = useState(false);

    const history = useHistory();

    const handleInputChange = (event) => {
        const newUser = { ...loginUser };
        newUser[event.target.id] = event.target.value;
        setLoginUser(newUser);
    };

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then((res) => res.json())
            .then((user) => (user.length ? user[0] : false));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        existingUserCheck().then((exists) => {
            if (exists) {
                // The user id is saved under the key coasterCredit_user in session Storage. Change below if needed!
                sessionStorage.setItem("coasterCredit_user", exists.id);
                history.push("/");
            } else {
                setExistDialog(true);
            }
        });
    };

    return (
        <>
            <main className="container--login">
                <dialog className="dialog dialog--auth" open={existDialog}>
                    <div>
                        <h2>User does not exist</h2>
                        <div className="buttonDiv">
                            <Button
                                className="button--close"
                                onClick={(e) => setExistDialog(false)}
                            >
                                Try Again
                            </Button>
                        </div>
                    </div>
                </dialog>

                <section className="login-logoSection">
                    <div className="login-logoDiv">
                        <img src={loginCCLogo} />
                    </div>
                </section>

                <section className="form--section">
                    <form className="form--login" onSubmit={handleLogin}>
                        <h1 className="form--title">Sign in and let's get started!</h1>
                        <fieldset className="form-label" >
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email Address"
                                required
                                autoFocus
                                value={loginUser.email}
                                onChange={handleInputChange}
                            />
                        </fieldset>
                        <fieldset className="form--login--button">
                            <Button>Sign In</Button>
                        </fieldset>
                    </form>
                </section>

                <section className="link--register">
                    <div className="registerDiv">
                        <h4 className="registerText"> Don't have a login yet? </h4>
                        <div className="registerButtonDiv">
                            <Link to="/register"><Button> Register New Account </Button> </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
