import React from "react"
import {Button} from "./button"



class Timer extends React.Component{
  render(){
    return(
      <div className = "timers">
      <p id="timer">{this.props.time}</p>
      <div className="buttons">
      <Button className = "start" id = "start" value = {this.props. isChange}/>
      <Button className = "reset" id = "reset" value = "Reset"/>
      <Button className = "up" id = "up" value = "+"/>
      <Button className = "down" id = "down" value = "-"/>
    </div>
  </div>
    )

  }
}


export default Timer
