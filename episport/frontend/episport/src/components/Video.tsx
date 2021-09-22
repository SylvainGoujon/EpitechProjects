import React from 'react';

const Video = ( props: { src: string } ) => {
    return (
        <div className="video-container">
            <iframe id="ytplayer" className="responsive-iframe"
                    src={props.src}
                    title="video de sport"
                    frameBorder="0" allowFullScreen/>
        </div>
    );
};

export default Video;
