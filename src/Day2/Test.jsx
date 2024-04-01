function Test() {

    let myItems = ["Bmw","Audi","Kia","Alto","i10","bmw",]

    // let myData = myItems.map((value,index)=>{
    //     return value
    // })

    return ( 
        <>

            {/* <ul>
                <li>{myData}</li>
            </ul> */}

            {myItems.map((value,index)=>(
                <ul>
                    <li>{value}</li>
                </ul>
            ))}
        </>
     );
}

export default Test;