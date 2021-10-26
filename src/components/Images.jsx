import React from "react";
import '../index'

const Images = (pros) => {
    return(
        <>
            <img className="image" style={{margin:"5px"}} src={pros.link} />
        </>
    )
}

export default Images;