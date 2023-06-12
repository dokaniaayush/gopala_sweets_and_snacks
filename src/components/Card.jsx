import React, { useState } from 'react'
import '../index'
import {selectedItem} from './Data'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import axios from 'axios'

const  Card = (props) => {
    const [buttonValue, setButtonValue] = useState("Add to Cart");

    const handleClick = () => {
        setButtonValue("Added");
        selectedItem.push(props.id);
        console.log(props.id);

        let obj = {id: props.id, name: props.name, price: props.price}
        localStorage.setItem('myData', JSON.stringify(obj));

        // axios.post('http://localhost:3000/order', {
        //     id: props.id,
        //     name: props.name,
        //     price: props.price
        // }).then(function (response) {
        //         console.log(response);
        //     }).catch(function (error) {
        //         console.log(error);
        //     }
        // );
    }

    return (
        <>
            <div className="cards" >
                <div className="card">
                    <img src = {props.imgsrc} alt="pic" className="card__img" />
                    <div className= "card__info">
                        <span className="card__title"> {props.name} </span>
                        <h3 className="card__category "> price: {props.price} </h3>
                        <button className="button1" onClick={() => handleClick()}> {buttonValue} </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;