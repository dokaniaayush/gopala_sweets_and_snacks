import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index'


function Card(props) {
    const [buttonValue, setButtonValue] = useState("Add to Cart");

    const handleClick = () => {
        setButtonValue("Added")
    }

    return (
        <>
            <div className="cards" >
                <div className="card">
                    <img src = {props.imgscr} alt="pic" className="card__img" />
                    <div className= "card__info">
                        <span className="card__title"> {props.name} </span>
                        <h3 className="card__category "> price: {props.price} </h3>
                        <button className="button1" onClick={handleClick}> {buttonValue} </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;