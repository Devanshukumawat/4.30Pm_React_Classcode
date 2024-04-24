import { memo } from "react";

function Call({Task}) {
    console.log("UseCallback Comp....")
    return ( 
        <>
            <h1>Use CallBack Hook </h1>

            
        </>
     );
}

export default memo(Call);