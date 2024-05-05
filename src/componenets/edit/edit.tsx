/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Task } from "../../type/typeTask";


export interface Editeprop{
    task: Task,
    onSave:(task :Task)=>void
}
function edit({task,onSave}:Editeprop){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[editTitle,useEditTitle]=useState(task.title)
}
export  default edit