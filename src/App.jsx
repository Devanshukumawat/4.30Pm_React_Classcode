// import Boot from "./Day1/Boot";
// import Card from "./Day1/Card"
// import Style from "./Day2/Style";
// import Test from "./Day2/Test";
// import Myprops from "./Day3/Myprops";
// import Product from "./Day3/Product";
// import Example from "./Day1/Example";

// import Count from "./Day4/Count";
// import Example from "./Day4/Example";
// import State from "./Day4/State";
import Form from "./Day5/Form";

function App(){

    let Products = [
        {
            Id:"ahjha",
            Item:"I-Phone",
            Price:"$999",
            Desc:"Apple"
        },
        {
            Id:"817817h",
            Item:"Samsung",
            Price:"$999",
            Desc:"Samsung Phone"
        },
        {
            Id:"86617h",
            Item:"MI",
            Price:"$933",
            Desc:"MI Phone" 
        },
        {
            Id:"ahjha",
            Item:"I-Phone",
            Price:"$999",
            Desc:"Apple"
        },
        {
            Id:"817817h",
            Item:"Samsung",
            Price:"$999",
            Desc:"Samsung Phone"
        },
        {
            Id:"86617h",
            Item:"MI",
            Price:"$933",
            Desc:"MI Phone" 
        }

    ]



    return(
        <>
            {/* <Card/>
            <Card/>
            <Card/>
            <Example/> */}

            {/* <Card/>
            <Card/>
            <Boot/> */}

            {/* <Style/> */}

            {/* <Test/> */}

            {/* <Myprops name={"Devanshu"} age={67}/> */}

            {/* {
                Products.map((value)=>(
                    <Product id={value.Id} Pname={value.Item} Price={value.Price} desc={value.Desc}/>
                ))
            } */}

            {/* <Card name={"Devanshu"} desc={'Web developer'}/>
            <Card name={"Himanshu"} desc={'Web developer'}/>
            <Card name={"Manny"} desc={'Driver'}/> */}

            {/* <Example/> */}

            {/* <State/> */}

            {/* <Count/> */}
            <Form/>
        </>
    )
}

export default App;