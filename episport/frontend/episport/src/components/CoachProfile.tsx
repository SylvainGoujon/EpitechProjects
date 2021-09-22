import React from 'react';
import kitty from "../assets/img/kitty.jpg";

const CoachProfile = ( props: { coach : string, description : string } ) => {
    return (
        <div className="coachprofil mt-5 p-5">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-9 d-flex p-5">
                        <div className="mb-3 w-50">
                            <div className="row g-0">
                                <div className="col-md-5 mr-5">
                                    <img src={kitty} className="coach-pict card-img-top rounded-circle"
                                         alt={props.coach} />
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <div className="card-body p-5">
                                        <h1 className="card-title ml-5 pl-5">{props.coach}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex">
                        <button  id="modif" className="btn m-auto">
                            S'abonner
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-sm-8 mx-auto">
                    <div className="m-3 texte-center">
                        <h4>Description :</h4>
                        <p className="mx-auto">{props.coach}</p>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoachProfile;
