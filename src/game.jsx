import React from "react";
import Timer from "./timer"
import Typing from "./typing"
import  {Modal} from "./modal"
import {Cover} from "./cover"

class Game extends React.Component{

  constructor (props){
    super(props)
    this.state ={
      timer:"00:00.000",
      startTime:0,
      remainingTime:0,
      elspedTime: 0,
      timeLeft: 0,
      run : false ,
      timerId : null,
      isChange:"Start",
      unTyped:``,
      typed: ``,
      typeingTargets : ["HTML","CSS","JavaScript","Go","Ruby","RubyonRails","Hellow","fa","game","targets","timer","api","apple","soccer","strawberry","persimmon","kiwifruit","cherry","pear","pineapple","banana","grape","React"],
      isActive:false,
      successTyped: 0,
      failureTyped: 0,
      isBlock:false,
      isNone:false
    }
  }

    typingUpdate(){
     const typeTarget = this.state.typeingTargets[Math.floor(Math.random()*this.state.typeingTargets.length)]
     this.setState({unTyped:typeTarget})
    }

   update (t){
    let d = new Date(t)
    let m = d.getMinutes()
    let s = d.getSeconds()
    let ms = d.getMilliseconds()
        m= m.toString().padStart(2,"0")
        s= s.toString().padStart(2,"0")
        ms= ms.toString().padStart(3,"0")
        this.setState( {timer:`${m}:${s},${ms}`})
  }

   timeToCountDown(){
    this.state.timerId = setInterval(() => {
      this.state.elspedTime = Date.now()- this.state.startTime
      this.state.timeLeft= this.state.remainingTime - this.state.elspedTime
      this.update(this.state.timeLeft)
      if (this.state.timeLeft<=0) {
       clearInterval(this.state.timerId)
       this.setState({timer:"00:00.000" ,remainingTime:0,timeLeft:0 ,run:false,isChange:"Start"})
       this.gameEnd()
      }
    }, 10);
  }

  handleClickStart=()=>{
    if (this.state.remainingTime<=0) {return }
       this.gameStart()
    if ( this.state.run==false) {
      this.state.startTime = Date.now()
      this.timeToCountDown()
      this.state.run = true
      this.setState({isChange:"Stop"})
    }else{
      this.state.run = false
      clearTimeout(this.state.timerId )
      this.setState({isChange:"Start",remainingTime:this.state.timeLeft})
      this.state.timeLeft = 0
    }
  }
  handleClickReset=()=>{
    this.state.run = false
    clearTimeout(this.state.timerId )
    this.setState({isChange:"Start",remainingTime:0,timerLeft:0,timer:"00:00.000"})
  }
  handleClickUp=()=>{
    if (this.state.run==true ) {
      return
    }
    if ( this.state.remainingTime >=3540000) {
      this.setState({timer:"60:00.000",remainingTime:3600000})
      return
    }
    const up= this.state.remainingTime+=6000*10
    this.setState({remainingTime:up})
    this.update(up)
  }
  handleClickDown=()=>{
   if (this.state.run==true||this.state.remainingTime<=0) {
      return
    }
    const down = this.state.remainingTime-=6000*10
    this.update(down)
  }
  lastKeyup=()=>{
    this.setState({typed:this.state.typed})
  }

  handleKeyupEvent=(e)=>{
    if (e.key !== this.state.unTyped.substring(0,1)) { return this.setState({failureTyped:this.state.failureTyped+1})}
       this.state.typed  += this.state.unTyped.substring(0,1)
       this.state.unTyped = this.state.unTyped.substring(1)
       this.setState({typed:this.state.typed,unTyped:this.state.unTyped,successTyped:this.state.successTyped+1})
       if (this.state.unTyped.length<=0) {
        this.lastKeyup()
        this.state.typed =``
        this.typingUpdate()
        }
    }

  handleClickFeedIn=()=>{
      this.setState({ isBlock:!this.state.isBlock})
    }

  componentDidMount = ()=>{
    document.querySelector("#start").addEventListener("click",()=>this.handleClickStart())
    document.querySelector("#reset").addEventListener("click",()=>this.handleClickReset())
    document.querySelector("#up").addEventListener("click",this.handleClickUp)
    document.querySelector("#down").addEventListener("click",this.handleClickDown)
  }

  gameStart = ()=>{
    this.typingUpdate()
    document.querySelector("body").addEventListener("keyup",this.handleKeyupEvent)
  }

  gameEnd = () =>{
    document.querySelector("body").removeEventListener("keyup",this.handleKeyupEvent)
    document.querySelector("#start").removeEventListener("click",()=>this.handleClickStart())
    document.querySelector("#reset").addEventListener("click",()=>this.handleClickReset())
    document.querySelector("#up").removeEventListener("click",this.handleClickUp)
    document.querySelector("#down").removeEventListener("click",this.handleClickDown)
    this.setState({isActive:true, isNone:true})
  }

  render(){
    return (
  <>
    <Cover
      isBlock ={this.state.isBlock}
      clickEvent={()=>this.handleClickFeedIn()}
    />
    <main className ={`${this.state.isBlock? "block":"none"}`}>
    <h1 className="heading">Typing games</h1>
      <Timer
      time = {this.state.timer}
      isChange={this.state.isChange}
      />
      <Typing
      typed={this.state.typed}
      unTyped ={this.state.unTyped}
      isNone ={this.state.isNone}
      />
      <Modal
      isActive ={this.state.isActive}
      successTyped={this.state.successTyped}
      failureTyped ={this.state.failureTyped}
      />
    </main>
  </>
    )
  }
}


export default Game;
