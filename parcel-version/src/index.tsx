import React from "react"
import ReactDOM from "react-dom"
import { HelloWorldComponent } from "./components/helloWorld/HelloWorldComponent"

ReactDOM.render(
  <div>
    <HelloWorldComponent message="Hello World!" />
  </div>,
  document.querySelector("#App")
)
