import React from "react";
import '../index'

const Bottombar = () => {
    return(
        <div className="bottombar">
            <button style={{width:"50%", height:"50px", fontSize:"20px"}}> Go to Cart </button>
            <button style={{width:"50%", height:"50px", fontSize:"20px"}}> Place Order </button>
        </div>
    )
}

export default Bottombar;