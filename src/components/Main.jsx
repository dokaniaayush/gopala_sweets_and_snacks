import React from "react";
import Images from './Images';
import Img1 from './img/gojiya.jpg'
import Img2 from './img/aatha_suhali.jpg'
import Img3 from './img/mathi.jpg'
import Img4 from './img/nimki.jpg'
import Img5 from './img/nimki2.jpg'
import Img6 from './img/nimki3.jpg'
import Img7 from './img/papdi.jpg'
import Img8 from './img/Thekua.png'

const Main = () => {
    return(
        <div style={{textAlign:"center", display:"flex", justifyContent:"space-around", fontSize: "calc(10px + 2vmin)", paddingTop: "20px", padding: "10px", marginTop:"120px"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
            <Images link={Img1}/>
            <Images link={Img2}/>
            <Images link={Img3}/>
            <Images link={Img4}/>
            </div>
        
            <div style={{margin:"5px"}}>
            <h3> Snacks </h3>
            <ul style={{listStyleType:"disc", textAlign:"left"}}>
                <li>Suhali</li>
                <li>Aatha Suhali</li>
                <li>Mathi</li>
                <li>Nimki</li>
                <li>Bhujiya</li>
            </ul>

            <h3> Sweets </h3>
            <ul style={{listStyleType:"disc", textAlign:"left"}}>
                <li>Petha</li>
                <li>Gondh ka Ladoo</li>
                <li>Mithi Suhali</li>
                <li>Gojiya</li>
            </ul>
            </div>
            
            <div style={{display:"flex", flexDirection:"column"}}>
            <Images link={Img5}/>
            <Images link={Img6}/>
            <Images link={Img7}/>
            <Images link={Img8}/>
            </div>
      </div>
    )
}

export default Main;