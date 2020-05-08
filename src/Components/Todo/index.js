import React from 'react';
import { observer } from "mobx-react";

import Button from '../Common/Button/';
import TexBox from '../Common/TextBox/';
import ItemList from './ItemList';


const TodoList = observer((props) => {
    const { filter, filteredTodos } = props.store;

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
    
    return (
        <div className="TodoList">
          <h1>Todays Task</h1>
          <h4>Total Task : { props.store.totalTask }  </h4>

          <TexBox className="create" onKeyPress={(e) => createNew(e)}/>
          <br/>
          <br/>
          <TexBox className="filter" value={filter}  onChange={(e)=>filterVal(e)} />

          <br/>
          <br/>

          <ItemList list={filteredTodos} onChange={toggleComplete} />
          <br/>
          <br/>
          <Button title="Click me" action={props.store.clearComplete} />
        </div>
      );
});

export default TodoList;
