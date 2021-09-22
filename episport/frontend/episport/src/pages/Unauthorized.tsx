import React, {Component} from "react";
import FooterComponent from "../components/FooterComponent";
import HeaderAdmin from "../components/HeaderAdmin";


export default class Unauthorized extends Component{
    render () {
        return (
            <div className="unauthorized">
                <HeaderAdmin />
                    <h1>Erreur 403</h1>
                <FooterComponent />
            </div>
        )
    }
}