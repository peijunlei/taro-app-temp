import { Component, PropsWithChildren } from 'react'
import { View, Text, Image } from '@tarojs/components'
import bg from '@/assets/image/bg.png';

import './index.less'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount() { }

  componentDidMount() { 
    console.log('componentDidMount',ossHost);
    
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Image src={bg} style={{ width: 200, height: 200 }} />
      </View>
    )
  }
}
