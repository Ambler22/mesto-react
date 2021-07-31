import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props);
    }
    
    return (
        <div key={props.id} className="card">
            <div className="card">
                <button type="button" className="card__delete hover"></button>
                <img src={props.link} className="card__img" alt={props.name} onClick={handleClick} />
                <div className="card__description">
                    <h2 className="card__text">{props.name}</h2>
                    <div className="">
                        <button type="button" className="card__like" aria-label="Нравится"></button>
                        <p className="card__like_number"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;