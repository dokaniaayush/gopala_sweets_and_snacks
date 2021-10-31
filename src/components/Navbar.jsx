import React from "react";
import Gopala from './img/gopala.jpg'

const Navbar = () => {
    return(
        <div className="navbar" style={{height:"70px", borderBottom:"2px solid", borderColor:"black", display: "flex", alignItems:"center", justifyContent:"space-evenly"}}> 
            <div style={{display:"flex", margin:"2px", alignItems:"center"}}>
                <img style={{width:"65px", height:"65px", borderRadius:"50%", margin:"2px"}} src={Gopala}/>
                <h3 style={{margin:"2px"}}> Gopala Sweets & Snacks </h3> 
            </div>
      </div>
    )
}

export default Navbar;

// import React from "react";
// import Gopala from './img/gopala.jpg'

// const Navbar = () => {
//     return(
//         <div className="navbar" style={{height:"100px", borderBottom:"2px solid", borderColor:"black", display: "flex", alignItems:"center", justifyContent:"space-evenly"}}> 
//             <div style={{display:"flex", margin:"2px", alignItems:"center"}}>
//                 <img style={{width:"100px", height:"100px", borderRadius:"50%", margin:"2px"}} src={Gopala}/>
//                 <h1 style={{margin:"2px"}}> Gopala Sweets & Snacks </h1> 
//             </div>
//       </div>
//     )
// }

// export default Navbar;