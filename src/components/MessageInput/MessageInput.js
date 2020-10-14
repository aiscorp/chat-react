import React from 'react'
import {faBars, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './MessageInput.module.scss'
import Input from "../UI/Input/Input"
import Button from "../UI/Button/Button"

const MessageInput = props => (
  <div className={classes.MessageInput}>

    <Input onKeyPress={props.onKeyPress}
           type='two-line'
           placeholder='Type text here:'/>
    <Button onClick={props.onClick} type='primary'>
      <FontAwesomeIcon icon={faPaperPlane}/>
    </Button>

  </div>
)

export default MessageInput
