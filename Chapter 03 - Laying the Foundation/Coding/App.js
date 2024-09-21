import React from "react";
import ReactDOM from "react-dom/client";

// const heading = (<h1 className="head" tabIndex="5">Pranam React </h1>)

// const HeaderComponent = () => (<div id="container"><h1 className="heading"> {heading} Pranam React 1</h1></div>)


const Title = () => (<h1 className="head" tabIndex="5">Pranam React </h1>)
const elem = <span>React Pranam elment</span>
const HeaderComponent = () => (<div id="container"><h1 className="heading"> {<Title/>} Pranam React {1 + 7} <br></br> {elem}</h1></div>)


const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render([header,heading1])

// root.render([heading,HeaderComponent()])

 root.render([<HeaderComponent />,elem])