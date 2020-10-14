import React from "react"
import classes from './Input.module.scss'

const Input = props => {
  const type = props.type || 'text'
  const cls = [
    classes.Input,
    type === 'text' ? classes['one-line'] : classes['two-line']
  ]

  return (
    type === 'two-line' ?
      <textarea className={cls.join(' ')}
                onKeyPress={props.onKeyPress}
                placeholder={props.placeholder}
                value={props.value}/>
      :
      <input type={type}
             className={cls.join(' ')}
             onKeyPress={props.onKeyPress}
             placeholder={props.placeholder}
             value={props.value}/>
  )
}

export default Input


//                 <div className="input-group bg-white p-1">
//                     <textarea ref={this.inputRef}
//                               className="form-control border-0 rounded-0"
//                               onKeyPress={(e) => this.inputPress(e)}
//                               placeholder="Type a message"/>
//                     <div className="input-group-append">
//                         <button
//                             className="btn btn-outline-primary border-0 rounded-0"
//                             onClick={(e) => this.btnClick(e)}>
//                                 <FontAwesomeIcon icon={faPaperPlane}/>
//                         </button>
//                     </div>
//                 </div>