import ChildB from "./ChildB";

function ChildA({name}) {

//    const {name} =  props
    
    return ( 
        <>

            <h1>ChildA</h1> 
            <ChildB childb={name}/>
        </>
     );
}

export default ChildA;