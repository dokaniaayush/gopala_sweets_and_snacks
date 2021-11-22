import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index'

const Bottombar = (buttonText) => {
    // const [buttonText, setButtonText] = useState("Go to Cart");
    // const handleChange = () => {
    //     setButtonText("Place Order");
    // }
    return(
        <div className="bottombar">
            <Link to='/order'>
                <button style={{width:"100%", height:"50px", fontSize:"20px"}}> {buttonText} </button>
            </Link>
            {/* <button style={{width:"50%", height:"50px", fontSize:"20px"}}> Place Order </button> */}
        </div>
    )
}

export default Bottombar;