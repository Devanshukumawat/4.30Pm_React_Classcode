import { useState } from "react"
import "./form.css"

function Form(){

    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [fvalue,setFvalue] = useState("")
    const [lvalue,setLvalue] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("First Name :- "+fname," Last Name :- "+lname)
        setFvalue(fname)
        setLvalue(lname)
        setFname(" ")
        setLname(" ")
    }

    function handleFname(e){
        setFname(e.target.value)
    }

    function handleLname(e){
        setLname(e.target.value)
    }

    return(
        <>
            
            <div className="form">
            <h1>Hello {fvalue} {lvalue} Welcome.🥳</h1>
            <h1>Form Comp...</h1>
            <div className="form_comp">
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input type="text" className="form-control"
                        value={fname}
                        onChange={handleFname}
                    />
                    <label>Last Name</label>
                    <input type="text" className="form-control"
                        value={lname}
                        onChange={handleLname}
                    />
                    <button type="submit" className="form-control btn-danger mt-2">Login</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default Form;




// import { useState } from "react"
// import "./form.css"

// function Form(){

//     let formData = {
//         firstName:"Manny",
//         lastName:"Sharma"
//     }
//     const [value,setValue] = useState(formData)

//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(`First Name :- ${value.firstName} LastName :- ${value.lastName} `)
        
//     }

//     function handleFname(e){
//         setValue({...value,firstName:e.target.value})
//     }

//     function handleLname(e){
//        setValue({...value,lastName:e.target.value})
//     }

//     return(
//         <>
//             <div className="form">
//             <h1>Form Comp...</h1>
//             <div className="form_comp">
//                 <form onSubmit={handleSubmit}>
//                     <label>First Name</label>
//                     <input type="text" className="form-control"
//                         value={value.firstName}
//                         onChange={handleFname}
//                     />
//                     <label>Last Name</label>
//                     <input type="text" className="form-control"
//                        value={value.lastName}
//                         onChange={handleLname}
//                     />
//                     <button type="submit" className="form-control btn-danger mt-2">Login</button>
//                 </form>
//             </div>
//             </div>
//         </>
//     )
// }

// export default Form;