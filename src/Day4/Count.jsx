import { useState } from "react";
import "./count.css"

function Count() {

    const [value,setValue] = useState(0)

    function handleIncrement(){
        setValue(value+1)
    }

    function handleDecrement(){
        if(value){
            setValue(value-1)
        }
        
    }

    return ( 
        <>
            <div className="count">
                <button className="count_btn" onClick={handleIncrement}>+</button>
                <h1>{value}</h1>
                <button className="count_btn" onClick={handleDecrement}>-</button>
            </div>
        </>
     );
}

export default Count;