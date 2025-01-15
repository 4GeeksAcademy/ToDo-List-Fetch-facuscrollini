import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Todo2 = () => {

  const [todo, setTodo] = useState([])
  const [emptyTodo, setEmptyTodo] = useState(Array(9).fill(""))
  const [task, setTask] = useState("")
  const [fullList, setFullList] = useState(false)

  const handleAddList = (event) => {
    if (event.key === "Enter" && task != "" && task.trim() != "" ) {
      if(todo.length < 4){
      let newList = [...todo, task]
      setTodo(newList)
      setTask("")
    } else if(todo.length >8){setFullList(true)}
  }
  }

  useEffect(()=>{
    if(fullList) {
     alert("hola")}
  }, [fullList])

  
const handleDeleteItem = (e) => {
  const erasedItem = todo.filter((itemErase,index) => index != e)
  setTodo(erasedItem)
}

  console.log(todo)
  console.log(task)




  return (<>
    <div className="container w-50 my-5">
      <ol type="1" className=" todo-paper list-group list-group-flush rounded-0 shadow text-start ">
        <input className="pb-2 mb-3 play-write-input ps-5 rounded-0 form-control" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={handleAddList} placeholder="Agrega un elemento a la lista"></input>
        {emptyTodo.map((item, index) => <li className="list-group-item">{item}</li>)}
        {todo.map}
      </ol>
      <div className="col-11 m-auto down-bar-1"></div>
      <div className="col-10 m-auto my-0 down-bar-2 "></div>
    </div>
  </>
  )
}

export default Todo2