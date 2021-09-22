import React from 'react';


const CarreDeCategorie = (props: { categorie: string }) => {
    return (
        <div className="CarreDeCategorie">
            <p className="CarreDeCategorieName">{props.categorie}</p>
        </div>
    );
};

export default CarreDeCategorie;