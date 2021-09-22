import React from 'react';
import Logo from "./Logo";
import Navigation from "./Navigation";
import {useHistory} from "react-router-dom";
import ApiAuth from "../api/api-auth";

const HeaderUser = () => {
    const history  = useHistory()

    const _clickLogout =  async () => {

        ApiAuth.logout()
            .then(response => {
                history.push('/');
            })

            .catch(error => {
                alert("Erreur interne !");
            })
    }

    return (
        <header className="header-user">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div id="logo-home" className="navbar-brand">
                    <Logo color={"white"} />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <Navigation to={"/home"} />
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-dark my-2 my-sm-0" onClick={_clickLogout}>
                                Se déconnecter
                            </button>
                        </li>
                        <li className="nav-item">
                            <Navigation to={"/profile"} />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default HeaderUser;
