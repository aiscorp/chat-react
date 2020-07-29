import React, {Component} from 'react'
import classes from './Layout.module.scss'

class Layout extends Component {

  render() {
    return (
      <div className={classes.Layout}>
          <h1>Works!</h1>
          <div className={classes.main}>
            <h2>works!</h2>
          </div>

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout
