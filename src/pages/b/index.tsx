import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React from 'react'

import './index.scss'

const Index = () => {

  Taro.usePageScroll((e) => {
      console.log('usePageScroll-b', e)
  })

  Taro.useReachBottom(() => {
    console.log('============>useReachBottom-b')
  })


  return (
    <View className='container'>

      <View className='list'>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
        <View style={{ marginTop: '70px' }}>1</View>
      </View>
      <View className='header'>header</View>
    </View>
  )
}
export default Index
