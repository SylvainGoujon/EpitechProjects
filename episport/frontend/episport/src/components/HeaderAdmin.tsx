import React, {FunctionComponent} from 'react';
import ApiAuth from "../api/api-auth";
import {useHistory} from 'react-router-dom';
import Logo from "./Logo";
import Navigation from "./Navigation";
import adminlo from "../assets/svg/adminlo.svg";

const HeaderAdmin : FunctionComponent  = () => {
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
        <header className="header-admin">
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
                            <Navigation to={"/users"} />
                        </li>
                        <li className="nav-item">
                            <Navigation to={"/categories"} />
                        </li>
                        <li className="nav-item">
                            <Navigation to={"/coaches"} />
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-dark my-2 my-sm-0" onClick={_clickLogout}>
                                <img src={adminlo} alt="profile" height='23px' />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default HeaderAdmin