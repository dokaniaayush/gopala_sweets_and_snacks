import React, { useState } from "react";
import OrderCard from "./OrderCard";
import { selectedItem, Data } from "./Data";

const Order = () => {

    if(selectedItem.length == 0){
        return(
            <div  className="top"> Your Cart is empty. </div>
        )
    }
    return(
        <div className="top">
            {selectedItem.map((item) => (
                <OrderCard 
                    // key = {Data[item].id}
                    name = {Data[item].name}
                    price = {Data[item].price}
                /> 
            ))}
        </div>
    )
}

export default Order;