import React from 'react'
import {faBars, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './MessageInput.module.scss'

const MessageInput = props => (
  <div className={classes.MessageInput}>
    <h1>MessageInput</h1>
    <div className="input-group bg-white p-1">
                    <textarea
                              className="form-control border-0 rounded-0"
                              onKeyPress={(e) => {}}
                              placeholder="Type a message"/>
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary border-0 rounded-0"
          onClick={(e) => {}}>
          <FontAwesomeIcon icon={faPaperPlane}/>
        </button>
      </div>
    </div>
  </div>
)

export default MessageInput
