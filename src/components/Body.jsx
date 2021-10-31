import React from "react";
import Data from './Data'
import Card from './Card'
import '../index'

const Body = () => {
    return (
        <div style={{marginTop: "80px",  justifyContent: "space-around"}}>
        <div>
            {Data.map((data) => (
                <Card 
                    key = {data.id}
                    imgscr = {data.imgscr}
                    name = {data.name}
                    price = {data.price}
                />
            ))}</div>
        </div>
    )
}


export default Body;