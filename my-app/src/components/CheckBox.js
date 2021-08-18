import React from 'react';
 
export default function CheckBox (props) {
    return(
      <div class={props.box}>
        <input type={props.type} name={props.name} id={props.id} value={props.value}/> <label for={props.for}>{props.labeltext}</label>
      </div>
    );
}
