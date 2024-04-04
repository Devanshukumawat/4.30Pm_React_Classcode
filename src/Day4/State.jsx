import { useState } from "react";

function State() {

    const [value,setValue] =useState({firstName:"Devanshu",lastName:"Kumawat"})

    function handleValue(){
        setValue({...value,firstName:"Manny"})
    }

    return ( 
        <>
            <h1>UseState Hook</h1>
            <h2>FirstName :- {value.firstName}</h2>
            <h2>LastName :- {value.lastName}</h2>
            <button onClick={handleValue}>Update User</button>

        </>
     );
}

export default State;