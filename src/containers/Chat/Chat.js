import React, {Component} from 'react'
import classes from './Chat.module.scss'
import MessageInput from '../../components/MessageInput/MessageInput'

class Chat extends Component {
  state = {

  }

  render() {
    return (
      <div className={classes.Chat}>
        <h1>Chat</h1>
        <MessageInput/>
      </div>
    )
  }
}

export default Chat
