import React from 'react';

const Card = props => {
    return (
        <div key={props.film.id} className="card mb-3 bg-light">
            <div className="card-body">
                <h4 className="card-title">{props.film.title}</h4>
                <h5 className="card-subtitle mb-2 text-muted">Director: {props.film.director}</h5>
                <h5 className="card-subtitle mb-2 text-muted">Release Date: {props.film.release_date}</h5>
                <p className="card-text">{props.film.description}</p>
            </div>
        </div>
    )
}

export default Card