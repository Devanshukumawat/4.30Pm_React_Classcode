import { useEffect, useState } from "react";

function Effect(){
    const [count ,setCount] = useState(0)
    const [value,setValue] = useState("manny")

    useEffect(()=>{
        console.log("UseEffect Function ")
    },[count])

 return(
    <>
        <h1>User Effect Hook</h1>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Change Num </button>
        <h3>{value}</h3>
        <button onClick={()=>{setValue("Kizie")}}>Update Value</button>

    </>
 )
}

export default Effect;

