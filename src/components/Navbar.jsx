import React from "react";
import Gopala from './img/gopala.jpg'

const Navbar = () => {
    return(
        <div className="navbar" style={{borderBottom:"2px solid", borderColor:"black", display: "flex", alignItems:"center", justifyContent:"space-evenly",}}> 
            <div style={{display:"flex", margin:"2px", alignItems:"center"}}>
                <img style={{width:"100px", height:"100px", borderRadius:"50%", margin:"2px"}} src={Gopala}/>
                <h1 style={{margin:"2px"}}> Gopala Sweets & Snacks </h1> 
            </div>
      </div>
    )
}

export default Navbar;