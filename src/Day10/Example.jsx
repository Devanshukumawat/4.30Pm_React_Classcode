import { useParams } from "react-router-dom";

function Example() {
    const id = useParams()
    console.log(id)
    return ( 
        <>
            <h1>To get Id :- {id.name} </h1>
        </>
     );
}

export default Example;