import React from 'react';

export default function Field (props) {
    return(
      <div class={props.box}>
        <label for={props.for}>{props.labeltext}</label>
        <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}/>
      </div>
    );
}
