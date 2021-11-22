import React, { useState } from "react";

const OrderCard = (pros) => {

    const [amount, setAmount] = useState(1);

    const handleInputEvent = (event) => {
        if (event.target.value < 0) {
            setAmount(Number(0));
        } else {
            setAmount(Number(event.target.value));
        }
    }

    const decrement = () => {
        if((amount - 0.5) <= 0){
            setAmount(0);
        } else{
            setAmount(amount - 0.5);
        }
    }
    const increment = () => {
        setAmount(amount + 0.5);
    }

    return(
        <div className="" style={{display:"flex", justifyContent:"space-between", marginLeft:"5px", marginRight:"5px", marginBottom:"5px", padding:"5px", border:"1px solid black"}}>
            <div> 
                <div className="card__title">{pros.name}</div>
                 <div className="card__category "> ₹ {pros.price} </div>
            </div>
            <div> 
                <div style={{display:"flex", alignItems: "center", height:"20px"}}>
                    <button className="button2" onClick={decrement}>-</button>
                    <form > 
                        <input 
                            style={{width:"85px"}}
                            type="number" 
                            placeholder="Enter amount"
                            onChange={handleInputEvent}
                            value={amount}
                        />  
                    </form>
                    <button className="button2" onClick={increment}>+</button>
                    Kg
                </div>
                <div > ₹ {pros.price*amount} </div> 
            </div>
        </div>
    )
}

export default OrderCard;