function Product(props){

    console.log(props)
    const {id,Pname,Price,desc} = props

    const myStyle = {border:"2px solid black", width:"500px",backgroundColor:"brown",color:"white"}

    return(
        <>
            <div style={myStyle}>
                <h1>Product Name :-  {Pname}</h1>
                <h2>Product Price :- {Price}</h2>
                <p>Product Dec :- {desc}</p>
                <h1>Product Id :- {id} </h1>
            </div>
        </>
    )
}

export default Product;