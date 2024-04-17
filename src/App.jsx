import Boot from "./Day1/Boot";
import Card from "./Day1/Card"
import Style from "./Day2/Style";
import Test from "./Day2/Test";
import Myprops from "./Day3/Myprops";
import Product from "./Day3/Product";
import Example from "./Day10/Example";

import Customized from "./MuiTheme/Cart";
import Navbar from "./MuiTheme/Navbar";

import Count from "./Day4/Count";
import State from "./Day4/State";
import Form from "./Day5/Form";
import Effect from "./Day7/Effect";
import Data from "./Day8/Data";
import TodoData from "./Day9/TodoData";
import Mui from "./Mui/Mui";
import Todo from "./Todo/Todo";
import About from "./Webpage/About";
import Footer from "./Webpage/Footer";
import Home from "./Webpage/Home";


import {BrowserRouter , Routes , Route} from "react-router-dom"
import SignInSide from "./MuiTheme/Copyright";
import Error from "./MuiTheme/Error";
import Mystyle from "./MuiTheme/Mystyle";
import ChildA from "./Day10/ChildA";
import ReducerHook from "./Reducer/ReducerHook";

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

    let Todo = [
        {task:"Buy Car"},
        {task:"Buy Phone"}
    ]

    let Data = "My name is khan"


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
            {/* <Form/> */}

            {/* <Style/> */}

            {/* <Todo/> */}

            {/* <Effect/> */}

            {/* <Data/> */}

            {/* <Navbar/>
            <Footer/> */}


             {/* {
                Todo.map((value)=>(
                    <TodoData task={value.task}/>
                ))
            } */}

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/homepage" element={<Home/>}/>
                    <Route path="/aboutpage" element={<About/>}/>
                    <Route path="/todo" element={<Todo/>}/>
                    <Route path="/form" element={<Form/>}/>
                    <Route path="/mui" element={<Mui/>}/>
                    <Route path="/copyright" element={<SignInSide/>}/>
                    <Route path="/error" element={<Error/>}/>
                    <Route path="/example/:name" element={<Example/>}/>
                </Routes>
            </BrowserRouter>

            {/* <ChildA name ={Data}/> */}

            <ReducerHook/>

           

        </>
    )
}

export default App;


