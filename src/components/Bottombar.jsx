import React from "react";
import { Link } from "react-router-dom";
import '../index'

const Bottombar = () => {
    return(
        <div className="bottombar">
            <Link to='/order'>
                <button style={{width:"50%", height:"50px", fontSize:"20px"}}> Go to Cart </button>
            </Link>
            <button style={{width:"50%", height:"50px", fontSize:"20px"}}> Place Order </button>
        </div>
    )
}

export default Bottombar;