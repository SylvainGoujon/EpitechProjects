import React from 'react';

const MonProfile = ( props: { username : string, email : string } ) => {
    return (
        <div className="monprofil mt-5 p-5">
            <div className="container pt-5">
                <div className="m-3">
                    <h1 className="mon-profile">Mon Profile</h1>
                    <hr className="mon-profile"/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 d-flex">
                        <div className="m-3">
                            <p>{props.username}</p>
                            <p>{props.email}</p>
                        </div>
                    </div>
                    <div className="col-sm-3 d-flex">
                        <button  id="modif" className="btn m-auto">
                            Modifier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonProfile;
