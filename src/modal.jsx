import React from "react"


function rank (score) {
  if(score>=1000){
    return "SS"
  }else if(score>=800){
    return "S"
  }else if(score >=600){
    return "A"
  }else if(score>=400){
    return "B"
  }else if(score>=200){
    return　"C"
  }else{
    return　"D"
  }
}

export const Modal=(props)=>{
  return (
  <div className="msk">
     <div className={`modal ${props.isActive ? "active":""}`} >
      <h1>Finished‼</h1>
       <div className="successTypedBox">
          <p className="successTyped"> success </p>
          <p className="num">{props.successTyped}</p>
       </div>
       <div className="failureTypedBox">
          <p className="failureTyped">failure  </p>
           <p  className="num"> {props.failureTyped}</p>
        </div>
      <div className="totalBox">
         <p className="total">total  </p>
          <p  className="num">{props.successTyped+props.failureTyped}</p>
      </div>
       <div className="rankBox">
        <p className="rank">rank  </p>
        <p  className="num">{rank(props.successTyped)}</p>
       </div>
    </div>
  </div>
  )
}
