import { Button } from "@mui/material";
import { useMemo, useState } from "react";

function Test() {

   const [value,setValue] = useState(0)
    const [name,setName] =useState("Manny")

  
   let returnedValue = useMemo(()=>{
    console.log("Multi Fun")
    return value*2  
   },[value])

    return ( 
        <>
            <h2>{returnedValue}</h2>
            <h1>{value}</h1>
            <Button variant="contained"
            onClick={()=>{setValue(value+1)}}
            >Increment</Button>

            <h3>{name}</h3>
            <Button variant="outlined"
            onClick={()=>{setName("Devanshu")}}
            >Update Name</Button>

        </>
     );
}

export default Test;