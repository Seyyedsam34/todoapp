/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import { useState } from "react"

export interface taskInputProp{
    addTask:(taskTitle:string)=>void,
    handelValue:(taskTitle:string)=>void,
}
const handelValue=(taskTitle)=>{
    console.log(taskTitle)
}
function Inputcomponents({addTask,handelValue}:taskInputProp){
    const [value,setValue]=useState("")
    const handelRegister=(e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setValue("efd")
        if(value.length){
            addTask(value)
            setValue("") 
        }
    }
    return(
        <>
        <div>
            <form action="">
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={(e)=>handelRegister}>Register</button>
            </form>
        </div>
        </>
    )
}

export default Inputcomponents