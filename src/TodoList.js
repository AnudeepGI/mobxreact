import React from 'react';
import { observer } from "mobx-react";

const TodoList = observer((props) => {
    const { filter, filteredTodos, todos } = props.store;

    const createNew = (e) => {
      if(e.which === 13){
        props.store.createTodo(e.target.value)
        e.target.value = '';
      }
    }

    const filterVal = (e) => {
      props.store.filter = e.target.value;
    }

    // const toggleComplete = (todo) => {
    //   console.log(todo)
    //   // todo.complete = !todo.complete
    // }

    function toggleComplete (todo){
      todo.complete = !todo.complete
    }

    const todoLis = filteredTodos.map( (todo,key) => (
      <li key={key}>
        <input type="checkbox" 
              //  onChange={(todo) => console.log(todo )/*toggleComplete(todo.value)*/ } 
              onChange={toggleComplete.bind(this,todo)} 
               value={todo.complete}
               checked={todo.complete} 
         />
        {todo.value}
      </li>
    ));
    
    return (
        <div className="TodoList">
          <h1>Todays Task</h1>
          <input className="create" onKeyPress={(e) => createNew(e)} />
          <br/><br/>
          <input className="filter" value={filter} onChange={(e)=>filterVal(e)} />
          <ul>
            {todoLis}
          </ul>
          <a href="#" onClick={props.store.clearComplete} > Clear Complete </a>
        </div>
      );
});

export default TodoList;
