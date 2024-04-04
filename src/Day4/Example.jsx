import { useState } from "react";

function Example(){

   const [car,setCar]=useState("Bmw")

   function handleUpdate(){
        setCar("Audi")
   }

    return(
        <>
            <h1>My Fav Car is :- {car} </h1>
            <button onClick={handleUpdate}>Change Car</button>
        </>
    )
}

export default Example;