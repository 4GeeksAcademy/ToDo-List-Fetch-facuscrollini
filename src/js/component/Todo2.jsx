import React, { useEffect, useState } from "react";

const Todo2 = () => {

  const [item, setItem] = useState("")
  const [list, setList] = useState([])
  
  
  
  const getTaskFromServer = async () => {
    try {
      const resp = await fetch('https://playground.4geeks.com/todo/users/Takeo')
      if (!resp.ok) {
        createUser()
      }
      const data = await resp.json()
      const task = data.todos
      setList(task)
    }
    catch (error) {
      console.log(error)
    }
  }


  const createUser = async () => {
    try{
      const resp = await fetch('https://playground.4geeks.com/todo/users/Takeo',
     {method: "POST",
      body: JSON.stringify({username: "Takeo"}),
      headers: { 
        'Content-type' : 'application/json'}
      })
    } catch(error){
      console.log(error)
    }
  }


  const addItemToList = async() => {
   try {const resp =  await fetch('https://playground.4geeks.com/todo/todos/Takeo', {
    method : "POST",
    body: JSON.stringify({
      label : item 
    }),
    headers: {
      'Content-type' : 'application/json'
    }
  })}
  catch(error){
    console.log(error)
  }
  }

const deleteItemInList = async(id) => {
  try{ const resp = await fetch('https://playground.4geeks.com/todo/todos/' + id, {
  method: "DELETE",
})
}
  catch(error){
    console.log(error)
  }
}



  // const getTarea = async () => {
  //   try{fetch("https://playground.4geeks.com/todo/todos/Takeo")
  //     const response = 
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    getTaskFromServer()
  }, [])

  return (<>
    <div>
      <input placeholder="ingresa a la lista" value={item} onChange={(e) => setItem(e.target.value)} onKeyDown={(e) => {
        if (e.key === "Enter") {
          addItemToList()
          getTaskFromServer()
          setItem("")
        }
      }
      }></input>
      {list.map((tareas)=> {return (
      <div key={tareas.id}>{tareas.label}<button onClick={()=>{ 
        deleteItemInList(tareas.id)
        getTaskFromServer()
      }}>Borrar</button></div>)
      })}
      
      </div></>)
}

export default Todo2