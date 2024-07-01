import { useState } from "react";

const ToDolist = () => {
    let [task,setTask] = useState("");  //array destructuring
    let [taskArray,setTaskArray] = useState([]);
    let clickHandler=()=>{
        // console.log("Clicked");
        setTaskArray([...taskArray,task]);
        setTask(taskArray);
    }


    let onChangeHandler=(event)=>{
        console.log(event.target.value);
        setTask(event.target.value)
    }
    return ( 
        
        <>
        <div className="mb-3">
            <label htmlFor="" class="form-label"><b><i>Name</i></b></label>&nbsp;&nbsp;
            <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
                onChange={onChangeHandler}
            />
        </div>
        
        <button className="button" onClick={clickHandler}>Add Task</button><br></br><br/>
        <ol>
        {task}
        {
            taskArray.map((elem)=>{
                return <li>{elem}</li>
            })
        }
        </ol>
        </>
     );
}
 
export default ToDolist;