import React, { useState } from "react";
import OrderCard from "./OrderCard";
import { selectedItem, Data } from "./Data";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import axios from 'axios'

const Order = () => {

    // if(selectedItem.length == 0){
    //     return(
    //         <div  className="top"> Your Cart is empty. </div>
    //     )
    // }

    const { isLoading, error, data } = useQuery('food', () =>{
        return axios.get('http://localhost:3000/order')
    })
 
   if (isLoading) return <h2>Loading...</h2>
 
   if (error) return <h2>{'An error has occurred:' + error.message}</h2>
    console.log(data)
    return(
        <div className="top">
            {data?.data.map((item) => (
                <OrderCard key={item.id}
                    name = {item.name}
                    price = {item.price}
                /> 
            ))}
        </div>
    )
}

export default Order;