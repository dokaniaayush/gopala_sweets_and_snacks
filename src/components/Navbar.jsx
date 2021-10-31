import React from "react";
import Gopala from './img/gopala.jpg'
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Navbar = () => {

    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)'})

    return(
        <>
            <div className="navbar"> 

                <div className="navbar2">
                    <img className="navbar_image" src={Gopala}/>
                    <div style={{margin:"2px"}}> Gopala Sweets & Snacks </div> 
                </div>

                { isDesktop && 
                    <div>
                        <Link to='/order'>
                            <button className="navbar_button"> Order Here </button>
                        </Link>
                    </div>
                }

            </div>
        </>
    )
}

export default Navbar;