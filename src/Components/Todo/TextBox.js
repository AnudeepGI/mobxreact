import React from 'react';

const TextBox = (props) => {
    if(props.value  !== '') {
              return(  <input className={props.className}
               onKeyPress={props.onKeyPress ? props.onKeyPress : "" } 
               onChange={props.onChange ? props.onChange : ""} />)
    } else {
        return ( <input className={props.className}
               value={props.value ? props.value : '' }
               onKeyPress={props.onKeyPress ? props.onKeyPress : "" } 
               onChange={props.onChange ? props.onChange : ""} />)
    }

}

export default TextBox;