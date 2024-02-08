import React from 'react'
import style from './Button.module.css'
const Button = (props) => {
  return (
    <>
    <button className={props.isoutline?style.outline_btn:style.btn}>
      {props.text}</button>
    </>
  )
}

export default Button