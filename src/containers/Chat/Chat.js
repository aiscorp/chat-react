import React, {Component} from 'react'
import classes from './Chat.module.scss'
//import MessageInput from '../../components/MessageInput/MessageInput'
//import MessageList from '../../components/MessageList/MessageList'
import Button from "../../components/UI/Button/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faPaperPlane, faSearch} from "@fortawesome/free-solid-svg-icons"
import Input from "../../components/UI/Input/Input"
import MessageInput from "../../components/MessageInput/MessageInput"

class Chat extends Component {
  state = {
    chat: [
      {
        messages: [
          {userName: '', content: '', position: '', color: '', imgAvatarUrl: '', date: ''},
          {userName: '', content: '', position: '', color: '', imgAvatarUrl: '', date: ''},
          {userName: '', content: '', position: '', color: '', imgAvatarUrl: '', date: ''},
          {userName: '', content: '', position: '', color: '', imgAvatarUrl: '', date: ''}
        ]
      }
    ]
  }

  inputClick = () => {
    console.log('inputClick')
  }

  buttonClick = () => {
    console.log('buttonClick')
  }

  inputKeyPress = () => {
    console.log('inputKeyPress')
  }


  render () {
    return (
      <div className={classes.Chat}>
        <h1>Chat</h1>
        {/*<MessageList/>*/}
        {/*<MessageInput*/}
        {/*messages={this.state.chat[0].messages}*/}
        {/*/>*/}

        <div className="">
          <Input onKeyPress={this.inputClick}
                 type=''
                 placeholder='Type text here:'/>

          <Button onClick={this.inputClick}>
            <FontAwesomeIcon icon={faBars}/>
          </Button>

          <Button onClick={this.inputClick}>
            <FontAwesomeIcon icon={faSearch}/>
          </Button>
        </div>

        <MessageInput onClick={this.buttonClick} onKeyPress={this.inputKeyPress}/>

      </div>
    )
  }
}

export default Chat
