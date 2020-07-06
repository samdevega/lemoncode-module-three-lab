import React from 'react'
import './HelloWorldStyles.scss'
const logo = require('../../assets/logo.png')

interface Props {
  message: string
}

export const HelloWorldComponent = (props: Props) => (
  <div className="hello-world">
    <h1 className="title">{ props.message }</h1>
    <img src={logo} alt="Logo" />
  </div>
)
