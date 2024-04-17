import ChildC from "./ChildC";

function ChildB({childb}) {
    return ( 
        <>
            <h1>ChildB </h1>
            <ChildC childc={childb}/>
        </>
     );
}

export default ChildB;