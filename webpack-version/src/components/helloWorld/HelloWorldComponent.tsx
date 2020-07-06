import React from 'react'
const classes = require('./HelloWorldStyles.scss')

interface Props {
  message: string
}

export const HelloWorldComponent = (props: Props) => (
  <div className={classes.helloWorld}>
    <h1 className={classes.title}>{ props.message }</h1>
    <img src="./src/assets/logo.png" alt="Logo" />
  </div>
)
