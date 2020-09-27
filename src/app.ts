import { Component } from 'react'

import { Text, Button } from '@tarojs/components'


import './app.scss'

console.log(Text, Button)



class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError(err) {
    console.log('componentDidCatchError', err)
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
