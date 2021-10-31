import React from "react";
import Data from './Data'
import Card from './Card'
import '../index'

const Body = () => {
    return (
        <div className="top">
            <div>
                {Data.map((data) => (
                    <Card 
                        key = {data.id}
                        imgscr = {data.imgscr}
                        name = {data.name}
                        price = {data.price}
                    />
                ))}
            </div>
        </div>
    )
}


export default Body;