import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index'

const Bottombar = (props) => {
    return(
        <div className="bottombar">
            <button style={{width:"50%", height:"50px", fontSize:"20px"}}> Contact Us </button>
            <Link to={props.link}>
                <button style={{width:"50%", height:"50px", fontSize:"20px"}}> {props.buttonText} </button>
            </Link>
        </div>
    )
}

export default Bottombar;