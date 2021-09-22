import React from 'react';
import Navigation from "./Navigation";

const WelcomeTxt = () => {
    return (
        <div className="welcometxt">
            <div className="container d-flex justify-content-center">
                <div id="card-welcome" className="card-welcome text-white ">
                    <h1 className="text-shadow text-center mt-4">C'est ta 1ère fois ?<br/>Inscris toi !</h1>
                    <div className="btn-register d-flex justify-content-center">
                        <Navigation to={"/register"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeTxt;