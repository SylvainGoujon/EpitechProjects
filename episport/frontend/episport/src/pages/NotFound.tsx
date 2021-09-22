import React, {Component} from "react";
import FooterComponent from "../components/FooterComponent";
import HeaderUser from "../components/HeaderUser";


export default class NotFound extends Component{
    render () {
        return (
            <div className="notfound">
                <HeaderUser />
                <h1>Erreur 404</h1>
                <FooterComponent />
            </div>
        )
    }
}