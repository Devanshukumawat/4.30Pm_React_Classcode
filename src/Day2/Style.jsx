import "./style.css"

function Style() {

    const hedaing4 = {
        color:"green",
        backgroundColor:"brown", 
    }

    return ( 
        <>
            <h1>Style Css</h1>
            <h2 className="heading">Hello class </h2>
            <h3 style={{color:"brown",backgroundColor:"yellow"}}>Good Afternoon</h3>

            <h4 style={hedaing4}>Good Morning</h4>
        </>
     );
}

export default Style;