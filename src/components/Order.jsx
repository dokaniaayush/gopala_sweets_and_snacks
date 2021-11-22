import React, { useState } from "react";
import OrderCard from "./OrderCard";
import { selectedItem } from "./Data";

const Order = () => {

    return(
        <div  className="top">
            {selectedItem.length};
        </div>
    )
}

export default Order;