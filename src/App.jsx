// // import Boot from "./Day1/Boot";
// // import Card from "./Day1/Card"
// // import Style from "./Day2/Style";
// // // import Test from "./Day2/Test";
// // import Myprops from "./Day3/Myprops";
// // import Product from "./Day3/Product";
// // import Example from "./Day10/Example";

import { createContext,  } from "react";
// import First from "./context/First";
import CompOne from "./useContext/Compone";
import CompTest from "./CompTest";

// // import Customized from "./MuiTheme/Cart";
// // import Navbar from "./MuiTheme/Navbar";

// // import Count from "./Day4/Count";
// // import State from "./Day4/State";
// // import Form from "./Day5/Form";
// // import Effect from "./Day7/Effect";
// // import Data from "./Day8/Data";
// // import TodoData from "./Day9/TodoData";
// // import Mui from "./Mui/Mui";
// // import Todo from "./Todo/Todo";
// // import About from "./Webpage/About";
// // import Footer from "./Webpage/Footer";
// // import Home from "./Webpage/Home";


// // import {BrowserRouter , Routes , Route} from "react-router-dom"
// // import SignInSide from "./MuiTheme/Copyright";
// // import Error from "./MuiTheme/Error";
// // import Mystyle from "./MuiTheme/Mystyle";
// // import ChildA from "./Day10/ChildA";
// // import ReducerHook from "./Reducer/ReducerHook";
// // import Test from "./useMemo/Test";
// import Call from "./useCallbak/Call";
// import { Button } from "@mui/material";
// import { createContext, useCallback, useState } from "react";
// import Child1 from "./contextApi/Child1";




// const data = createContext()
// function App(){

//     let Products = [
//         {
//             Id:"ahjha",
//             Item:"I-Phone",
//             Price:"$999",
//             Desc:"Apple"
//         },
//         {
//             Id:"817817h",
//             Item:"Samsung",
//             Price:"$999",
//             Desc:"Samsung Phone"
//         },
//         {
//             Id:"86617h",
//             Item:"MI",
//             Price:"$933",
//             Desc:"MI Phone" 
//         },
//         {
//             Id:"ahjha",
//             Item:"I-Phone",
//             Price:"$999",
//             Desc:"Apple"
//         },
//         {
//             Id:"817817h",
//             Item:"Samsung",
//             Price:"$999",
//             Desc:"Samsung Phone"
//         },
//         {
//             Id:"86617h",
//             Item:"MI",
//             Price:"$933",
//             Desc:"MI Phone" 
//         }

//     ]

//     let Todo = [
//         {task:"Buy Car"},
//         {task:"Buy Phone"}
//     ]

//     let Data = "My name is khan"



//     const [value,setValue] = useState(0)
//     const [name,setName] = useState("Manny")

   

//     let Myfun = useCallback(()=>{
//         //task
//     },[value])

   

//     const fisrstName = "Manny"


//     return(
//         <>

//             <h1>{value}</h1>
//             <Button variant="contained"
//             onClick={()=>{setValue(value+1)}}
//             >Increment</Button>

//             <h1>{name}</h1>
//             <Button variant="contained"
//             onClick={()=>{setName("Daisy")}}
//             >Update Name</Button>

//             <Call Task = {Myfun}/>

            

//             {/* <Card/>
//             <Card/>
//             <Card/>
//             <Example/> */}

//             {/* <Card/>
//             <Card/>
//             <Boot/> */}

//             {/* <Style/> */}

//             {/* <Test/> */}

//             {/* <Myprops name={"Devanshu"} age={67}/> */}

//             {/* {
//                 Products.map((value)=>(
//                     <Product id={value.Id} Pname={value.Item} Price={value.Price} desc={value.Desc}/>
//                 ))
//             } */}

//             {/* <Card name={"Devanshu"} desc={'Web developer'}/>
//             <Card name={"Himanshu"} desc={'Web developer'}/>
//             <Card name={"Manny"} desc={'Driver'}/> */}

//             {/* <Example/> */}

//             {/* <State/> */}

//             {/* <Count/> */}
//             {/* <Form/> */}

//             {/* <Style/> */}

//             {/* <Todo/> */}

//             {/* <Effect/> */}

//             {/* <Data/> */}

//             {/* <Navbar/>
//             <Footer/> */}


//              {/* {
//                 Todo.map((value)=>(
//                     <TodoData task={value.task}/>
//                 ))
//             } */}

//             {/* <BrowserRouter>
//                 <Navbar/>
//                 <Routes>
//                     <Route path="/homepage" element={<Home/>}/>
//                     <Route path="/aboutpage" element={<About/>}/>
//                     <Route path="/todo" element={<Todo/>}/>
//                     <Route path="/form" element={<Form/>}/>
//                     <Route path="/mui" element={<Mui/>}/>
//                     <Route path="/copyright" element={<SignInSide/>}/>
//                     <Route path="/error" element={<Error/>}/>
//                     <Route path="/example/:name" element={<Example/>}/>
//                 </Routes>
//             </BrowserRouter> */}

//             {/* <ChildA name ={Data}/> */}

//             {/* <ReducerHook/> */}

//            {/* <Test/> */}



//             <data.Provider value={fisrstName}>
//             <Child1/>
//             </data.Provider>
           
//         </>
//     )
// }

// export default App;
// export {data}




// let data = createContext()
// let data1 = createContext()


// function App() {

//     let name = "My name is khan"
//     let val = "Kal ho na ho..."

//     return ( 
//         <>
//             <data.Provider value={name}>
//             <data1.Provider value={val}>
//             <First/>
//             </data1.Provider>  
//             </data.Provider>
          
//         </>
//      );
// }

// export default App;
// export {data,data1}



// let data = createContext()
// let data1 = createContext()
// function App() {
//     let firstName = "Devanshu sir"
//     let lastName = "Kumawat"
//     return ( 
//         <>
//             <data.Provider value={firstName}>
//             <data1.Provider value={lastName}>
//             <CompOne/>
//             </data1.Provider> 
//             </data.Provider>
           
//         </>
//      );
// }

// export default App;
// export {data , data1}


function App() {


    let myarray = [
        "Manny",
        "Daisy"
    ]

    return ( 
        <>

        {
            myarray.map((value,index)=>(
                <CompTest data = {value}/>
            ))
        }
            
        </>
     );
}

export default App;
