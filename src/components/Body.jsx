import React from "react";
import {Data} from './Data'
import Card from './Card'
import '../index'
import Bottombar from "./Bottombar";

const Body = () => {
    return (
        <div className="top bottom">
            <div>
                {Data.map((data) => (
                    <Card 
                        id = {data.id}
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