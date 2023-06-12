import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import axios from 'axios'

const Bottombar = (props) => {

    const handleClick = () => {
        
    }
    return(
        <div className="bottombar">
            <button style={{width:"50%", height:"50px", fontSize:"20px"}}> Contact Us </button>
            <Link to={props.link}>
                <button style={{width:"50%", height:"50px", fontSize:"20px"}} onClick={handleClick}> {props.buttonText} </button>
            </Link>
        </div>
    )
}

export default Bottombar;