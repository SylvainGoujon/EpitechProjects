import {Link} from "react-router-dom";
import React, {Component} from "react";
import profile from "../assets/svg/profile.svg";


type props = {
    // using `interface` is also ok
    to: string;
};

export default class Navigation extends Component <props> {
    render() {

        if (this.props.to === "/") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                Welcome
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/login") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/login" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                Se connecter
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/register") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/register" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                S'inscrire
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/video") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/video" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                Video
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/profile") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/profile" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                <img src={profile} alt="profile" height='23px'/>
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/home") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/home" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                Accueil
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/coach") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/coache" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                Coache
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/coaches") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/coaches" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                Coaches
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/category") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/category" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                Category
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/categories") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/categories" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                Categories
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
        if (this.props.to === "/users") {
            return (
                <div className="navigation">
                    <nav>
                        <Link to="/users" className="my-auto">
                            <button type="button" className="btn btn-dark my-2 my-sm-0">
                                Users
                            </button>
                        </Link>
                    </nav>
                </div>
            );
        }
    }
}
