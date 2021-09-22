import React from 'react';
import Video from "./Video";


const CardBigVideo = (props: { src: string, title : string, coach : string }) => {
    return (
        <div className="cardbigvideo m-5 container d-flex justify-content-center">
            <div className="card text-dark col-8" >
                <Video src={props.src} />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
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

export default CardBigVideo;
