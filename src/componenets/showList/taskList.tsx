import React from "react"
import { Task } from "../../type/typeTask"
interface TasksListProps {
    tasks: Task[],
    onDelete:(idTask:number)=>void,
    handelonCheckbox:(idTask:number)=>void
    handelonEdit:(task:Task)=>void
  }
function ShowList({tasks,onDelete,handelonCheckbox,handelonEdit}:TasksListProps){
    const handelDelete=(idTask:number)=>{
        onDelete(idTask)
    }
    const onCheckbox=(idTask:number)=>{
        handelonCheckbox(idTask)
    }
    const onEdite=(task:Task)=>{
        handelonEdit(task)
    }
    return(
        <>
        <div>
            <ul>
                {tasks.map((item:Task)=>(
                    <li key={item.id}>
                        <span>
                            <input type="checkbox"
                         checked={item.done} 
                         onChange={()=>onCheckbox(item.id)}
                         />
                        </span>
                        <span>{item.title}</span>
                        <span><button onClick={()=>onEdite(item)}>Edite</button></span>
                        <span><button onClick={()=>handelDelete(item.id)}>Delete</button></span>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )

}

export default ShowList