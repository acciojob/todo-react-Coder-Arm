
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [task,setTask] = useState("");
  const [taskArr,setTaskArr] = useState([]);
  // console.log(taskArr)
  function addTask(e){
      e.preventDefault();
      setTaskArr([...taskArr,task])
      setTask("");
  }

  function deleteTask(id){
    setTaskArr( taskArr.filter((item,idx) => idx !== id))
  }
  return (
    <div>
        <h1>To-Do List</h1>
        <form>
          <input type="text" value = {task} onChange={(e) => setTask(e.target.value)}/>
          <button onClick={addTask}>Add Todo</button>
        </form>
        {taskArr.length> 0 && taskArr.map((item,idx) => {
         return ( <div>
           <span>{item}</span>
            <button onClick={() => deleteTask(idx)}>Delete</button>
         </div>
          
          )
        })}
    </div>
  )
}

export default App
