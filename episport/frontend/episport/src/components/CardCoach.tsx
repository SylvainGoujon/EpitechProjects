import React from 'react';
import kitty from "../assets/img/kitty.jpg"

const CardCoach = (props: { coach : string }) => {

    return (
        <div className="card-coach m-5">
            <div className="card text-dark p-3">
                <img src={kitty} className="coach-pict card-img-top rounded-circle" alt={props.coach} />
                <div className="card-body">
                    <h4 className="card-title">{props.coach}</h4>
                </div>
            </div>
        </div>
    )
}
export default CardCoach;