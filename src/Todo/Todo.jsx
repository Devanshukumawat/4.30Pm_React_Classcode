import { useState } from "react";
import TodoStyle from "./todo.module.css";

function Todo() {
  const [userInput, setUserInput] = useState("");

  const AllData = [
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
    setUserInput(" ");
    }
    
  }

  function handleCheck(index){
    const MyCheckArray = [...todo]
    MyCheckArray[index].completed = !MyCheckArray[index].completed
    console.log(MyCheckArray[index])
    setTodo(MyCheckArray)
  }

  return (
    <>
      <div className={TodoStyle.todo}>
        <div className={TodoStyle.todo_main}>
          <h1 className={TodoStyle.txt}>My Todo App</h1>
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
            <ul className={TodoStyle.item}>
              <input type="checkbox"
                  checked={value.completed}
                  onClick={()=>{handleCheck(index)}}
              /> <span
              style={{textDecoration:value.completed ? "line-through" : ""}}
              >{value.task}</span>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
