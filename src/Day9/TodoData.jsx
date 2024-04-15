function TodoData(props) {
    const {task} = props
    return ( 
        <>
            <ul>
                <li>{task}</li>
            </ul>
        </>
     );
}

export default TodoData;