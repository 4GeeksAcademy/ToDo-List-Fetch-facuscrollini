import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const TodoList = () => {

  const [todo, setTodo] = useState([])
  const [task, setTask] = useState("")
  const [emptyList, setEmptyList] = useState(true)


  const handleAddList = (event) => {
    if (event.key === "Enter" && task != "" && task.trim() != "" && todo.length < 4) {
      addTaskToServer()
      getTaskFromServer()
    }
  }



const getTaskFromServer = async () => {
  try {
    const resp = await fetch('https://playground.4geeks.com/todo/users/Takeo')
    if (!resp.ok) {
      createUser()
    }
    const data = await resp.json()
    const tareas = data.todos
    setTodo(tareas)
  } catch (error) {
    console.log(error)
  }
}

const createUser = async () => {
  try {
    const response = await fetch('https://playground.4geeks.com/todo/users/Takeo', {
      method: "POST",
      body: JSON.stringify({ username: "Takeo" }),
      headers: {
        "Content-type": "application/json"
      }
    })
  }
  catch (error) {
    console.log(error)
  }
}

const addTaskToServer = async () => {
  try {
    const response = await fetch('https://playground.4geeks.com/todo/todos/Takeo', {
      method: "POST",
      body: JSON.stringify({
      label: task
      }),
      headers : {
        "Content-type" : "application/json"
      }
    })
  }
  catch (error) {
    console.log(error)
  }
}


useEffect(() => {
  if (todo.length === 0) {
    setEmptyList(true)
  }

  if (todo.length === 4) {
    Swal.fire({
      title: "No agregues más tareas!",
      imageUrl: "https://media.tenor.com/PhNjZw_F78kAAAAM/giancarlo-esposito-giancarlo.gif",
      text: "Solo puedo hacer 4 cosas al dia, no tengo mucho tiempo!",
      icon: "error"
    })
  }

  if (todo.length > 0) {
    setEmptyList(false)
  }
}, [todo])


const deleteItemFromServer = async(id) => {
  try{ const response = await fetch('https://playground.4geeks.com/todo/todos/' + id, {method: "DELETE"})

  }
  catch(error){
    console.log(error)
  }

}

useEffect(() => {
  getTaskFromServer()
}, [])


return (<>
  <div className="container w-50 my-5 b">
    <div className="bg-white shadow">
      <ol className="todo-paper list-group list-group-flush rounded-0 text-start ">
        <input className="pb-2 mb-3 play-write-input ps-5 rounded-0 form-control" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={handleAddList} placeholder="Escribe tareas para hacer"></input>

        {emptyList ? <div className=" mx-auto my-auto empty-message fs-2"><p>Por favor, escribe tareas, necesito hacer algo!</p></div> : ""}
        {todo.map((item) =>
          <li key={item.id} className="mx-3 pb-2 mb-2 play-write-item ps-5 border-bottom d-flex justify-content-between" >{item.label}<span className="icon"><i className="fa-solid fa-xmark" onClick={() =>{ 
            deleteItemFromServer(item.id)
            getTaskFromServer()}}></i></span></li>)}
      </ol>
      {emptyList ? <div style={{ color: "white" }}> . </div> : <div className="border border-top ">Haz agregado {todo.length} elementos</div>}
    </div>
    <div className="col-11 m-auto down-bar-1"></div>
    <div className="col-10 m-auto my-0 down-bar-2 "></div>
  </div>
</>
)
}

export default TodoList