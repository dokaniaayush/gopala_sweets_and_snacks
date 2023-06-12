import React from "react";
import {Data} from './Data'
import Card from './Card'
import '../index'
import Bottombar from "./Bottombar";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import axios from 'axios'

const Body = () => {

    const { isLoading, error, data } = useQuery('food', () =>{
        return axios.get('http://localhost:3000/Data')
    })
 
   if (isLoading) return <h2>Loading...</h2>
 
   if (error) return <h2>{'An error has occurred:' + error.message}</h2>

    return (
        <div className="top bottom">
            <div>
                {data?.data.map((d) => (
                    <Card key={d.id}
                        id = {d.id}
                        imgscr = {d.imgscr}
                        name = {d.name}
                        price = {d.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;