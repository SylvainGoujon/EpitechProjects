import React, {Component} from 'react';
import WelcomeTxt from "../components/WelcomeTxt";
import FooterComponent from "../components/FooterComponent";
import Header from "../components/Header";
import WelcomeMov from "../components/WelcomeMov";

export default class Welcome extends Component{
    render () {
        return (
            <div className="welcome">
                <Header page={"welcome"} />
                <main className="jumbotron d-flex align-items-center justify-content-center">
                    <WelcomeTxt />
                </main>
                <section>
                    <WelcomeMov />
                </section>
                <FooterComponent />
            </div>
        )
    }
}