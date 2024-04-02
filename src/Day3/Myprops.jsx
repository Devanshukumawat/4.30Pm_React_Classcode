function Myprops(props){
    // console.log(props)
    // props.name = "Manny"

    const {name,age} = props
    return(
        <>
            <h1>Name :- {name}</h1>
            <h2>Age :- {age}</h2>

            <h1>Name :- {props.name}</h1>
            <h2>Age :- {props.age}</h2>

        </>
    )
}

export default Myprops;

