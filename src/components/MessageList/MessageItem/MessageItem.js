import React from 'react'
import classes from './MessageItem.module.scss'
import {randomColor, url} from '../../../shared/shared.functions'

// ({userName, content, position, color, imgAvatarUrl, date})
const MessageItem = props => (
  <div className={classes.MessageItem}>
    props.position === "left"
    ?
    <div className="media w-75 mb-3">
      <Avatar imgUrl={props.imgAvatarUrl} userName={props.userName} />
      <div className="media-body ml-3">
        <div className="bg-light rounded px-3 py-2 shadow-lg">
          <p className="mb-0 text-muted">{content}</p>
          <p className="mb-0 small text-muted text-right">
              {name},&nbsp; {date.toLocaleString("ru", options)}</p>
        </div>
      </div>
    </div>
    :
    <div className="media ml-auto w-75 mb-3">
      <div className="media-body ml-3">
        <div className="bg-success rounded px-3 py-2 shadow-lg">
          <p className="mb-0 text-light ">{content}</p>
          <p className="mb-0 small text-light text-right">
              {name},&nbsp; {date.toLocaleString("ru", options)}</p>
        </div>

      </div>
    </div>
  </div>


)

const Avatar = (imgUrl = '', userName = '@') => (
  <p className={classes.avatar}
     style={{
       background: imgUrl ?
         randomColor() : url(imgUrl)
     }}>
    {imgUrl ?
      userName.substr(0, 1).toUpperCase() : ''}
  </p>
)


export default MessageItem
