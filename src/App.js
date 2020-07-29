import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Chat from './containers/Chat/Chat'

class App extends Component {
  render() {
    return (
      <Layout>
        <Chat/>
      </Layout>
    )
  }
}

export default App
