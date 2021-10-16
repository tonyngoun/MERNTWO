import React, { useState } from "react";
import './App.css';

function App() {

  const[newTodo, setNewTodo] = useState("");
  const[list, setList] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if(newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false,
    }

    setList([...list, todoItem]);
    setNewTodo("");
  };
//filter returns new arrays just like .map
  const handleTodoDelete = (delIdx) => {
    const filteredTodos = list.filter((todo, i) => {
      return i !== delIdx;
    });

    setList(filteredTodos);
    
  }
//can also use spread operator ...todo, complete: !todo.complete };
  const handleToggleComplete = (idx) => {
    const updatedTodos = list.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }

      return todo;
    });    

    setList(updatedTodos);
  }

  return (
    
    <div style={{ textAlign: "center",background: "#F8F8FF", width: "500px", border: "1px solid #000000"}}>
      <h1>To Do List</h1> 
      <hr />
      <form 
        onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}
      >
      <input 
        onChange={(event) => {
          setNewTodo(event.target.value);
      }} 
        type="text"
        value={newTodo}
      />
      <div>
        <button style= {{borderRadius: "5px" , border: "1px solid #000000"}} >Add</button>
      </div>
      
      </form>
      
      <hr />

        {list.map((todo, i) => {
        const todoClasses= [];

        if (todo.complete) {
        todoClasses.push("line-through");
        }


          return (
            <div key={i}>
              <span className={todoClasses.join(" ")}> {todo.text}</span>
              <input 
                onChange={(event) => {
                handleToggleComplete(i);
              }} 
              checked={todo.complete} 
              type="checkbox" 
              />
              <button onClick={(event) => {
                handleTodoDelete(i);
              }}
              style= {{borderRadius: "5px", border: "1px solid #000000"}}
              >
                Delete</button>
              </div>
          );
        })}
    </div>
  );
      }



export default App;
