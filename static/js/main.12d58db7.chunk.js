(this.webpackJsonptyping=this.webpackJsonptyping||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(6),r=a.n(i),c=(a(12),a(1)),l=a(2),m=a(3),u=a(4);function o(e){return s.a.createElement("button",{className:e.className,id:e.id,onClick:e.click},e.value," ")}var d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"timers"},s.a.createElement("p",{id:"timer"},this.props.time),s.a.createElement("div",{className:"buttons"},s.a.createElement(o,{className:"start",id:"start",value:this.props.isChange}),s.a.createElement(o,{className:"reset",id:"reset",value:"Reset"}),s.a.createElement(o,{className:"up",id:"up",value:"+"}),s.a.createElement(o,{className:"down",id:"down",value:"-"})))}}]),a}(s.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"typingEria ".concat(this.props.isNone?"none":"")},s.a.createElement("p",{className:"text"},s.a.createElement("span",{id:"typed"},this.props.typed),s.a.createElement("span",{id:"untyped"},this.props.unTyped)))}}]),a}(s.a.Component);var y=function(e){return s.a.createElement("div",{className:"msk"},s.a.createElement("div",{className:"modal ".concat(e.isActive?"active":"")},s.a.createElement("h1",null,"Finished\u203c"),s.a.createElement("div",{className:"successTypedBox"},s.a.createElement("p",{className:"successTyped"}," success "),s.a.createElement("p",{className:"num"},e.successTyped)),s.a.createElement("div",{className:"failureTypedBox"},s.a.createElement("p",{className:"failureTyped"},"failure  "),s.a.createElement("p",{className:"num"}," ",e.failureTyped)),s.a.createElement("div",{className:"totalBox"},s.a.createElement("p",{className:"total"},"total  "),s.a.createElement("p",{className:"num"},e.successTyped+e.failureTyped)),s.a.createElement("div",{className:"rankBox"},s.a.createElement("p",{className:"rank"},"rank  "),s.a.createElement("p",{className:"num"},(t=e.successTyped)>=1e3?"SS":t>=800?"S":t>=600?"A":t>=400?"B":t>=200?"C":"D"))));var t},v=function(e){return s.a.createElement("div",{className:"".concat(e.isBlock?"none":"")},s.a.createElement("div",{className:"blog_box"},s.a.createElement("h1",{className:"blog_name"},"Typing Games")),s.a.createElement("div",{className:"start_app_box"},s.a.createElement("div",{className:"box"},s.a.createElement(o,{className:"start_app",id:"start_app",value:"Start",click:e.clickEvent}))))},h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClickStart=function(){n.state.remainingTime<=0||(n.gameStart(),0==n.state.run?(n.state.startTime=Date.now(),n.timeToCountDown(),n.state.run=!0,n.setState({isChange:"Stop"})):(n.state.run=!1,clearTimeout(n.state.timerId),n.setState({isChange:"Start",remainingTime:n.state.timeLeft}),n.state.timeLeft=0))},n.handleClickReset=function(){n.state.run=!1,clearTimeout(n.state.timerId),n.setState({isChange:"Start",remainingTime:0,timerLeft:0,timer:"00:00.000"})},n.handleClickUp=function(){if(1!=n.state.run)if(n.state.remainingTime>=354e4)n.setState({timer:"60:00.000",remainingTime:36e5});else{var e=n.state.remainingTime+=6e4;n.setState({remainingTime:e}),n.update(e)}},n.handleClickDown=function(){if(!(1==n.state.run||n.state.remainingTime<=0)){var e=n.state.remainingTime-=6e4;n.update(e)}},n.lastKeyup=function(){n.setState({typed:n.state.typed})},n.handleKeyupEvent=function(e){if(e.key!==n.state.unTyped.substring(0,1))return n.setState({failureTyped:n.state.failureTyped+1});n.state.typed+=n.state.unTyped.substring(0,1),n.state.unTyped=n.state.unTyped.substring(1),n.setState({typed:n.state.typed,unTyped:n.state.unTyped,successTyped:n.state.successTyped+1}),n.state.unTyped.length<=0&&(n.lastKeyup(),n.state.typed="",n.typingUpdate())},n.handleClickFeedIn=function(){n.setState({isBlock:!n.state.isBlock})},n.componentDidMount=function(){document.querySelector("#start").addEventListener("click",(function(){return n.handleClickStart()})),document.querySelector("#reset").addEventListener("click",(function(){return n.handleClickReset()})),document.querySelector("#up").addEventListener("click",n.handleClickUp),document.querySelector("#down").addEventListener("click",n.handleClickDown)},n.gameStart=function(){n.typingUpdate(),document.querySelector("body").addEventListener("keyup",n.handleKeyupEvent)},n.gameEnd=function(){document.querySelector("body").removeEventListener("keyup",n.handleKeyupEvent),document.querySelector("#start").removeEventListener("click",(function(){return n.handleClickStart()})),document.querySelector("#reset").addEventListener("click",(function(){return n.handleClickReset()})),document.querySelector("#up").removeEventListener("click",n.handleClickUp),document.querySelector("#down").removeEventListener("click",n.handleClickDown),n.setState({isActive:!0,isNone:!0})},n.state={timer:"00:00.000",startTime:0,remainingTime:0,elspedTime:0,timeLeft:0,run:!1,timerId:null,isChange:"Start",unTyped:"",typed:"",typeingTargets:["HTML","CSS","JavaScript","Go","Ruby","RubyonRails","Hellow","fa","game","targets","timer","api","apple","soccer","strawberry","persimmon","kiwifruit","cherry","pear","pineapple","banana","grape","React"],isActive:!1,successTyped:0,failureTyped:0,isBlock:!1,isNone:!1},n}return Object(l.a)(a,[{key:"typingUpdate",value:function(){var e=this.state.typeingTargets[Math.floor(Math.random()*this.state.typeingTargets.length)];this.setState({unTyped:e})}},{key:"update",value:function(e){var t=new Date(e),a=t.getMinutes(),n=t.getSeconds(),s=t.getMilliseconds();a=a.toString().padStart(2,"0"),n=n.toString().padStart(2,"0"),s=s.toString().padStart(3,"0"),this.setState({timer:"".concat(a,":").concat(n,",").concat(s)})}},{key:"timeToCountDown",value:function(){var e=this;this.state.timerId=setInterval((function(){e.state.elspedTime=Date.now()-e.state.startTime,e.state.timeLeft=e.state.remainingTime-e.state.elspedTime,e.update(e.state.timeLeft),e.state.timeLeft<=0&&(clearInterval(e.state.timerId),e.setState({timer:"00:00.000",remainingTime:0,timeLeft:0,run:!1,isChange:"Start"}),e.gameEnd())}),10)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(v,{isBlock:this.state.isBlock,clickEvent:function(){return e.handleClickFeedIn()}}),s.a.createElement("main",{className:"".concat(this.state.isBlock?"block":"none")},s.a.createElement("h1",{className:"heading"},"Typing games"),s.a.createElement(d,{time:this.state.timer,isChange:this.state.isChange}),s.a.createElement(p,{typed:this.state.typed,unTyped:this.state.unTyped,isNone:this.state.isNone}),s.a.createElement(y,{isActive:this.state.isActive,successTyped:this.state.successTyped,failureTyped:this.state.failureTyped})))}}]),a}(s.a.Component);r.a.render(s.a.createElement(h,null),document.querySelector("#root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.12d58db7.chunk.js.map