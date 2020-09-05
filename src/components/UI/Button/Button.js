import React from "react"
import classes from './Button.module.scss'

const Button = props => {
  const cls = [
    classes.Button,
    classes[props.type || 'secondary']
  ]

  return (
    <button onClick={props.onClick} className={cls.join(' ')}
            disabled={props.disabled || false}>
      {props.children}
    </button>
  )
}

export default Button