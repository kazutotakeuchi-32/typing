import React from "react"

class Typing extends React.Component{

  render(){
    return(
      <div className = {`typingEria ${this.props.isNone?"none":""}`}>
      <p className="text">
    <span  id="typed">{this.props.typed}</span><span id="untyped">{this.props.unTyped}</span>
      </p>
      </div>
    )
  }
}

export default Typing;
