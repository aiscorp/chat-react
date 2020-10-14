import React from 'react'
import classes from './MessageList.module.scss'
import MessageItem from './MessageItem/MessageItem'

const MessageList = props => (
  <div className={classes.MessageList}>


    {props.messages.map((message, index) =>
      <MessageItem
        message={message}
        key={index}
      />
      )}

    {/*{props.messages.map((message, index) =>*/}
    {/*    <MessageItem name={i.name} content={message.content} key={index}*/}
    {/*                 position={(message.name === this.state.botName) ? "left" : "right"}*/}
    {/*                 date={new Date()} color="#aa5077"*/}
    {/*                 avatarUrl='https://picsum.photos/64?random=1'/>)}*/}
    <div ref={this.messagesEndRef = React.createRef()}/>

  </div>
)

export default MessageList
