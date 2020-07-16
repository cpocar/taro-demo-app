import { Button, View } from '@tarojs/components'
import React, { Component } from 'react'
/**
 * 使用代码包中的withAny会导致Button渲染不出来
 */
import { withAny} from 'taro-demo-pkg'
/**
 * 使用本项目中的withAny， Button可以正常渲染
 */
// import withAny from './withAny'
import './index.scss'

class Index extends Component {


  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button>HelloWorld</Button>
      </View>
    )
  }
}
console.log("withAny", withAny)
export default withAny(Index)
