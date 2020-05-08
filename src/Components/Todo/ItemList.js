import React from 'react';

const ItemList = (props) => {
    console.log(props)
    var templet = props.list.map( (todo,key) => ( 
        <li key={key}> 
            <input type="checkbox" 
            onChange={props.onChange.bind(this,todo)} 
             value={todo.complete}
             checked={todo.complete} 
       />
      {todo.value}
        </li>
    ));

    return templet;
}

export default ItemList;