import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const TodoList = () => {

  const [todo, setTodo] = useState([])
  const [emptyTodo, setEmptyTodo] = useState(Array(9).fill(""))
  const [task, setTask] = useState("")
  const [fullList, setFullList] = useState(false)
  const [emptyList, setEmptyList] = useState(true)


  const handleAddList = (event) => {
    if (event.key === "Enter" && task != "" && task.trim() != "") {
      event.preventDefault()
      if (todo.length < 4) {
        let newList = [...todo, task]
        setTodo(newList)
        setTask("")
        setEmptyList(false)
      }
    }
  }

  
  useEffect(()=> {
    if(todo.length === 0){
      setEmptyList(true)
    }

    if(todo.length === 4) {
      Swal.fire({
        title: "No agregues más tareas!",
        imageUrl: "https://media.tenor.com/PhNjZw_F78kAAAAM/giancarlo-esposito-giancarlo.gif",
        text: "Solo puedo hacer 4 cosas al dia, no tengo mucho tiempo!",
        icon: "error"
      })
    }
  }, [todo])


  const handleDeleteItem = (e) => {
    const erasedItem = todo.filter((itemErase, index) => index != e)
    setTodo(erasedItem)
    
  }


console.log(todo)

  return (<>
    <div className="container w-50 my-5 b">
      <div className="bg-white shadow">
      <ol type="1" className="todo-paper list-group list-group-flush rounded-0 text-start ">
        <input className="pb-2 mb-3 play-write-input ps-5 rounded-0 form-control" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={handleAddList} placeholder="Escribe tareas para hacer"></input>
       
        {emptyList? <div className=" mx-auto my-auto empty-message fs-2"><p>Por favor, escribe tareas, necesito hacer algo!</p></div> :"" }
        {todo.map((item, index) =>
          <li key={index} className="mx-3 pb-2 mb-2 play-write-item ps-5 border-bottom d-flex justify-content-between" >{item}<span className="icon"><i className="fa-solid fa-xmark" onClick={() => handleDeleteItem(index)}></i></span></li>)}
      </ol>
      {emptyList ? "" : <div className="border border-top ">Haz agregado {todo.length} elementos</div>}
      </div>
      <div className="col-11 m-auto down-bar-1"></div>
      <div className="col-10 m-auto my-0 down-bar-2 "></div>
    </div>
  </>
  )
}

export default TodoList