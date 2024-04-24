import { useReducer } from "react";

function ReducerHook() {

    console.log("Reducer Comp...")

    const initialState = {
        count:0,
        name:"Manny"
    }
    const [state,dispatch] = useReducer(reducer,initialState)

    function reducer(currenState,action){
            switch(action){
                case "Increment":
                    return {...currenState,count:currenState.count+1}
                case "Decrement":
                    return {...currenState,count:currenState.count-1}
                case "Update":
                    return {...currenState,name:currenState.name="Kizie"}
                default:
                    return {...currenState,count:currenState.count  }      
            }
    }

    return ( 
        <>
            <h1>Reducer Hook </h1>
            <button className="form-control btn-danger" onClick={()=>{dispatch("Increment")}}>Increment</button>
            <h1>Output :- {state.count} </h1>
            <button className="form-control btn-success" onClick={()=>{dispatch("Decrement")}}>Decrement</button>
            <h1>Name :- {state.name} </h1>
            <button className="form-control btn-info" onClick={()=>{dispatch("Update")}}>Update</button>
        </>
     );
}

export default ReducerHook;