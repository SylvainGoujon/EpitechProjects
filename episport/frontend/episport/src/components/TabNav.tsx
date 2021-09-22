import React from 'react';
import CardVideo from "./CardVideo";
import CardCoach from "./CardCoach";

const TabNav = () => {
    return (
        <div className="tab-nav">
            <div className="container">
                {/* NAV TABS BRO*/}
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item w-25">
                        <a className="nav-link active" data-toggle="tab" href="#favoris">
                            <h3 className="text-center">Favoris</h3>
                        </a>
                    </li>
                    <li className="nav-item w-25">
                        <a className="nav-link" data-toggle="tab" href="#abonements">
                            <h3 className="text-center">Abonements</h3>
                        </a>
                    </li>
                </ul>
                {/* TAB PANES SIS*/}
                <div className="tab-content">
                    <div id="favoris" className="container tab-pane active">
                        <div className="container d-flex flex-wrap justify-content-around">
                            <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                            <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                            <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                            <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                            <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                            <CardVideo src={"https://www.youtube.com/embed/8kVI621fZug"} title={"summer wibe"} coach={"youtube"} />
                        </div>
                    </div>
                    <div id="abonements" className="container tab-pane fade">
                        <div className="container d-flex flex-wrap justify-content-around">
                            <CardCoach coach={"Kitty"} />
                            <CardCoach coach={"Kitty"} />
                            <CardCoach coach={"Kitty"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabNav;
