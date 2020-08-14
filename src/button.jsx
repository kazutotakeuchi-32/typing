import React from "react"

export function Button  (props){
  return (<button className={props.className} id={props.id} onClick={props.click}>{props.value} </button>)
  }
