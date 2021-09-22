import React from 'react';
import logo from "../assets/svg/logo.svg";
import {Link} from "react-router-dom";

type props = {
    // using `interface` is also ok
    color: string;
};

class Logo extends React.Component <props>{
    render() {

        if (this.props.color === "white") {
            return (
                <div className="logo mx-5">
                    <Link to="/">
                        <div className="logo-link container d-flex">
                            <img src={logo} className="logo" alt="Logo Episport"/>
                            <h4 className="text-white my-auto">EPISPORT</h4>
                        </div>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="logo mx-5">
                    <Link to="/">
                        <div className="logo-link container d-flex">
                            <img src={logo} className="logo" alt="Logo Episport"/>
                            <h4 className="text-dark my-auto">EPISPORT</h4>
                        </div>
                    </Link>
                </div>
            );
        }
    }
}

export default Logo;