import React from 'react';
import { observer } from "mobx-react";

const TodoList = observer((props) => {
    const { filter, filteredTodos } = props.store;

    console.log(filteredTodos)

    const createNew = (e) => {
      if(e.which === 13){
        props.store.createTodo(e.target.value)
        e.target.value = '';
      }
    }

    const filterVal = (e) => {
      props.store.filter = e.target.value;
    }
    
    const toggleComplete = (todo) => {
      props.store.chnageStatus(todo);
    }

    const todoLis = filteredTodos.map( (todo,key) => (
      <li key={key}>
        <input type="checkbox" 
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
          <h4>Total Task : { props.store.totalTask }  </h4>        

          <input className="create" onKeyPress={(e) => createNew(e)} />
          <br/><br/>
          <input className="filter" value={filter} onChange={(e)=>filterVal(e)} />
          <ul>
            {todoLis}
          </ul>
          <button onClick={props.store.clearComplete} > Clear Complete </button>
        </div>
      );
});

export default TodoList;
