import React from 'react';
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = ( props: { page: string } ) => {

    if (props.page === "welcome") {
        return (
            <div className="header-home">
                <header className="container-fluid position-absolute mt-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <div id="logo-home" className="d-flex justify-content-start">
                                <Logo color={"dark"} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div id="p-login" className="d-flex justify-content-end">
                                <Navigation to={"/login"} />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    } else {
        return (
            <div className="header-home">
                <header className="container-fluid position-absolute mt-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <div id="logo-home" className="d-flex justify-content-start">
                                <Logo color={"dark"} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            {/*<div id="p-login" className="d-flex justify-content-end">*/}
                            {/*    <Navigation to={"/login"} />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
};

export default Header;
