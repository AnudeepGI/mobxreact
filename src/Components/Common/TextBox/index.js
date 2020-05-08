import React from 'react';

const TextBox = (props) => {

    return (<input className={props.className ? props.className : undefined}
        value={props.value ? props.value : undefined}
        onKeyPress={props.onKeyPress ? props.onKeyPress : undefined}
        onChange={props.onChange ? props.onChange : undefined} />)

}

export default TextBox;