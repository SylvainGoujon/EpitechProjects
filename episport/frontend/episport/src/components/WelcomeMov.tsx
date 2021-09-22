import React from 'react';
import Video from "./Video";

const WelcomeMov = () => {
    return (
        <div className="welcomemov">
            <div className="container">
                <div className="row p-5">
                    <div className="col-sm-6 d-flex justify-content-center">
                        <div className="w-75 my-auto">
                            <h3>Regardez Episport sur votre TV</h3>
                            <p>
                                Regardez Episport sur votre TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center">
                        <div className="m-3 col-8">
                            <Video src={"https://www.youtube.com/embed/8kVI621fZug"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row p-5">
                    <div className="col-sm-6 d-flex justify-content-center">
                        <div className="m-3 col-8">
                            <Video src={"https://www.youtube.com/embed/n9meJA6-1Jo"} />
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center">
                        <div className="w-75 my-auto">
                            <h3>Où que vous soyez</h3>
                            <p>
                                Regardez des vidéos en accès illimité sur votre TV, smartphone, tablette et ordinateur
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeMov;
