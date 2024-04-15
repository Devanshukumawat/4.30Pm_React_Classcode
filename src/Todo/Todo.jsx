import { useEffect, useState } from "react";
import TodoStyle from "./todo.module.css";

function Todo() {
  const [userInput, setUserInput] = useState("");
  const [complete,setComplete] = useState(0)
  const [remaining,setRemaining] = useState(0)
  const [totalTask,setTotalTask] = useState(0)

  const AllData = JSON.parse(localStorage.getItem("set_task"))  || [
    {task:"Buy Car",completed:true},
    {task:"Buy Guitar",completed:false},
    {task:"Buy I-phone-15",completed:true},
    {task:"Buy Book",completed:false},
  ]

  const [todo, setTodo] = useState(AllData);
  function handleValue(e) {
    setUserInput(e.target.value);
  }

  function handleTask() {
    if(userInput){
        setTodo([...todo,{ task: userInput,completed:false}]);
       setUserInput("");
    }
    
  }

  function handleCheck(index){
    const MyCheckArray = [...todo]
    MyCheckArray[index].completed = !MyCheckArray[index].completed
    setTodo(MyCheckArray)

    let completedTask = MyCheckArray.filter((value,index)=>{
       return value.completed
    })

    let remainingTask = MyCheckArray.filter((value,index)=>{
      return ! value.completed
    })

    setComplete(completedTask.length)
    setRemaining(remainingTask.length)


  }

  function handleDelete(index){

    let MyArray = [...todo]

    let deletItems = MyArray.filter((value,id)=>{
       return  index !== id
    })

    setTodo(deletItems)
  }

  function handleUpdate(index){
      let updateArray = [...todo]
      let getValue = updateArray[index].task
      let updatedValue = prompt(`Update Your Task :- ${getValue} ` , getValue)
      if(updatedValue){
        let newValue = {task:updatedValue,completed:false}
      updateArray.splice(index,1,newValue)
      setTodo(updateArray)
      }
      
  }

  useEffect(()=>{
    const AddTaskArray = [...todo]

    let completedTask = AddTaskArray.filter((value)=>{
       return value.completed
    })

    let remainingTask = AddTaskArray.filter((value)=>{
      return ! value.completed
    })

    let totalTask = AddTaskArray.filter((value)=>{
      return value
    })

    setComplete(completedTask.length)
    setRemaining(remainingTask.length)
    setTotalTask(totalTask.length)

    setTodo(AddTaskArray)

    localStorage.setItem("set_task",JSON.stringify(AddTaskArray))

  },[todo])


  


  return (
    <>
    <div className={TodoStyle.totaltask}>
      <span>Total Task :- {totalTask} </span>
    </div>
      <div className={TodoStyle.todo}>
        <div className={TodoStyle.todo_main}>
          <h1 className={TodoStyle.txt}>My Todo App 🥳</h1>
          <input
            type="text"
            className={TodoStyle.input}
            value={userInput}
            onChange={handleValue}
          />
          <button className={TodoStyle.btn_todo} onClick={handleTask}>
            Add Task
          </button>

          {todo.map((value, index) => (
            <div className={TodoStyle.item} key={index}>
              <input type="checkbox"
                  checked={value.completed}
                  onClick={()=>{handleCheck(index)}}
              /> <span
              style={{textDecoration:value.completed ? "line-through" : ""}}
              >{value.task}</span>
              <span className={TodoStyle.delete_icon}>
              <i className={"bi bi-x-circle-fill"}
              onClick={()=>{handleDelete(index)}}
              ></i>
              </span>
              <span className={TodoStyle.edit_icon}>
              <i className="bi bi-pencil-square"
              onClick={()=>{handleUpdate(index)}}
              ></i>
              </span>   
            </div>
          ))}
          <span>Completed Task :- {complete} </span>
          <span>Remaining Task :- {remaining} </span>
        </div>
      </div>
    </>
  );
}

export default Todo;
