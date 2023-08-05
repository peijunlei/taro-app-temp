import { Component, PropsWithChildren } from 'react'
import { View, Text, Image } from '@tarojs/components'
import bg from '@/assets/image/bg.png';

import './index.less'

const bg2 = require('@/assets/image/bg.png');

export default function Index(){
  return (
    <View className='index'>
      <Image src={bg} style={{ width: 200, height: 200 }} />
      <Image src={bg2} style={{ width: 200, height: 200 }} />
      <Image src={require('@/assets/image/bg.png')} style={{ width: 200, height: 200 }} />
    </View>
  )
}

