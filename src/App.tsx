/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import Input from "./componenets/input/input"
import { Task } from "./type/typeTask"
import data from "./data"
import ShowList from "./componenets/showList/taskList"
import React from "react"
function App() {
const [tasks,setTask]=useState<Task[]>(data)
const [select,setSelect]=useState<Task|null>(null)

  const addTask=(titleTask:string)=>{
    if(select){
      setTask(tasks.map((item)=>item.id===select.id?{...item,title:titleTask}:item))
      setSelect(null)
    }else{
    const newtasks:Task={
      id:Math.floor(Math.random()*10000),
      title:titleTask,
      done:false,
      timeCreate:new Date().toLocaleDateString('fa-IR'),
      timeUpdate:new Date().toLocaleTimeString('fa-IR')
    }
    setTask([...tasks,newtasks])
  }
}

const onDeleteID=(idTask:number)=>{
  const newTask=tasks.filter((item)=>item.id!==idTask)
  setTask(newTask)
}

const handelonCheckbox=(idTask:number)=>{
  const newTask=tasks.map((item)=>{
    if(item.id===idTask){
      return{
        ...item,
        done:!item.done
      }
    }else{
      return item
    }
  })
  setTask(newTask)
}
const handelonEdit=(task:Task)=>{
  handelValue(task.title) 
}

  return (
    <>
      <Input addTask={addTask} handelValue={handelValue} />
      <ShowList tasks={tasks} onDelete={onDeleteID} handelonCheckbox={handelonCheckbox} handelonEdit={handelonEdit}/>
    </>
  )
}

export default App
function handelValue(title: string) {
  throw new Error("Function not implemented.")
}

