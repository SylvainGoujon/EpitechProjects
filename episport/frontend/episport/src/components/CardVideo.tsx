import React from 'react';
import {Link} from 'react-router-dom';
import Video from "./Video";


const CardVideo = (props: { src: string, title : string, coach : string }) => {
    return (
        <div className="card-video m-5">
            <div className="card text-dark " >
                <Video src={props.src} />
                    <div className="card-body">
                        <Link to ="/" className="stretched-link">
                            <h4 className="card-title ">{props.title}</h4>
                        </Link>
                        <div className ="row">
                            <div className="col">
                                <a href="#like" className="coeur">coeur</a>
                            </div>
                            <div className="col">
                                <p className="card-text">{props.coach}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CardVideo;
