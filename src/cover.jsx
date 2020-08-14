            import React from "react"
import {Button}from "./button.jsx"
import Typing from "./typing.jsx"

export const Cover= (props)=>{
  return(
    <div className={`${props.isBlock? "none":""}`}>
      <div className ="blog_box">
      <h1 className="blog_name">Typing Games</h1>
      </div>
      <div className ="start_app_box">
      <div className="box">
      <Button className={"start_app"} id={"start_app"} value={"Start"} click ={props.clickEvent} />
        </div>

    </div>
   </div>

  )
}
