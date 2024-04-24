import { useEffect, useState } from "react"

function Data() {

     useState([])

    const [count,setCount] = useState(1)
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [name,setName] = useState("Manny")

    useEffect(()=>{
       fetch(`https://dummyjson.com/products/${count}`).then((data)=>{
            return data.json()
       }).then((result)=>{
            console.log(result)
            setTitle(result.title)
            setPrice(result.price)
       })
    },[count])

    return ( 
        <>
          
            <h1>Title :- {title}</h1>
            <h2>Price :- {price}$</h2>
            <button onClick={()=>{setCount(count+1)}}>Next</button>
            <h1>Name :- {name}</h1>
            <button onClick={()=>{setName("Kizie")}}>Update</button>
        </>
     );
}

export default Data ;